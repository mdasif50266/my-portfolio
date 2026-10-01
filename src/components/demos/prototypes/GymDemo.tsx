"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const members = [
  { name: "A. Rahman", plan: "Monthly" },
  { name: "S. Khan", plan: "Annual" },
  { name: "N. Ali", plan: "Monthly" },
];

export function GymDemo() {
  const [checkedIn, setCheckedIn] = useState<string[]>([]);

  return (
    <div className="p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Gym operations · sample records</p>
      <h2 className="mt-2 text-2xl font-semibold">Front desk</h2>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-border p-4 lg:col-span-2">
          <h3 className="text-sm font-medium">Members</h3>
          <ul className="mt-4 space-y-3">
            {members.map((member) => (
              <li key={member.name} className="flex items-center justify-between gap-3">
                <div>
                  <p>{member.name}</p>
                  <p className="text-xs text-muted">{member.plan}</p>
                </div>
                <Button
                  size="sm"
                  variant={checkedIn.includes(member.name) ? "ghost" : "accent"}
                  onClick={() =>
                    setCheckedIn((current) =>
                      current.includes(member.name) ? current : [...current, member.name],
                    )
                  }
                >
                  {checkedIn.includes(member.name) ? "In session" : "Check in"}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border p-4">
          <h3 className="text-sm font-medium">Today&apos;s classes</h3>
          <p className="mt-3 text-sm text-muted">06:30 Strength</p>
          <p className="text-sm text-muted">18:00 Mobility</p>
          <p className="mt-4 text-xs text-muted">
            Checked in: {checkedIn.length} / {members.length}
          </p>
        </div>
      </div>
    </div>
  );
}
