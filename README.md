# Personal Website

Live site: [narayan-kuleindiren.vercel.app](https://narayan-kuleindiren.vercel.app)

A personal portfolio website built with React, TypeScript, and Vite.

## Overview

The site includes:
- A hero section with animated call-to-action buttons
- Experience and project sections
- A contact section with social links
- Ambient UI details like the cursor blob trail and soft button glow

## Tech Stack

- React
- TypeScript
- Vite
- Framer Motion
- React Scroll
- React Icons

## Development

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

## Project Structure

```text
src/
  components/    Reusable UI sections and effects
  styles/        Global styles
  types/         Local TypeScript declarations
public/
  images/        Static assets like the CV and project media
```

## Notes

- Static files inside `public/` are served from the site root.
- The downloadable CV lives at `public/images/CV.pdf`.
