# Prawin Raj S S — Portfolio for GitHub Pages

A static export of the existing portfolio, with its desktop and mobile appearance preserved. This edition uses Next.js static export with the existing React, TypeScript, Tailwind and UI component versions. It requires no server, database, account login or API key at runtime.

Start with [START-HERE.md](START-HERE.md).

## Deploy using the included workflow

Upload or push the **contents** of `prawin-raj-portfolio/` to a GitHub repository's root on the `main` branch. Include `.github/workflows/deploy-pages.yml`; folders beginning with a dot may be hidden in your file manager. On macOS, press Command–Shift–Period to show hidden files.

Select **Settings → Pages → Source → GitHub Actions**. Then run **Actions → Deploy portfolio to GitHub Pages → Run workflow**. If the first automatic run happened before Pages was enabled, rerun it after changing that setting. Subsequent pushes to `main` build and deploy automatically. If your default branch has a different name, update `branches: [main]` in the workflow.

The workflow uses Node.js 24 and pnpm 11.25.0, installs the exact locked dependencies, runs the static production build, and uploads only `out/`. `actions/configure-pages` supplies the actual deployment prefix before the build, so no username, repository name or domain is hardcoded.

| Hosting address | Build prefix |
| --- | --- |
| `https://USERNAME.github.io/REPOSITORY/` | `/REPOSITORY` |
| `https://USERNAME.github.io/` | Empty |
| A custom domain configured for this repository | Supplied automatically from Pages settings |

GitHub Pages serves the resulting HTML, CSS, JavaScript, local fonts and images. Do not upload the source ZIP itself as the website, and do not select a branch-based source when using this workflow.

## Custom domain

Configure your domain and DNS in **Settings → Pages → Custom domain**, following [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). After adding, removing or changing the domain, rerun this workflow so the asset prefix matches the new hosting URL. Enable **Enforce HTTPS** when available.

The Actions workflow reads the domain configuration directly; no domain is preselected in this source archive. GitHub's Actions deployment does not require a `CNAME` file.

## Local development and preview

Use Node.js 24 (minimum supported by the existing package definition: 22.13) and pnpm 11.25.0. If pnpm is already installed:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://localhost:5173. To avoid a global pnpm installation or a `corepack enable` permission error, use `npx --yes pnpm@11.25.0` in place of `pnpm` in every command below.

For a domain-root build:

```sh
pnpm build
pnpm start
```

The generated website is in `out/`. The preview is normally http://localhost:4173/.

For a repository URL, simulate its prefix locally (macOS/Linux):

```sh
NEXT_PUBLIC_BASE_PATH=/my-portfolio pnpm build
pnpm start
```

PowerShell equivalent:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/my-portfolio'
pnpm build
pnpm start
```

The preview automatically detects the prefix from the exported HTML and prints http://localhost:4173/my-portfolio/. Use the actual repository name when preparing a build for that repository. For a later root build, clear `NEXT_PUBLIC_BASE_PATH` first. The GitHub workflow sets it automatically, so this manual step is only for local builds.

`pnpm start` serves the static export for local review; it does not publish. GitHub Pages does not run `pnpm start` or a Next.js server. Open the preview URL rather than double-clicking `out/index.html`.

## Files changed for Pages support

- `next.config.ts`: enables static export, directory-style URLs, and a configurable build prefix.
- `package.json`: makes development and build commands use Next.js; production preview serves static files.
- `.github/workflows/deploy-pages.yml`: builds and deploys the static output.
- `lib/asset-path.ts`, `app/page.tsx` and `app/layout.tsx`: prefix the existing portrait, LinkedIn icon and favicon URLs for repository hosting. The contact links also have explicit text-label classes and are always visible instead of participating in the scroll-reveal animation.
- `app/globals.css`: font URL references support static hosting. The contact block uses explicit grid rows, a non-wrapping LinkedIn label and a fixed-size icon; its spacing, typography and responsive sizes are preserved.
- `public/.nojekyll`: preserves underscore-prefixed static assets when the output is used with a file-based host.
- `scripts/preview.mjs`: previews the built website at its actual base path.
- `tsconfig.json`: scopes Next.js type checking to application sources.
- `pnpm-workspace.yaml` and `.gitignore`: keep the dependency store and build caches local and out of the repository.

UI components, font binaries, portrait, logos, text, section order, alignment, colours and breakpoint rules have not been redesigned. The contact links stay visible during scrolling and retain stable geometry during hover and focus. Dependency versions and the original dependency lockfile are preserved.

The original Vinext/Cloudflare build scripts and scaffolding remain in the archive for reference. They are not used by the new `dev`, `build`, `start` or deployment commands. The Pages deployment artifact contains only `out/`, not the old worker output or source scaffolding.

## Main portfolio source

- `app/page.tsx`: page content, navigation, accordion, copy-email and theme interactions.
- `app/globals.css`: responsive layout, typography and colours.
- `app/layout.tsx`: metadata and document layout.
- `app/providers.tsx`: persistent light/dark theme support.
- `components/brand-mark.tsx`: the PR logo component.
- `components/ui/`: original UI components.
- `public/`: portrait, logos, icons and local fonts.
- `CONTENT_SOURCE.md`: original content attribution and revision notes.

Dependencies, caches and generated output are intentionally excluded from the ZIP. GitHub Actions recreates the production output from the source and lockfile.

## Documentation

- [Next.js static export](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js basePath](https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath)
- [GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

Converted for GitHub Pages: 3 October 2026.

Latest correction: 3 October 2026 — stabilized the desktop LinkedIn contact link and checked mobile/desktop rendering with normal motion enabled. See `GITHUB-PAGES-VALIDATION.md` for the completed checks.
