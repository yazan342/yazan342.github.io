"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import gsap from "gsap";
import MagneticButton from "@/components/ui/MagneticButton";
import { HERO_PHOTO_PATH, RESUME_PATH, SITE } from "@/lib/data";
import { useLenisInstance } from "@/components/layout/SmoothScrollProvider";

const HEADLINE_LINES = [SITE.firstName, SITE.lastName];

export default function Hero() {
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const lenis = useLenisInstance();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(lineRefs.current, { opacity: 1, y: 0 });
        return;
      }
      gsap.set(lineRefs.current, { yPercent: 130 });
      gsap.to(lineRefs.current, {
        yPercent: 0,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.12,
        delay: 0.35,
      });
    });
    return () => ctx.revert();
  }, []);

  function scrollTo(id: string) {
    const target = document.querySelector(id);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pt-28 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5"
        >
          <Sparkles className="h-3.5 w-3.5 text-teal" />
          <span className="code-label">available for new projects</span>
        </motion.div>

        <h1 className="mt-8 font-display text-[15vw] font-semibold leading-[0.92] tracking-tight text-ink sm:text-[9vw] lg:text-[6rem] xl:text-[7rem]">
          {HEADLINE_LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <span
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className={`inline-block ${i === 1 ? "text-gradient" : ""}`}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl font-mono text-sm text-teal sm:text-base"
        >
          {SITE.role}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton onClick={() => scrollTo("#projects")} variant="primary">
            View Projects
          </MagneticButton>
          <MagneticButton href={RESUME_PATH} variant="ghost">
            <Download className="h-4 w-4" />
            Download CV
          </MagneticButton>
          <MagneticButton onClick={() => scrollTo("#contact")} variant="ghost">
            <Mail className="h-4 w-4" />
            Contact Me
          </MagneticButton>
        </motion.div>
        </div>

        {/* Photo column — image path is HERO_PHOTO_PATH in lib/data.ts */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
        >
          <span
            aria-hidden
            className="animate-float-slow absolute -left-3 -top-3 h-2.5 w-2.5 rounded-full bg-teal shadow-[0_0_14px_2px_var(--color-teal)]"
          />
          <span
            aria-hidden
            className="animate-float-slower absolute -bottom-4 -right-2 h-2 w-2 rounded-full bg-violet shadow-[0_0_12px_2px_var(--color-violet)]"
          />

          <div className="glow-violet rounded-[2rem] bg-gradient-to-br from-violet via-teal/50 to-amber/40 p-[2px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
              <Image
                src={HERO_PHOTO_PATH}
                alt={`${SITE.name} — ${SITE.role}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col sm:flex items-center gap-2 text-muted transition-colors hover:text-teal"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}