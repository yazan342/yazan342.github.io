import { EXPERIENCE } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="// 02_experience"
          title="Where I've been building."
          description="A timeline of full-time and freelance roles across four countries."
        />

        <ul className="relative">
          {EXPERIENCE.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={i}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
