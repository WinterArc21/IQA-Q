```markdown
# Arabic Learning Next.js Website - TODO List

## Project Overview
Create a Next.js website for Arabic language learning with user authentication, course management, payment integration, and interactive learning features.

## Phase 1: Project Setup & Configuration
See [Phase1.md](Phase1.md) for detailed step-by-step instructions.

### Initial Setup
- [x] Initialize Next.js project with TypeScript
- [x] Set up project directory structure
- [x] Set up Tailwind CSS for styling
- [x] Configure environment variables
- [x] Set up Git with proper .gitignore

### Development Tools

## Phase 2: Database & Backend

### Database Design
-  [x] Create database tables and relationships (created: `courses`, `profiles`)
- [x] Create Supabase client files (`lib/supabaseClient.ts`, `lib/supabaseServer.ts`)
- [x] Add Supabase env vars to `.env.local` (local only)
- [x] Install `@supabase/supabase-js`
- [ ] Configure Supabase authentication
- [ ] Set up Supabase storage for lesson materials
- [ ] Set up database seeding for initial data
- [ ] Configure Supabase Realtime for live updates

**Important:** `SUPABASE_SERVICE_ROLE_KEY` must never be exposed to browser code or committed to source control.

### Current DB State (added)
- `courses` table created with columns: `id` (PK, integer, auto-increment), `title` (text, NOT NULL), `description` (text, NULL), `price` (numeric, NOT NULL, default 0.00), `created_at` (timestamptz, default CURRENT_TIMESTAMP), `updated_at` (timestamptz, default CURRENT_TIMESTAMP).
- `profiles` table created with columns: `user_id` (PK, uuid, FK -> `auth.users.id`), `email` (text, NOT NULL, UNIQUE), `name` (text, NULL), `role` (text, default 'student', check constraint), `created_at` (timestamptz, default now()).

### Authentication System
- [ ] Implement user registration with Supabase Auth
- [ ] Implement user login/logout with Supabase Auth
- [ ] Set up email verification with Supabase
- [ ] Implement password reset functionality with Supabase
- [ ] Configure JWT authentication with Supabase
- [ ] Set up role-based access control (admin, student) with Supabase policies

### API Development
- [ ] Create API endpoints for courses using Supabase
- [ ] Create API endpoints for lessons using Supabase
- [ ] Create API endpoints for vocabulary using Supabase
- [ ] Create API endpoints for quizzes using Supabase
- [ ] Implement file upload for lesson materials using Supabase Storage
- [ ] Set up proper error handling and validation
- [ ] Configure Row Level Security (RLS) policies

## Phase 3: Frontend Development

### Core Pages
- [ ] Create homepage with course listings
- [ ] Implement course detail pages
- [ ] Create lesson pages with content display
- [ ] Develop user dashboard/profile page
- [ ] Implement payment/subscription pages
- [ ] Create admin dashboard for content management

### Learning Features
- [ ] Implement vocabulary list display
- [ ] Create flashcard system
- [ ] Develop quiz/exam interface
- [ ] Add progress tracking
- [ ] Implement bookmarking functionality
- [ ] Create audio pronunciation feature

### UI Components
- [ ] Design responsive navigation bar
- [ ] Create course cards for homepage
- [ ] Build lesson content viewer
- [ ] Develop interactive flashcard component
- [ ] Create quiz/exam component
- [ ] Implement progress indicators
- [ ] Design user profile components

## Phase 4: Advanced Features


### Admin Features
- [ ] Create course management interface
- [ ] Develop lesson content editor
- [ ] Implement vocabulary management
- [ ] Create quiz builder tool
- [ ] Add user management dashboard
- [ ] Implement analytics dashboard

## Phase 5: Testing & Quality Assurance

### Testing
- [ ] Write unit tests for components
- [ ] Implement integration tests for API endpoints
- [ ] Create end-to-end tests for user flows
- [ ] Perform accessibility testing
- [ ] Conduct performance testing
- [ ] Test responsive design on multiple devices

### Security
- [ ] Implement input validation and sanitization
- [ ] Set up proper authentication middleware
- [ ] Configure CORS settings
- [ ] Implement rate limiting
- [ ] Set up security headers
- [ ] Conduct security audit

## Phase 6: Payment Integration

### Payment System
- [ ] Integrate Stripe or PayPal for payments
- [ ] Set up subscription plans (monthly, yearly)
- [ ] Implement payment success/failure handling
- [ ] Create payment history tracking
- [ ] Set up webhook for payment notifications
- [ ] Implement refund/cancellation functionality

## Phase 7: Deployment & Monitoring

### Deployment Preparation
- [ ] Analyze Vercel deployment platform and its features
- [ ] Set up Vercel project and link with GitHub repository
- [ ] Configure environment variables in Vercel
- [ ] Set up custom domain and SSL certificates
- [ ] Configure build settings for Next.js on Vercel
- [ ] Set up preview deployments for pull requests

### Production Deployment
- [ ] Configure production deployment settings
- [ ] Implement CI/CD pipeline with Vercel
- [ ] Set up automated deployments on push to main branch
- [ ] Configure CDN for static assets
- [ ] Implement rollback strategies
- [ ] Set up deployment notifications

### (FOR WAY LATER) Monitoring
- [ ] Set up error tracking (Sentry)
- [ ] Implement performance monitoring
- [ ] Configure logging system
- [ ] Set up uptime monitoring
- [ ] Implement analytics (Google Analytics, etc.)
- [ ] Create admin dashboard for system metrics

## Phase 8: Documentation & Maintenance

### Documentation
- [ ] Create user documentation
- [ ] Write API documentation
- [ ] Develop admin guides
- [ ] Create setup and deployment guides
- [ ] Document codebase architecture
- [ ] Prepare troubleshooting guides

## Additional Considerations


### Mobile Responsiveness
- [ ] Ensure all components are mobile-friendly
- [ ] Implement touch gestures for flashcards
- [ ] Optimize audio playback for mobile
- [ ] Create PWA functionality for offline access
- [ ] Test on various mobile devices and browsers

```
