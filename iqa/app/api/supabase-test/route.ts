// app/api/supabase-test/route.ts
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseServer'

export async function GET(request: Request) {
  const { data, error } = await supabaseAdmin
    .from('courses')
    .select('id, title')
    .limit(1)

  return NextResponse.json({ data, error })
}
