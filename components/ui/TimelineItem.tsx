"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { ExperienceItem } from "@/types";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlassCard from "@/components/ui/GlassCard";

export default function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: ExperienceItem;
  index: number;
  isLast: boolean;
}) {
  return (
    <li className="relative flex gap-4 sm:gap-10">
      {/* Rail: node + connecting line */}
      <div className="relative flex w-5 flex-none flex-col items-center sm:w-10">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`z-10 mt-1.5 h-3.5 w-3.5 flex-none rounded-full ${
            item.current
              ? "bg-teal shadow-[0_0_16px_2px_var(--color-teal)]"
              : "bg-violet shadow-[0_0_12px_1px_var(--color-violet)]"
          }`}
        />
        {!isLast && (
          <motion.span
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.15, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="mt-1 w-px flex-1 bg-gradient-to-b from-violet/70 via-line to-transparent"
          />
        )}
      </div>

      <RevealOnScroll index={index} className="min-w-0 flex-1 pb-10 sm:pb-14">
        <GlassCard glow={item.current ? "teal" : "violet"} className="p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="code-label">
              {item.start} — {item.current ? "Present" : item.end}
            </span>
            {item.current && (
              <span className="rounded-full border border-teal/40 px-3 py-1 text-xs font-medium text-teal">
                Current
              </span>
            )}
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold text-ink sm:text-2xl">
            {item.role}
            <span className="text-muted"> · </span>
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 underline decoration-violet/40 decoration-2 underline-offset-4 transition-colors hover:text-violet"
              >
                {item.company}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : (
              item.company
            )}
          </h3>
          <p className="mt-1 text-sm text-muted">{item.location}</p>

          <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-base">
            {item.summary}
          </p>

          <ul className="mt-5 space-y-2">
            {item.highlights.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-muted sm:text-[15px]">
                <span className="mt-2 h-1 w-1 flex-none rounded-full bg-teal" aria-hidden />
                {point}
              </li>
            ))}
          </ul>

          {item.projects && item.projects.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {item.projects.map((project) => (
                <span
                  key={project}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                >
                  {project}
                </span>
              ))}
            </div>
          )}
        </GlassCard>
      </RevealOnScroll>
    </li>
  );
}
