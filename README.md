# Intelligence Solutions — React website

A responsive dark-themed product development agency website built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Before publishing

1. In `src/main.jsx`, replace `hello@intelligencesolutions.dev` with your actual business email in both the mailto link and form submit handler.
2. The contact form currently opens the visitor's email app with the inquiry prefilled. For direct website submissions, connect a form service or backend endpoint.
3. Replace the portfolio placeholder descriptions with accurate project details, your specific role, approved logos/screenshots, and verifiable outcomes.
4. Confirm permission to publicly display partner/client names and marks.
5. Add your real social links, domain, privacy policy, and any required legal pages.

## Structure

- `src/main.jsx` — all page sections, responsive navigation, portfolio content, and inquiry form
- `src/styles.css` — visual system and responsive styles (Tailwind directives included)
- `index.html` — page metadata and font setup
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js` — build configuration
