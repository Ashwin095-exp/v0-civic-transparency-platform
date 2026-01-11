# Civic Transparency Platform - AI Coding Guidelines

## Project Overview
This is a Next.js 16 static landing page for a civic transparency platform, built with React 19, Tailwind CSS v4, and shadcn/ui components. The app demonstrates citizen-powered government accountability through project tracking and verification.

## Architecture
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS v4 with custom oklch color variables and dark mode support
- **Components**: shadcn/ui (Radix UI primitives) with "new-york" style
- **Structure**: Single-page application with scrollable sections (Hero, Problem/Solution, How It Works, Dashboard, Verification CTA, Trust Impact)
- **State**: Client-side only, no server state or API integration
- **Animations**: Scroll-triggered with IntersectionObserver, custom CSS keyframes

## Key Patterns & Conventions

### Component Organization
- **Sections**: Feature components in `components/sections/` (e.g., `hero.tsx`, `dashboard.tsx`)
- **UI**: Reusable components in `components/ui/` (shadcn/ui)
- **Layout**: Header/Footer in `components/` root
- **Utilities**: `lib/utils.ts` with `cn()` for Tailwind class merging

### Styling Patterns
- Use `cn()` utility for conditional classes: `cn("base-class", condition && "conditional-class")`
- Custom animations: `animate-fade-in-up`, `animate-slide-in-left`, `animate-pulse-glow`
- Color variables: oklch-based CSS custom properties in `app/globals.css`
- Responsive design: Mobile-first with `md:`, `lg:` breakpoints

### Animation Implementation
```tsx
// Scroll-triggered animation pattern
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
      }
    },
    { threshold: 0.1 }
  )
  if (ref.current) observer.observe(ref.current)
  return () => observer.disconnect()
}, [])
```

### External Integrations
- **Forms**: Tally.so integration for verification submissions
  ```tsx
  onClick={() => window.open("https://tally.so/r/menk2x", "_blank", "noopener,noreferrer")}
  ```
- **Analytics**: Vercel Analytics in layout

## Development Workflow

### Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (ignores TypeScript errors)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Build Configuration
- TypeScript errors ignored in build (`next.config.mjs`)
- Images unoptimized for static deployment
- Deployed on Vercel with automatic sync from v0.app

### File Structure Examples
```
components/
  sections/dashboard.tsx    # Feature sections with hardcoded demo data
  ui/button.tsx            # shadcn/ui components
  header.tsx               # Navigation with scroll effects
```

## Code Style Guidelines
- **Imports**: Use `@/` aliases (configured in `tsconfig.json`)
- **Client Components**: Mark with `"use client"` for interactivity
- **Hooks**: Standard React hooks, no custom state management
- **Data**: Hardcoded demo data in components (e.g., projects array in dashboard)
- **Accessibility**: Semantic HTML, proper ARIA labels via Radix UI

## Common Patterns
- **Navigation**: Anchor links to section IDs (`#dashboard`, `#verify`)
- **Buttons**: shadcn/ui Button component with size/variant props
- **Layout**: Container with `mx-auto px-4` for consistent spacing
- **Typography**: Responsive text with `text-balance` for better wrapping

## Dependencies to Know
- **UI**: Radix UI primitives via shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod (not currently used)
- **Themes**: next-themes (provider exists but not integrated in UI)
- **Charts**: Recharts (available but not used)

Focus on maintaining the landing page's clean, professional aesthetic and smooth scroll-based user experience.</content>
<parameter name="filePath">.github/copilot-instructions.md