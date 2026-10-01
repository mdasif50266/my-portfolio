import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  gym: "from-emerald-500/20 to-transparent",
  restaurant: "from-orange-400/20 to-transparent",
  ecommerce: "from-sky-400/20 to-transparent",
  dashboard: "from-accent/25 to-transparent",
  "real-estate": "from-teal-400/20 to-transparent",
  booking: "from-violet-400/20 to-transparent",
  chatbot: "from-accent-2/25 to-transparent",
  leads: "from-amber-400/20 to-transparent",
  invoice: "from-lime-400/15 to-transparent",
  automation: "from-cyan-400/20 to-transparent",
};

export function ProjectPreview({ slug }: { slug: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-surface-elevated p-4",
        "min-h-[9.5rem]",
      )}
      aria-hidden
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br",
          tones[slug] ?? "from-white/10 to-transparent",
        )}
      />
      <div className="relative space-y-2">
        <div className="h-2 w-16 rounded-full bg-white/20" />
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 h-16 rounded-md bg-white/8" />
          <div className="h-16 rounded-md bg-white/5" />
        </div>
        <div className="flex gap-2">
          <div className="h-2 flex-1 rounded-full bg-white/10" />
          <div className="h-2 w-10 rounded-full bg-accent/40" />
        </div>
      </div>
    </div>
  );
}
