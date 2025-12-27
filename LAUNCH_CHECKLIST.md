# 📋 Campus Hub - Pre-Launch Checklist

## ✅ System Requirements
- [ ] Node.js 16+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Two terminal windows available
- [ ] Port 3001 available (backend)
- [ ] Port 5173 available (frontend)
- [ ] At least 200MB disk space

## ✅ Initial Setup (One Time)

```powershell
# Navigate to project
cd "c:\Users\LENOVO\OneDrive\Desktop\hackathon\lovable - Copy\campus-hub-main"

# Check Node version
node --version

# Install dependencies
npm install
```

**Checklist:**
- [ ] No errors during npm install
- [ ] `node_modules` folder created
- [ ] `package-lock.json` generated

## ✅ Launch Procedure

### Terminal 1 - Backend
```powershell
cd "c:\Users\LENOVO\OneDrive\Desktop\hackathon\lovable - Copy\campus-hub-main"
node server.js
```

**Wait for:**
```
✅ Database initialized successfully
╔════════════════════════════════════════╗
║  🚀 Campus Hub Backend Server Ready    ║
║  URL: http://localhost:3001            ║
║  Database: SQLite (campus-hub.db)      ║
╚════════════════════════════════════════╝
```

**Checklist:**
- [ ] Server started without errors
- [ ] Database initialized message visible
- [ ] No error messages in console
- [ ] Terminal shows readiness message

### Terminal 2 - Frontend
```powershell
cd "c:\Users\LENOVO\OneDrive\Desktop\hackathon\lovable - Copy\campus-hub-main"
npm run dev
```

**Wait for:**
```
Local: http://localhost:5173/
```

**Checklist:**
- [ ] Frontend started successfully
- [ ] URL http://localhost:5173 displayed
- [ ] "Press q to quit, r to restart" shown

## ✅ Health Checks

### 1. Backend Health
Open: `http://localhost:3001/api/health`

**Expected Response:**
```json
{
  "success": true,
  "status": "ok",
  "database": "ready"
}
```

**Checklist:**
- [ ] Page shows JSON (not error page)
- [ ] "database": "ready" is present
- [ ] "success": true shows

### 2. Frontend Access
Open: `http://localhost:5173`

**Expected Display:**
- Login page with email/password fields
- Demo credentials section (optional)
- Register tab available

**Checklist:**
- [ ] Page loads without errors
- [ ] Login form visible
- [ ] Email input present
- [ ] Password input present
- [ ] Login button present

### 3. Browser Console
Press F12, go to Console tab

**Expected:**
- No red error messages
- No CORS errors
- No failed network requests

**Checklist:**
- [ ] No errors in console
- [ ] No warnings (optional)
- [ ] No network errors

## ✅ Functionality Tests

### Test 1: Login with Admin Account
1. Email: `admin@campushub.com`
2. Password: `Admin@123`
3. Click "Sign In"

**Expected:**
- Success message appears
- Redirected to dashboard
- User name displayed in navbar

**Checklist:**
- [ ] Login successful
- [ ] Dashboard loads
- [ ] No error messages
- [ ] User session created

### Test 2: Login with Student Account
1. Email: `raj@student.com`
2. Password: `Student@123`
3. Click "Sign In"

**Expected:**
- Login successful
- Dashboard loads
- Limited features (no admin-only items)

**Checklist:**
- [ ] Student login works
- [ ] Different from admin experience
- [ ] No admin controls visible

### Test 3: Register New Account
1. Click "Register" tab
2. Fill in details:
   - Name: Your Name
   - Email: yourname@test.com
   - Department: Computer Science
   - Password: Test@123
   - Confirm: Test@123
3. Click "Create Account"

**Expected:**
- Account created
- Logged in automatically
- Dashboard displays

**Checklist:**
- [ ] Registration form validates
- [ ] Password strength shows feedback
- [ ] Account created successfully
- [ ] Auto-logged in

### Test 4: Password Validation
In Register form, try weak password:

1. Password: `test123`
2. Check requirements

**Expected:**
- Red X marks for missing requirements
- Submit button disabled
- Clear feedback on what's needed

**Checklist:**
- [ ] Validation works
- [ ] Feedback shows errors
- [ ] Can't submit invalid password

### Test 5: Session Persistence
1. Log in with admin
2. Refresh page (F5 or Ctrl+R)

**Expected:**
- Still logged in
- Dashboard still visible
- User info preserved

**Checklist:**
- [ ] Session persists
- [ ] User data available
- [ ] No re-login needed

### Test 6: Logout
1. Click logout (usually in navbar/menu)
2. Check URL

**Expected:**
- Redirected to login page
- No user data in memory
- Session cleared

**Checklist:**
- [ ] Logout works
- [ ] Redirected to login
- [ ] Session cleared

### Test 7: Protected Routes
1. Without logging in
2. Try to access `/dashboard` directly

