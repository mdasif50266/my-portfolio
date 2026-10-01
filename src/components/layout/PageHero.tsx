import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <Badge tone="accent">{eyebrow}</Badge> : null}
      <Heading level={1} as="display" className={eyebrow ? "mt-5" : undefined}>
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
