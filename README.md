# Abdul Ahad — 3D React Portfolio

A responsive JavaScript developer portfolio built with React, Vite, Three.js and React Three Fiber.

## Features

- Interactive procedural Three.js hero (no external 3D model file required)
- Responsive mobile navigation
- Scroll reveal transitions
- Skills / stack section
- Portfolio concept cards
- Services section
- Direct WhatsApp and phone CTAs for +92 328 1935889
- Reduced-motion accessibility support
- Minimal runtime dependencies

## Run locally

Requires a current Node.js release supported by Vite 8.

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Customize

- Portfolio content: `src/data/portfolio.js`
- Phone number: constants at the top of `src/App.jsx`
- Colors/design tokens: `:root` in `src/styles.css`
- 3D scene: `src/components/Scene.jsx`

The included project cards are explicitly marked as concept builds so they do not make unverified client claims. Replace them with Abdul Ahad's real projects when available.
