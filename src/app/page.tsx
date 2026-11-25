import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <div className="space-y-24">
      <section className="relative py-12">
        {/* Forme decorative sullo sfondo */}
        <div className="pointer-events-none absolute -top-10 -right-10 -z-10 size-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="pointer-events-none absolute top-40 -left-16 -z-10 size-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute right-24 bottom-0 -z-10 size-24 rotate-12 rounded-2xl bg-accent/70" />

        <span className="inline-block rounded-full border-2 border-ink bg-white px-4 py-1 text-sm font-medium">
          👋 Disponibile per nuovi progetti
        </span>

        <h1 className="mt-6 font-display text-5xl font-bold leading-tight sm:text-7xl">
          Ciao, sono{" "}
          <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Elisa Raeli
          </span>
          .
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/70">
          Full-stack web developer: costruisco applicazioni web dal database
          all&apos;interfaccia.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border-2 border-ink bg-primary px-6 py-3 font-semibold text-white shadow-[4px_4px_0_0_var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Vedi i progetti
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-ink bg-white px-6 py-3 font-semibold shadow-[4px_4px_0_0_var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Contattami
          </Link>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="font-display text-3xl font-bold">Progetti in evidenza</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}