# AI4S2 Website

Static homepage for the Center for AI for Social Science.

## Deploying to both GitHub Pages URLs

This site uses only relative asset paths, so the same code can be hosted at both:

- `https://ai4s2.github.io/`
- `https://freedomintelligence.github.io/ai4s2.github.io/`

Recommended setup:

1. Create `ai4s2/ai4s2.github.io` for the organization homepage.
2. Create `FreedomIntelligence/ai4s2.github.io` for the project page.
3. Push this same repository content to both remotes, or mirror one remote to the other with a GitHub Action/personal access token.

For GitHub Pages, serve from the repository root on the `main` branch.

## Local Preview

Open `index.html` directly, or run:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000/`.
