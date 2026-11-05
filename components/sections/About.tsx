"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { ABOUT } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlassCard from "@/components/ui/GlassCard";

function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const parsed = parseInt(value, 10);
  const isNumeric = !Number.isNaN(parsed);
  const numeric = isNumeric ? parsed : 0;
  const suffix = isNumeric ? value.replace(String(parsed), "") : value;
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView && isNumeric) motionVal.set(numeric);
  }, [inView, isNumeric, numeric, motionVal]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      if (ref.current && isNumeric) ref.current.textContent = `${Math.round(latest)}${suffix}`;
    });
  }, [spring, suffix, isNumeric]);

  return (
    <div>
      <span
        ref={ref}
        className="font-display text-3xl font-semibold text-gradient sm:text-4xl"
      >
        {isNumeric ? `0${suffix}` : value}
      </span>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={ABOUT.eyebrow}
          title={ABOUT.heading}
          description={undefined}
        />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5">
            {ABOUT.paragraphs.map((paragraph, i) => (
              <RevealOnScroll key={paragraph} index={i} direction="left">
                <p className="text-base leading-relaxed text-ink/85 sm:text-lg">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll direction="right">
            <GlassCard className="grid grid-cols-3 gap-6 p-7 lg:grid-cols-1 lg:gap-8 lg:p-8">
              {ABOUT.stats.map((stat) => (
                <StatCounter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </GlassCard>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
