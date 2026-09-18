# Goutam Khandelwal — Developer Portfolio

Personal portfolio website for **Goutam Khandelwal**, B.Tech Mathematics & Computing student at NIT Kurukshetra.

## Tech Stack

| Layer       | Technology                         |
|-------------|------------------------------------|
| Framework   | React 19 + TypeScript              |
| Build Tool  | Vite 8                             |
| Styling     | Tailwind CSS v4                    |
| Linting     | ESLint 10 + typescript-eslint      |
| Fonts       | Inter, JetBrains Mono (Google Fonts)|

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 9

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

The site will be available at **http://localhost:5173**.

### Lint

```bash
npm run lint
```

### Production build

```bash
npm run build
```

Built files will be output to the `dist/` directory.

### Preview production build locally

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static assets (images, SVGs, fonts)
├── components/      # Reusable UI components (Navbar, Footer, Button, …)
├── data/            # Portfolio content — update THIS file to change content
│   └── portfolio.ts
├── hooks/           # Custom React hooks (useTheme, useScrollSpy, …)
├── lib/             # Utility functions
│   └── utils.ts
├── sections/        # Page sections (Hero, About, Skills, Projects, Contact)
├── types/           # Shared TypeScript interfaces and types
│   └── index.ts
├── index.css        # Global styles + Tailwind v4 import + design tokens
├── main.tsx         # App entry point
└── App.tsx          # Root component
```

## Content Updates

All portfolio content (name, bio, skills, projects, social links, …) lives in
[`src/data/portfolio.ts`](./src/data/portfolio.ts). Update that file to change
copy without touching any UI components.

## Deployment

Build the project with `npm run build` and deploy the `dist/` folder to any
static hosting platform:

- **Vercel**: `vercel --prod` (auto-detected as Vite project)
- **Netlify**: Drag and drop `dist/` or connect your Git repo
- **GitHub Pages**: Use the `gh-pages` npm package or GitHub Actions
- **Cloudflare Pages**: Connect your repo in the Cloudflare dashboard

## License

All rights reserved © Goutam Khandelwal.
