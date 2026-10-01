"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Workflow } from "@/types";

export function WorkflowDiagram({ workflow }: { workflow: Workflow }) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{workflow.title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          {workflow.description}
        </p>
      </div>

      <ol className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
        {workflow.nodes.map((node, index) => (
          <li key={`${workflow.id}-${node}`} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="glass relative min-w-[9.5rem] rounded-lg px-4 py-3 text-sm font-medium"
            >
              <span className="mb-2 block font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              {node}
              <motion.span
                className="absolute inset-x-3 bottom-1 h-px origin-left bg-gradient-to-r from-accent/80 to-transparent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.2, duration: 0.5 }}
              />
            </motion.div>
            {index < workflow.nodes.length - 1 ? (
              <ArrowRight
                size={16}
                className="hidden shrink-0 text-accent/70 lg:block"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
