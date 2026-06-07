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

### Blog Posts (Static Generation)

- Blog posts are stored as markdown files in `/posts` directory (e.g., `pre-rendering.md`, `ssg-ssr.md`)
- Each post has YAML frontmatter metadata (title, date) followed by markdown content:
    ```markdown
    ---
    title: "Post Title"
    date: "2026-01-01"
    ---

    Post content here...
    ```
- `/lib/posts.js` provides `getSortedPostsData()` to read all markdown files, parse frontmatter, and sort by date (newest first)
- Dynamic routes are set up using `pages/posts/[id].js` with `getStaticProps()` and `getStaticPaths()` for Static Generation

### Components

- `/components/layout.js` provides a reusable page wrapper with `layout.module.css`

### Styling

- Global styles: `/styles/global.css` - Applied through `_app.js`
- CSS Modules: `*.module.css` files (e.g., `Home.module.css`, `layout.module.css`) for component scoping
- Inline JSX `<style jsx>` - Used in `pages/index.js` for scoped styles (Next.js specific feature)

## Key Conventions

1. **Page Structure**: Pages export a default React component and use Next.js `Head` from `"next/head"` for metadata. Navigation uses Next.js `Link` component instead of `<a>` tags.

2. **Routing**: Routes map directly to file structure in `/pages`. Nested directories create nested routes (e.g., `/pages/posts/[id].js` → `/posts/:id`). Dynamic segments use square brackets.

3. **Blog Posts**: Add new posts by creating `.md` files in `/posts` with YAML frontmatter (title, date). Posts are automatically discovered by `getSortedPostsData()` in `/lib/posts.js`. Date format must be `YYYY-MM-DD` for correct sorting.

4. **CSS Styling**: Use CSS Modules (`.module.css`) for scoped styles; import as `import styles from "path.module.css"` and apply via `className={styles.className}`. Global styles live in `styles/global.css` and are pulled in by `_app.js`.

5. **pnpm**: The project uses pnpm (see `pnpm-workspace.yaml` with `allowBuilds: sharp: false`). Use pnpm for all package operations, not npm or yarn.

6. **Node Version**: Requires Node.js >= 18 (see `package.json` engines field).

7. **Configuration**: Next.js config is in `next.config.ts` and sets `allowedDevOrigins` for dev-time origin restrictions.

8. **Latest Dependencies**: Project uses latest versions of `next`, `react`, and `react-dom` with no version pinning. Stability is managed at the pnpm-lock level.
