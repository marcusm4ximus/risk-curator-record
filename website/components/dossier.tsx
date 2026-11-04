"use client";

import Link from "next/link";
import { EventRows } from "./event-rows";
import { useRegistry } from "./shell";

export function Dossier({ slug }: { slug: string }) {
  const { curators } = useRegistry();
  const curator = curators.find((item) => item.slug === slug);

  if (!curator) {
    return (
      <div className="page-fill">
        <div className="panel panel-fill">
          <p className="empty">Nothing matches.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-fill">
      <div className="panel panel-fill">
        <div className="meta">
          <Link href="/" className="box" aria-label="Back">
            <span aria-hidden="true">←</span>
          </Link>
          {curator.xUrl ? (
            <a
              className="box"
              href={curator.xUrl}
              target="_blank"
              rel="noreferrer"
            >
              {curator.name}
            </a>
          ) : (
            <span className="box">{curator.name}</span>
          )}
          {curator.riskDocsUrl ? (
            <a
              className="box"
              href={curator.riskDocsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Risk docs
            </a>
          ) : (
            <span className="box">No risk docs</span>
          )}
          <span className="box" aria-label={`Active since ${curator.activeSince}`}>
            {curator.activeSince}
          </span>
          <span className="box">upd 15 Oct 2026</span>
          <span className="box">{curator.count}</span>
        </div>
        <EventRows events={curator.events} emptyLabel="No events." />
      </div>
    </div>
  );
}
