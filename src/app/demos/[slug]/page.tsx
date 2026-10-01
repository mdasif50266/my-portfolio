import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DemoFrame } from "@/components/demos/DemoFrame";
import { demoComponents } from "@/components/demos/registry";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { demos, getDemo } from "@/data/demos";

type DemoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) {
    return { title: "Demo" };
  }
  return {
    title: `${demo.title} demo`,
    description: demo.summary,
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const demo = getDemo(slug);
  const Prototype = demoComponents[slug];

  if (!demo || !Prototype) {
    notFound();
  }

  return (
    <Section className="pt-12">
      <Container size="wide">
        <Heading level={1} as="h1">
          {demo.title}
        </Heading>
        <p className="mt-3 max-w-2xl text-muted">{demo.summary}</p>
        <div className="mt-8">
          <DemoFrame demo={demo}>
            <Prototype />
          </DemoFrame>
        </div>
      </Container>
    </Section>
  );
}
