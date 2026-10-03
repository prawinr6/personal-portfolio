# GitHub Pages conversion — validation

Checked on 3 October 2026 against the original uploaded source archive.

## Build and deployment configuration

- Production static export and TypeScript checks passed with an empty base path (domain root).
- Production static export and TypeScript checks passed with `/prawin-portfolio` as a representative repository prefix.
- The original pnpm lockfile passed a frozen-lockfile check and is unchanged.
- The GitHub Actions workflow was checked for its build/deploy dependency, Pages permissions, artifact directory and automatic base-path input.
- The export contains prerendered HTML, CSS, JavaScript, font and image assets, and `.nojekyll`; no application server is required.

## Visual comparison

The original Vinext production website was compared with both static builds using full-page Chromium screenshots. Reduced motion was enabled to make captures deterministic.

| Viewport | Light theme | Dark theme |
| --- | --- | --- |
| 1440 × 1000 desktop | Exact pixel match in both builds | Exact pixel match in both builds |
| 390 × 844 mobile | Exact pixel match in both builds | Exact pixel match in both builds |
| 375 × 812 mobile | Exact pixel match in both builds | Exact pixel match in both builds |

All 12 before/after comparisons had identical decoded pixel data. No horizontal overflow was detected at these widths.

## Behavior and assets

Both root and repository-prefix builds passed checks for image and font loading, favicon loading, zero page JavaScript errors or failed resource responses, theme switching and persistence after reload, section navigation, accordion expansion, copying the email address, and the back-to-top link.

The original public assets, UI components, logo component and theme provider are byte-for-byte unchanged. All CSS declarations remain unchanged; only the six font URL references were adjusted. Page changes are limited to prefixing the portrait and LinkedIn icon URLs. Layout changes are limited to prefixing favicon URLs.

These are local build and browser checks. The archive includes the GitHub Actions workflow; publishing requires uploading the source to your repository and enabling GitHub Actions as its Pages source, as described in START-HERE.md.
