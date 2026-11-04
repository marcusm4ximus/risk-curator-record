"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { byDateDesc, displayLabel } from "@/lib/format";
import { incidentGroups } from "@/lib/incident-groups";
import { EventRows } from "./event-rows";
import { useRegistry } from "./shell";

const TYPE_ORDER = ["exploit", "oracle", "collateral", "ops", "social", "other"];
const IMPACT_ORDER = ["High", "Med", "Low", "N"];
const FAULT_ORDER = ["direct", "indirect"];
const STATUS_ORDER = ["unresolved", "resolved"];
type FilterName = "type" | "impact" | "fault" | "status" | "incident";
type FilterOption = { value: string; label: string };

function orderedOptions(values: string[], preferred: string[]): string[] {
  const present = new Set(values.filter(Boolean));
  const known = preferred.filter((value) => present.has(value));
  const extra = [...present].filter((value) => !preferred.includes(value)).sort();
  return [...known, ...extra];
}

export function EventsBrowser() {
  const { curators, query } = useRegistry();
  const [type, setType] = useState("");
  const [impact, setImpact] = useState("");
  const [fault, setFault] = useState("");
  const [status, setStatus] = useState("");
  const [incident, setIncident] = useState("");
  const [openFilter, setOpenFilter] = useState<FilterName | null>(null);

  const all = useMemo(() => {
    const list = curators.flatMap((curator) => curator.events);
    return [...list].sort(byDateDesc);
  }, [curators]);

  const types = orderedOptions(
    all.map((event) => event.type),
    TYPE_ORDER,
  );
  const impacts = orderedOptions(
    all.map((event) => event.impact),
    IMPACT_ORDER,
  );
  const faults = orderedOptions(
    all.map((event) => event.fault),
    FAULT_ORDER,
  );
  const statuses = orderedOptions(
    all.map((event) => event.status),
    STATUS_ORDER,
  );
  const incidents = useMemo(() => incidentGroups(all), [all]);
  const incidentOptions = incidents.map((group) => ({
    value: group.key,
    label: group.name,
  }));
  const incidentEventIds = incidents.find(
    (group) => group.key === incident,
  )?.eventIds;

  const needle = query.trim().toLowerCase();
  const shown = all.filter((event) => {
    if (
      needle &&
      !event.curator.toLowerCase().includes(needle) &&
      !event.title.toLowerCase().includes(needle)
    ) {
      return false;
    }
    if (type && event.type !== type) return false;
    if (impact && event.impact !== impact) return false;
    if (fault && event.fault !== fault) return false;
    if (status && event.status !== status) return false;
    if (incidentEventIds && !incidentEventIds.has(event.id)) return false;
    return true;
  });

  return (
    <div className="page-fill">
      <div className="filters">
        <FilterMenu
          name="type"
          label="Type"
          value={type}
          options={types.map((option) => ({
            value: option,
            label: displayLabel(option),
          }))}
          open={openFilter === "type"}
          onToggle={() =>
            setOpenFilter((current) => (current === "type" ? null : "type"))
          }
          onChange={setType}
          onClose={() => setOpenFilter(null)}
        />
        <FilterMenu
          name="impact"
          label="Impact"
          value={impact}
          options={impacts.map((option) => ({
            value: option,
            label: displayLabel(option),
          }))}
          open={openFilter === "impact"}
          onToggle={() =>
            setOpenFilter((current) => (current === "impact" ? null : "impact"))
          }
          onChange={setImpact}
          onClose={() => setOpenFilter(null)}
        />
        <FilterMenu
          name="fault"
          label="Fault"
          value={fault}
          options={faults.map((option) => ({
            value: option,
            label: displayLabel(option),
          }))}
          open={openFilter === "fault"}
          onToggle={() =>
            setOpenFilter((current) => (current === "fault" ? null : "fault"))
          }
          onChange={setFault}
          onClose={() => setOpenFilter(null)}
        />
        <FilterMenu
          name="status"
          label="Status"
          value={status}
          options={statuses.map((option) => ({
            value: option,
            label: displayLabel(option),
          }))}
          open={openFilter === "status"}
          onToggle={() =>
            setOpenFilter((current) => (current === "status" ? null : "status"))
          }
          onChange={setStatus}
          onClose={() => setOpenFilter(null)}
        />
        <FilterMenu
          name="incident"
          label="Incident"
          value={incident}
          options={incidentOptions}
          searchable
          open={openFilter === "incident"}
          onToggle={() =>
            setOpenFilter((current) =>
              current === "incident" ? null : "incident",
            )
          }
          onChange={setIncident}
          onClose={() => setOpenFilter(null)}
        />
      </div>
      <div className="panel panel-fill">
        <EventRows events={shown} showCurator />
      </div>
    </div>
  );
}

function FilterMenu({
  name,
  label,
  value,
  options,
  searchable = false,
  open,
  onToggle,
  onChange,
  onClose,
}: {
  name: FilterName;
  label: string;
  value: string;
  options: FilterOption[];
  searchable?: boolean;
  open: boolean;
  onToggle: () => void;
  onChange: (value: string) => void;
  onClose: () => void;
}) {
  const root = useRef<HTMLDivElement>(null);
  const [needle, setNeedle] = useState("");
  const query = needle.trim().toLowerCase();
  const shown = query
    ? options.filter((option) => option.label.toLowerCase().includes(query))
    : options;
  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? label;

  useEffect(() => {
    if (!open) return;

    function closeOutside(event: PointerEvent) {
      if (!root.current?.contains(event.target as Node)) {
        setNeedle("");
        onClose();
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setNeedle("");
        onClose();
      }
    }

    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open, onClose]);

  function choose(next: string) {
    onChange(next);
    setNeedle("");
    onClose();
  }

  return (
    <div className={`filter-control filter-${name}`} ref={root}>
      <button
        type="button"
        className="filter-trigger"
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          if (open) setNeedle("");
          onToggle();
        }}
      >
        {selectedLabel}
      </button>
      {open ? (
        <div className="panel filter-menu">
          {searchable ? (
            <input
              className="filter-search"
              type="search"
              placeholder="Search incidents"
              aria-label="Search incidents"
              value={needle}
              autoComplete="off"
              spellCheck={false}
              autoFocus
              onChange={(event) => setNeedle(event.target.value)}
            />
          ) : null}
          <div className="filter-list" role="listbox" aria-label={label}>
            {shown.length === 0 ? (
              <p className="filter-empty">Nothing matches.</p>
            ) : (
              shown.map((option) => {
                const selected = option.value === value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={selected ? "filter-row current" : "filter-row"}
                    onClick={() => choose(option.value)}
                  >
                    {option.label}
                  </button>
                );
              })
            )}
            <button
              type="button"
              role="option"
              aria-selected={value === ""}
              className={value === "" ? "filter-row current" : "filter-row"}
              onClick={() => choose("")}
            >
              default
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
