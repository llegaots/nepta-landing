import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// Vercel Supabase integration may use SUPABASE_SERVICE_ROLE_KEY or SUPABASE_SERVICE_KEY
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_SERVICE_KEY!

if (!supabaseUrl || !supabaseServiceRoleKey) {
  if (process.env.NODE_ENV === 'development') {
    console.error('Missing Supabase environment variables:')
    console.error('- NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗')
    console.error('- SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceRoleKey ? '✓' : '✗')
  }
  throw new Error('Missing Supabase environment variables. Please check your Vercel environment variables.')
}

// Server-side client with service role key for admin operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

