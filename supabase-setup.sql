-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for public signups)
CREATE POLICY "Allow public inserts" ON waitlist
  FOR INSERT
  TO authenticated, anon
  WITH CHECK (true);

-- Create policy to allow service role to read all (for admin operations)
-- Note: Service role bypasses RLS, but this is good practice
CREATE POLICY "Allow service role read" ON waitlist
  FOR SELECT
  TO service_role
  USING (true);

-- Optional: Create a view for admin dashboard (if needed later)
-- CREATE VIEW waitlist_summary AS
-- SELECT 
--   COUNT(*) as total_signups,
--   COUNT(DISTINCT company) as unique_companies,
--   DATE_TRUNC('day', created_at) as signup_date
-- FROM waitlist
-- GROUP BY DATE_TRUNC('day', created_at)
-- ORDER BY signup_date DESC;

