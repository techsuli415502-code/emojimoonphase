"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollRevealProvider } from "./ScrollReveal";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollRevealProvider />
    </>
  );
}
