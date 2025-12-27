# Campus Hub - Admin & Student Authentication System

## ✅ Implementation Complete

### Database Structure
- **Users Table** created with fields: id, name, email, password, role, phone, department
- **Role-based Access Control** implemented
- All existing tables linked to user_id for ownership tracking

---

## 🔐 Default Login Credentials

### 👑 ADMIN ACCOUNT
```
Email: admin@campushub.com
Password: Admin@123
Role: Admin
Department: Administration
```

**Admin Permissions:**
- ✅ View all posts
- ✅ Delete ANY post (no restrictions)
- ✅ Manage all complaints
- ✅ Manage all notices
- ✅ Full access to all features
- ✅ User management capabilities

---

### 👨‍🎓 STUDENT ACCOUNTS (5 Available)

#### Student 1: Raj Kumar
```
Email: raj@student.com
Password: Student@123
Department: Computer Science
```

#### Student 2: Priya Singh
```
Email: priya@student.com
Password: Student@123
Department: Engineering
```

#### Student 3: Amit Patel
```
Email: amit@student.com
Password: Student@123
Department: Business
```

#### Student 4: Neha Sharma
```
Email: neha@student.com
Password: Student@123
Department: Medicine
```

#### Student 5: Arjun Verma
```
Email: arjun@student.com
Password: Student@123
Department: Law
```

**Student Permissions:**
- ✅ View all posts
- ✅ Delete ONLY OWN posts
- ✅ Post Lost & Found items
- ✅ Create marketplace listings
- ✅ File complaints
- ✅ Request blood donation
- ❌ Cannot delete others' posts
- ❌ Cannot manage system-wide settings

---

## 🔧 Technical Implementation

### Backend Changes (server.js)

#### 1. New Users Table
```sql
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  role TEXT DEFAULT 'student',
  phone TEXT,
  department TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

#### 2. Authentication Endpoints
- **POST /api/auth/login** - Login with email and password
- **GET /api/auth/users** - Get all users (for demo purposes)

#### 3. Role-Based Delete Endpoints
All delete operations now check:
- **Admin users**: Can delete any post
- **Student users**: Can only delete their own posts

Updated endpoints:
- `DELETE /api/complaints/:id`
- `DELETE /api/marketplace/:id`
- Similar pattern applied to other content types

### Frontend Changes

#### 1. Enhanced Auth Page (Auth.tsx)
- Side-by-side layout with credentials display
- Quick login buttons for each demo account
- One-click copy for email credentials
- Real-time feedback with toast notifications
- Login form with proper validation

#### 2. Updated Dashboard (Dashboard.tsx)
- User profile card showing:
  - Current logged-in user name
  - Email address
  - Role badge (Admin/Student)
  - Department information
- Role-specific UI elements display

#### 3. Credentials Service (credentials.ts)
- Centralized storage of all demo credentials
- Role permissions mapping
- Easy reference for testing

---

## 🚀 How to Test

### Quick Login (on Auth Page)
1. Open the Auth page
2. Click any "Login" button next to a user account
3. Credentials auto-fill
4. Automatically redirected to Dashboard
5. User info displays in dashboard

### Manual Login
1. Enter email and password manually
2. Click "Sign In"
3. System validates against database
4. Returns user info with role
5. Stores in localStorage for session

### Test Role-Based Deletion
1. **As Admin:**
   - Post a complaint/marketplace item as Student 1
   - Login as Admin
   - Admin CAN delete Student 1's posts
   - Delete should succeed with no restrictions

2. **As Student:**
   - Student 1 posts an item
   - Student 2 tries to delete Student 1's item
   - Delete should FAIL with: "Unauthorized: You can only delete your own items"
   - Student 1 CAN delete their own item

---

## 📊 Database Queries

### Login Query
```javascript
const user = await db.get(
  'SELECT * FROM users WHERE email = ? AND password = ?',
  [email, password]
);
```

### Check Authorization (Delete)
```javascript
const complaint = await db.get('SELECT * FROM complaints WHERE id = ?', [id]);
if (userRole !== 'admin' && complaint.user_id !== userId) {
  return error: 'Unauthorized'
}
```

---

## 🔄 User Flow

```
Auth Page (Multiple Options)
    ↓
(Quick Login or Manual Login)
    ↓
Validate Credentials
    ↓
Return User Data with Role
    ↓
Store in localStorage
    ↓
Redirect to Dashboard
    ↓
Display User Info & Role-Specific Features
    ↓
All Future Requests Use User ID & Role for Authorization
```

---

## ✨ Key Features

### Security
- Role-based access control (RBAC)
- User ownership tracking on all posts
- Authorization checks on delete operations
- Unique email constraint in database

### Efficiency
- Centralized user management
- Single authentication service
- Consistent permission checking across endpoints
- User data cached in localStorage

### User Experience
- Quick demo account login on auth page
- One-click credentials copying
- Real-time validation feedback
- User profile display on dashboard
- Clear role indicators (badges)

---

## 📝 Notes

- All default passwords are plain text (for demo purposes)
- In production, use bcrypt or similar for password hashing
- Each user ID is tied to their posts for ownership tracking
- Admin role provides complete access
- Student role is restricted to own content management

---

## 🎯 Next Steps

To further enhance the system:
1. Add password hashing (bcrypt)
2. Implement JWT tokens
3. Add role-based UI element visibility
4. Create user management page (Admin only)
5. Add activity logging for admin actions
6. Implement user registration system
7. Add email verification
8. Create role-specific dashboard views
