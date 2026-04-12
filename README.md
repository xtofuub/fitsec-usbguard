# FitSec USBGuard Website

Marketing site for USBGuard, a hardware-backed USB security solution by FitSec.

The site is built as a single-page experience in Finnish and focuses on:

- BadUSB threat prevention
- USB Killer protection
- Secure USB file transfer workflow
- Service model and contact conversion

## Project Scope

This repository contains the public-facing website only.

It is not the USBGuard device firmware, backend services, or admin tooling.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives (via shadcn/ui setup)
- Motion for UI animation
- Vitest + Testing Library

## Local Development

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+ (or Bun)

### Install

```bash
npm install
```

### Start dev server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run tests

```bash
npm run test
```

### Run linting

```bash
npm run lint
```

## Main App Structure

- `src/pages/Index.tsx`: page composition
- `src/components/HeroSection.tsx`: primary value proposition
- `src/components/StartSection.tsx`: service model section
- `src/components/FeaturesChess.tsx`: risk and protection explanation
- `src/components/FeaturesGrid.tsx`: product capabilities
- `src/components/StatsSection.tsx`: trust and company metrics
- `src/components/Testimonials.tsx`: customer proof section
- `src/components/CtaFooter.tsx`: contact and final CTA
- `src/components/ShaderBackground.tsx`: global ambient background

## Notes

- UI copy is in Finnish and intended for local business audiences.
- Visual direction is intentionally cinematic and high-contrast.
- Contact values shown in the UI are currently static content.
