import type { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Demo } from "@/types";

export function DemoFrame({
  demo,
  children,
}: {
  demo: Demo;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Frontend prototype</Badge>
          <p className="text-sm text-muted">
            {demo.title} uses sample data only. This can be replaced with a production
            application later.
          </p>
        </div>
        <ButtonLink href="/demos" variant="ghost" size="sm">
          All demos
        </ButtonLink>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        {children}
      </div>
      <p className="text-sm text-muted">
        Want this built for your business?{" "}
        <Link href="/contact" className="text-accent hover:underline">
          Discuss your project
        </Link>
        .
      </p>
    </div>
  );
}
