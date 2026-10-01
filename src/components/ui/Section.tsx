import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  enclosed?: boolean;
};

export function Section({ className, enclosed, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        enclosed && "border-y border-border",
        className,
      )}
      {...props}
    />
  );
}
