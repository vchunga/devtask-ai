export type Project = {
  id: string;
  name: string;
  description: string;
  status: "In Progress" | "Planning";
};

export const projects: Project[] = [
  {
    id: "devtask-ai",
    name: "DevTask AI",
    description: "AI-powered developer task management",
    status: "In Progress",
  },
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description: "Personal developer portfolio",
    status: "Planning",
  },
  {
    id: "learning-platform",
    name: "Learning Platform",
    description: "Interactive coding lessons",
    status: "In Progress",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
