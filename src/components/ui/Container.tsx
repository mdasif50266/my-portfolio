import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-5 sm:px-6 lg:px-8", {
  variants: {
    size: {
        default: "max-w-6xl",
        narrow: "max-w-3xl",
        wide: "max-w-[88rem]",
      },
  },
  defaultVariants: {
    size: "default",
  },
});

type ContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof containerVariants>;

export function Container({ className, size, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size }), className)} {...props} />;
}
