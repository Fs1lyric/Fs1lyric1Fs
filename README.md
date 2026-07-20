# Nabhan Lyric Chowdhury — Personal Site

A fast, secure, static personal website. No build step, no frameworks — just
`index.html`, `styles.css`, and `script.js`. Hosted on **GitHub Pages**.

## Deploy to GitHub Pages

1. Push this repository to GitHub (branch: `main`).
2. In your repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes
   automatically on every push to `main`.
5. Your site goes live at `https://Fs1lyric.github.io/<repo-name>/`.

> If you name the repository `Fs1lyric.github.io`, the site is served at the
> root: `https://Fs1lyric.github.io/`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `styles.css` | Blue professional theme |
| `script.js`  | Footer year + on-click full-song player |
| `avatar.png` | Blue profile picture |
| `.nojekyll`  | Tells Pages to serve files as-is |
| `SECURITY.md`| Security policy and hardening notes |

## Editing the song

The player loads the official SoundCloud embed for "Stay" by Nextime. If the
track URL changes, update `TRACK_URL` at the top of `script.js`.
