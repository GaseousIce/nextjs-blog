# Project Overview
This is a personal blog application built using [Next.js](https://nextjs.org/) and [React](https://react.dev/). It leverages a file-based routing system and uses Markdown for blog posts.

### Core Technologies
- **Framework:** Next.js (latest)
- **UI Library:** React (latest)
- **Styling:** CSS Modules (e.g., `layout.module.css`, `Home.module.css`)
- **Content:** Markdown files parsed with `gray-matter`
- **Environment:** Node.js (>=18)

### Project Architecture
- `pages/`: Contains the application's routes.
  - `index.js`: The home page, which fetches and displays blog post metadata using `getStaticProps`.
  - `posts/`: Subdirectory for post-related pages.
- `components/`: Reusable React components.
  - `layout.js`: The main layout wrapper for pages.
- `lib/`: Utility functions and data fetching logic.
  - `posts.js`: Logic for reading and parsing Markdown files from the `posts/` directory.
- `posts/`: Directory containing Markdown files for blog posts (e.g., `pre-rendering.md`, `ssg-ssr.md`).
- `styles/`: Global and utility CSS files.
- `public/`: Static assets like images and favicons.

---

# Building and Running
The project uses `npm` (or `pnpm` as evidenced by `pnpm-lock.yaml`) for package management.

### Key Commands
- **Development:** `npm run dev` (Runs the development server at `http://localhost:3000`)
- **Build:** `npm run build` (Builds the application for production)
- **Start:** `npm run start` (Starts the production server after building)

---

# Development Conventions

### Coding Style
- **React Components:** Functional components are preferred.
- **Styling:** Use CSS Modules for component-specific styles and `styles/utils.module.css` for shared utility classes.
- **Data Fetching:** Prefer `getStaticProps` for pre-rendering pages with blog content.

### File Naming
- Components and styles follow `kebab-case` or standard naming conventions (e.g., `layout.module.css`).

### Blog Posts
- New blog posts should be added as `.md` files to the `posts/` directory.
- Each Markdown file must include front matter (YAML) for `title` and `date`.
