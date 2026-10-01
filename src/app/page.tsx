import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/data/services";
import { workflows } from "@/data/workflows";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const featured = services.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Section className="pt-16 sm:pt-24">
        <Container size="wide">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Hero content */}
            <FadeIn>
              <Badge tone="accent">Software & Digital Solutions</Badge>

              <p className="mt-6 font-mono text-sm uppercase tracking-[0.18em] text-accent">
                Hi, I'm Md Asif
              </p>

              <Heading
                level={1}
                as="display"
                className="mt-3 max-w-4xl"
              >
                I build digital solutions that help businesses grow.
              </Heading>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                B.Tech Information Technology developer creating modern
                websites, web applications, AI-powered solutions, business
                automation systems, e-commerce platforms, and custom software.
              </p>

              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                From a professional business website to automated workflows
                and AI integrations, I turn ideas and business problems into
                practical digital systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="accent">
                  Start a Project
                </ButtonLink>

                <ButtonLink href="/services" variant="ghost">
                  Explore Services
                </ButtonLink>

                <ButtonLink href="/demos" variant="ghost">
                  View Demos
                </ButtonLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                <span>✓ Responsive websites</span>
                <span>✓ AI & automation</span>
                <span>✓ Custom software</span>
                <span>✓ SEO-ready development</span>
              </div>
            </FadeIn>

            {/* Profile image */}
            <FadeIn>
              <div className="flex justify-center lg:justify-end">
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-2xl">
                  <div className="relative h-[460px] w-[360px] overflow-hidden rounded-2xl sm:h-[520px] sm:w-[400px]">
                    <Image
                      src="/images/md-asif.png"
                      alt="Md Asif - B.Tech Information Technology Developer"
                      fill
                      priority
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 360px, 400px"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section enclosed>
        <Container size="wide">

          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <Badge tone="accent">Services</Badge>

              <Heading level={2} as="h2" className="mt-4">
                Everything you need to build your digital presence.
              </Heading>

              <p className="mt-3 max-w-2xl text-muted">
                Technology services designed around real business
                requirements — from websites and applications to AI and
                automation.
              </p>
            </div>

            <ButtonLink
              href="/services"
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
            >
              All services
            </ButtonLink>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service) => (
              <Card key={service.slug} className="h-full">
                <ServiceIcon
                  name={service.icon}
                  className="text-accent"
                />

                <h3 className="mt-4 text-base font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </Card>
            ))}
          </div>

        </Container>
      </Section>

      {/* WHAT I CAN DO */}
      <Section>
        <Container size="wide">

          <div className="mb-10">
            <Badge tone="accent">Capabilities</Badge>

            <Heading level={2} as="h2" className="mt-4">
              From an idea to a working digital system.
            </Heading>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            <Card className="h-full">
              <h3 className="text-lg font-semibold">
                Website Development
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Professional business websites, landing pages, portfolios,
                service websites and responsive web experiences.
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="text-lg font-semibold">
                Web Applications
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Custom dashboards, portals, booking systems, management
                systems and other browser-based applications.
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="text-lg font-semibold">
                AI Solutions
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                AI assistants, AI-powered features, intelligent workflows,
                content systems and business AI integrations.
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="text-lg font-semibold">
                Business Automation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Automate repetitive tasks, lead handling, notifications,
                data processing, CRM workflows and business operations.
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="text-lg font-semibold">
                E-commerce
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Online stores, product catalogs, shopping experiences,
                customer flows and e-commerce interfaces.
              </p>
            </Card>

            <Card className="h-full">
              <h3 className="text-lg font-semibold">
                SEO & Digital Growth
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                SEO-friendly websites, technical foundations, optimized
                content structure and search-focused digital experiences.
              </p>
            </Card>

          </div>

        </Container>
      </Section>

      {/* WORKFLOW / DEMOS */}
      <Section>
        <Container
          size="wide"
          className="grid gap-10 lg:grid-cols-2"
        >

          <div>
            <Badge tone="accent">Work & Demos</Badge>

            <Heading level={2} as="h2" className="mt-4">
              See the work as software.
            </Heading>

            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Explore projects, prototypes and interactive demos to see the
              types of digital products and systems I can build.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/projects" variant="ghost" size="sm">
                View Projects
              </ButtonLink>

              <ButtonLink href="/demos" variant="ghost" size="sm">
                Open Demo Lab
              </ButtonLink>

              <ButtonLink href="/automation" variant="ghost" size="sm">
                Automation
              </ButtonLink>
            </div>
          </div>

          <Card variant="glass">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Example workflow
            </p>

            <p className="mt-3 text-lg font-medium">
              {workflows[0].title}
            </p>

            <p className="mt-2 text-sm text-muted">
              {workflows[0].nodes.join(" → ")}
            </p>
          </Card>

        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="wide">
          <Card
            variant="glass"
            padding="lg"
            className="text-center"
          >
            <Badge tone="accent">Have a project in mind?</Badge>

            <Heading level={2} as="h2" className="mt-5">
              Let's build something useful.
            </Heading>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              Tell me what you want to build, automate or improve. We can
              turn the requirement into a practical digital solution.
            </p>

            <div className="mt-7 flex justify-center">
              <ButtonLink href="/contact" variant="accent">
                Start a Project
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}