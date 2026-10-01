"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const services = ["Consultation", "Site visit", "Follow-up"];
const slots = ["09:00", "11:30", "15:00"];

export function BookingDemo() {
  const [service, setService] = useState(services[0]);
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Scheduling prototype</p>
      <h2 className="mt-2 text-2xl font-semibold">Book a sample appointment</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-sm text-muted">Service</p>
          <div className="flex flex-wrap gap-2">
            {services.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={service === item ? "accent" : "ghost"}
                onClick={() => {
                  setService(item);
                  setConfirmed(false);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
          <p className="pt-2 text-sm text-muted">Available slots (sample day)</p>
          <div className="flex flex-wrap gap-2">
            {slots.map((item) => (
              <Button
                key={item}
                size="sm"
                variant={slot === item ? "primary" : "ghost"}
                onClick={() => {
                  setSlot(item);
                  setConfirmed(false);
                }}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-border p-5">
          <p className="text-sm text-muted">Selection</p>
          <p className="mt-2 font-medium">
            {service}
            {slot ? ` · ${slot}` : ""}
          </p>
          <Button
            className="mt-5"
            size="sm"
            variant="accent"
            disabled={!slot}
            onClick={() => setConfirmed(true)}
          >
            Confirm booking
          </Button>
          {confirmed ? (
            <p className="mt-4 text-sm text-accent" role="status">
              Confirmed in this prototype. Calendar and reminders are not connected.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
