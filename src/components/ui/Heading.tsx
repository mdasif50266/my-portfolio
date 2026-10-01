import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const headingVariants = cva("text-balance tracking-tight text-foreground", {
  variants: {
    as: {
      display:
        "font-display text-4xl leading-[1.12] sm:text-5xl lg:text-[3.5rem]",
      h1: "font-display text-3xl leading-tight sm:text-4xl",
      h2: "font-sans text-2xl font-semibold leading-snug sm:text-3xl",
      h3: "font-sans text-lg font-semibold leading-snug sm:text-xl",
    },
  },
  defaultVariants: {
    as: "h2",
  },
});

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    level?: 1 | 2 | 3;
  };

export function Heading({
  className,
  as,
  level = 2,
  ...props
}: HeadingProps) {
  const Tag = (`h${level}` as const);

  return <Tag className={cn(headingVariants({ as }), className)} {...props} />;
}
