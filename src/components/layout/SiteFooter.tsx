import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Divider } from "@/components/ui/Divider";
import { navigation, siteConfig } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <Divider />
      <Container
        size="wide"
        className="grid gap-10 py-12 sm:grid-cols-[1.2fr_1fr] lg:grid-cols-[1.4fr_1fr_auto]"
      >
        <div>
          <p className="font-medium text-foreground">{siteConfig.brand}</p>
          <p className="mt-2 max-w-sm text-sm text-muted">{siteConfig.footerTagline}</p>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3 sm:col-span-2 lg:col-span-1 lg:justify-end">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:text-foreground"
            aria-label="GitHub (placeholder link)"
          >
            <Github size={16} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted hover:text-foreground"
            aria-label="LinkedIn (placeholder link)"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
