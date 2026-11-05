import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 max-w-2xl", align === "center" && "mx-auto text-center")}>
      <RevealOnScroll>
        <span className="code-label">{eyebrow}</span>
      </RevealOnScroll>
      <RevealOnScroll index={1}>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </RevealOnScroll>
      {description && (
        <RevealOnScroll index={2}>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}
