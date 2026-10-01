"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const columns = ["New", "Qualified", "Won"] as const;

type Lead = { id: string; name: string; column: (typeof columns)[number] };

const seed: Lead[] = [
  { id: "1", name: "Website enquiry", column: "New" },
  { id: "2", name: "Automation request", column: "Qualified" },
  { id: "3", name: "Storefront rebuild", column: "New" },
];

export function LeadsDemo() {
  const [leads, setLeads] = useState(seed);

  function move(id: string, direction: -1 | 1) {
    setLeads((current) =>
      current.map((lead) => {
        if (lead.id !== id) return lead;
        const index = columns.indexOf(lead.column);
        const next = columns[index + direction];
        return next ? { ...lead, column: next } : lead;
      }),
    );
  }

  return (
    <div className="p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Pipeline prototype</p>
      <h2 className="mt-2 text-2xl font-semibold">Sample leads</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {columns.map((column) => (
          <div key={column} className="rounded-lg border border-border p-3">
            <h3 className="px-1 text-sm font-medium">{column}</h3>
            <ul className="mt-3 space-y-2">
              {leads
                .filter((lead) => lead.column === column)
                .map((lead) => (
                  <li key={lead.id} className="rounded-md border border-border bg-background p-3">
                    <p className="text-sm">{lead.name}</p>
                    <div className="mt-2 flex gap-2">
                      <Button size="sm" variant="ghost" onClick={() => move(lead.id, -1)}>
                        Back
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => move(lead.id, 1)}>
                        Forward
                      </Button>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
