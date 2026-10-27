# Resume

A standalone, zoneless Angular resume with Nx task orchestration, a responsive editorial layout and print styles. Resume content lives in `apps/resume/src/app/data/resume.data.ts`; its interfaces live beside it. Static content stays static. Signal inputs define the skill-list component API; a signal handles avatar failure. There are no active NgModules, HTTP avatar calls, Material, Flex Layout, Day.js, Sass or icon-font dependencies.

## Run

```sh
nvm install
nvm use
npm install
npm start
```

Use Node 24.15 or newer within Node 24. `npm test` checks content invariants. `npm run build` performs a strict Angular production compilation. `npm run deploy` builds with the GitHub Pages `/resume/` base path. The output is `dist/resume/browser`.

## Structure

- `data/`: readonly typed resume content.
- `components/skill-list.component.ts`: reusable presentation component with signal input.
- `app.component.ts` and `.html`: semantic page composition and print action.
- `styles.css`: shared design tokens, responsive layout and print rules.

The original `libs/` files and unused Angular 12 source/config files remain only as historical reference; the new entry point imports none of them. `.nxignore` excludes the old libraries and end-to-end project. The root Angular workspace file no longer defines the legacy targets; the active target configuration is `apps/resume/project.json`.

## Verification and lockfile

This rebuild was prepared through GitHub file APIs, not a local Node/browser runtime. Installation, compiler success, visual rendering, keyboard navigation and print pagination are NOT yet verified. CI runs installation, content checks and a production build. It uploads the regenerated package-lock.json as an artifact. Review and commit that generated lockfile, then replace `npm install` with `npm ci` in CI. The inherited Angular 12 lockfile is not the new dependency lock. Do not merge until CI passes and desktop/mobile/print layouts have been checked.

All original employment details, dates, skill values and interests are retained. The original summary still says `~7 years` and the original job still says `Present`; these are preserved source claims, not newly verified current employment facts.

GitHub Pages must be configured to deploy using GitHub Actions. Rebuild-branch pushes build only; production deployment happens only from main.
