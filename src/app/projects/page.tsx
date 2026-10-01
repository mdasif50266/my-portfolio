import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { FadeIn } from "@/components/motion/FadeIn";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Demonstration and concept projects from Md Asif — labelled clearly, not presented as client case studies.",
};

export default function ProjectsPage() {
  return (
    <Section className="pt-16">
      <Container size="wide">
        <PageHero
          eyebrow="Projects"
          title="Demonstration and concept work."
          description="These are not client case studies. Each card is a demo or concept project you can open in the Demo Lab."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.04}>
              <Card className="flex h-full flex-col">
                <ProjectPreview slug={project.demoSlug} />
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <Badge tone="accent">{project.kind}</Badge>
                  <span className="text-xs uppercase tracking-[0.14em] text-muted">
                    {project.category}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ButtonLink
                  href={`/demos/${project.demoSlug}`}
                  variant="ghost"
                  size="sm"
                  className="mt-6 self-start"
                >
                  View Demo
                </ButtonLink>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
