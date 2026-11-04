export type EventSource = {
  href: string;
  label: string;
};

export type EventImpact = "High" | "Med" | "Low" | "N";
export type EventFault = "direct" | "indirect";

export type CuratorEvent = {
  id: string;
  slug: string;
  curator: string;
  title: string;
  date: string;
  dateLabel: string;
  type: string;
  impact: EventImpact;
  fault: EventFault;
  status: string;
  what: string;
  response: string;
  critics: string;
  lesson: string;
  sources: EventSource[];
};

export type Curator = {
  slug: string;
  name: string;
  xUrl: string | null;
  activeSince: string;
  riskDocsUrl: string | null;
  count: string;
  events: CuratorEvent[];
};

export type Registry = {
  curators: Curator[];
};
