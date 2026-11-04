import fs from "node:fs";
import path from "node:path";
import {
  byDateDesc,
  calendarDate,
  countString,
  criticsText,
  present,
} from "./format";
import { eventSources } from "./sources";
import type {
  Curator,
  CuratorEvent,
  EventFault,
  EventImpact,
  Registry,
} from "./types";

const ROOT = process.cwd();
const DD_DIR = process.env.CURATOR_DD_ROOT
  ? path.resolve(process.env.CURATOR_DD_ROOT)
  : path.resolve(ROOT, "..", "curators");
const IDENTITY_PATH = path.join(ROOT, "data", "curators.json");
const PLAIN_PATH = path.join(ROOT, "data", "plain-events.json");

type PlainCopy = { what?: string; response?: string };

function loadPlain(): Record<string, PlainCopy> {
  if (!fs.existsSync(PLAIN_PATH)) return {};
  return JSON.parse(fs.readFileSync(PLAIN_PATH, "utf8")) as Record<string, PlainCopy>;
}

const EVENT_KEYS = new Set([
  "curator",
  "date",
  "title",
  "incident_id",
  "type",
  "impact",
  "fault",
  "class",
  "severity",
  "status",
  "what_actually_happened",
  "response_summary",
  "critics",
  "lesson_applied_later",
  "funds_recovered",
  "sources",
  "protocol_or_vault_url",
  "usd_lost",
  "pct_of_that_vault_tvl",
]);

type Identity = { name: string; xUrl: string | null };

function loadIdentity(): Map<string, Identity> {
  if (!fs.existsSync(IDENTITY_PATH)) return new Map();
  const raw = JSON.parse(fs.readFileSync(IDENTITY_PATH, "utf8")) as Record<
    string,
    { name?: string; xUrl?: string | null }
  >;
  const out = new Map<string, Identity>();
  for (const [slug, row] of Object.entries(raw)) {
    const xUrl = typeof row.xUrl === "string" ? row.xUrl.trim() : "";
    out.set(slug, {
      name: row.name?.trim() || slug,
      xUrl: /^https?:\/\//i.test(xUrl) ? xUrl : null,
    });
  }
  return out;
}

function headingName(text: string, slug: string): string {
  const heading = text.split(/\r?\n/).find((line) => line.startsWith("# "));
  if (!heading) return slug;
  const name = heading
    .replace(/^#\s+/, "")
    .replace(/\s*[,:-]\s*merged DD draft\s*$/i, "")
    .trim();
  return name || slug;
}

function eventImpact(value: string, id: string): EventImpact {
  if (["High", "Med", "Low", "N"].includes(value)) {
    return value as EventImpact;
  }
  throw new Error(`Invalid impact for ${id}: ${value || "(missing)"}`);
}

function eventFault(value: string, id: string): EventFault {
  if (value === "direct" || value === "indirect") return value;
  throw new Error(`Invalid fault for ${id}: ${value || "(missing)"}`);
}

function lastSection(text: string, label: RegExp): string {
  const lines = text.split(/\r?\n/);
  let start = -1;
  for (let i = 0; i < lines.length; i += 1) {
    if (label.test(lines[i])) start = i;
  }
  if (start < 0) return "";
  const chunk = [lines[start]];
  const stop =
    /^(?:#{1,3}\s|(?:\*\*)?(?:Active since|PoC|Allegations|Events\b|Any new|Repeated|Whether|Searched|Risk docs)\b)/i;
  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim()) break;
    const plain = line.replace(/\*/g, "").trim();
    if (stop.test(line.trim()) || stop.test(plain)) break;
    chunk.push(line);
  }
  return chunk.join(" ");
}

