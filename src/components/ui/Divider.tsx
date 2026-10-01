import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-px w-full bg-gradient-to-r from-transparent via-border to-transparent", className)}
    />
  );
}
