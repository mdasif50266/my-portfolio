import type { ComponentType } from "react";
import { AutomationDemo } from "@/components/demos/prototypes/AutomationDemo";
import { BookingDemo } from "@/components/demos/prototypes/BookingDemo";
import { ChatbotDemo } from "@/components/demos/prototypes/ChatbotDemo";
import { DashboardDemo } from "@/components/demos/prototypes/DashboardDemo";
import { EcommerceDemo } from "@/components/demos/prototypes/EcommerceDemo";
import { GymDemo } from "@/components/demos/prototypes/GymDemo";
import { InvoiceDemo } from "@/components/demos/prototypes/InvoiceDemo";
import { LeadsDemo } from "@/components/demos/prototypes/LeadsDemo";
import { RealEstateDemo } from "@/components/demos/prototypes/RealEstateDemo";
import { RestaurantDemo } from "@/components/demos/prototypes/RestaurantDemo";

export const demoComponents: Record<string, ComponentType> = {
  restaurant: RestaurantDemo,
  gym: GymDemo,
  ecommerce: EcommerceDemo,
  "real-estate": RealEstateDemo,
  booking: BookingDemo,
  dashboard: DashboardDemo,
  invoice: InvoiceDemo,
  chatbot: ChatbotDemo,
  leads: LeadsDemo,
  automation: AutomationDemo,
};
