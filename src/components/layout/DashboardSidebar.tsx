import Link from "next/link";

const navigation = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/dashboard/projects" },
  { label: "My Tasks", href: "/tasks" },
  { label: "AI Assistant", href: "/assistant" },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-full border-b border-white/10 bg-slate-900/80 px-5 py-5 text-white md:min-h-screen md:w-64 md:border-b-0 md:border-r md:px-6">
      <Link href="/dashboard" className="text-lg font-semibold tracking-tight">
        DevTask AI
      </Link>
      <nav aria-label="Main navigation" className="mt-5 md:mt-10">
        <ul className="flex flex-wrap gap-2 md:flex-col">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
