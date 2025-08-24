# Habee Landing Page

Static landing page for Habee built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Development

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

## Build

Generate the static site:

```bash
npm run build
```

The exported site will be available in the `out` directory.

## Deploying on Render

This repository includes a `render.yaml` blueprint for deployment. To deploy:

1. Push this repository to your Git provider.
2. Create a new **Static Site** on [Render](https://render.com/).
3. Set the build command to `npm run build` and the publish directory to `out`.

Render will host the contents of the `out` directory as a static site.
