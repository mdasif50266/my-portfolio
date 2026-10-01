import type { Demo } from "@/types";

export const demos: Demo[] = [
  {
    slug: "restaurant",
    title: "Restaurant Website",
    summary: "Menu, hours, and a reservation enquiry — hospitality site prototype.",
    status: "prototype",
  },
  {
    slug: "gym",
    title: "Gym Management",
    summary: "Members, classes, and a front-desk check-in screen.",
    status: "prototype",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    summary: "Product grid, details, and a working client-side cart.",
    status: "prototype",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    summary: "Listing cards, filters, and an enquiry panel.",
    status: "prototype",
  },
  {
    slug: "booking",
    title: "Booking System",
    summary: "Pick a service, date, and slot, then see a confirmation state.",
    status: "prototype",
  },
  {
    slug: "dashboard",
    title: "Admin Dashboard",
    summary: "Operations overview with sample tables and status chips.",
    status: "prototype",
  },
  {
    slug: "invoice",
    title: "Invoice Generator",
    summary: "Build a line-item invoice and preview it instantly.",
    status: "prototype",
  },
  {
    slug: "chatbot",
    title: "AI Chatbot",
    summary: "Support chat UI with scripted, keyword-based replies.",
    status: "prototype",
  },
  {
    slug: "leads",
    title: "Lead Management",
    summary: "Move sample enquiries across a pipeline board.",
    status: "prototype",
  },
  {
    slug: "automation",
    title: "Business Automation",
    summary: "Trigger a visual workflow and watch nodes complete in sequence.",
    status: "prototype",
  },
];

export function getDemo(slug: string) {
  return demos.find((demo) => demo.slug === slug);
}
