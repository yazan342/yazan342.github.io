import { ArrowUpRight, Bot, Check, LineChart, Plug, Sparkles } from "lucide-react";
import { AI_AGENTS } from "@/lib/data";
import { prettyUrl } from "@/lib/utils";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import GlassCard from "@/components/ui/GlassCard";

const ICONS = {
  bot: Bot,
  sparkles: Sparkles,
  chart: LineChart,
  plug: Plug,
} as const;

const GLOWS = ["violet", "teal", "amber", "violet"] as const;

export default function AIAgents() {
  const { caseStudy } = AI_AGENTS;

  return (
    <section id="ai-agents" className="relative px-6 py-20 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={AI_AGENTS.eyebrow}
          title={AI_AGENTS.title}
          description={AI_AGENTS.description}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {AI_AGENTS.capabilities.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Bot;
            return (
              <RevealOnScroll key={item.title} index={i}>
                <GlassCard className="h-full p-6 sm:p-8" glow={GLOWS[i % GLOWS.length]}>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {item.text}
                  </p>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>

        <RevealOnScroll>
          <div className="mt-6 rounded-[1.25rem] bg-gradient-to-br from-violet via-teal/60 to-amber/40 p-px">
            <div className="grid gap-8 rounded-[calc(1.25rem-1px)] bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <span className="code-label">{caseStudy.label}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  {caseStudy.title}
                </h3>
                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 font-display text-sm font-medium text-ink transition-colors hover:text-teal"
                >
                  {prettyUrl(caseStudy.url)}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <ul className="space-y-3">
                {caseStudy.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-ink/85 sm:text-[15px]">
                    <Check className="mt-0.5 h-4 w-4 flex-none text-teal" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
