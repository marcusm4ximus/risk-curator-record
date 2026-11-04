const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function monthName(month: string): string {
  return MONTHS[Number(month) - 1] ?? month;
}

export function calendarDate(iso: string): string {
  const full = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (full) return `${Number(full[3])} ${monthName(full[2])} ${full[1]}`;
  const ym = iso.match(/^(\d{4})-(\d{2})$/);
  if (ym) return `${monthName(ym[2])} ${ym[1]}`;
  return iso;
}

function dayMonthYear(year: string, month: string, day: string): string {
  return `${Number(day)} ${monthName(month)} ${year}`;
}

function monthYear(year: string, month: string): string {
  return `${monthName(month)} ${year}`;
}

export function present(raw: string): string {
  let text = raw ?? "";
  text = text.replace(/\r/g, "");
  text = text.replace(/`+/g, "");
  text = text.replace(/\*\*/g, "");
  text = text.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, "$1");
  text = text.replace(/https?:\/\/[^\s)]*0x[a-fA-F0-9]{6,}[^\s)]*/gi, "");
  text = text.replace(/\u2014|\u2015/g, " - ");
  text = text.replace(/[\u2010-\u2013\u2212]/g, "-");
  text = text.replace(/\b(20\d{2})-(\d{2})-(\d{2})\b/g, (_, year, month, day) =>
    dayMonthYear(year, month, day),
  );
  text = text.replace(/\b(20\d{2})-(\d{2})\b/g, (_, year, month) =>
    monthYear(year, month),
  );
  text = text.replace(/0x[a-fA-F0-9]{2,}(?:\u2026|\.{2,})[a-fA-F0-9]*/g, "");
  text = text.replace(/0x[a-fA-F0-9]{8,}/g, "");
  text = text.replace(/[ \t]{2,}/g, " ");
  text = text.replace(/[ \t]+([,.;:)])/g, "$1");
  text = text.replace(/\(\s*\)/g, "");
  text = text.replace(/[ \t]{2,}/g, " ");
  return text.trim();
}

export function lessonText(raw: string): string {
  const text = present(raw);
  if (!text) return "";
  if (/^(yes|no|unclear|n\/a|na|none|unknown)\.?$/i.test(text)) return "";
  return text;
}

function isAbsentCriticSentence(sentence: string): boolean {
  const text = sentence.trim().replace(/[.!?]+$/, "").trim();
  if (!text) return true;
  if (/^(none|n\/a|na)\b/i.test(text)) return true;
  if (/\bno (named )?critics?\b/i.test(text) && /\bfound\b/i.test(text)) return true;
  if (/^no\b/i.test(text) && /\b(was|were) found\b/i.test(text)) return true;
  return false;
}

export function omitAbsentCriticSentences(raw: string): string {
  const text = raw.trim();
  if (!text) return "";
  const kept = text
    .split(/(?<=(?<!Mr|Dr|St|vs)[.!?])\s+/)
    .filter((sentence) => !isAbsentCriticSentence(sentence));
  return kept.join(" ").trim();
}

export function criticsText(raw: string): string {
  return omitAbsentCriticSentences(present(raw));
}

const IMPACT_POINTS: Record<string, number> = {
  High: 3,
  Med: 2,
  Medium: 2,
  Low: 1,
};

export function eventPenalty(event: {
  impact: string;
  fault: string;
  status: string;
}): number {
  const impact = IMPACT_POINTS[event.impact.trim()] ?? 0;
  const direct = event.fault.trim().toLowerCase() === "direct" ? 1 : 0;
  const open = event.status.trim().toLowerCase() === "resolved" ? 0 : 1;
  return impact + direct + open;
}

export function penaltyScore(
  events: { impact: string; fault: string; status: string }[],
): number {
  return events.reduce((sum, event) => sum + eventPenalty(event), 0);
}

export function countString(
  events: { impact: string; fault: string; status: string }[],
): string {
  let high = 0;
  let med = 0;
  let low = 0;
  let nonMaterial = 0;
  let direct = 0;
  let indirect = 0;
  for (const event of events) {
    const impact = event.impact.trim();
    const fault = event.fault.trim();
    if (impact === "High") high += 1;
    if (impact === "Med") med += 1;
    if (impact === "Low") low += 1;
    if (impact === "N") nonMaterial += 1;
    if (fault === "direct") direct += 1;
    if (fault === "indirect") indirect += 1;
  }
  return `${penaltyScore(events)}S ${high}H ${med}M ${low}L ${nonMaterial}N ${direct}D ${indirect}I`;
}

const DISPLAY_LABELS: Record<string, string> = {
  Med: "Medium",
  direct: "Direct",
  indirect: "Indirect",
  resolved: "Resolved",
  unresolved: "Unresolved",
  exploit: "Exploit",
  oracle: "Oracle",
  collateral: "Collateral",
  ops: "Ops",
  social: "Social",
  other: "Other",
};

export function displayLabel(value: string): string {
  return DISPLAY_LABELS[value] ?? value;
}

export function byDateDesc<T extends { date: string; title: string }>(
  a: T,
  b: T,
): number {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1;
  return a.title.localeCompare(b.title);
}
