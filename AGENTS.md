<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- Use the Next.js App Router file conventions for routes, pages, layouts, and route-specific UI.
- Keep components as Server Components by default. Add `"use client"` only when interaction, React client state, effects, or browser APIs require it.
- Use `next/link` for internal navigation and link only to implemented routes.
- Prefer reusable, clearly typed components and data structures when UI or behavior is shared.
- Use semantic HTML, accessible names, keyboard-operable controls, visible focus states, and responsive layouts.
- Follow the project's Tailwind CSS v4 setup and utility conventions.
- Before using version-sensitive Next.js APIs, inspect the relevant installed documentation under `node_modules/next/dist/docs/`.
- For changes that warrant verification, use the available lint, TypeScript, test, and build scripts; report any command that cannot be run or fails.
