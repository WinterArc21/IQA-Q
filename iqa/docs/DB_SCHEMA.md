# Database Schema

This file documents the current database tables you created in Supabase and their structure.

## Summary
- Tables created: `courses`, `profiles`
- Authentication is handled by Supabase `auth.users`; `profiles.user_id` references that table.

---

## courses

- **Purpose:** Stores metadata for courses offered on the platform.

Columns:
- `id` — integer, PRIMARY KEY, auto-increment
- `title` — text, NOT NULL
- `description` — text, NULL
- `price` — numeric, NOT NULL, default `0.00`
- `created_at` — timestamp with time zone, default `CURRENT_TIMESTAMP`
- `updated_at` — timestamp with time zone, default `CURRENT_TIMESTAMP`

Example (Postgres SQL):

```sql
CREATE TABLE courses (
  id serial PRIMARY KEY,
  title text NOT NULL,
  description text,
  price numeric NOT NULL DEFAULT 0.00,
  created_at timestamptz DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamptz DEFAULT CURRENT_TIMESTAMP
);
```

Indexes & notes:
- Add an index on frequently queried columns (e.g., `title` or a `level` column if added).
- Keep `price` precision in mind (use `numeric(10,2)` or similar if needed).

---

## profiles

- **Purpose:** Stores profile metadata and role information for users. Authentication user records remain in `auth.users` (Supabase).

Columns:
- `user_id` — uuid, PRIMARY KEY, foreign key -> `auth.users.id`
- `email` — text, NOT NULL, UNIQUE
- `name` — text, NULL
- `role` — text, NOT NULL DEFAULT 'student' — with a check constraint restricting to allowed values (`student`, `admin`)
- `created_at` — timestamp with time zone, default `now()`

Example (Postgres SQL):

```sql
CREATE TABLE profiles (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL UNIQUE,
  name text,
  role text NOT NULL DEFAULT 'student',
  created_at timestamptz DEFAULT now(),
  CONSTRAINT role_check CHECK (role IN ('student','admin'))
);
```

Notes & recommendations:
- Keep `user_id` aligned with Supabase `auth.users.id` so you can join user records to profiles easily.
- Use `ON DELETE CASCADE` on the FK if you want profiles removed when an auth user is deleted; otherwise use `ON DELETE SET NULL` depending on desired behavior.
- Consider adding an index on `role` if you will frequently query by user role (for admin lists, etc.).

---

## Relationships
- `profiles.user_id` references `auth.users.id` (one-to-one relationship between auth user and profile).
- `courses` is currently independent; future tables should reference `courses.id` (e.g., `lessons.course_id` with a foreign key to `courses(id)`).

Planned relationships to add later:
- `lessons.course_id` → `courses.id` (one-to-many)
- `vocabulary.lesson_id` → `lessons.id` (one-to-many)
- `quizzes.lesson_id` → `lessons.id` (one-to-many)
- `user_progress` → `profiles.user_id` and `lessons.id` or `courses.id` for tracking progress (many-to-many via enrollments or progress table)

---

## Security / RLS reminders
- Enable Row Level Security (RLS) on tables that need it and create explicit policies for read/write access. Example:
  - Allow users to read their own `profiles` row, but not other users' profiles.
  - Allow admins to manage `courses` and content.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to client code; only use it in server-side code or API routes.

If you want, I can generate SQL migration files (CREATE TABLE statements) and simple seed data next.
