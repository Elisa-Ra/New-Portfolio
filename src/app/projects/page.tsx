import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <h1 className="font-display text-4xl font-bold">Progetti</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}