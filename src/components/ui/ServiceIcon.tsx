import {
  AppWindow,
  Blocks,
  Building2,
  CalendarCheck,
  Gauge,
  Globe,
  LayoutDashboard,
  Plug,
  Search,
  Sparkles,
  Store,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { ServiceIconName } from "@/types";

const icons: Record<ServiceIconName, LucideIcon> = {
  globe: Globe,
  store: Store,
  workflow: Workflow,
  sparkles: Sparkles,
  blocks: Blocks,
  appWindow: AppWindow,
  plug: Plug,
  layoutDashboard: LayoutDashboard,
  calendarCheck: CalendarCheck,
  building2: Building2,
  search: Search,
  gauge: Gauge,
  wrench: Wrench,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} size={20} aria-hidden />;
}
