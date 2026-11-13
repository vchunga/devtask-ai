export type Project = {
  id: string;
  name: string;
  description: string;
  status: "In Progress" | "Planning";
};

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/10">
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
  );
}
