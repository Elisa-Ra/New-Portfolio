import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "progetto-uno",
    title: "Progetto Uno",
    description: "Breve descrizione del progetto.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    repoUrl: "https://github.com/Elisa-Ra/progetto-uno",
  },
  {
    slug: "progetto-due",
    title: "Progetto Due",
    description: "Breve descrizione del secondo progetto.",
    stack: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/Elisa-Ra/progetto-due",
  },
];