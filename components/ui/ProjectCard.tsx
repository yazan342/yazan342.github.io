"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/types";
import { prettyUrl } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const DOT_COLORS = ["bg-amber", "bg-violet", "bg-teal"];

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const initials = project.title
    .split(" ")
    .filter((w) => /^[A-Za-z0-9]/.test(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <RevealOnScroll index={index % 4}>
      <GlassCard className="group flex h-full flex-col overflow-hidden" glow="teal">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-gradient-to-br from-violet/15 via-surface to-teal/10">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} website preview`}
              fill
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <div className="absolute left-4 top-4 flex gap-1.5">
                {DOT_COLORS.map((color) => (
                  <span key={color} className={`h-2.5 w-2.5 rounded-full ${color} opacity-70`} />
                ))}
              </div>
              <span className="font-display text-4xl font-semibold text-ink/15">
                {initials}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
              {project.title}
            </h3>
            <span className="code-label whitespace-nowrap">{project.country}</span>
          </div>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-teal/90"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 self-start font-display text-sm font-medium text-ink transition-colors hover:text-teal"
          >
            {prettyUrl(project.url)}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          ) : (
            <span className="mt-6 self-start code-label">{project.client}</span>
          )}
        </div>
      </GlassCard>
    </RevealOnScroll>
  );
}