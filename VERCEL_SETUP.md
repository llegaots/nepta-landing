# Vercel + Supabase Setup Checklist

Since you've already linked your Supabase project (`supabase-gray-window`) to Vercel, follow these steps to complete the setup:

## ✅ Step 1: Verify Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Verify these variables are present (they should be auto-added when you linked Supabase):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_SERVICE_KEY`)

**If any are missing**, you can add them manually:
- Go to your Supabase project dashboard → **Settings** → **API**
- Copy the values and add them to Vercel

## ✅ Step 2: Create the Database Table

**IMPORTANT**: You must run the SQL script in Supabase to create the `waitlist` table.

1. Go to your Supabase project dashboard: [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project: **supabase-gray-window**
3. Click on **SQL Editor** in the left sidebar
4. Click **New query**
5. Copy and paste the entire contents of `supabase-setup.sql` from this project
6. Click **Run** (or press Cmd/Ctrl + Enter)
7. You should see "Success. No rows returned" - this means the table was created!

## ✅ Step 3: Redeploy Your Application

After adding/verifying environment variables, you need to redeploy:

1. In Vercel dashboard, go to **Deployments**
2. Click the **⋯** menu on your latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger a new deployment

## ✅ Step 4: Test the Integration

1. Once deployed, visit your site's `/signup` page
2. Fill out the form and submit
3. Check your Supabase dashboard:
   - Go to **Table Editor** → **waitlist**
   - You should see your test entry!

## Troubleshooting

### "Missing Supabase environment variables" error
- Check that all environment variables are set in Vercel
- Make sure you redeployed after adding variables
- Variables are case-sensitive

### "relation 'waitlist' does not exist" error
- You haven't run the SQL script yet
- Go back to Step 2 and run `supabase-setup.sql`

### Form submits but nothing appears in database
- Check Vercel function logs: **Deployments** → Click deployment → **Functions** tab
- Check Supabase logs: **Logs** → **API Logs**
- Verify RLS policies are set correctly (they should be from the SQL script)

## Quick SQL Reference

If you need to run the SQL again, here's what it does:
- Creates `waitlist` table with columns: id, name, email, company, phone, created_at
- Adds indexes for performance
- Enables Row Level Security (RLS)
- Creates policies to allow public inserts

The full SQL is in `supabase-setup.sql` in your project root.

