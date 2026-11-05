import { SKILLS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20 sm:px-8 sm:py-30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// 04_skills"
          title="Tools of the trade."
          description="The stack I reach for, from database design to production deploy."
        />

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map((skill, i) => (
            <SkillBadge key={skill.name} skill={skill} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
