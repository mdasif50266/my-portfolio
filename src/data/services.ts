import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    summary:
      "Custom websites with a clear structure, fast pages, and a professional presence your customers can trust.",
    features: [
      "Information architecture and page layouts",
      "Responsive design for phone, tablet, and desktop",
      "Contact, enquiry, and content-ready sections",
      "Deployment-ready Next.js builds",
    ],
    category: "websites",
    icon: "globe",
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    summary:
      "Storefronts for catalogs, carts, and checkout flows that match how you actually sell.",
    features: [
      "Product listing and product detail layouts",
      "Cart and checkout interface patterns",
      "Order summary and customer-facing emails (wired later)",
      "Admin-ready catalog structure",
    ],
    category: "websites",
    icon: "store",
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    summary:
      "Replace copy-paste work with documented workflows across forms, CRMs, email, and internal tools.",
    features: [
      "Process mapping before any build",
      "n8n workflow design and implementation",
      "Webhooks, queues, and error handling",
      "Human fallback steps where automation should stop",
    ],
    category: "automation",
    icon: "workflow",
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    summary:
      "Practical AI features: assistants, classification, drafting, and lead qualification inside real products.",
    features: [
      "Chat and assist interfaces grounded in your content",
      "Lead scoring and intake classification",
      "Human handoff instead of unsupervised replies",
      "API-based model integration",
    ],
    category: "ai",
    icon: "sparkles",
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    summary:
      "Software designed around your operation when spreadsheets and off-the-shelf tools no longer fit.",
    features: [
      "Requirements workshop and scope outline",
      "Role-based screens for staff and admins",
      "Data models that match your records",
      "Iterative delivery instead of a one-shot dump",
    ],
    category: "applications",
    icon: "blocks",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    summary:
      "Browser-based applications for internal teams and customers: dashboards, portals, and workflow tools.",
    features: [
      "Authenticated app shells",
      "CRUD interfaces that stay usable",
      "State, validation, and empty states",
      "API-backed screens ready for a real backend",
    ],
    category: "applications",
    icon: "appWindow",
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    summary:
      "Connect payments, CRMs, calendars, ERPs, and internal systems so data moves without retyping.",
    features: [
      "REST API design and consumption",
      "Auth, retries, and logging",
      "Webhook receivers and outbound events",
      "Mapping between mismatched data models",
    ],
    category: "automation",
    icon: "plug",
  },
  {
    slug: "admin-dashboards",
    title: "Admin Dashboards",
    summary:
      "Internal interfaces for monitoring operations, editing records, and acting on what the business needs today.",
    features: [
      "Overview, tables, and detail drawers",
      "Filters, search, and status views",
      "Role-aware navigation",
      "Export and action buttons that can connect to APIs",
    ],
    category: "applications",
    icon: "layoutDashboard",
  },
  {
    slug: "booking-systems",
    title: "Booking Systems",
    summary:
      "Scheduling for appointments, classes, or site visits with availability, confirmation, and reminders.",
    features: [
      "Service and staff availability rules",
      "Customer booking flow",
      "Confirmation and reminder steps",
      "Admin calendar views",
    ],
    category: "applications",
    icon: "calendarCheck",
  },
  {
    slug: "business-management-systems",
    title: "Business Management Systems",
    summary:
      "Operational software for members, inventory, staff, invoices, or client records in one place.",
    features: [
      "Record management for people and assets",
      "Status pipelines instead of scattered chats",
      "Reporting screens with real data later",
      "Permissions for owners and operators",
    ],
    category: "applications",
    icon: "building2",
  },
  {
    slug: "seo",
    title: "SEO",
    summary:
      "Technical and content structure so search engines can crawl, understand, and rank the pages you actually care about.",
    features: [
      "Metadata, headings, and URL structure",
      "Internal linking and sitemap setup",
      "Indexation and crawl hygiene",
      "Content outlines tied to services you sell",
    ],
    category: "growth",
    icon: "search",
  },
  {
    slug: "performance-optimization",
    title: "Website Performance Optimization",
    summary:
      "Load time, rendering, and Core Web Vitals work so the site feels immediate on real devices.",
    features: [
      "Bundle and image audit",
      "Rendering and caching improvements",
      "Layout stability and font loading",
      "Measurement before and after changes",
    ],
    category: "growth",
    icon: "gauge",
  },
  {
    slug: "maintenance-and-support",
    title: "Maintenance & Support",
    summary:
      "Updates, monitoring, and fixes after launch so the product stays dependable.",
    features: [
      "Dependency and security updates",
      "Content and small feature changes",
      "Incident response for broken flows",
      "Hosting and domain coordination",
    ],
    category: "support",
    icon: "wrench",
  },
];
