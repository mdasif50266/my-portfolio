import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em]",
  {
    variants: {
      tone: {
        muted: "border-border bg-white/[0.03] text-muted",
        accent: "border-accent/25 bg-accent/10 text-accent",
      },
    },
    defaultVariants: {
      tone: "muted",
    },
  },
);

type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
