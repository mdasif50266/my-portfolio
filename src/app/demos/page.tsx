import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { demos } from "@/data/demos";

export const metadata: Metadata = {
  title: "Demos",
  description: "Interactive frontend prototypes from Md Asif. Open a demo to click through the product.",
};

export default function DemosPage() {
  return (
    <Section className="pt-16">
      <Container size="wide">
        <PageHero
          eyebrow="Demo Lab"
          title="See what I can build."
          description="Each demo is a polished frontend prototype. The code is structured so a real backend, payments, or n8n workflow can be connected later."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {demos.map((demo, index) => (
            <FadeIn key={demo.slug} delay={index * 0.03}>
              <Card className="flex h-full flex-col">
                <ProjectPreview slug={demo.slug} />
                <div className="mt-4">
                  <Badge>Prototype</Badge>
                </div>
                <h2 className="mt-4 text-lg font-semibold">{demo.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{demo.summary}</p>
                <ButtonLink
                  href={`/demos/${demo.slug}`}
                  variant="accent"
                  size="sm"
                  className="mt-6 self-start"
                >
                  Open Demo
                </ButtonLink>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