function activeSinceLabel(section: string): string {
  const plain = section.replace(/\*\*/g, "").replace(/`/g, "");
  const match = plain.match(/\b(20\d{2})-(\d{2})(?:-(\d{2}))?\b/);
  if (!match) return "";
  if (match[3]) return calendarDate(`${match[1]}-${match[2]}-${match[3]}`);
  return calendarDate(`${match[1]}-${match[2]}`);
}

function riskDocsUrl(section: string): string | null {
  if (!section) return null;
  const plain = section.replace(/\*\*/g, "").replace(/`/g, "");
  const after = plain.split(/risk docs:?/i)[1] ?? plain;
  const status = after.slice(0, 140).match(/\b(none|active|stale)\b/i);
  if (status && status[1].toLowerCase() === "none") return null;
  const markdown = [...section.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)].map(
    (match) => match[1],
  );
  const bare = section.match(/https?:\/\/[^\s)`'"<>]+/g) ?? [];
  for (const raw of [...markdown, ...bare]) {
    const clean = raw.replace(/[),.;:`'"\]]+$/g, "");
    try {
      const url = new URL(clean);
      if (url.protocol === "http:" || url.protocol === "https:") return url.toString();
    } catch {
      continue;
    }
  }
  return null;
}

function parseEvents(
  text: string,
  slug: string,
  name: string,
  plain: Record<string, PlainCopy>,
): CuratorEvent[] {
  const lines = text.split(/\r?\n/);
  const events: CuratorEvent[] = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].trim() !== "EVENT") continue;
    const fields: Record<string, string> = {};
    i += 1;
    for (; i < lines.length; i += 1) {
      const line = lines[i];
      const trimmed = line.trim();
      if (trimmed === "EVENT") {
        i -= 1;
        break;
      }
      if (trimmed === "---") break;
      if (/^#{1,3}\s/.test(line)) break;
      if (/^standing checks/i.test(trimmed)) break;
      const match = line.match(/^([a-z_]+):\s*(.*)$/);
      if (!match || !EVENT_KEYS.has(match[1]) || fields[match[1]] != null) continue;
      fields[match[1]] = match[2].trim();
    }
    if (!fields.title || !fields.date) continue;
    const id =
      fields.incident_id ||
      `${slug}-${fields.date}-${fields.title}`.toLowerCase().replace(/\s+/g, "-");
    const copy = plain[id];
    events.push({
      id,
      slug,
      curator: name,
      title: present(fields.title),
      date: fields.date,
      dateLabel: calendarDate(fields.date),
      type: fields.type?.trim() ?? "",
      impact: eventImpact(fields.impact?.trim() ?? "", id),
      fault: eventFault(fields.fault?.trim() ?? "", id),
      status: fields.status?.trim() ?? "",
      what: copy?.what?.trim() || present(fields.what_actually_happened ?? ""),
      response: copy?.response?.trim() || present(fields.response_summary ?? ""),
      critics: copy ? "" : criticsText(fields.critics ?? ""),
      lesson: "",
      sources: eventSources(
        fields.sources ?? "",
        fields.protocol_or_vault_url ?? "",
      ),
    });
  }
  events.sort(byDateDesc);
  return events;
}

export function loadRegistry(): Registry {
  const identity = loadIdentity();
  const plain = loadPlain();
  const found: { slug: string; text: string; name: string; xUrl: string | null }[] = [];

  for (const entry of fs.readdirSync(DD_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith("_")) continue;
    const merged = path.join(DD_DIR, entry.name, "merged.md");
    if (!fs.existsSync(merged)) continue;
    const text = fs.readFileSync(merged, "utf8");
    const known = identity.get(entry.name);
    found.push({
      slug: entry.name,
      text,
      name: known?.name ?? headingName(text, entry.name),
      xUrl: known?.xUrl ?? null,
    });
  }

  found.sort((a, b) => a.name.localeCompare(b.name) || a.slug.localeCompare(b.slug));

  const curators: Curator[] = found.map((row) => {
    const events = parseEvents(row.text, row.slug, row.name, plain);
    return {
      slug: row.slug,
      name: row.name,
      xUrl: row.xUrl,
      activeSince: activeSinceLabel(lastSection(row.text, /active since/i)),
      riskDocsUrl: riskDocsUrl(lastSection(row.text, /risk docs/i)),
      count: countString(events),
      events,
    };
  });

  return { curators };
}
