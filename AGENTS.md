# AGENTS.md

## Purpose
This file documents how agents should work in this repo. Keep it short and update it when workflows change.

## Project overview
- Static/Vite-based site with HTML/CSS/JS assets.
- Entry points live in `index.html` and `public/`.

## Preferred workflow
- Inspect existing patterns before adding new ones.
- Keep changes small and scoped; avoid unrelated refactors.
- Prefer editing existing files over adding new dependencies.

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

## Code style
- Match existing style and conventions in the edited file.
- Use descriptive names and avoid clever one-liners.
- Add short comments only for non-obvious logic.

## Testing and validation
- Run the minimal command that validates your change.
- If you cannot run tests/builds, state that clearly in your reply.

## Assets and content
- Keep assets in `public/` or existing asset folders.
- Avoid large binary additions unless requested.

## Output expectations
- Summarize changes and list touched files.
- Provide next-step suggestions (tests/build) when relevant.
