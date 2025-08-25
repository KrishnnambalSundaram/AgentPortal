Contributor Guidelines – AI Agents Portal

Welcome to the AI Agents Portal project! 🎉

To ensure smooth collaboration and keep the existing version intact, please follow these guidelines when contributing code.


🔹 Branching Strategy

main branch → Always stable & production-ready.


Feature branches → All new development must be done in separate branches.


Naming convention:


feature/<short-description> → for new features (e.g. feature/portal-v2, feature/dark-theme)


bugfix/<short-description> → for bug fixes (e.g. bugfix/login-button)

🔹 Workflow

Clone the repository

git clone https://github.com/KrishnnambalSundaram/AgentPortal.git
cd AgentPortal


Checkout latest main

- git checkout main
- git pull origin main


Create a new branch

- git checkout -b feature/portal-v2

Make your changes
Update code, run local tests, and verify builds.
Commit your changes

- git add .
- git commit -m "Description of changes made"
- Push your branch
- git push origin feature/portal-v2
Create a Pull Request (PR)
Go to GitHub → Open a PR from your branch → main.
Add a short description of the changes.
Wait for review before merge.

🔹 Versioning

Each stable release will be tagged (e.g., v1.0.0, v2.0.0).

Always make sure your branch is based on the latest main before creating a PR.

git checkout main
git pull origin main
git checkout feature/portal-v2
git rebase main

🔹 Best Practices

Keep PRs small and focused.
Write clear commit messages.
Do not push directly to main.
Always run npm run build locally before pushing to ensure no build breaks.

👉 This way, your current portal (v1) stays intact in main, and all new work (v2, features, fixes) happens in isolated branches until approved.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.