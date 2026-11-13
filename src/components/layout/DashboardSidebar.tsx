"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/dashboard/projects" },
];

const comingSoonNavigation = ["Tasks", "AI Assistant"];

export default function DashboardSidebar() {
  const pathname = usePathname();

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
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block rounded-lg px-3 py-2 text-sm transition hover:bg-white/10 hover:text-white ${
                  pathname === item.href
                    ? "bg-white/10 font-semibold text-white"
                    : "text-slate-300"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {comingSoonNavigation.map((label) => (
            <li key={label}>
              <span
                aria-disabled="true"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-500"
              >
                {label}
                <span className="rounded-full border border-white/10 px-1.5 py-0.5 text-[10px] uppercase tracking-wide">
                  Coming soon
                </span>
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
