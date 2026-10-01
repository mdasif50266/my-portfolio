import type { Workflow } from "@/types";

export const workflows: Workflow[] = [
  {
    id: "lead-intake",
    title: "Website lead intake",
    description:
      "A form submission becomes a CRM record, an email, and a team ping — typical n8n work over webhooks and APIs.",
    nodes: ["Website Lead", "Webhook", "Automation", "CRM", "Email", "Notification"],
  },
  {
    id: "order-fulfillment",
    title: "New order handling",
    description:
      "Orders write to a database, generate an invoice, email the customer, and notify operations.",
    nodes: ["New Order", "Database", "Invoice", "Customer Email", "Admin Notification"],
  },
  {
    id: "ai-qualification",
    title: "AI lead qualification",
    description:
      "An intake note is scored by an AI step, then stored in the CRM with a sales notification.",
    nodes: ["AI Lead Qualification", "AI Analysis", "Lead Score", "CRM", "Sales Notification"],
  },
  {
    id: "booking",
    title: "Appointment booking",
    description:
      "A confirmed slot is stored, pushed to a calendar API, then followed by confirmation and reminder messages.",
    nodes: ["Appointment Booking", "Database", "Calendar", "Confirmation", "Reminder"],
  },
];
