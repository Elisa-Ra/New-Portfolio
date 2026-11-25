import Link from "next/link";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-3xl border-2 border-ink bg-white p-6 shadow-[6px_6px_0_0_var(--color-primary)] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_0_var(--color-secondary)]"
    >
      <h3 className="font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-2 text-sm text-ink/70">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}