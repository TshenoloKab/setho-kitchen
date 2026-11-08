# Setho Kitchen

A portfolio demonstration website for **Traxena Digital**, showcasing how a local Botswana catering business can establish an online presence.

## Tech stack

- React 19 + TypeScript
- Vite 8
- React Router 7

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Before launching for a real business

1. **Contact form delivery** — The contact form is a front-end demonstration only. No enquiries are delivered. Connect a backend (e.g. a serverless function, Formspree, EmailJS or a custom API) to receive submissions. Replace the `setTimeout` mock in `src/pages/Contact.tsx` with a real request.
2. **WhatsApp number** — Replace the placeholder `267XXXXXXXX` in `src/components/Footer.tsx` and `src/pages/Contact.tsx` (and the WhatsApp links in `src/pages/Menu.tsx` and `src/pages/Catering.tsx`) with the real business number.
3. **Contact details** — Replace placeholder phone, email and social media links in the footer and contact page.
4. **Imagery** — Swap illustrative photography for the business's own high-quality food photos.
5. **Menu & prices** — Menu items are illustrative; finalise real dishes and pricing.
6. **SEO** — Update meta tags, Open Graph image and favicon in `index.html`.