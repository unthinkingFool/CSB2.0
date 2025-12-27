# 🚀 Campus Hub - Complete Setup Guide

## Before You Start

- ✅ Node.js 16+ installed
- ✅ npm installed
- ✅ Two terminal windows ready

---

## 📋 Step-by-Step Setup

### Step 1️⃣: Navigate to Project
```powershell
cd "c:\Users\LENOVO\OneDrive\Desktop\hackathon\lovable - Copy\campus-hub-main"
```

### Step 2️⃣: Install Dependencies (First Time Only)
```powershell
npm install
```

Wait for installation to complete. You'll see:
```
added XXX packages
```

### Step 3️⃣: Start Backend Server (Terminal 1)
```powershell
node server.js
```

**Expected Output:**
```
✅ Database initialized successfully
╔════════════════════════════════════════╗
║  🚀 Campus Hub Backend Server Ready    ║
║  URL: http://localhost:3001            ║
║  Database: SQLite (campus-hub.db)      ║
╚════════════════════════════════════════╝
```

✅ **Backend is ready!** Leave this terminal running.

### Step 4️⃣: Start Frontend Server (Terminal 2)
In a **NEW** terminal:
```powershell
cd "c:\Users\LENOVO\OneDrive\Desktop\hackathon\lovable - Copy\campus-hub-main"
npm run dev
```

**Expected Output:**
```
Local: http://localhost:5173/
Press q to quit, r to restart
```

✅ **Frontend is ready!** Leave this terminal running.

### Step 5️⃣: Open Application
Click or copy-paste to your browser:
```
http://localhost:5173
```

---

## 🔐 Login to Application

### Use Demo Account:
- **Email:** admin@campushub.com
- **Password:** Admin@123

Click **Login** and you're in! 🎉

---

## 📚 Available Demo Accounts

All student accounts use password: **Student@123**

| Name | Email |
|------|-------|
| Admin User | admin@campushub.com |
| Raj Kumar | raj@student.com |
| Priya Singh | priya@student.com |
| Amit Patel | amit@student.com |
| Neha Sharma | neha@student.com |
| Arjun Verma | arjun@student.com |

---

## ✅ Verification Checklist

Make sure both these work:

1. **Backend Health Check**
   - Open: http://localhost:3001/api/health
   - Should show: `{"success":true,"status":"ok","database":"ready",...}`

2. **Frontend Access**
   - Open: http://localhost:5173
   - Should show: Login page with demo accounts

3. **Login Test**
   - Use: admin@campushub.com / Admin@123
   - Should redirect to: Dashboard

---

## 🆘 Common Issues & Quick Fixes

### ❌ "Cannot find module 'express'"
```powershell
npm install
```

### ❌ "Error: listen EADDRINUSE"
Port is already in use:
```powershell
# Kill the process using port 3001
Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess | Stop-Process -Force
node server.js
```

### ❌ "Cannot find module 'sqlite'"
```powershell
npm install sqlite sqlite3
```

### ❌ Unexpected token '<' JSON Error
- ✅ Make sure backend is running: `node server.js`
- ✅ Wait for database to initialize
- ✅ Try refreshing browser

### ❌ Database Error
Reset database and restart:
```powershell
# Delete database file
Remove-Item campus-hub.db -Force -ErrorAction SilentlyContinue

# Restart backend
node server.js
```

### ❌ CORS Error
Both servers must be running:
- Backend: Port 3001
- Frontend: Port 5173

---

## 🛠️ Useful Commands

```powershell
# Install all dependencies
npm install

# Start backend (Terminal 1)
node server.js

# Start frontend (Terminal 2)
npm run dev

# Build for production
npm run build

# Clean database
Remove-Item campus-hub.db -Force

# Stop servers
# Terminal 1: Ctrl + C
# Terminal 2: Ctrl + C
```

---

## 📁 Key Project Files

| File | Purpose |
|------|---------|
| `server.js` | Backend server & API |
| `src/App.tsx` | Main React app |
| `src/pages/Auth.tsx` | Login/Register page |
| `src/services/auth.service.ts` | Authentication logic |
| `src/contexts/AuthContext.tsx` | Global auth state |
| `campus-hub.db` | SQLite database (auto-created) |

---

## 🔄 Normal Startup Sequence

### Time: 0:00 - Start Backend
```powershell
Terminal 1: node server.js
```
Wait for: ✅ Database initialized successfully

### Time: 0:05 - Start Frontend
```powershell
Terminal 2: npm run dev
```
Wait for: Local: http://localhost:5173/

### Time: 0:10 - Open Browser
Navigate to: http://localhost:5173

### Time: 0:15 - Login
Email: admin@campushub.com
Password: Admin@123

---

## 📖 Additional Documentation

- **AUTH_IMPLEMENTATION.md** - Detailed auth system docs
- **JSON_ERROR_FIX.md** - Troubleshooting guide
- **GETTING_STARTED.md** - General setup guide

---

## 💡 Pro Tips

1. **Keep both terminals visible** so you can see any errors
2. **Check browser console** (F12) if something fails
3. **Don't close either terminal** - both servers need to run
4. **Save changes** - Frontend auto-reloads, backend might need restart
5. **Database persists** - deleted items stay deleted until you reset database

---

## 🎯 What You Can Do Now

✅ Login with demo accounts
✅ Register new accounts
✅ Post complaints
✅ Create marketplace listings
✅ Post notices
✅ Report lost & found items
✅ Track blood donations
✅ And more!

---

## 🚀 Next Steps

After successful login:
1. Explore the Dashboard
2. Try creating a post
3. Test different user types (Admin vs Student)
4. Create your own account
5. Check out all the features

---

**Questions or Issues?** Check the troubleshooting section above or read JSON_ERROR_FIX.md for detailed solutions.

**Happy Coding! 🎉**
