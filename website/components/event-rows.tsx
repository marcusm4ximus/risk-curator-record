"use client";

import { useState } from "react";
import { displayLabel } from "@/lib/format";
import type { CuratorEvent } from "@/lib/types";

export function EventRows({
  events,
  showCurator = false,
  emptyLabel = "Nothing matches.",
}: {
  events: CuratorEvent[];
  showCurator?: boolean;
  emptyLabel?: string;
}) {
  const [open, setOpen] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  if (events.length === 0) {
    return <p className="empty">{emptyLabel}</p>;
  }

  return (
    <div className="event-list">
      {events.map((event) => {
        const isOpen = open.has(event.id);
        return (
          <article key={event.id} className="event">
            <button
              type="button"
              className="row-btn"
              aria-expanded={isOpen}
              onClick={() => toggle(event.id)}
            >
              {showCurator ? (
                <span className="row-curator">{event.curator}</span>
              ) : null}
              <span className="row-top">
                <span className="row-title">{event.title}</span>
                <span className="row-date">{event.dateLabel}</span>
              </span>
              <span className="row-meta">
                <span>{displayLabel(event.impact)}</span>
                <span>{displayLabel(event.fault)}</span>
                <span>{displayLabel(event.type)}</span>
                <span>{displayLabel(event.status)}</span>
              </span>
            </button>
            {isOpen ? (
              <div className="detail">
                {event.what ? (
                  <section>
                    <h3>What happened</h3>
                    <p>{event.what}</p>
                  </section>
                ) : null}
                {event.response ? (
                  <section>
                    <h3>Response</h3>
                    <p>{event.response}</p>
                  </section>
                ) : null}
                {event.sources.length > 0 ? (
                  <section>
                    <h3>Sources</h3>
                    <ul className="sources">
                      {event.sources.map((source) => (
                        <li key={source.href}>
                          <a href={source.href} target="_blank" rel="noreferrer">
                            {source.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
