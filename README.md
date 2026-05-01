# zensolt.com

Single-page marketing site for **Zensolt Consultants** (web, mobile, cloud, and AI/ML technology services).

## Stack

|           |                                                                         |
| --------- | ----------------------------------------------------------------------- |
| Framework | **Next.js 16** (App Router; Turbopack in dev)                           |
| UI        | **React 19**, **TypeScript**                                            |
| Styling   | **Custom CSS** in `app/globals.css` (no Tailwind)                       |
| Fonts     | **Geist** and **Geist Mono** via `next/font/google` in `app/layout.tsx` |

## Commands

```bash
npm run dev    # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Project layout

| Path                   | Role                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `app/`                 | `layout.tsx`, `page.tsx`, `globals.css`, SEO (`sitemap.ts`, `robots.ts`), OG/Twitter images |
| `components/layout/`   | `Header`, `Footer`                                                                          |
| `components/sections/` | Hero, TrustStrip, About, Services, AIML, sections, etc.                                     |
| `components/ui/`       | `Icon`, `ZenLogo`, `CaseModal`                                                              |
| `lib/data.ts`          | Services, tech, industries, process, case studies, site contact                             |
| `lib/site.ts`          | `SITE_URL` (see env below)                                                                  |
| `lib/og-image.tsx`     | Shared 1200×630 art for Open Graph / Twitter                                                |

Imports use the `@/*` path alias (`tsconfig.json`).

## Configuration

- **`NEXT_PUBLIC_SITE_URL`** — Canonical site URL for metadata, sitemap, and robots. Defaults to `https://zensolt.com` if unset.
- Contact form: client-side validation and success UI; wire an API or form service when you want submissions delivered.

Analytics: `@vercel/analytics` in the root layout.

## Contributing / agents

For structure, anchors, conventions, and design tokens in detail, see **[CLAUDE.md](./CLAUDE.md)** (maintained as the repo’s operational source of truth).

## Deploy

Deploy on [Vercel](https://vercel.com) or any host that supports Next.js 16. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
