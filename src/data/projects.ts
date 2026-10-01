import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "gym-management-system",
    title: "Gym Management System",
    kind: "Demo Project",
    category: "Operations software",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "A member, class, and check-in interface for a fitness business. Built as a demonstration, not a live client system.",
    demoSlug: "gym",
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website",
    kind: "Concept Project",
    category: "Marketing website",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    summary:
      "A dining-room site with menu, hours, and a reservation enquiry form. Concept UI for hospitality brands.",
    demoSlug: "restaurant",
  },
  {
    slug: "ecommerce-website",
    title: "E-commerce Website",
    kind: "Demo Project",
    category: "Commerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "Catalog, product detail, and cart prototype showing how a storefront can feel before a payment provider is connected.",
    demoSlug: "ecommerce",
  },
  {
    slug: "business-dashboard",
    title: "Business Dashboard",
    kind: "Concept Project",
    category: "Admin interface",
    technologies: ["Next.js", "Lucide React", "Tailwind CSS"],
    summary:
      "An operations overview with sample records. Numbers on screen are prototype placeholders, not reported results.",
    demoSlug: "dashboard",
  },
  {
    slug: "real-estate-website",
    title: "Real Estate Website",
    kind: "Concept Project",
    category: "Listings website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "Property cards, filters, and an enquiry drawer for an agency-style site. Fictional listings for layout only.",
    demoSlug: "real-estate",
  },
  {
    slug: "booking-system",
    title: "Booking System",
    kind: "Demo Project",
    category: "Scheduling",
    technologies: ["Next.js", "TypeScript", "Framer Motion"],
    summary:
      "A service booking flow with time slots and confirmation states. No calendar account is connected yet.",
    demoSlug: "booking",
  },
  {
    slug: "ai-customer-support",
    title: "AI Customer Support",
    kind: "Demo Project",
    category: "AI interface",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "A support chat prototype with scripted replies. It shows the interface, not a production model.",
    demoSlug: "chatbot",
  },
  {
    slug: "lead-management-system",
    title: "Lead Management System",
    kind: "Demo Project",
    category: "CRM-style app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    summary:
      "A pipeline board for incoming enquiries. Sample leads illustrate the workflow, not a real sales book.",
    demoSlug: "leads",
  },
];
