export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-white">
      <section className="w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-900/70 px-8 py-16 text-center shadow-2xl shadow-indigo-950/30 sm:px-16 sm:py-20">
        <span className="mb-6 inline-flex rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-sm font-medium text-indigo-200">
          Plan. Build. Ship.
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to DevTask AI
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          An AI-powered developer project and task management app that helps you
          organize work, keep projects moving, and focus on building.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/projects/new"
            className="inline-flex min-w-40 items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Get Started
          </a>
          <a
            href="/projects"
            className="inline-flex min-w-40 items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            View Projects
          </a>
        </div>
      </section>
    </main>
  );
}
