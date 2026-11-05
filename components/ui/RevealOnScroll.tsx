"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  /** Stagger index — multiplies the base delay for children revealed in sequence */
  index?: number;
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "li";
}

const DISTANCE = 28;

function getVariants(direction: RevealOnScrollProps["direction"]): Variants {
  const offset =
    direction === "up"
      ? { y: DISTANCE }
      : direction === "left"
      ? { x: -DISTANCE }
      : direction === "right"
      ? { x: DISTANCE }
      : {};

  return {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

/** Fades + slides an element into place the first time it enters the viewport. */
export default function RevealOnScroll({
  children,
  className,
  index = 0,
  direction = "up",
  as = "div",
}: RevealOnScrollProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={getVariants(direction)}
      transition={{ delay: index * 0.08 }}
    >
      {children}
    </Component>
  );
}
