# Prawin Raj S S — GitHub Pages edition

The portfolio now builds into a static `out/` folder for GitHub Pages. The page content, responsive layout, colours, light/dark themes, typography, portrait and logo are preserved.

## Publish with GitHub Actions

1. Extract this ZIP and open `prawin-raj-portfolio`.
2. Put **the contents of this folder** in the root of a GitHub repository on the `main` branch. Include the hidden `.github` folder. `package.json` and `.github` must be at the repository root, not inside another `prawin-raj-portfolio` folder.
3. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**. Later pushes to `main` deploy automatically.
5. When the build and deploy jobs finish, open the website URL shown by the deployment or in **Settings → Pages**.

GitHub installs dependencies and builds the site for you. You do not need to install pnpm on your computer to use this workflow.

The workflow automatically handles `https://USERNAME.github.io/REPOSITORY/`, a `USERNAME.github.io` repository, and a custom domain configured in GitHub Pages. After adding or changing a custom domain, run the workflow again so all asset paths are rebuilt for the new URL.

## Run locally (optional)

Install Node.js 24, open a terminal in this folder, and run:

```sh
npx --yes pnpm@11.25.0 install --frozen-lockfile
npx --yes pnpm@11.25.0 dev
```

Open http://localhost:5173. Using `npx` avoids a global pnpm install and the `/usr/local/bin` permission error from `corepack enable`.

Build and preview the static website:

```sh
npx --yes pnpm@11.25.0 build
npx --yes pnpm@11.25.0 start
```

Open the preview URL printed in the terminal. See `README.md` for repository-subpath previews, custom domains, and the exact changes made.
