"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-10 md:mb-14 reveal",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
      {...(id ? { id } : {})}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-[oklch(0.82_0.16_75/0.85)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-display-serif)] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
