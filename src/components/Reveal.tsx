import type { ReactNode } from "react";

/**
 * AOS-powered scroll reveal.
 * variant "left"  → slides in FROM the left  (AOS fade-right)
 * variant "right" → slides in FROM the right (AOS fade-left)
 * variant "up"/"down"/"grow" likewise
 */
const AOS_MAP: Record<string, string> = {
  up: "fade-up",
  down: "fade-down",
  left: "fade-right",
  right: "fade-left",
  grow: "zoom-in",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "down" | "left" | "right" | "grow";
}) {
  return (
    <div
      data-aos={AOS_MAP[variant] ?? "fade-up"}
      data-aos-delay={delay || undefined}
      className={className}
    >
      {children}
    </div>
  );
}
