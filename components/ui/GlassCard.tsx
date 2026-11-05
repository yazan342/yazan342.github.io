"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: "violet" | "teal" | "amber" | "none";
}

const GLOW_MAP: Record<NonNullable<GlassCardProps["glow"]>, string> = {
  violet: "hover:shadow-[0_0_50px_-12px_var(--color-violet)]",
  teal: "hover:shadow-[0_0_50px_-12px_var(--color-teal)]",
  amber: "hover:shadow-[0_0_50px_-12px_var(--color-amber)]",
  none: "",
};

export default function GlassCard({
  children,
  className,
  glow = "violet",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "glass-panel rounded-2xl transition-shadow duration-500",
        GLOW_MAP[glow],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
