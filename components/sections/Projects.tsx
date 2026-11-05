import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-20sm:px-8 sm:py-30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="// 03_projects"
          title="Featured work."
          description="Selected work across AI agents, platforms and websites for clients in Saudi Arabia, Kuwait and the Gulf."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
