import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabaseServer'

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('courses')
    .select('*')
    .limit(5)

  if (error) {
    return NextResponse.json({ ok: false, error })
  }

  return NextResponse.json({ ok: true, data })
}
