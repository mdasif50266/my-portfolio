export type ServiceCategory =
  | "websites"
  | "applications"
  | "automation"
  | "ai"
  | "growth"
  | "support";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  features: string[];
  category: ServiceCategory;
  icon: ServiceIconName;
};

export type ServiceIconName =
  | "globe"
  | "store"
  | "workflow"
  | "sparkles"
  | "blocks"
  | "appWindow"
  | "plug"
  | "layoutDashboard"
  | "calendarCheck"
  | "building2"
  | "search"
  | "gauge"
  | "wrench";

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  brand: string;
  tagline: string;
  footerTagline: string;
  description: string;
  locale: string;
  social: {
    github: string;
    linkedin: string;
  };
};

export type ProjectKind = "Demo Project" | "Concept Project";

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  category: string;
  technologies: string[];
  summary: string;
  demoSlug: string;
};

export type Demo = {
  slug: string;
  title: string;
  summary: string;
  status: "prototype";
};

export type Workflow = {
  id: string;
  title: string;
  description: string;
  nodes: string[];
};

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  description: string;
};
