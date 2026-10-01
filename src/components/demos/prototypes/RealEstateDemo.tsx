"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

const listings = [
  { id: "1", title: "River loft", area: "Downtown", beds: 2 },
  { id: "2", title: "Garden terrace", area: "North", beds: 3 },
  { id: "3", title: "Studio court", area: "Downtown", beds: 1 },
];

export function RealEstateDemo() {
  const [area, setArea] = useState("All");
  const [open, setOpen] = useState<string | null>(null);

  const visible = useMemo(
    () => listings.filter((listing) => area === "All" || listing.area === area),
    [area],
  );

  return (
    <div className="p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Listings prototype</p>
      <h2 className="mt-2 text-2xl font-semibold">Fictional properties</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {["All", "Downtown", "North"].map((option) => (
          <Button
            key={option}
            size="sm"
            variant={area === option ? "accent" : "ghost"}
            onClick={() => setArea(option)}
          >
            {option}
          </Button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {visible.map((listing) => (
          <div key={listing.id} className="rounded-lg border border-border p-4">
            <div className="mb-4 h-24 rounded-md bg-gradient-to-br from-teal-400/20 to-transparent" />
            <p className="font-medium">{listing.title}</p>
            <p className="text-sm text-muted">
              {listing.area} · {listing.beds} bed
            </p>
            <Button className="mt-3" size="sm" variant="ghost" onClick={() => setOpen(listing.title)}>
              Enquire
            </Button>
          </div>
        ))}
      </div>
      {open ? (
        <p className="mt-4 text-sm text-accent" role="status">
          Enquiry started for {open}. No agency CRM is attached.
        </p>
      ) : null}
    </div>
  );
}
