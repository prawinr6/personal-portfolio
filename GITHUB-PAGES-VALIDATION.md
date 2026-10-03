# Portfolio validation — LinkedIn display correction

Updated and checked on 3 October 2026.

## Changes in this revision

- The email and LinkedIn links no longer participate in the opacity/translation scroll-reveal animation, so their visibility does not depend on an IntersectionObserver callback.
- The contact block uses explicit grid rows. The LinkedIn link has a non-wrapping label and a fixed-size, centered icon, with stable geometry during hover, keyboard focus and window resizing.
- The email label can wrap if space is unusually constrained; the copy control retains its size.
- The profile URL, page content, section order, fonts, portrait, logo, colours and mobile appearance remain unchanged.

The reported desktop instability was not reproduced in the available unmodified Chromium/WebKit baseline checks. This correction removes the contact links' animated-visibility dependency and makes their sizing explicit. The checks below verify the resulting source; they are not a diagnosis of an unobserved live deployment or a physical-device Safari test.

## Build

The production static build and TypeScript checks passed with `/prawin-portfolio` as a representative GitHub Pages repository prefix. GitHub Pages configuration, asset-path support, deployment workflow and dependency lockfile are unchanged from the previously validated conversion.

## Browser and responsive checks

Chromium and WebKit were each tested with normal motion enabled, in light and dark themes, at all six widths below. Viewport height was 900 pixels.

| Viewport width | Chromium light/dark | WebKit light/dark |
| --- | --- | --- |
| 320 px | Passed | Passed |
| 390 px | Passed | Passed |
| 768 px | Passed | Passed |
| 1001 px | Passed | Passed |
| 1440 px | Passed | Passed |
| 1920 px | Passed | Passed |

All 24 combinations passed checks for:

- Visibility of every scroll-reveal section after scrolling through the page.
- All five main sections being present.
- No horizontal page overflow or overlapping header elements.
- Loaded images and no failed resource responses or page JavaScript exceptions.
- The LinkedIn label staying on one line, with correct icon alignment.
- No LinkedIn bounding-box changes on hover or keyboard focus.
- Contact links remaining visible before scrolling and after contact-anchor navigation.

Both engines also passed an uninterrupted window-resize sweep across 30 widths from 320 to 2560 pixels, including both sides of the principal responsive breakpoints: 60 resize checks in total.

At desktop and phone widths, link-click checks confirmed that LinkedIn opens its configured profile URL in a new tab. That navigation was intercepted locally to verify the destination without relying on LinkedIn's sign-in or network response. Accordion expansion, theme switching and theme persistence after reload also passed. Chromium additionally passed the copy-email clipboard and back-to-top checks.

## Design preservation

Full-page Chromium screenshots at 1440 × 1000, 390 × 844 and 375 × 812, in light and dark themes, matched the original portfolio pixel for pixel: six exact comparisons. Reduced motion was used only for these deterministic screenshot comparisons. The separate responsive and interaction checks above used normal motion.

The original public assets, UI component files, brand component, theme provider and dependency lockfile are unchanged.

## Apply the update

Replace the earlier repository source files with the contents of this ZIP and push to `main`. The included workflow then builds and publishes the update. If necessary, run **Deploy portfolio to GitHub Pages** from the repository's Actions tab. See `START-HERE.md` for first-time setup.

This archive updates the source; it does not itself change a deployed website.
