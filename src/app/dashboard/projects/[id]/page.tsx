import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <section className="min-h-full px-6 py-10 text-white sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/dashboard/projects"
          className="text-sm font-medium text-indigo-300 transition hover:text-indigo-200 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400"
        >
          ← Back to Projects
        </Link>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
            <p className="mt-3 text-slate-400">{project.description}</p>
          </div>
          <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300">
            {project.status}
          </span>
        </div>

        <section
          aria-labelledby="project-overview-heading"
          className="mt-8 rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/10"
        >
          <h2 id="project-overview-heading" className="text-xl font-semibold">
            Project overview
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {project.description}
          </p>
          <dl className="mt-6 border-t border-white/10 pt-5">
            <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Status
            </dt>
            <dd className="mt-1 text-sm text-slate-200">{project.status}</dd>
          </dl>
        </section>
      </div>
    </section>
  );
}
