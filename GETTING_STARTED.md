# Campus Hub - Getting Started Guide

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Backend Server
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

### Step 3: Start Frontend (in another terminal)
```bash
npm run dev
```

You should see:
```
Local: http://localhost:5173/
```

## 🌐 Open in Browser
Navigate to: **http://localhost:5173**

---

## 🔐 Demo Login Credentials

### Admin Account
- **Email:** admin@campushub.com
- **Password:** Admin@123

### Student Accounts (Password for all: `Student@123`)
1. raj@student.com
2. priya@student.com
3. amit@student.com
4. neha@student.com
5. arjun@student.com

---

## 📁 Project Structure

```
campus-hub-main/
├── server.js                 # Backend server (Node.js + Express + SQLite)
├── src/
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # React entry point
│   ├── pages/
│   │   ├── Auth.tsx         # Login/Register page
│   │   ├── Dashboard.tsx    # Main dashboard
│   │   └── ...              # Other pages
│   ├── services/
│   │   ├── auth.service.ts  # Authentication API service
│   │   └── ...              # Other services
│   ├── contexts/
│   │   └── AuthContext.tsx  # Global auth state
│   └── components/
│       ├── ProtectedRoute.tsx # Route protection
│       └── ...              # UI components
├── package.json             # Dependencies
└── vite.config.ts          # Vite config
```

---

## 🔑 Key Features

✅ **User Authentication**
- Secure login/register with password validation
- Session management
- Role-based access (Admin/Student)

✅ **Protected Routes**
- Automatic redirect to login if not authenticated
- Admin-only pages support

✅ **Database**
- SQLite local database
- Automatic schema creation
- Default demo accounts

✅ **Modern UI**
- Responsive design
- Dark mode support
- Loading states and error handling

---

## 🛠️ Development Commands

```bash
# Install dependencies
npm install

# Start backend server
node server.js

# Start frontend dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📊 API Endpoints

### Authentication
```
POST   /api/auth/login           - Login user
POST   /api/auth/register        - Register new user
GET    /api/auth/verify          - Verify session
POST   /api/auth/change-password - Change password
GET    /api/health               - Check server status
```

### Other Services
```
GET    /api/complaints           - Get all complaints
POST   /api/complaints           - Create complaint
GET    /api/notices              - Get all notices
POST   /api/notices              - Create notice
... and more for other features
```

---

## 🐛 Troubleshooting

### Error: "Unexpected token '<'"
Backend server is not running. Make sure to start it first:
```bash
node server.js
```

### Port Already in Use
If port 3001 is taken:
```powershell
# Kill process on port 3001
Get-Process -Id (Get-NetTCPConnection -LocalPort 3001).OwningProcess | Stop-Process -Force
```

### Database Error
Reset the database:
```bash
Remove-Item campus-hub.db -Force
node server.js
```

### CORS Error
Both servers must be running:
- Backend: `http://localhost:3001`
- Frontend: `http://localhost:5173`

See **JSON_ERROR_FIX.md** for complete troubleshooting guide.

---

## 🔒 Security Notes

⚠️ **For Development Only**

- Passwords stored in plaintext (use bcrypt in production)
- localStorage for sessions (use JWT + httpOnly cookies in production)
- No password hashing (implement in production)
- Demo credentials hardcoded (use proper user management)

---

## 📚 Documentation

- [AUTH_IMPLEMENTATION.md](AUTH_IMPLEMENTATION.md) - Authentication system details
- [JSON_ERROR_FIX.md](JSON_ERROR_FIX.md) - Error troubleshooting
- [DATABASE_SETUP.md](DATABASE_SETUP.md) - Database configuration

---

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

Output: `dist/` folder

### Start Production Server
```bash
NODE_ENV=production node server.js
```

For deployment, consider:
- Using PostgreSQL instead of SQLite
- Implementing JWT authentication
- Adding password hashing (bcrypt)
- Setting up environment variables
- Using a process manager (PM2)

---

## 💡 Tips

1. **Keep browser console open** (F12) while developing
2. **Check Network tab** if API calls fail
3. **Use Postman** to test endpoints directly
4. **Database resets** delete all user data - use carefully
5. **Hot reload** works for frontend changes automatically

---

## 📞 Support

If you encounter issues:
1. Check console errors (F12)
2. Check terminal output
3. Read JSON_ERROR_FIX.md
4. Verify both servers are running
5. Try database reset

---

**Happy Coding! 🎉**

Last Updated: December 27, 2025
