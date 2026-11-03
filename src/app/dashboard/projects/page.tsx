const projects = [
  {
    name: "DevTask AI",
    description: "AI-powered developer task management",
    status: "In Progress",
  },
  {
    name: "Portfolio Website",
    description: "Personal developer portfolio",
    status: "Planning",
  },
  {
    name: "Learning Platform",
    description: "Interactive coding lessons",
    status: "In Progress",
  },
];

export default function ProjectsPage() {
  return (
    <section className="min-h-full px-6 py-10 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="mt-3 text-slate-400">
              Manage your development projects in one place.
            </p>
          </div>
          <button
            type="button"
            disabled
            aria-label="New Project (coming soon)"
            className="inline-flex w-fit cursor-not-allowed items-center rounded-lg border border-indigo-400/30 bg-indigo-500/15 px-4 py-2.5 text-sm font-semibold text-indigo-200 opacity-80"
          >
            New Project <span className="ml-2 text-xs">Coming soon</span>
          </button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300">
                  {project.status}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
