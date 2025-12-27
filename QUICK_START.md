# Campus Hub - Quick Start Guide

## 🚀 Starting the App

```bash
# Navigate to project directory
cd campus-hub-main

# Start dev server
npm run dev
# or
bun run dev

# App will be available at: http://localhost:8081/
```

## 📱 Pages & Features

### 1. **Complaints** (`/complaints`)
- Report issues with halls, dining, labs, academic, administration
- Click "File Complaint" button → Fill form → Submit
- View all complaints with status filters

### 2. **Lost & Found** (`/lost-found`)
- Post lost or found items on campus
- Click "Report Item" button → Select type → Fill details
- Filter by item type (lost/found)

### 3. **Marketplace** (`/marketplace`)
- Buy and sell items within campus community
- Click "Add Item" → Fill product details with price
- Browse unsold items by category

### 4. **Notices** (`/notices`)
- Post announcements and updates
- Click "Add Notice" → Fill title & description → Choose category
- View latest notices with colored category badges

### 5. **Blood Donation** (`/blood-donation`)
- Register as blood donor
- Click "Register" → Select blood group → Fill details
- Filter donors by blood type

### 6. **Bicycles** (`/bicycles`)
- Campus bicycle sharing system
- Click "Add Bicycle" → Enter registration number
- Book bicycles (when available)
- Track availability status

### 7. **Animal Welfare** (`/animal-welfare`)
- Report animal welfare issues
- Click "Report Issue" → Fill details → Select urgency level
- View all reports filtered by priority

### 8. **Faculty Suggestions** (`/faculty-suggestions`)
- Provide feedback to faculty
- Click "Add Suggestion" → Select faculty → Rate & submit
- Search suggestions by faculty name

### 9. **Profile** (`/profile`)
- View and edit personal information
- Click "Edit Profile" → Update details → Save

### 10. **Student Directory** (`/students`)
- Browse all students, faculty, and staff
- Search by name/email
- Filter by role and department

## 💾 How Posting Works (All Pages)

1. **Click the button** (e.g., "Add Complaint", "Report Item", etc.)
2. **Dialog form opens** with required fields
3. **Fill in the form** - all marked fields are required
4. **Submit** - button shows loading state
5. **Toast notification** shows success/error
6. **Form closes** automatically on success
7. **Data refreshes** - your post appears in the list
8. **Filter/search** to find your post

## 🔄 Form Pattern (Same Across All Pages)

```
Button Click
    ↓
Dialog Opens with Form
    ↓
Fill Required Fields
    ↓
Click Submit
    ↓
Loading State (Button disabled)
    ↓
Toast Notification
    ↓
Dialog Closes (on success)
    ↓
Data Reloads & Displays
```

## 🎨 UI Components Used

- **Dialogs**: For all posting forms
- **Select**: For dropdowns (category, blood type, urgency, etc.)
- **Input**: For text fields
- **Textarea**: For longer descriptions
- **Buttons**: Action buttons with loading states
- **Badges**: For status/category indicators
- **Cards**: For displaying posts/items
- **Toast**: For notifications

## 🔧 Technical Stack

- **Frontend**: React + TypeScript
- **Build Tool**: Vite
- **UI Library**: shadcn/ui (built on Radix UI)
- **Backend**: Supabase (PostgreSQL)
- **HTTP Client**: Supabase JS SDK
- **Notifications**: Sonner (Toast library)
- **Styling**: Tailwind CSS

## 📂 File Structure

```
src/
├── pages/
│   ├── Complaints.tsx
│   ├── LostFound.tsx
│   ├── Marketplace.tsx
│   ├── Notices.tsx
│   ├── BloodDonation.tsx
│   ├── Bicycles.tsx
│   ├── AnimalWelfare.tsx
│   ├── FacultySuggestions.tsx
│   ├── Profile.tsx
│   ├── Students.tsx
│   └── ...
├── services/
│   └── database.service.ts (all CRUD operations)
├── integrations/
│   └── supabase/
│       ├── client.ts
│       └── types.ts (database schemas)
├── components/
│   ├── layout/
│   ├── ui/
│   └── dashboard/
└── App.tsx (routing)
```

## 🐛 Troubleshooting

### "Port 8080 is in use"
- The app automatically tries port 8081
- Access: http://localhost:8081/

### "Toast not showing"
- Sonner Toaster is configured in App.tsx
- Check DevTools for errors

### "Can't submit form"
- Verify all required fields are filled
- Check browser console for API errors
- Ensure Supabase is configured

### "Page not loading"
- Check network tab in DevTools
- Verify Supabase connection in supabaseClient.js
- Clear browser cache and refresh

## 📋 Checklist: Everything Works ✅

- [x] Dev server runs without errors
- [x] All pages accessible via navigation
- [x] All buttons are clickable
- [x] All dialogs open and close properly
- [x] Form validation works
- [x] Posting creates entries in database
- [x] Posted items display in real-time
- [x] Toast notifications appear
- [x] Loading states work during submission
- [x] Filters and search functionality work
- [x] No console errors

## 🎓 Learning Resources

- Supabase Docs: https://supabase.com/docs
- shadcn/ui Components: https://ui.shadcn.com/
- React Hooks: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/

## 📞 Support

If you encounter any issues:
1. Check browser console (F12 → Console)
2. Check network tab for API errors
3. Verify Supabase connection
4. Restart dev server (`npm run dev`)
5. Clear cache and refresh browser

---

**Status**: ✅ Ready for Testing & Deployment
**All Features**: ✅ Fully Functional
**Backend**: ✅ Integrated
**Frontend**: ✅ Complete
