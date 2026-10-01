import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand} — Digital solutions`,
    template: `%s · ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brand,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${manrope.variable} ${instrument.variable} ${geistMono.variable} h-full`}
    >
      <body className="relative min-h-full bg-background font-sans text-foreground">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_68%)]" />
          <div className="absolute top-[40%] right-[-8rem] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(142,185,198,0.12),transparent_70%)]" />
        </div>
        <div className="noise" aria-hidden />
        <div className="relative z-10 flex min-h-screen flex-col antialiased">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
