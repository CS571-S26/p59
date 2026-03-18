---
description: "Workspace instructions for the personal React website (client-side only) using Vite, React, React Router, and React Bootstrap."
---

# Workspace Instructions: Personal React Website

This repository is a **personal website** built as a **client-side React SPA** (no backend) using:

- **React 19** (function components + hooks)
- **Vite** (build/dev tooling)
- **React Router DOM v7** (routing)
- **React Bootstrap + Bootstrap 5** (UI components & styling)

The main source code lives in `src/`.

---

## 🧱 Key Commands (run from repo root)

- `npm install` – install dependencies
- `npm run dev` – start development server (Vite)
- `npm run build` – build production assets
- `npm run preview` – serve built production output locally
- `npm run lint` – run ESLint on the repo

---

## 🗂 Project Structure (high level)

- `src/` – React app source files
  - `main.jsx` – app entrypoint
  - `App.jsx` – root component (routing setup)
  - `App.css`, `index.css` – global / app-wide styling
  - `assets/` – static assets (images, icons, etc.)
- `public/` – static assets copied as-is into build output
- `index.html` – Vite entry HTML (no server-side rendering)

---

## 🔧 Conventions & Notes

### React / Components

- Prefer **function components** + **hooks**.
- Keep components small and focused.
- Use **React Router v7** patterns (e.g. `<Routes>`, `<Route>`, `useNavigate`, `useParams`).

### Styling

- Uses **Bootstrap 5** via `react-bootstrap`.
- Component-specific styles can live in `App.css` or module/CSS files as needed.

### Routing

- This is a **client-side-only** SPA. All routing is handled in React.
- If you add routes, ensure navigation works via `react-router-dom` and that paths are consistent with the app layout.

---

## ✅ How to Ask The Agent (Sample Prompts)

- "Add a new React page under `/src` with a route `/about` that uses Bootstrap cards."
- "Fix the ESLint errors in `src/App.jsx` and ensure hooks follow rules-of-hooks."
- "Update the homepage to use a React Bootstrap Navbar and make it responsive."
- "Add a new link in the navigation bar that routes to a new `Projects` page."

---

## ⚠️ Known Constraints

- No server-side code / API layer exists in this repo.
- Builds depend on Vite; do not modify Vite config without understanding `vite.config.js`.
- The app is intended as a personal portfolio/site—keep changes aligned with that purpose.
