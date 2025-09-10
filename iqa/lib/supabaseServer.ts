// lib/supabaseServer.ts
import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!url || !serviceRole) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment')
}

// Server/client options: disable session persistence for server
export const supabaseAdmin = createClient(url, serviceRole, {
  auth: { persistSession: false, detectSessionInUrl: false }
})
