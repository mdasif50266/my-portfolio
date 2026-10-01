"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { isActivePath, navigation, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <Container size="wide" className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0 font-medium tracking-tight text-foreground">
          {siteConfig.brand}
        </Link>

        <nav
          className="hidden items-center gap-4 text-[13px] lg:flex xl:gap-5 xl:text-sm"
          aria-label="Primary"
        >
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 transition-colors",
                  active ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" size="sm" variant="accent">
            Start a Project
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navigation.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm",
                      active
                        ? "bg-white/[0.04] text-foreground"
                        : "text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ButtonLink href="/contact" size="sm" variant="accent" className="mt-3">
                Start a Project
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
