# Security Policy

This is a static personal website hosted on GitHub Pages. It contains no
server-side code, no databases, no forms, and collects no user data.

## Hardening in place

- **Content Security Policy (CSP)** restricts scripts, styles, images, and
  embedded frames to a small allow-list of trusted origins.
- **No inline/eval JavaScript** beyond a single local `script.js`.
- **No raw copyrighted media** is hosted here. The song plays through an
  official streaming embed, so there is nothing that can trigger a DMCA
  takedown of the site.
- **All external links** use `rel="noopener noreferrer"` to prevent
  reverse-tabnabbing.
- `X-Content-Type-Options: nosniff` and a strict referrer policy are set.

## Reporting a vulnerability

If you find a security issue, please open a private security advisory on the
GitHub repository rather than a public issue.
