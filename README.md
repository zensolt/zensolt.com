# zensolt.com

Marketing site for [Zensolt](https://zensolt.com): a single-page experience built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Requirements

- Node.js 20+ (LTS recommended)
- npm 10+

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

The app is served at [http://localhost:3000](http://localhost:3000) by default.

## Production

```bash
npm run build
npm run start
```

## Type checking

```bash
npm run typecheck
```

## Environment variables

Create a `.env.local` file when you need the browser to call an API on another origin (for example a Nest app during local dev):

| Variable                   | Description                                                               |
| -------------------------- | ------------------------------------------------------------------------- |
| `NEXT_PUBLIC_API_BASE_URL` | API origin (e.g. `http://localhost:3001`). Omit for same-origin requests. |

The contact form posts to `POST {NEXT_PUBLIC_API_BASE_URL}/api/contact` (see `src/lib/api.ts` and `src/components/home.tsx`).

## Project layout

- `src/app/` — App Router: `layout.tsx`, `page.tsx`, `globals.css`
- `src/components/` — React components (main landing in `home.tsx`, layout in `layout/`, and only the shadcn `ui/*` files that are used on the page)
- `src/lib/` — Shared utilities
- `public/` — Static assets (images, `favicon.svg`, etc.) served from `/`

## Styling

Tailwind is wired through PostCSS (`postcss.config.mjs`) and `src/app/globals.css`. **Inter** and **Space Grotesk** are loaded with `next/font` in `src/app/layout.tsx` (no render-blocking font `@import` in CSS).

If your editor shows squiggles on Tailwind v4 at-rules such as `@theme` or `@plugin`, the repo includes `.vscode/settings.json` to relax built-in CSS linting for those directives.
