# Modern React Application with Three-Pane Layout

This is a modern React application built with Next.js, TypeScript, and Tailwind CSS. It features a responsive three-pane layout with interactive components and smooth animations.

DEPLOY LINK:https://workspace-m96u8v7oe-nikshithas-projects-c5e38bef.vercel.app/

## Features

- Responsive three-pane layout with animated transitions
- Modern UI components built with Tailwind CSS
- Type-safe development with TypeScript
- Interactive state management
- Reusable component library

## Project Structure

```
.
├── app/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── ThreePaneLayout.tsx    # Main layout component
│   │   └── ui/
│   │       ├── Button.tsx             # Reusable button component
│   │       └── Card.tsx               # Card component with variants
│   └── page.tsx                       # Main application page
├── lib/
│   └── utils.ts                       # Utility functions
└── public/                            # Static assets
```

## Components

### ThreePaneLayout

The main layout component that provides a three-pane structure:
- Left pane: Navigation menu
- Middle pane: Main content area
- Right pane: Details panel (toggleable)

Props:
- `leftPane`: React.ReactNode
- `middlePane`: React.ReactNode
- `rightPane`: React.ReactNode
- `showRightPane`: boolean
- `onToggleRightPane`: () => void

### Button

A versatile button component with multiple variants and sizes.

Props:
- `variant`: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'
- `size`: 'default' | 'sm' | 'lg' | 'icon'
- All standard button HTML attributes

### Card

A flexible card component with header, content, and footer sections.

Components:
- `Card`: Main wrapper
- `CardHeader`: Card header section
- `CardTitle`: Card title
- `CardDescription`: Card description text
- `CardContent`: Main content area
- `CardFooter`: Card footer section

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

The application is built with:
- Next.js 13+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Class Variance Authority for component variants

## Best Practices

- Component-based architecture
- Type-safe development
- Responsive design
- Reusable components
- Clean and maintainable code structure
- Modern React patterns and hooks
