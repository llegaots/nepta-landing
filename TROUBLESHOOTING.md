# Troubleshooting: Form Submissions Not Saving to Supabase

If you submitted a form on neptaai.com but nothing appeared in Supabase, follow these steps:

## Step 1: Check if the Table Exists

**This is the most common issue!**

1. Go to your Supabase dashboard: [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Select project: **supabase-gray-window**
3. Click **Table Editor** in the left sidebar
4. Look for a table called `waitlist`

**If the table doesn't exist:**
- Go to **SQL Editor**
- Copy and paste the entire contents of `supabase-setup.sql`
- Click **Run**
- Try submitting the form again

## Step 2: Check Vercel Environment Variables

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Verify these variables exist:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY` (or `SUPABASE_SERVICE_KEY` or `SUPABASE_KEY`)

**If variables are missing:**
- Go to Supabase Dashboard → **Settings** → **API**
- Copy the values and add them to Vercel
- **Important**: Redeploy after adding variables

## Step 3: Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project → **Deployments**
2. Click on your latest deployment
3. Click the **Functions** tab
4. Click on `/api/waitlist`
5. Check the logs for any errors

Common errors you might see:
- `Missing Supabase environment variables` → Environment variables not set
- `relation "waitlist" does not exist` → Table not created (run SQL script)
- `permission denied` → RLS policies issue (run SQL script)

## Step 4: Check Supabase Logs

1. Go to Supabase Dashboard → **Logs** → **API Logs**
2. Look for any errors related to the `waitlist` table
3. Check for permission errors or table not found errors

## Step 5: Test the API Directly

You can test the API endpoint directly using curl:

```bash
curl -X POST https://neptaai.com/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company"
  }'
```

Check the response - it should give you a specific error message.

## Common Issues and Solutions

### Issue: "Table waitlist does not exist"
**Solution**: Run the SQL script in Supabase SQL Editor (see Step 1)

### Issue: "Missing Supabase environment variables"
**Solution**: Add environment variables in Vercel and redeploy

### Issue: "Permission denied" or RLS errors
**Solution**: Run the SQL script - it sets up the correct RLS policies

### Issue: Form submits but shows generic error
**Solution**: Check Vercel function logs (Step 3) for the actual error

## Quick Fix Checklist

- [ ] Table `waitlist` exists in Supabase Table Editor
- [ ] Environment variables are set in Vercel
- [ ] Latest deployment includes the Supabase code
- [ ] SQL script has been run in Supabase
- [ ] Checked Vercel function logs for errors
- [ ] Tested API endpoint directly

## Still Not Working?

If you've checked all the above:
1. Check the browser console (F12) when submitting the form
2. Check Vercel function logs for detailed error messages
3. Verify your Supabase project URL matches what's in Vercel
4. Make sure you're checking the correct Supabase project (`supabase-gray-window`)

