# charradehugo.com

Personal portfolio built with [Astro](https://astro.build), deployed at [charradehugo.com](https://www.charradehugo.com). Available in English and French.

## Features

- **Blog** — MDX articles with cover images, categories, reading time, and related article links
- **Projects** — MDX project pages with cover images, categories, and external links
- **i18n** — English (default) and French, via Astro's built-in i18n routing
- **RSS feed** — auto-generated at `/rss.xml`
- **Sitemap** — auto-generated via `@astrojs/sitemap`

## Stack

- **Astro 5** — static site generator
- **Tailwind CSS 4** — styling
- **MDX** — blog & project content
- **@paper-design/shaders** — shader-based visual effects
- **Vercel Analytics** — analytics

## Project Structure

```
src/
├── content/
│   ├── blog/        # MDX articles
│   └── projects/    # MDX project pages
├── pages/
│   ├── index.astro
│   ├── blog/
│   ├── projects/
│   ├── about.astro
│   ├── contact.astro
│   └── fr/          # French routes
└── components/
```

## Commands

| Command        | Action                               |
| :------------- | :----------------------------------- |
| `pnpm install` | Install dependencies                 |
| `pnpm dev`     | Start dev server at `localhost:4321` |
| `pnpm build`   | Build for production to `./dist/`    |
| `pnpm preview` | Preview production build locally     |
| `pnpm check`   | Type-check with `astro check`        |
| `pnpm lint`    | Lint with ESLint                     |
| `pnpm format`  | Format with Prettier                 |
