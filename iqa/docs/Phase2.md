```markdown
# Phase 2: Database & Backend - Detailed Steps

## Overview
In this phase, we'll set up the database and backend infrastructure for our Arabic learning platform using Supabase. This will include designing the database schema, implementing authentication, and creating API endpoints.

## Database Design

### 1. Design Database Schema for Users, Courses, Lessons, Vocabulary, Quizzes
- Create an Entity Relationship Diagram (ERD) for the following entities:
  - Users: id, email, name, role (student/admin), created_at, updated_at
  - Courses: id, title, description, level, thumbnail, created_at, updated_at
  - Lessons: id, course_id, title, content, order, created_at, updated_at
  - Vocabulary: id, lesson_id, arabic_word, english_translation, pronunciation_audio, created_at
  - Quizzes: id, lesson_id, title, created_at, updated_at
  - QuizQuestions: id, quiz_id, question_text, question_type (multiple_choice/text), created_at
  - QuizOptions: id, question_id, option_text, is_correct
  - UserProgress: user_id, lesson_id, completed (boolean), quiz_score, last_accessed
- Define relationships between entities:
  - One-to-many: Courses → Lessons
  - One-to-many: Lessons → Vocabulary
  - One-to-many: Lessons → Quizzes
  - One-to-many: Quizzes → QuizQuestions
  - One-to-many: QuizQuestions → QuizOptions
  - Many-to-many: Users ↔ Courses (through enrollments)
  - One-to-many: Users → UserProgress
- Document the schema in a README.md file in a new `/docs` directory

### 2. Set up Supabase Database through Supabase MCP Server
- Initialize Supabase project through the Supabase MCP server
- Configure database connection settings
- Set up database pooling if needed
- Document connection credentials in `.env.local` (not committed to Git)
- Create a database connection utility in `/lib/supabase/client.ts`

### 3. Configure Supabase Authentication
- Enable Email/Password authentication provider
- Configure session management settings
- Set up secure cookie policies
- Implement authentication context using React Context API in `/contexts/AuthContext.tsx`
- Create authentication utility functions in `/lib/auth.ts`

### 4. Set up Supabase Storage for Lesson Materials
- Create storage buckets for:
  - Course thumbnails
  - Lesson audio files
  - Vocabulary pronunciation files
- Configure access policies for public and private files
- Implement file upload utilities in `/lib/storage.ts`
- Set up CDN for optimized file delivery

### 5. Create Database Tables and Relationships
- Create tables using Supabase SQL editor or migration files:
  - users table with appropriate fields and constraints
  - courses table with proper indexing
  - lessons table with foreign key to courses
  - vocabulary table with foreign key to lessons
  - quizzes table with foreign key to lessons
  - quiz_questions table with foreign key to quizzes
  - quiz_options table with foreign key to quiz_questions
  - user_progress table to track learning progress
- Add proper indexes for frequently queried fields
- Set up foreign key constraints to maintain data integrity

### 6. Set up Database Seeding for Initial Data
- Create seed data for:
  - Sample courses (beginner, intermediate, advanced Arabic)
  - Sample lessons for each course
  - Sample vocabulary words
  - Sample quizzes with questions and options
- Create seeding scripts in `/scripts/seed.ts`
- Document how to run seeding scripts in README

### 7. Configure Supabase Realtime for Live Updates
- Enable Realtime functionality in Supabase dashboard
- Set up channels for:
  - User progress updates
  - New course notifications
  - Quiz results
- Implement realtime subscriptions in frontend components
- Handle connection states and error cases

## Authentication System

### 1. Implement User Registration with Supabase Auth
- Create registration form component in `/components/auth/RegistrationForm.tsx`
- Implement form validation with proper error handling
- Connect to Supabase Auth API for user creation
- Send email verification after registration
- Handle success and error states with appropriate UI feedback

### 2. Implement User Login/Logout with Supabase Auth
- Create login form component in `/components/auth/LoginForm.tsx`
- Implement logout functionality in navigation component
- Store user session in React context
- Redirect users appropriately after login/logout
- Handle session expiration gracefully

### 3. Set up Email Verification with Supabase
- Configure email templates in Supabase dashboard
- Implement email verification page at `/auth/verify`
- Handle verification token validation
- Redirect users after successful verification
- Show appropriate messages for expired or invalid tokens

### 4. Implement Password Reset Functionality with Supabase
- Create password reset request form at `/auth/forgot-password`
- Create password reset form at `/auth/reset-password`
- Implement token validation for password reset
- Handle password strength validation
- Show success/error messages appropriately

### 5. Configure JWT Authentication with Supabase
- Set up JWT secret in Supabase settings
- Configure token refresh mechanisms
- Implement token validation in API routes
- Handle token expiration and renewal
- Secure sensitive operations with JWT verification

### 6. Set up Role-Based Access Control (Admin, Student) with Supabase Policies
- Define user roles in database (student, admin)
- Create Row Level Security (RLS) policies for:
  - Admins can create/edit/delete courses
  - Students can only view enrolled courses
  - Users can only view their own progress
- Implement role checking in frontend components
- Create admin-only routes and components
- Handle unauthorized access attempts

## API Development

### 1. Create API Endpoints for Courses using Supabase
- Create API routes in `/app/api/courses/route.ts` for:
  - GET /api/courses - List all courses
  - GET /api/courses/[id] - Get specific course details
  - POST /api/courses - Create new course (admin only)
  - PUT /api/courses/[id] - Update course (admin only)
  - DELETE /api/courses/[id] - Delete course (admin only)
- Implement proper request validation
- Add pagination for course listings
- Include error handling for all endpoints

### 2. Create API Endpoints for Lessons using Supabase
- Create API routes in `/app/api/lessons/route.ts` for:
  - GET /api/lessons?course_id= - List lessons for a course
  - GET /api/lessons/[id] - Get specific lesson details
  - POST /api/lessons - Create new lesson (admin only)
  - PUT /api/lessons/[id] - Update lesson (admin only)
  - DELETE /api/lessons/[id] - Delete lesson (admin only)
- Implement proper request validation
- Include course_id validation
- Add ordering functionality

### 3. Create API Endpoints for Vocabulary using Supabase
- Create API routes in `/app/api/vocabulary/route.ts` for:
  - GET /api/vocabulary?lesson_id= - List vocabulary for a lesson
  - GET /api/vocabulary/[id] - Get specific vocabulary item
  - POST /api/vocabulary - Create new vocabulary item (admin only)
  - PUT /api/vocabulary/[id] - Update vocabulary item (admin only)
  - DELETE /api/vocabulary/[id] - Delete vocabulary item (admin only)
- Implement search functionality for vocabulary
- Add audio file handling

### 4. Create API Endpoints for Quizzes using Supabase
- Create API routes in `/app/api/quizzes/route.ts` for:
  - GET /api/quizzes?lesson_id= - List quizzes for a lesson
  - GET /api/quizzes/[id] - Get specific quiz with questions
  - POST /api/quizzes - Create new quiz (admin only)
  - PUT /api/quizzes/[id] - Update quiz (admin only)
  - DELETE /api/quizzes/[id] - Delete quiz (admin only)
- Create API routes in `/app/api/questions/route.ts` for:
  - GET /api/questions?quiz_id= - List questions for a quiz
  - POST /api/questions - Create new question (admin only)
  - PUT /api/questions/[id] - Update question (admin only)
- Implement proper nested data handling

### 5. Implement File Upload for Lesson Materials using Supabase Storage
- Create API route for file upload at `/app/api/upload/route.ts`
- Implement file type validation (images, audio files)
- Add file size limits
- Generate public URLs for uploaded files
- Handle upload errors gracefully

### 6. Set up Proper Error Handling and Validation
- Create custom error classes in `/lib/errors.ts`
- Implement consistent error response format
- Add request validation middleware
- Create validation schemas using Zod
- Document API error codes and responses

### 7. Configure Row Level Security (RLS) Policies
- Enable RLS on all tables
- Create policies for:
  - Users can only read courses they're enrolled in
  - Users can only update their own progress
  - Admins have full access to content management
  - Anonymous users can only browse public course information
- Test policies with different user roles
- Document security policies in `/docs/security.md`

```
