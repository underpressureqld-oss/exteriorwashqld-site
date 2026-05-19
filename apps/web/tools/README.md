Generate responsive hero and before/after images

1. Install dependencies (in `apps/web`):

```bash
npm install sharp
```

2. Place source images into:
- `public/assets/src/hero/` (filenames: `{serviceId}-{suburbId}.svg|.png|.jpg`)
- `public/assets/src/before-after/` (filenames: `{serviceId}-{suburbId}-before.svg` and `-after.svg`)

3. Run the generator from the repo root or `apps/web`:

```bash
node apps/web/tools/generate-responsive-images.cjs
```

Output will be written to:
- `public/assets/hero/` — generated `{name}-{width}.jpg` and `.webp`, plus default `{name}.jpg/.webp`
- `public/assets/before-after/` — generated variants

Notes:
- This script requires `sharp` (native module). On Windows you may need build tools.
- The script is intentionally simple — adapt sizes or quality to taste.
