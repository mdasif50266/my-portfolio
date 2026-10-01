"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { fieldControlClass } from "@/components/ui/Field";

type Line = { description: string; amount: number };

export function InvoiceDemo() {
  const [client, setClient] = useState("Sample company");
  const [lines, setLines] = useState<Line[]>([
    { description: "Website setup", amount: 800 },
    { description: "Automation workflow", amount: 450 },
  ]);

  const total = useMemo(
    () => lines.reduce((sum, line) => sum + (Number.isFinite(line.amount) ? line.amount : 0), 0),
    [lines],
  );

  function update(index: number, patch: Partial<Line>) {
    setLines((current) =>
      current.map((line, lineIndex) => (lineIndex === index ? { ...line, ...patch } : line)),
    );
  }

  return (
    <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-2">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Invoice prototype</p>
        <h2 className="mt-2 text-2xl font-semibold">Build a sample invoice</h2>
        <label className="mt-6 block text-sm">
          Bill to
          <input
            className={`${fieldControlClass} mt-2`}
            value={client}
            onChange={(event) => setClient(event.target.value)}
          />
        </label>
        <div className="mt-4 space-y-3">
          {lines.map((line, index) => (
            <div key={index} className="grid grid-cols-[1fr_6rem] gap-2">
              <input
                className={fieldControlClass}
                value={line.description}
                onChange={(event) => update(index, { description: event.target.value })}
              />
              <input
                className={fieldControlClass}
                type="number"
                min={0}
                value={line.amount}
                onChange={(event) => update(index, { amount: Number(event.target.value) })}
              />
            </div>
          ))}
        </div>
        <Button
          className="mt-4"
          size="sm"
          variant="ghost"
          type="button"
          onClick={() => setLines((current) => [...current, { description: "New line", amount: 0 }])}
        >
          Add line
        </Button>
      </div>
      <div className="rounded-lg border border-border bg-background p-6">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Preview</p>
        <h3 className="mt-2 text-lg font-semibold">Invoice · sample</h3>
        <p className="mt-1 text-sm text-muted">{client || "—"}</p>
        <ul className="mt-6 space-y-2 text-sm">
          {lines.map((line, index) => (
            <li key={index} className="flex justify-between gap-4">
              <span>{line.description}</span>
              <span>${line.amount || 0}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex justify-between border-t border-border pt-4 font-medium">
          <span>Total</span>
          <span>${total}</span>
        </p>
        <p className="mt-3 text-xs text-muted">PDF export and accounting APIs can attach later.</p>
      </div>
    </div>
  );
}
