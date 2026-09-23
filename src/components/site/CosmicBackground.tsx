"use client";

/**
 * Decorative cosmic background.
 * Renders the deep-plum gradient, twinkling stars (CSS only), and three
 * slowly drifting nebula blobs. Purely decorative — sits behind all content
 * and is invisible to screen readers.
 */
export function CosmicBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 cosmic-bg" />
      <div className="starfield" />
      <div
        className="nebula-blob gold"
        style={{ width: 480, height: 480, top: "-10%", left: "-8%" }}
      />
      <div
        className="nebula-blob violet"
        style={{ width: 520, height: 520, bottom: "-12%", right: "-10%" }}
      />
      <div
        className="nebula-blob teal"
        style={{ width: 360, height: 360, top: "40%", left: "55%", opacity: 0.2 }}
      />
      <div className="absolute inset-0 cosmic-vignette" />
    </div>
  );
}
