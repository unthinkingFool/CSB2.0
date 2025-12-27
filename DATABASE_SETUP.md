# Database Setup - Campus Hub

## Problem
Posts are not being saved to the database because the tables may not exist in your Supabase project.

## Solution
You need to run the migration SQL to create all required tables and set up Row Level Security (RLS).

## Steps to Set Up Database

### Option 1: Using Supabase Dashboard (Recommended)

1. Go to [Supabase](https://supabase.com/dashboard)
2. Sign in with your account
3. Click on the project: **skkcrmitvljuwpmjufle**
4. Go to **SQL Editor** in the left sidebar
5. Click **"+ New Query"**
6. Paste the entire content from `supabase/migrations/init.sql`
7. Click **"Run"** button
8. Wait for it to complete (you should see all tables created)

### Option 2: Using Supabase CLI

If you have the Supabase CLI installed:

```bash
cd supabase
supabase db push
```

## What This Creates

The migration creates 8 tables:
- **complaints** - For posting complaints about campus facilities
- **notices** - For posting notices
- **marketplace** - For buying/selling items
- **animal_welfare** - For reporting animal welfare issues
- **faculty_suggestions** - For suggesting improvements to faculty
- **blood_donation** - For blood donation coordination
- **bicycles** - For lost/found bicycles
- **lost_found** - For lost and found items

Each table has:
- UUID primary key
- Required fields (title, description, etc.)
- user_id for tracking who posted
- timestamps for created_at and updated_at
- Indexes for faster queries
- Row Level Security (RLS) policies

## Testing After Setup

1. Refresh your app in the browser (F5)
2. Try posting on each page:
   - **Marketplace** → Click "Add Item" → Submit
   - **Notices** → Click "Post Notice" → Submit
   - **Complaints** → Click "Add Complaint" → Submit
   - **Animal Welfare** → Click "Report Issue" → Submit
   - **Faculty Suggestions** → Click "Add Suggestion" → Submit
   - **Blood Donation** → Click "Donate Blood" → Submit
   - **Bicycles** → Click "Report Issue" → Submit
   - **Lost & Found** → Click "Report Item" → Submit

3. If successful, you should see:
   - ✅ Success toast notification
   - ✅ Item appears in the list immediately
   - ✅ Item is searchable/filterable

## Troubleshooting

### If posts still don't appear:
1. **Check browser console (F12)** for error messages
2. **Check Network tab** to see if requests are being made
3. **Check Supabase dashboard** → Tables to verify tables exist
4. **Check RLS policies** - Make sure policies are created

### If you see "No data" in tables:
- This is normal - tables are just empty
- Once you post, data should appear immediately

### If you get authentication errors:
- The current setup uses anonymous key
- This is fine for development
- Later add proper authentication

## Important Notes

- This setup allows anyone to read/write all data
- For production, implement proper authentication and RLS policies
- Current user_id is hardcoded as "current-user-id"
- Later implement real user authentication

## Next Steps

1. ✅ Run the migration SQL
2. ✅ Refresh your browser
3. ✅ Test posting on all pages
4. ✅ Verify data appears in lists

If you need help running the migration, I can guide you through it step by step!