**Expected:**
- Redirect to login page
- Can't access protected pages

**Checklist:**
- [ ] Protected routes work
- [ ] Redirect to login
- [ ] Can't bypass auth

## ✅ Error Handling Tests

### Test 1: Wrong Credentials
1. Email: admin@campushub.com
2. Password: WrongPassword123
3. Click Sign In

**Expected:**
- Error message appears
- Stays on login page
- Error is user-friendly

**Checklist:**
- [ ] Error message shown
- [ ] Not redirected
- [ ] Clear error text

### Test 2: Missing Fields
1. Leave email empty
2. Enter password
3. Click Sign In

**Expected:**
- Error message about missing fields
- Form not submitted

**Checklist:**
- [ ] Validation works
- [ ] Error message clear
- [ ] Not submitted

### Test 3: Invalid Email
1. Email: notanemail
2. Password: Test@123
3. Click Sign In

**Expected:**
- Error about invalid email format

**Checklist:**
- [ ] Email validation works
- [ ] Clear error message

## ✅ Browser Compatibility

Test in:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Edge
- [ ] Safari (Mac)

**Expected:**
- All functions work
- Responsive on mobile
- No console errors

## ✅ Database Verification

### Check Database File
```powershell
# List database file
Get-Item campus-hub.db

# Should show file exists with size > 0
```

**Checklist:**
- [ ] `campus-hub.db` file exists
- [ ] File size > 0 bytes
- [ ] File in project root

### Verify Demo Users
After first backend start:
```powershell
# Open database (if sqlite3 installed)
sqlite3 campus-hub.db "SELECT COUNT(*) FROM users;"
```

**Expected:**
- Should return: 6 (1 admin + 5 students)

**Checklist:**
- [ ] Users table created
- [ ] Demo users inserted
- [ ] Can login with demo accounts

## ✅ Performance Checks

### Response Times
Using browser DevTools (F12 → Network tab):

**Expected Times:**
- Login request: < 500ms
- Page load: < 2s
- Asset loads: < 1s each

**Checklist:**
- [ ] No slow requests
- [ ] Page loads quickly
- [ ] No network bottlenecks

### Console Performance
Press F12 → Console

**Expected:**
- No performance warnings
- No memory leaks
- No unhandled promise rejections

**Checklist:**
- [ ] No performance issues
- [ ] Clean console
- [ ] Smooth interactions

## ✅ Security Quick Check

### Check Network Request
1. Open DevTools (F12)
2. Go to Network tab
3. Try to login
4. Click on auth/login request
5. Check Response

**Expected:**
- Should show JSON response
- Contains user data
- No password in response
- No sensitive data exposed

**Checklist:**
- [ ] Response is JSON
- [ ] No passwords visible
- [ ] Secure data handling

## ✅ Final Verification

Before declaring ready:

### Backend
- [ ] Running on localhost:3001
- [ ] Database initialized
- [ ] No console errors
- [ ] Health check passing

### Frontend
- [ ] Running on localhost:5173
- [ ] No console errors
- [ ] Login page displays
- [ ] Can access auth endpoints

### Functionality
- [ ] Can login with admin
- [ ] Can login with student
- [ ] Can register new user
- [ ] Can logout
- [ ] Can't access protected routes when not logged in
- [ ] Session persists on refresh

### Error Handling
- [ ] Wrong credentials show error
- [ ] Missing fields show error
- [ ] Invalid email shows error
- [ ] Server errors handled gracefully

## 🚨 Troubleshooting Quick Links

If you encounter errors:

1. **"Unexpected token '<'" error**
   → See: JSON_ERROR_FIX.md
   → Check: Is backend running?

2. **Port already in use**
   → See: JSON_ERROR_FIX.md → "Port Already in Use"
   → Solution: Kill process on port 3001

3. **Database errors**
   → See: JSON_ERROR_FIX.md → "Database Locked"
   → Solution: Delete campus-hub.db and restart

4. **Module not found**
   → Run: `npm install`

5. **CORS errors**
   → Check: Both servers running
   → Check: Correct URLs (3001, 5173)

## 📞 Support Resources

- **AUTH_IMPLEMENTATION.md** - Detailed auth docs
- **JSON_ERROR_FIX.md** - Error troubleshooting
- **QUICK_SETUP.md** - Quick visual guide
- **GETTING_STARTED.md** - Comprehensive guide
- **IMPLEMENTATION_SUMMARY.md** - Feature overview

## ✅ Sign-Off

When all checkboxes above are checked:

```
✅ System Requirements Met
✅ Setup Complete
✅ Backend Running
✅ Frontend Running
✅ All Health Checks Pass
✅ Functionality Tests Pass
✅ Error Handling Works
✅ Ready for Production Use

🎉 CAMPUS HUB IS READY TO USE! 🎉
```

---

**Date Checked:** _______________
**By:** _______________
**Notes:** _______________

---

**System Status: READY** ✅

Good luck! 🚀
