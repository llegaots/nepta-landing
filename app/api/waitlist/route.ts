import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    // Get environment variables with better error handling
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseServiceRoleKey = 
      process.env.SUPABASE_SERVICE_ROLE_KEY || 
      process.env.SUPABASE_SERVICE_KEY ||
      process.env.SUPABASE_KEY

    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error('Missing Supabase environment variables')
      console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✓' : '✗')
      console.error('SUPABASE_SERVICE_ROLE_KEY:', process.env.SUPABASE_SERVICE_ROLE_KEY ? '✓' : '✗')
      console.error('SUPABASE_SERVICE_KEY:', process.env.SUPABASE_SERVICE_KEY ? '✓' : '✗')
      console.error('SUPABASE_KEY:', process.env.SUPABASE_KEY ? '✓' : '✗')
      
      return NextResponse.json(
        { 
          error: 'Server configuration error',
          details: 'Missing Supabase credentials. Please check Vercel environment variables.'
        },
        { status: 500 }
      )
    }

    // Create Supabase client
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })

    const body = await request.json()
    const { name, email, company, phone } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from('waitlist')
      .insert([
        {
          name,
          email,
          company: company || null,
          phone: phone || null,
        },
      ])
      .select()
      .single()

    if (error) {
      // Handle duplicate email error
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        )
      }

      // Handle table doesn't exist error
      if (error.code === '42P01') {
        console.error('Table "waitlist" does not exist. Please run the SQL script in Supabase.')
        return NextResponse.json(
          { 
            error: 'Database configuration error',
            details: 'The waitlist table does not exist. Please run the SQL setup script in Supabase.'
          },
          { status: 500 }
        )
      }

      console.error('Supabase error:', {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint
      })
      
      return NextResponse.json(
        { 
          error: 'Failed to add to waitlist',
          details: error.message
        },
        { status: 500 }
      )
    }

    console.log('Successfully added to waitlist:', { email, name })
    return NextResponse.json(
      { message: 'Successfully added to waitlist', data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

