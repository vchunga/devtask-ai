import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/dashboard/projects/${project.id}`}
      className="block rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/10 transition hover:border-white/20 hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
      aria-label={`View ${project.name} project details`}
    >
      <article>
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-semibold">{project.name}</h2>
          <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
            {project.status}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          {project.description}
        </p>
      </article>
    </Link>
  );
}
