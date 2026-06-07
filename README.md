# Next.js Blog

A personal blog application built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), leveraging a file-based routing system and Markdown for content management.

## Project Overview

This project is a high-performance, SEO-friendly blog that uses static site generation (SSG) for fast loading times and a great user experience.

## Core Technologies

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Library:** [React](https://react.dev/)
- **Styling:** CSS Modules
- **Content:** Markdown parsed with `gray-matter`, `remark`, and `remark-html`
- **Date Formatting:** `date-fns`

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm

### Installation

```bash
pnpm install
```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production

Build the application for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Project Structure

- `pages/`: Application routes and page components.
  - `index.js`: The home page listing all blog posts.
  - `posts/[id].js`: Dynamic route for individual blog post pages.
- `components/`: Reusable React components (Layout, Date, etc.).
- `lib/`: Utility functions for data fetching (e.g., `posts.js` for Markdown parsing).
- `posts/`: Directory containing `.md` files for blog posts.
- `styles/`: Global styles and CSS modules.
- `public/`: Static assets (images, icons).

## Adding New Posts

To add a new blog post:

1. Create a new `.md` file in the `posts/` directory.
2. Add the required front matter at the top of the file:

```markdown
---
title: 'My New Post'
date: '2023-10-27'
---

Post content goes here...
```

## Conventions

- **Components:** Functional components are preferred.
- **Styling:** Use CSS Modules for component-specific styles and `styles/utils.module.css` for shared utilities.
- **Data Fetching:** Use `getStaticProps` and `getStaticPaths` for pre-rendering blog content.
