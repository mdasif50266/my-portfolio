import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, automation, AI, custom software, and ongoing support from Md Asif.",
};

export default function ServicesPage() {
  return (
    <Section className="pt-16">
      <Container size="wide">
        <PageHero
          eyebrow="Services"
          title="Digital solutions built around your business."
          description="Every engagement starts with the operation you already have — then we decide whether the answer is a website, an application, an automation, or a combination."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.03}>
              <Card className="flex h-full flex-col">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white/[0.03] text-accent">
                  <ServiceIcon name={service.icon} />
                </div>
                <h2 className="mt-5 text-xl font-semibold">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="/contact"
                  variant="ghost"
                  size="sm"
                  className="mt-6 self-start"
                >
                  Discuss Your Project
                </ButtonLink>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
