"use client";

import { CosmicBackground } from "./CosmicBackground";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
      <CosmicBackground />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.25em] text-[oklch(0.82_0.16_75/0.85)] mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="font-[family-name:var(--font-display-serif)] text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tight glow-soft">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
