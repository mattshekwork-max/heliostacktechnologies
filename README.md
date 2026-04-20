# HelioStack Technologies

Parent company website for HelioStack Technologies LLC.

Live site:

`https://heliostacktechnologies.com/`

## Current Contents

This repository now contains editable Next.js source for the public site:

- `app/page.tsx`
- `app/layout.tsx`
- `app/globals.css`
- `public/` site icons

The previous static snapshot was replaced with source code so future edits can be made cleanly in Git.

## Local Preview

From this folder:

```bash
npm install
npm run dev
```

Then open:

`http://localhost:3000`

## Production Build

```bash
npm run build
```

## Editing Note

The live Vercel project is `v0-heliostackllc-discussion`, which is linked locally through Vercel CLI.
The `.vercel` folder is intentionally ignored and should not be committed.
