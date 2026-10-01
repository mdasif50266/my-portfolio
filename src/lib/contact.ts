import type { ContactPayload } from "@/types";
import { supabase } from "@/lib/supabase";

export const contactServices = [
  "Website Development",
  "E-commerce",
  "Business Automation",
  "AI Solution",
  "Custom Software",
  "SEO",
  "API Integration",
  "Other",
] as const;

export const contactBudgets = [
  "Under $500",
  "$500–$1,000",
  "$1,000–$2,500",
  "$2,500+",
  "Not sure yet",
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(
  payload: ContactPayload,
): Partial<Record<keyof ContactPayload, string>> {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.name.trim()) {
    errors.name = "Enter your name.";
  }

  if (!payload.email.trim()) {
    errors.email = "Enter your email.";
  } else if (!emailPattern.test(payload.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!payload.service) {
    errors.service = "Select a service.";
  }

  if (!payload.budget) {
    errors.budget = "Select a budget range.";
  }

  if (payload.description.trim().length < 20) {
    errors.description = "Describe the project in at least 20 characters.";
  }

  return errors;
}

export async function submitContact(payload: ContactPayload) {
  const { data, error } = await supabase
    .from("contact_submissions")
    .insert([
      {
        name: payload.name,
        email: payload.email,
        company: payload.company,
        service: payload.service,
        budget: payload.budget,
        description: payload.description,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  return {
    ok: true as const,
    received: data,
  };
}