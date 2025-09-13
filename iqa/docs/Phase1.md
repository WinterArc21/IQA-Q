```markdown
# Phase 1: Project Setup & Configuration - Detailed Steps

## Initial Setup

### 1. Initialize Next.js Project with TypeScript
- Run `npx create-next-app@latest` to create a new Next.js project
- Choose the following options during setup:
  - Would you like to use TypeScript? › Yes
  - Would you like to use ESLint? › No (as we won't be using ESLint)
  - Would you like to use Tailwind CSS? › Yes
  - Would you like to use `src/` directory? › No (we'll organize this manually)
  - Would you like to use App Router? › Yes
  - Would you like to customize the default import alias (@/*)? › Yes (use @/ for absolute imports)
- Navigate to the project directory
- Run `npm run dev` to verify the project is working
- Commit the initial setup to Git

### 2. Set up Project Directory Structure
- Create the following directories:
  - `/components` - Reusable UI components
  - `/app` - Next.js app router pages
  - `/lib` - Utility functions and helpers
  - `/hooks` - Custom React hooks
  - `/types` - TypeScript type definitions
  - `/public` - Static assets (already exists)
  - `/styles` - Global and utility styles (Tailwind will handle most styling)
- Organize the app directory structure:
  - `/app/page.tsx` - Homepage
  - `/app/layout.tsx` - Root layout
  - `/app/globals.css` - Global styles (already exists)
- Create a basic component structure in `/components`
- Commit the directory structure to Git

### 3. Set up Tailwind CSS for Styling
- Verify Tailwind is properly configured (should be done by create-next-app)
- Customize `tailwind.config.ts` for project needs:
  - Add custom colors for branding
  - Configure RTL support for Arabic
  - Add any custom plugins needed
- Update `globals.css` to include Tailwind directives:
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`
- Add custom utility classes if needed
- Test Tailwind with a simple component
- Commit Tailwind configuration

### 4. Configure Environment Variables
- Create `.env.local` file for local development variables
- Add `.env*.local` to `.gitignore` to prevent committing secrets
- Create `.env.example` with placeholder values for documentation
- Set up environment variable validation in a utility file
- Add type definitions for environment variables
- Test environment variable loading
- Commit example environment file (but not the actual .env.local)

### 5. Set up Git with Proper .gitignore
- Review and update `.gitignore`:
  - Ensure `node_modules/` is ignored
  - Ensure `.env*.local` files are ignored
  - Add IDE specific files (`.vscode/`, etc.)
  - Add build output directories
- Set up initial commit with all files
- Create a comprehensive first commit message
- Verify Git history is clean

```
