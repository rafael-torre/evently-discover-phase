# Evently App

An event management application built with Next.js, React, and Tailwind CSS.

## Features

- Create events with AI assistance
- Manual event creation
- Event management dashboard
- Interactive event builder with AI refinement
- Multiple event templates

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

Start the production server:

```bash
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Project Structure

```
evently-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (Landing)
│   │   ├── create-with-ai/    # AI-assisted event creation
│   │   ├── event-setup/       # Event setup page
│   │   ├── event-prompt/      # Event prompt page
│   │   └── event-builder/     # Event builder page
│   ├── components/            # React components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── CreateWithAI.tsx
│   │   ├── EmptyState.tsx
│   │   ├── EventBuilder.tsx
│   │   ├── EventListItem.tsx
│   │   ├── EventPrompt.tsx
│   │   ├── EventSetup.tsx
│   │   ├── Input.tsx
│   │   ├── Landing.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TemplateCard.tsx
│   │   └── Textarea.tsx
│   └── globals.css            # Global styles
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## Routes

- `/` - Landing page with event dashboard
- `/create-with-ai` - AI-assisted event creation with templates
- `/event-setup` - Event name setup
- `/event-prompt` - AI prompt for event generation
- `/event-builder` - Interactive event builder and editor

## Migration from Vite

This project was migrated from Vite to Next.js. Key changes:

- Replaced `react-router-dom` with Next.js App Router
- Updated navigation hooks (`useNavigate` → `useRouter`, `useLocation` → `usePathname`)
- Added `'use client'` directives to interactive components
- Restructured project to use Next.js app directory
- Updated build and dev scripts

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
