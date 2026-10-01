import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Md Asif — websites, automation, AI, and custom software.",
};

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <Container size="wide" className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <PageHero
            eyebrow="Contact"
            title="Let's build something useful."
            description="Tell me what the business needs to do. Service and budget help me reply with a realistic next step — not a canned package."
          />
          <Card variant="glass" className="mt-10">
            <p className="text-sm leading-relaxed text-muted">
              The form validates on this site. Email delivery is not connected yet;
              the handler is ready to attach to an API or transactional email
              provider.
            </p>
          </Card>
        </div>
        <Card padding="lg">
          <ContactForm />
        </Card>
      </Container>
    </Section>
  );
}
