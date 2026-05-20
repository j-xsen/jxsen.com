# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start Vite dev server with HMR
pnpm build      # TypeScript compile + Vite production build → dist/
```

No test suite is configured. Use `pnpm build` as a type-checking proxy — it runs `tsc -b` before Vite.

## Stack

- **React 19** + **TypeScript** — strict mode, ESNext target
- **Vite 6** — build tool with manual chunk splitting (react-vendor, three-vendor, three-extras)
- **Three.js 0.174** + **React Three Fiber 9** + **Drei 10** — 3D canvas
- **React Three A11y** — screen reader + keyboard nav for 3D elements
- **Vercel** — deployment target; serverless functions under `api/`

## Architecture

### 3D Canvas (`src/App.tsx`)

The entire site is a single React Three Fiber `<Canvas>`. On mount it loads `helvetiker_regular.typeface.json` via Three.js `FontLoader`, then passes the font down as a prop (`FontHolder` type) to components that render 3D text.

Scene contents:
- `WordMesh` / `LayeredLetterMesh` / `LetterMesh` — animated 3D text with character-by-character Z-position and color transitions
- `models/` components — GLTF/GLB models loaded via Drei's `useGLTF`, each wrapped in `<A11y>` with role and description for accessibility
- `OrbitControls` for scene navigation
- `A11yAnnouncer` at root for screen reader announcements

### URL Shortener (`api/to/[slug].ts`)

A Vercel serverless function that reads `links.json` (bundled via `vercel.json` `includeFiles`) and issues a 302 redirect. The rewrite rule `/to/:slug` → `/api/to/:slug` lives in `vercel.json`.

To add a new short link: add the slug → URL mapping to `links.json`.

### Types (`src/types/`)

- `Word.ts` — props for `WordMesh`
- `Letter.ts` — props for `LetterMesh` / `LayeredLetterMesh`
- `FontHolder.ts` — the loaded Three.js font passed as a prop
- `Transformation.ts` — `{position, rotation, scale}` for 3D placement

## Key Conventions

- 3D model components live in `src/models/` and are auto-generated from GLTF via the `gltfjsx` tool — regenerate with the same tool if swapping models.
- All interactive 3D elements must be wrapped in `<A11y role="..." description="...">` for accessibility.
- Static assets (GLB models, fonts) go in `public/`; reference them with a root-relative path (e.g. `/models/foo.glb`).
- Package manager is **pnpm** — do not use npm or yarn.
