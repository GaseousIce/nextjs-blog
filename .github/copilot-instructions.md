# Copilot Instructions for Next.js Blog

## Project Overview

This is a Next.js starter blog application following the [Learn Next.js](https://nextjs.org/learn) tutorial. The project demonstrates core Next.js concepts including page-based routing, layouts, and styling patterns. It's a learning-focused template rather than a fully-featured blog system.

## Build, Test, Lint

**Install dependencies:**
```bash
pnpm install
```

**Start development server:**
```bash
pnpm dev
```
The app runs at `http://localhost:3000`. Pages hot-reload on save.

**Build for production:**
```bash
pnpm build
```

**Start production server:**
```bash
pnpm start
```

**Tests and linting:** No test, lint, or format scripts are configured, so there is no single-test command.

## Architecture

### Pages (File-based Routing)
- `/pages` defines routes and uses Next.js `Head` and `Link` for metadata and navigation
- `_app.js` is the top-level wrapper that imports global styles and renders `Component`
- `index.js` is the home page; it uses both CSS Modules and inline `<style jsx>` blocks
- `posts/first-post.js` shows a nested route and uses the shared `Layout`

### Components
- `/components/layout.js` provides a reusable page wrapper with `layout.module.css`

### Styling
- Global styles: `/styles/global.css` - Applied through `_app.js`
- CSS Modules: `*.module.css` files (e.g., `Home.module.css`, `layout.module.css`) for component scoping
- Inline JSX `<style jsx>` - Used in `pages/index.js` for scoped styles (Next.js specific feature)

## Key Conventions

1. **Page Structure**: Pages export a default React component and use Next.js `Head` from `"next/head"` for metadata. Navigation uses Next.js `Link` component instead of `<a>` tags.

2. **Routing**: Routes map directly to file structure in `/pages`. Nested directories create nested routes (e.g., `/pages/posts/first-post.js` → `/posts/first-post`).

3. **CSS Styling**: Use CSS Modules (`.module.css`) for scoped styles; import as `import styles from "path.module.css"` and apply via `className={styles.className}`. Global styles live in `styles/global.css` and are pulled in by `_app.js`.

4. **pnpm**: The project uses pnpm (see `pnpm-workspace.yaml` with `allowBuilds: sharp: false`). Use pnpm for all package operations, not npm or yarn.

5. **Node Version**: Requires Node.js >= 18 (see `package.json` engines field).

6. **Configuration**: Next.js config is in `next.config.ts` and sets `allowedDevOrigins` for dev-time origin restrictions.

7. **Latest Dependencies**: Project uses latest versions of `next`, `react`, and `react-dom` with no version pinning. Stability is managed at the pnpm-lock level.
