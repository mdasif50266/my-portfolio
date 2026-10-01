import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { processSteps, skills } from "@/data/about";

export const metadata: Metadata = {
  title: "About Md Asif",
  description:
    "Learn about Md Asif, a B.Tech Information Technology developer building websites, web applications, AI solutions, automation systems, and digital experiences for businesses.",
};

export default function AboutPage() {
  return (
    <Section className="pt-16">
      <Container size="wide">

        {/* Profile introduction */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-2xl">
              <div className="relative h-[420px] w-[340px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/md-asif.png"
                  alt="Md Asif - B.Tech Information Technology"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 340px, 340px"
                />
              </div>
            </div>
          </div>

          {/* Personal information */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              About Me
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Md Asif
            </h1>

            <p className="mt-4 text-xl text-muted">
              B.Tech — Information Technology
            </p>

            <p className="mt-2 text-lg text-accent">
              Software Developer & Digital Solutions Specialist
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-muted">
              I am an Information Technology graduate focused on building
              practical digital solutions for modern businesses. My work
              combines web development, software engineering, AI, business
              automation, and digital technologies to turn ideas and
              operational problems into useful software.
            </p>

            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              I create responsive websites, web applications, business
              automation workflows, AI-powered solutions, dashboards,
              e-commerce experiences, and other digital products designed
              around real business requirements.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-border px-4 py-2 text-sm">
                B.Tech IT
              </span>

              <span className="rounded-full border border-border px-4 py-2 text-sm">
                Web Development
              </span>

              <span className="rounded-full border border-border px-4 py-2 text-sm">
                AI & Automation
              </span>

              <span className="rounded-full border border-border px-4 py-2 text-sm">
                Digital Solutions
              </span>
            </div>
          </div>
        </div>

        {/* Personal profile */}
        <div className="mt-16">
          <PageHero
            eyebrow="Profile"
            title="Building useful technology, not just pretty interfaces."
            description="I work at the intersection of software development, business automation, AI, and digital experiences."
          />
        </div>

        {/* About + Technologies */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">

          <Card padding="lg">
            <h2 className="text-lg font-semibold">
              My approach to technology
            </h2>

            <p className="mt-4 leading-relaxed text-muted">
              Good software should solve a real problem. I start by
              understanding what a business needs, who will use the system,
              and what the desired result should be. From there, I choose the
              appropriate combination of website development, applications,
              databases, automation, AI, and integrations.
            </p>

            <p className="mt-4 leading-relaxed text-muted">
              My goal is to build solutions that are modern, responsive,
              scalable, easy to use, and useful in real-world business
              environments.
            </p>

            <p className="mt-4 leading-relaxed text-muted">
              Whether the requirement is a professional business website,
              e-commerce platform, lead-generation system, automated workflow,
              AI assistant, dashboard, or custom software, I focus on
              delivering a complete digital solution rather than just a
              visual interface.
            </p>
          </Card>

          <Card variant="glass" padding="lg">
            <h2 className="text-lg font-semibold">
              Technologies & Tools
            </h2>

            <p className="mt-3 text-sm text-muted">
              Technologies and tools used across modern software and digital
              solution projects.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Services focus */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">
            What I can build
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <Card>
              <h3 className="font-semibold">Websites & Web Apps</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Modern responsive business websites, landing pages,
                portfolios, dashboards, and custom web applications.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Business Automation</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Automated workflows that connect forms, databases,
                communication tools, CRMs, APIs, and business processes.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">AI Solutions</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                AI-powered assistants, intelligent workflows, content
                systems, and AI integrations for business use cases.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">E-commerce</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Product catalogs, online stores, customer flows, checkout
                experiences, and business-ready e-commerce interfaces.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">SEO & Digital Presence</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Search-friendly websites, technical SEO foundations,
                structured content, and optimized digital experiences.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Custom Software</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Software solutions designed around specific business
                requirements, workflows, and operational needs.
              </p>
            </Card>

          </div>
        </div>

        {/* Development process */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold">
            Development process
          </h2>

          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <li key={step.title}>
                <Card className="h-full">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                    Step {index + 1}
                  </p>

                  <h3 className="mt-3 font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </Card>
              </li>
            ))}
          </ol>
        </div>

      </Container>
    </Section>
  );
}