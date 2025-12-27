# JSON Parse Error - Troubleshooting Guide

## ❌ Error: "Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

This error occurs when the server returns HTML (an error page) instead of JSON.

## ✅ Quick Fix

### Step 1: Ensure Backend Server is Running
```bash
node server.js
```

You should see:
```
╔════════════════════════════════════════╗
║  🚀 Campus Hub Backend Server Ready    ║
║  URL: http://localhost:3001            ║
║  Database: SQLite (campus-hub.db)      ║
╚════════════════════════════════════════╝
```

### Step 2: Verify Server Health
Open your browser and go to: `http://localhost:3001/api/health`

You should see:
```json
{
  "success": true,
  "status": "ok",
  "database": "ready",
  "timestamp": "2025-12-27T10:30:45.123Z"
}
```

### Step 3: Check Frontend Running
In another terminal:
```bash
npm run dev
```

Access the app at: `http://localhost:5173`

---

## 🔍 Common Causes & Solutions

### Issue 1: Port Already in Use
**Error:** "Error: listen EADDRINUSE: address already in use :::3001"

**Solution:**
```bash
# Kill process on port 3001 (Windows PowerShell)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess | Stop-Process -Force

# Or change the port in server.js
# Change: const PORT = 3001; to const PORT = 3002;
```

### Issue 2: Database Locked
**Error:** "SQLITE_CANTOPEN: unable to open database file"

**Solution:**
```bash
# Delete the old database file and restart
Remove-Item campus-hub.db -Force
node server.js
```

### Issue 3: Module Not Found
**Error:** "Cannot find module 'express'"

**Solution:**
```bash
npm install
```

### Issue 4: CORS Error
**Error:** "Access to XMLHttpRequest blocked by CORS policy"

**Solution:** The CORS is already configured, but make sure:
- Both servers are running
- Frontend is on `http://localhost:5173`
- Backend is on `http://localhost:3001`

### Issue 5: Database Not Ready
**Error:** "Database is not ready. Please try again in a moment."

**Solution:**
- Server is starting up. Wait a few seconds and try again.
- Check the console for database initialization messages.

---

## 📋 Correct Startup Sequence

### Terminal 1 (Backend):
```bash
cd c:\Users\LENOVO\OneDrive\Desktop\hackathon\lovable - Copy\campus-hub-main
node server.js
```

**Wait for:** `✅ Database initialized successfully`

### Terminal 2 (Frontend):
```bash
cd c:\Users\LENOVO\OneDrive\Desktop\hackathon\lovable - Copy\campus-hub-main
npm run dev
```

**Wait for:** `Local: http://localhost:5173/`

### Browser:
Navigate to: `http://localhost:5173`

---

## 🧪 Testing the API Directly

### Test Login Endpoint
```powershell
$body = @{
    email = "admin@campushub.com"
    password = "Admin@123"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3001/api/auth/login" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body
```

### Test Health Endpoint
```powershell
Invoke-RestMethod -Uri "http://localhost:3001/api/health"
```

---

## 🛠️ Advanced Debugging

### Enable Detailed Logging
Add to top of server.js:
```javascript
// Add logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
  next();
});
```

### Check Database
```powershell
# View database contents (if you have sqlite3 installed)
sqlite3 campus-hub.db "SELECT * FROM users;"
```

### Network Tab
1. Open Browser DevTools (F12)
2. Go to Network tab
3. Try login
4. Click on the request
5. Check:
   - Status code (should be 200 for success, 401 for auth error)
   - Response tab (should show JSON, not HTML)
   - Headers (Content-Type should be application/json)

---

## ✅ Verification Checklist

- [ ] Backend running on `http://localhost:3001`
- [ ] `/api/health` returns `"database": "ready"`
- [ ] Frontend running on `http://localhost:5173`
- [ ] Can access login page
- [ ] No errors in browser console
- [ ] No errors in terminal

---

## 🆘 Still Not Working?

1. **Check browser console (F12)** for exact error message
2. **Check terminal** for server errors
3. **Check Network tab** to see actual API response
4. **Delete database** and restart server: `Remove-Item campus-hub.db -Force`
5. **Clear browser cache:** Ctrl+Shift+Delete, select "All time", Clear

---

**If all else fails:** Try the complete reset:

```powershell
# Kill all node processes
Get-Process node | Stop-Process -Force

# Delete database
Remove-Item campus-hub.db -Force -ErrorAction SilentlyContinue

# Reinstall dependencies
npm install

# Start fresh
node server.js
```

Then in another terminal:
```powershell
npm run dev
```

---

**Last Updated:** December 27, 2025
