import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <section className="min-h-full px-6 py-10 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
