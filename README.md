Wordle Clone (Vite + React)

A lightweight Wordle-style game built with React + Vite.
I created this code with a goal of making reusable components, and separating game logic from UI.

used Vite as recommended by React team, and it is really fast and easy to set up.
followed walkthrough on React website.

to run:

npm install
npm run dev

Deploying to GitHub Pages

- This project uses `.github/workflows/deploy.yml` to deploy on every push to `main`.
- `vite.config.js` uses `VITE_BASE_PATH` (set in CI) so assets resolve correctly on Pages.
- In GitHub repo settings, set **Pages** source to **GitHub Actions**.
- Site URL format is typically: `https://<your-user>.github.io/wordle-like-2/`.

Key Design Choices
No coupling between UI and logic- easy to test & reuse
Small, focused components-- scalable as features grow
Feature-based folders--- keeps related components together
Created a "Preview image" component---- improves perceived loading performance for user