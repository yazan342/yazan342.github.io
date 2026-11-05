"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost";
}

const SPRING = { stiffness: 150, damping: 15, mass: 0.2 };

/** Wraps a button/link with a subtle magnetic pull toward the pointer. */
export default function MagneticButton({
  children,
  onClick,
  href,
  className,
  variant = "primary",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function handleMouseMove(event: PointerEvent<HTMLElement>) {
    // Ignore touch: on phones the "pull" would leave buttons stuck off-center
    if (event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - bounds.left - bounds.width / 2;
    const relY = event.clientY - bounds.top - bounds.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-2";

  const styles =
    variant === "primary"
      ? "bg-ink text-void hover:bg-teal"
      : "glass-panel text-ink hover:border-teal/60";

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onPointerMove={handleMouseMove}
      onPointerLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={cn(base, styles, className)}
    >
      {children}
    </Component>
  );
}