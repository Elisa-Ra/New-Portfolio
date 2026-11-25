import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-neutral-600">
        {project.description}
      </p>
      <p className="text-sm">{project.stack.join(" · ")}</p>
      <div className="flex gap-4 text-sm">
        {project.repoUrl && <a href={project.repoUrl} className="underline">Codice</a>}
        {project.liveUrl && <a href={project.liveUrl} className="underline">Demo live</a>}
      </div>
    </article>
  );
}