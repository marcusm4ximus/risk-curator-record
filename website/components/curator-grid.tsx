"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { penaltyScore } from "@/lib/format";
import { InfoProse } from "./info-panel";
import { useRegistry } from "./shell";

function StackedLabel({ text }: { text: string }) {
  return (
    <span className="scroll-stack" aria-hidden="true">
      {Array.from(text).map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </span>
  );
}

export function CuratorGrid() {
  const { curators, query } = useRegistry();
  const [scroller, setScroller] = useState<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const scrollAnim = useRef(0);
  const [scoreSort, setScoreSort] = useState<"asc" | "desc">("desc");
  const needle = query.trim().toLowerCase();
  const shown = useMemo(() => {
    const filtered = needle
      ? curators.filter((curator) => curator.name.toLowerCase().includes(needle))
      : curators;
    return filtered
      .map((curator, index) => ({ curator, index }))
      .sort((a, b) => {
        const delta = penaltyScore(a.curator.events) - penaltyScore(b.curator.events);
        if (delta !== 0) return scoreSort === "asc" ? delta : -delta;
        return a.index - b.index;
      })
      .map((item) => item.curator);
  }, [curators, needle, scoreSort]);
  const resultEndAtFrame = Boolean(needle && overflow && atBottom);

  useEffect(() => {
    if (!scroller) return;
    const currentScroller = scroller;

    function measure() {
      const canScroll =
        currentScroller.scrollHeight > currentScroller.clientHeight + 1;
      setOverflow(canScroll);
      setAtTop(currentScroller.scrollTop <= 1);
      setAtBottom(
        currentScroller.scrollTop + currentScroller.clientHeight >=
          currentScroller.scrollHeight - 2,
      );
    }

    measure();
    currentScroller.addEventListener("scroll", measure, { passive: true });
    const observer = new ResizeObserver(measure);
    observer.observe(currentScroller);
    const grid = currentScroller.querySelector(".curator-grid");
    if (grid) observer.observe(grid);
    window.addEventListener("resize", measure);
    return () => {
      currentScroller.removeEventListener("scroll", measure);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [scroller, shown.length, needle]);

  function scrollRows(direction: -1 | 1) {
    const el = scroller;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".card");
    const grid = el.querySelector<HTMLElement>(".curator-grid");
    if (!card || !grid) return;
    const rowHeight = card.getBoundingClientRect().height;
    const gap = Number.parseFloat(getComputedStyle(grid).rowGap) || 1;
    const visibleRows = Math.max(
      1,
      Math.round((el.clientHeight + gap) / (rowHeight + gap)),
    );
    const rowStep = (rowHeight + gap) * visibleRows;
    const max = Math.max(0, el.scrollHeight - el.clientHeight);
    const remaining = direction > 0 ? max - el.scrollTop : el.scrollTop;
    if (remaining <= 1) return;
    const target =
      remaining <= rowStep + 1
        ? direction > 0
          ? max
          : 0
        : el.scrollTop + direction * rowStep;
    const start = el.scrollTop;
    const distance = target - start;
    if (distance === 0) return;
    const duration = 500;
    const t0 = performance.now();
    if (scrollAnim.current) cancelAnimationFrame(scrollAnim.current);
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      el.scrollTop = start + distance * eased;
      if (t < 1) scrollAnim.current = requestAnimationFrame(step);
      else scrollAnim.current = 0;
    };
    scrollAnim.current = requestAnimationFrame(step);
  }

  return (
    <div className="home-page">
      <div
        className={
          resultEndAtFrame
            ? "panel curator-frame result-end-at-frame"
            : "panel curator-frame"
        }
      >
        <div className="curator-panel" ref={setScroller}>
          {shown.length === 0 ? (
            <p className="empty">Nothing matches.</p>
          ) : (
            <div
              className={[
                "curator-grid",
                shown.length % 2 === 1 ? "is-odd" : "",
                needle ? "has-result-end" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {shown.map((curator) => (
                <Link key={curator.slug} href={`/${curator.slug}`} className="card">
                  <span className="card-text">
                    <span className="card-name">{curator.name}</span>
                    <span className="card-count">{curator.count}</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="scroll-controls">
          <button
            type="button"
            className="scroll-btn"
            aria-label="Scroll up"
            disabled={!overflow || atTop}
            onClick={() => scrollRows(-1)}
          >
            <span aria-hidden="true">↑</span>
          </button>
          <button
            type="button"
            className="scroll-btn"
            aria-label="Scroll down"
            disabled={!overflow || atBottom}
            onClick={() => scrollRows(1)}
          >
            <span aria-hidden="true">↓</span>
          </button>
          <button
            type="button"
            className={scoreSort === "asc" ? "scroll-btn current" : "scroll-btn"}
            aria-label="asc"
            aria-pressed={scoreSort === "asc"}
            onClick={() => setScoreSort("asc")}
          >
            <StackedLabel text="asc" />
          </button>
          <button
            type="button"
            className={scoreSort === "desc" ? "scroll-btn current" : "scroll-btn"}
            aria-label="desc"
            aria-pressed={scoreSort === "desc"}
            onClick={() => setScoreSort("desc")}
          >
            <StackedLabel text="desc" />
          </button>
        </div>
      </div>
      <div className="panel curator-info">
        <InfoProse />
      </div>
    </div>
  );
}
