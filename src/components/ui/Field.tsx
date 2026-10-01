import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
};

export function Field({ label, htmlFor, error, optional, children }: FieldProps) {
  return (
    <label htmlFor={htmlFor} className="block space-y-2">
      <span className="text-sm font-medium text-foreground">
        {label}
        {optional ? (
          <span className="ml-2 text-xs font-normal text-muted">Optional</span>
        ) : null}
      </span>
      {children}
      {error ? (
        <span className="block text-sm text-red-300" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export const fieldControlClass = cn(
  "w-full rounded-md border border-border bg-surface-elevated px-3 py-2.5 text-sm text-foreground outline-none transition-colors",
  "placeholder:text-muted/70 focus:border-accent/50",
);
