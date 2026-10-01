import type { NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brand: "Md Asif",
  tagline: "Digital systems for businesses that need more than a brochure site.",
  footerTagline: "Software, Automation & AI Solutions",
  description:
    "Md Asif is a software services studio building websites, custom applications, automation, and AI integrations for businesses.",
  locale: "en",
  social: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
  },
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Demos", href: "/demos" },
  { label: "Automation", href: "/automation" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
