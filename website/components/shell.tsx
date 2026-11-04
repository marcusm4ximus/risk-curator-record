"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { GitHubIcon, MoonIcon, XLogo } from "./icons";
import type { Curator, Registry } from "@/lib/types";

type RegistryContextValue = {
  curators: Curator[];
  query: string;
  setQuery: (query: string) => void;
};

const RegistryContext = createContext<RegistryContextValue | null>(null);

export function useRegistry(): RegistryContextValue {
  const value = useContext(RegistryContext);
  if (!value) throw new Error("Registry missing");
  return value;
}

function barePath(pathname: string): string {
  const prefix = "/riskcuratorrecord";
  let path = pathname || "/";
  if (path === prefix || path.startsWith(`${prefix}/`)) {
    path = path.slice(prefix.length) || "/";
  }
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path || "/";
}

export function Shell({
  data,
  children,
}: {
  data: Registry;
  children: ReactNode;
}) {
  const pathname = barePath(usePathname() || "/");
  const [query, setQuery] = useState("");
  const [night, setNight] = useState(true);
  const curators = data.curators;

  useEffect(() => {
    setNight(document.documentElement.classList.contains("night"));
  }, []);

  useEffect(() => {
    setQuery("");
  }, [pathname]);

  const value = useMemo(
    () => ({ curators, query, setQuery }),
    [curators, query],
  );

  const onEvents = pathname === "/events";
  const onIndex = pathname === "/";
  const onCurators =
    !onEvents &&
    (onIndex || curators.some((curator) => pathname === `/${curator.slug}`));
  const needle = query.trim().toLowerCase();
  const showJump = !onIndex && !onEvents && needle.length > 0;
  const jumps = showJump
    ? curators.filter((curator) => curator.name.toLowerCase().includes(needle))
    : [];

  function toggleNight() {
    const next = !document.documentElement.classList.contains("night");
    document.documentElement.classList.toggle("night", next);
    try {
      localStorage.setItem("cws-theme", next ? "night" : "day");
    } catch {
      /* ignore private mode */
    }
    setNight(next);
  }

  return (
    <RegistryContext.Provider value={value}>
      <div className="shell">
        <header className="top">
          <Link href="/" className="title">
            Risk Curator Record
          </Link>
          <div className="header-controls">
            <Link
              href="/"
              className={onCurators ? "nav-btn current" : "nav-btn"}
              aria-current={onCurators ? "page" : undefined}
            >
              Curators
            </Link>
            <Link
              href="/events"
              className={onEvents ? "nav-btn current" : "nav-btn"}
              aria-current={onEvents ? "page" : undefined}
            >
              Events
            </Link>
            <button
              type="button"
              className={night ? "icon-btn current" : "icon-btn"}
              aria-label="Night mode"
              aria-pressed={night}
              onClick={toggleNight}
            >
              <MoonIcon />
            </button>
            <a
              className="icon-btn"
              href="https://x.com/marcusm4ximus"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
            >
              <XLogo />
            </a>
            <a
              className="icon-btn"
              href="https://github.com/marcusm4ximus/risk-curator-record"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
          </div>
        </header>
        <form
          className="search-form"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="search"
            type="search"
            placeholder="Search"
            value={query}
            autoComplete="off"
            spellCheck={false}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search"
          />
          {showJump ? (
            <div className="panel filter-menu">
              <div className="filter-list" role="listbox" aria-label="Search">
                {jumps.length === 0 ? (
                  <p className="filter-empty">Nothing matches.</p>
                ) : (
                  jumps.map((curator) => (
                    <Link
                      key={curator.slug}
                      href={`/${curator.slug}`}
                      className="filter-row"
                      role="option"
                    >
                      {curator.name}
                    </Link>
                  ))
                )}
              </div>
            </div>
          ) : null}
        </form>
        <div className="stage">{children}</div>
      </div>
    </RegistryContext.Provider>
  );
}
