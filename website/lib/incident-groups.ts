import type { CuratorEvent } from "./types";

type IncidentMatch = {
  key: string;
  name: string;
};

export type IncidentGroup = {
  key: string;
  name: string;
  eventIds: Set<string>;
  curators: string[];
};

function knownIncident(event: CuratorEvent): IncidentMatch | null {
  const id = event.id.toUpperCase();

  if (/20260904-VESU$/.test(id)) {
    return { key: "vesu", name: "Vesu" };
  }
  if (/20260825-(?:PTREUSD|REORACLE)$/.test(id)) {
    return { key: "pt-reusd", name: "PT-reUSD" };
  }
  if (
    /2026041[89]-(?:RSETH|HGETH|KELPAAVE)$/.test(id) ||
    /20260518-KELPLIQ$/.test(id)
  ) {
    return { key: "rseth-kelp", name: "rsETH / Kelp" };
  }
  if (/20260322-RESOLV[A-Z]*$/.test(id)) {
    return { key: "resolv", name: "Resolv" };
  }
  if (/202511(?:04-(?:ELIXIR|DEUSDUNWIND)|12-ELIXIRSDEUSD)$/.test(id)) {
    return { key: "elixir-deusd", name: "Elixir / deUSD" };
  }
  if (/2025110[345]-(?:STREAM|STREAMXUSD|SONICLOCK)$/.test(id)) {
    return { key: "stream", name: "Stream" };
  }
  if (/20250221-BYBIT$/.test(id)) {
    return { key: "bybit", name: "Bybit" };
  }
  if (/202501(?:09-USD0|10-USD0ORACLE|12-USD0PP)$/.test(id)) {
    return { key: "usd0pp", name: "USD0++" };
  }
  if (/BALANCER$/.test(id)) {
    return { key: "balancer", name: "Balancer" };
  }

  return null;
}

function incidentFor(event: CuratorEvent): IncidentMatch {
  const known = knownIncident(event);
  if (known) return known;

  const titleKey = event.title.toLowerCase().replace(/[^a-z0-9]+/g, "");
  return {
    key: `${event.date}-${titleKey}`,
    name: event.title,
  };
}

export function incidentGroups(events: CuratorEvent[]): IncidentGroup[] {
  const grouped = new Map<
    string,
    { name: string; eventIds: Set<string>; curators: Set<string> }
  >();

  for (const event of events) {
    const incident = incidentFor(event);
    const group = grouped.get(incident.key) ?? {
      name: incident.name,
      eventIds: new Set<string>(),
      curators: new Set<string>(),
    };
    group.eventIds.add(event.id);
    group.curators.add(event.curator);
    grouped.set(incident.key, group);
  }

  return [...grouped.entries()]
    .map(([key, group]) => ({
      key,
      name: group.name,
      eventIds: group.eventIds,
      curators: [...group.curators].sort((a, b) => a.localeCompare(b)),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
