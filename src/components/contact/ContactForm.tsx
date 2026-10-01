"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Field, fieldControlClass } from "@/components/ui/Field";
import {
  contactBudgets,
  contactServices,
  submitContact,
  validateContact,
} from "@/lib/contact";
import { cn } from "@/lib/utils";
import type { ContactPayload } from "@/types";

const empty: ContactPayload = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  description: "",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    await submitContact(values);
    setStatus("success");
    setValues(empty);
  }

  if (status === "success") {
    return (
      <div className="glass rounded-xl p-8" role="status">
        <p className="text-lg font-medium text-foreground">Details validated.</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          This form is not connected to email yet. Your answers passed frontend
          validation and a local handler. An email or API service can be attached
          here without changing the layout.
        </p>
        <Button className="mt-6" type="button" variant="ghost" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className={cn(fieldControlClass, errors.name && "border-red-400/60")}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={cn(fieldControlClass, errors.email && "border-red-400/60")}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
      </div>

      <Field label="Company" htmlFor="company" optional>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => update("company", event.target.value)}
          className={fieldControlClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service" htmlFor="service" error={errors.service}>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            className={cn(fieldControlClass, errors.service && "border-red-400/60")}
            aria-invalid={Boolean(errors.service)}
          >
            <option value="">Select a service</option>
            {contactServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget" htmlFor="budget" error={errors.budget}>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(event) => update("budget", event.target.value)}
            className={cn(fieldControlClass, errors.budget && "border-red-400/60")}
            aria-invalid={Boolean(errors.budget)}
          >
            <option value="">Select a range</option>
            {contactBudgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Description" htmlFor="description" error={errors.description}>
        <textarea
          id="description"
          name="description"
          rows={6}
          value={values.description}
          onChange={(event) => update("description", event.target.value)}
          className={cn(fieldControlClass, "resize-y", errors.description && "border-red-400/60")}
          aria-invalid={Boolean(errors.description)}
        />
      </Field>

      <Button type="submit" variant="accent" disabled={status === "submitting"}>
        {status === "submitting" ? "Validating…" : "Send message"}
      </Button>
    </form>
  );
}
