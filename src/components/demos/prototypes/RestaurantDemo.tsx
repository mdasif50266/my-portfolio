"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const menu = [
  { name: "House salad", price: "9" },
  { name: "Seasonal pasta", price: "18" },
  { name: "Wood-fired fish", price: "24" },
];

export function RestaurantDemo() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-[#120e0c] text-[#f4ece4]">
      <div className="border-b border-white/10 px-6 py-8 sm:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-200/70">Concept dining site</p>
        <h2 className="mt-3 font-display text-4xl">Hearth Room</h2>
        <p className="mt-3 max-w-lg text-sm text-white/70">
          Sample restaurant website: menu, hours, and a reservation enquiry. Not a live venue.
        </p>
      </div>
      <div className="grid gap-8 px-6 py-8 sm:px-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200/80">
            Menu
          </h3>
          <ul className="mt-4 space-y-3">
            {menu.map((item) => (
              <li key={item.name} className="flex justify-between border-b border-white/10 pb-3">
                <span>{item.name}</span>
                <span className="text-white/60">${item.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/60">Tue–Sun · 17:00–22:00 · Sample hours</p>
        </div>
        <form
          className="space-y-3 rounded-xl border border-white/10 bg-white/5 p-5"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          <h3 className="font-medium">Reservation enquiry</h3>
          <input className="w-full rounded-md bg-black/40 px-3 py-2 text-sm" placeholder="Name" required />
          <input className="w-full rounded-md bg-black/40 px-3 py-2 text-sm" placeholder="Party size" required />
          <Button type="submit" size="sm" variant="accent">
            Request table
          </Button>
          {sent ? (
            <p className="text-sm text-amber-200" role="status">
              Enquiry captured in this prototype. No restaurant inbox is connected.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
