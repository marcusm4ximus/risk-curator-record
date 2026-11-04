import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ddRoot = path.resolve(root, "..");
const plainEventsPath = path.join(root, "data", "plain-events.json");
const identityPath = path.join(root, "data", "curators.json");
const llmsPath = path.join(root, "public", "llms.txt");

function loadNames() {
  const raw = JSON.parse(fs.readFileSync(identityPath, "utf8"));
  return new Map(
    Object.entries(raw).map(([slug, row]) => [slug, String(row.name ?? slug)]),
  );
}

function headingName(text, slug) {
  const heading = text.split(/\r?\n/).find((line) => line.startsWith("# "));
  if (!heading) return slug;
  const name = heading
    .replace(/^#\s+/, "")
    .replace(/\s*[,:-]\s*merged DD draft\s*$/i, "")
    .trim();
  return name || slug;
}

function notLiveIds(text) {
  const ids = new Set();
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index].trim() !== "NOT A LIVE EVENT") continue;
    for (let cursor = index + 1; cursor < lines.length; cursor += 1) {
      const line = lines[cursor];
      const trimmed = line.trim();
      if (
        trimmed === "EVENT" ||
        trimmed === "NOT A LIVE EVENT" ||
        trimmed === "---" ||
        /^#{1,3}\s/.test(line) ||
        /^standing checks/i.test(trimmed)
      ) {
        break;
      }
      const match = line.match(/^incident_id:\s*(.*)$/);
      if (match?.[1].trim()) ids.add(match[1].trim());
    }
  }
  return ids;
}

function eventFields(text) {
  const events = [];
  const lines = text.split(/\r?\n/);
  for (let index = 0; index < lines.length; index += 1) {
    if (lines[index].trim() !== "EVENT") continue;
    const fields = {};
    index += 1;
    for (; index < lines.length; index += 1) {
      const line = lines[index];
      const trimmed = line.trim();
      if (trimmed === "EVENT") {
        index -= 1;
        break;
      }
      if (trimmed === "---" || /^#{1,3}\s/.test(line)) break;
      if (/^standing checks/i.test(trimmed)) break;
      const match = line.match(/^([a-z_]+):\s*(.*)$/);
      if (!match || fields[match[1]] != null) continue;
      fields[match[1]] = match[2].trim();
    }
    if (Object.keys(fields).length > 0) events.push(fields);
  }
  return events;
}

function sourceUrls(fields) {
  const raw = `${fields.sources ?? ""} ${fields.protocol_or_vault_url ?? ""}`;
  const matches = raw.match(/https?:\/\/[^\s)>\]]+/g) ?? [];
  const urls = [];
  const seen = new Set();
  for (const match of matches) {
    const href = match.replace(/[.,;]+$/, "");
    try {
      new URL(href);
    } catch {
      continue;
    }
    if (seen.has(href)) continue;
    seen.add(href);
    urls.push(href);
  }
  return urls;
}

function blockValue(label, value) {
  const lines = value.split(/\r?\n/);
  return [`${label}: |`, ...lines.map((line) => `  ${line}`)];
}

function generateLlmsText() {
  const plainEvents = JSON.parse(fs.readFileSync(plainEventsPath, "utf8"));
  const knownNames = loadNames();
  const merged = fs
    .readdirSync(ddRoot, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        !entry.name.startsWith("_") &&
        fs.existsSync(path.join(ddRoot, entry.name, "merged.md")),
    )
    .map((entry) => {
      const slug = entry.name;
      const text = fs.readFileSync(path.join(ddRoot, slug, "merged.md"), "utf8");
      return {
        slug,
        text,
        name: knownNames.get(slug) ?? headingName(text, slug),
      };
    })
    .sort(
      (left, right) =>
        left.name.localeCompare(right.name) || left.slug.localeCompare(right.slug),
    );
  const includedEventIds = new Set();
  const parkedEventIds = new Set();
  const output = [
    "# Risk Curator Record",
    "path: /riskcuratorrecord/",
    "This is the incident record for deciding who is safe to lend to.",
    "A curator with no events is not proven safe.",
    "Incident prose comes from website/data/plain-events.json; event metadata and source URLs come from each curator merged.md EVENT block.",
    "",
  ];

  for (const curator of merged) {
    const { slug, text, name } = curator;
    for (const id of notLiveIds(text)) parkedEventIds.add(id);
    const events = eventFields(text);
    output.push("CURATOR", `name: ${name}`, `slug: ${slug}`);

    if (events.length === 0) {
      output.push("events: none", "END_CURATOR", "");
      continue;
    }

    for (const fields of events) {
      const id = fields.incident_id;
      if (!id) {
        throw new Error(`Missing incident_id in ${slug}/merged.md EVENT block`);
      }
      if (includedEventIds.has(id)) {
        throw new Error(`Duplicate incident_id in merged.md files: ${id}`);
      }
      includedEventIds.add(id);
      const copy = plainEvents[id];
      if (!copy?.what || !copy?.response) {
        throw new Error(`Missing live prose in data/plain-events.json: ${id}`);
      }
      for (const key of ["impact", "fault", "type", "status"]) {
        if (!fields[key]) {
          throw new Error(`Missing ${key} in merged.md EVENT block: ${id}`);
        }
      }

      output.push(
        "EVENT",
        `event_id: ${id}`,
        `impact: ${fields.impact}`,
        `fault: ${fields.fault}`,
        `type: ${fields.type}`,
        `status: ${fields.status}`,
        ...blockValue("what_happened", copy.what),
        ...blockValue("response", copy.response),
      );
      const urls = sourceUrls(fields);
      if (urls.length === 0) output.push("source_urls: none");
      else output.push("source_urls:", ...urls.map((url) => `- ${url}`));
      output.push("END_EVENT");
    }
    output.push("END_CURATOR", "");
  }

  const unusedPlainIds = Object.keys(plainEvents).filter(
    (id) => !includedEventIds.has(id) && !parkedEventIds.has(id),
  );
  if (unusedPlainIds.length > 0) {
    throw new Error(
      `Live prose has no merged.md EVENT block: ${unusedPlainIds.join(", ")}`,
    );
  }

  return `${output.join("\n").trimEnd()}\n`;
}

fs.writeFileSync(llmsPath, generateLlmsText(), "utf8");
