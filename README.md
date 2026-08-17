# Abdul Ahad — Vite React 3D Portfolio

A responsive JavaScript-stack developer portfolio built with **Vite + React + Three.js + React Three Fiber**.

## Stack

- Vite 8
- React 19
- Three.js
- @react-three/fiber
- @react-three/drei
- Plain responsive CSS

## Features

- Interactive procedural 3D hero scene
- No external `.glb` model dependency
- Futuristic developer-lab visual style
- Responsive desktop, tablet and mobile layout
- Mobile navigation
- Scroll reveal transitions
- JavaScript-stack skills section
- Project showcase cards
- Services section
- WhatsApp and click-to-call actions for +92 328 1935889
- Reduced-motion accessibility support
- Content separated into reusable data/components

## Start locally

Use a Node.js version supported by Vite 8, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production

```bash
npm run build
npm run preview
```

The production files will be generated in `dist/`.

## Project structure

```text
abdul-ahad-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Icons.jsx
    │   └── Scene.jsx
    └── data/
        └── portfolio.js
```

## Customize

- Personal/project content: `src/data/portfolio.js`
- Phone/WhatsApp details: `src/App.jsx`
- Colors/design tokens: `src/styles.css`
- 3D scene and animations: `src/components/Scene.jsx`

Portfolio project cards are marked as concepts until Abdul Ahad's actual projects and links are supplied.
