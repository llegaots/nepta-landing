# Supabase Setup Guide

This guide will help you set up Supabase for the NEPTA landing page waitlist functionality.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in to your account
3. Click "New Project"
4. Fill in your project details:
   - **Name**: `nepta-landing` (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the region closest to your users
5. Click "Create new project"
6. Wait for the project to be set up (this takes a few minutes)

## Step 2: Run the SQL Script

1. In your Supabase dashboard, go to the **SQL Editor** (left sidebar)
2. Click "New query"
3. Copy and paste the contents of `supabase-setup.sql` into the editor
4. Click "Run" (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned" - this means the table was created successfully

## Step 3: Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings** → **API** (left sidebar)
2. You'll need these values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys" → "anon public")
   - **service_role key** (under "Project API keys" → "service_role" - keep this secret!)

## Step 4: Set Up Environment Variables in Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to your project in the [Vercel Dashboard](https://vercel.com)
2. Navigate to **Settings** → **Environment Variables**
3. Add the following environment variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

4. For each variable:
   - Select the environments where it should be available (Production, Preview, Development)
   - Click "Save"
5. **Important**: After adding environment variables, you need to redeploy your application for them to take effect

### Option B: Using Vercel CLI

1. Install Vercel CLI if you haven't already:
   ```bash
   npm i -g vercel
   ```

2. Link your project:
   ```bash
   vercel link
   ```

3. Add environment variables:
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   vercel env add SUPABASE_SERVICE_ROLE_KEY
   ```

4. Follow the prompts to enter values for each environment (production, preview, development)

## Step 5: Local Development Setup

1. Create a `.env.local` file in the root of your project:
   ```bash
   touch .env.local
   ```

2. Add your Supabase credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

3. **Important**: Add `.env.local` to your `.gitignore` (it should already be there)

## Step 6: Verify the Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000/signup`
3. Fill out the form and submit
4. Check your Supabase dashboard:
   - Go to **Table Editor** → **waitlist**
   - You should see your test entry

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Make sure all three environment variables are set in Vercel
- Redeploy your application after adding environment variables
- For local development, check that `.env.local` exists and has all variables

### Error: "Failed to add to waitlist"
- Check that the SQL script ran successfully in Supabase
- Verify your Supabase project URL and keys are correct
- Check the Vercel function logs for more details

### Error: "This email is already on the waitlist"
- This is expected behavior - the email field has a UNIQUE constraint
- The user will see a friendly error message

## Security Notes

- **Never commit** `.env.local` or environment variables to git
- The `SUPABASE_SERVICE_ROLE_KEY` bypasses Row Level Security - keep it secret!
- The `NEXT_PUBLIC_SUPABASE_ANON_KEY` is safe to expose in client-side code
- Row Level Security (RLS) is enabled on the waitlist table for additional security

## Viewing Waitlist Entries

You can view all waitlist entries in the Supabase dashboard:
1. Go to **Table Editor** → **waitlist**
2. You'll see all signups with their details and timestamps

## Next Steps

- Consider adding email notifications when someone joins the waitlist
- Set up Supabase Auth if you need user authentication
- Create an admin dashboard to manage waitlist entries
- Export waitlist data for marketing campaigns

