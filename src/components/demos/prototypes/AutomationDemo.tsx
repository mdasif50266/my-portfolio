"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const nodes = ["Form", "Webhook", "n8n", "CRM", "Email"];

export function AutomationDemo() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);

  async function run() {
    setRunning(true);
    setStep(-1);
    for (let index = 0; index < nodes.length; index += 1) {
      await new Promise((resolve) => setTimeout(resolve, 450));
      setStep(index);
    }
    setRunning(false);
  }

  return (
    <div className="p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.18em] text-accent">Workflow simulator</p>
      <h2 className="mt-2 text-2xl font-semibold">Lead to notification</h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        Click run to watch a sample n8n-style path. No live webhook is fired.
      </p>
      <Button className="mt-5" size="sm" variant="accent" onClick={run} disabled={running}>
        {running ? "Running…" : "Run workflow"}
      </Button>
      <ol className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        {nodes.map((node, index) => (
          <li key={node} className="flex items-center gap-3">
            <motion.div
              animate={{
                borderColor:
                  step >= index ? "var(--accent)" : "var(--border)",
                backgroundColor:
                  step >= index ? "rgba(201,163,106,0.12)" : "transparent",
              }}
              className="rounded-lg border px-4 py-3 text-sm font-medium"
            >
              {node}
            </motion.div>
            {index < nodes.length - 1 ? (
              <span className="hidden text-muted sm:inline">→</span>
            ) : null}
          </li>
        ))}
      </ol>
      {step === nodes.length - 1 ? (
        <p className="mt-6 text-sm text-accent" role="status">
          Run complete. Attach n8n or an API here to make this a live automation.
        </p>
      ) : null}
    </div>
  );
}
