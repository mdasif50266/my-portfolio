import type { Metadata } from "next";
import { WorkflowDiagram } from "@/components/automation/WorkflowDiagram";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { workflows } from "@/data/workflows";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "Business automation with n8n, APIs, webhooks, and AI integrations — designed as visible workflows.",
};

export default function AutomationPage() {
  return (
    <Section className="pt-16">
      <Container size="wide">
        <PageHero
          eyebrow="Automation"
          title="Turn repetitive work into automated workflows."
          description="I design n8n workflows, webhook receivers, API integrations, and AI steps so staff stop copying the same data between tools."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "n8n",
              body: "Visual workflows for intake, orders, bookings, and notifications — self-hosted or cloud.",
            },
            {
              title: "APIs & webhooks",
              body: "REST calls, signed webhooks, retries, and mapping between systems that were never meant to talk.",
            },
            {
              title: "AI integrations",
              body: "Classification, drafting, and lead scoring as explicit steps in a pipeline — with a human path when needed.",
            },
          ].map((item) => (
            <Card key={item.title} variant="glass">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-14 space-y-10">
          {workflows.map((workflow) => (
            <Card key={workflow.id} padding="lg">
              <WorkflowDiagram workflow={workflow} />
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
