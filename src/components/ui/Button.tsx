"use client";

import type { VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type ButtonProps = HTMLMotionProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
