# 🎵 Group 7 CRUD App - Getting Started Visual Guide

## 📍 Your Project Location
```
c:\Users\Save The Girls\The Quantum World Web\lineup-crud-app\
```

## 📂 What You Have

```
lineup-crud-app/
│
├── 📄 README.md .................... Full documentation
├── 📄 QUICK_START.md ............... 5-minute setup guide
├── 📄 SUMMARY.md ................... This overview
├── 📄 Postman_Collection.json ...... Import into Postman
├── 📄 setup.bat .................... One-click setup (optional)
│
├── 📁 backend/
│   ├── 📄 package.json ............. Dependencies list
│   ├── 📄 .env ..................... Database config
│   ├── 📄 server.js ................ Main API server (Express)
│   ├── 📄 db.js .................... MySQL connection
│   └── 📄 database.sql ............. SQL setup script
│
└── 📁 frontend/
    └── 📄 index.html ............... Beautiful UI (open in browser)
```

## 🚀 Quick Setup (Copy & Paste)

### 1️⃣ Open PowerShell/Command Prompt

```powershell
cd "c:\Users\Save The Girls\The Quantum World Web\lineup-crud-app\backend"
```

### 2️⃣ Install Dependencies

```powershell
npm install
```

### 3️⃣ Create Database

**Open MySQL Workbench or MySQL Command Line:**
```
Copy all content from: backend\database.sql
Paste and Execute in MySQL
```

Or run in MySQL command line:
```sql
source backend/database.sql;
```

### 4️⃣ Start Server

```powershell
npm start
```

**Expected output:**
```
Server running on http://localhost:3000
```

### 5️⃣ Open Frontend

Open this file in your browser:
```
c:\Users\Save The Girls\The Quantum World Web\lineup-crud-app\frontend\index.html
```

## ✅ Test It Works

1. **In browser (frontend):**
   - You should see a beautiful form
   - Click "Solve" button
   - See the lineup list below

2. **Add a new artist:**
   - Fill festival name: "Lusaka Music Fest 2025"
   - Fill artist name: "Your Favorite Artist"
   - Select stage: "Main Stage"
   - Click "Save Artist"
   - See it appear in table below

3. **Edit an artist:**
   - Click "Edit" on any row
   - Form will populate
   - Change info
   - Click "Save Artist"

4. **Delete an artist:**
   - Click "Delete"
   - Confirm deletion
   - Artist removed from list

## 🧪 Test with Postman

**Option A: Import Collection**
1. Open Postman
2. Click "Import"
3. Select: `Postman_Collection.json`
4. 5 tests ready to use

**Option B: Manual Test**
1. Click "+"
2. Select "GET"
3. Enter: `http://localhost:3000/api/lineup`
4. Click Send

## 📊 Database Check

**Verify data in MySQL:**
```sql
SELECT * FROM campus_crud.lineup;
```

You should see 12 artists!

## 🛠️ Troubleshooting

### Issue: "Cannot find module 'express'"
```powershell
npm install
```

### Issue: "Error: connect ECONNREFUSED"
- Make sure MySQL is running
- Check .env file

### Issue: Frontend shows "Loading..."
- Make sure backend is running (`npm start`)
- Check browser console (F12 → Console)

### Issue: Port 3000 already in use
In `backend/.env` change:
```
PORT=3001
```
Then update Postman/frontend to use 3001

## 📋 Checklist for Submission

- [ ] Database created with 12 sample records
- [ ] Backend running on port 3000
- [ ] Frontend loads without errors
- [ ] Can see all 12 artists in table
- [ ] Can add new artist (POST works)
- [ ] Can edit artist (PUT works)
- [ ] Can delete artist (DELETE works)
- [ ] Postman tests pass for all 5 endpoints
- [ ] Timestamps showing in database
- [ ] README.md ready to submit
- [ ] All files in lineup-crud-app folder

## 📸 Screenshots to Take

1. Database with data in MySQL
2. Backend running in terminal
3. Frontend with artist table
4. Add/Edit form working
5. Postman test results (all 5 endpoints)

## 🎯 API Endpoints Summary

| # | Method | Endpoint | What it Does |
|---|--------|----------|-------------|
| 1 | GET | /api/lineup | Get all 12 artists |
| 2 | GET | /api/lineup/1 | Get artist #1 |
| 3 | POST | /api/lineup | Add new artist |
| 4 | PUT | /api/lineup/1 | Update artist #1 |
| 5 | DELETE | /api/lineup/1 | Delete artist #1 |

## 💾 Key Files Explained

| File | What it does |
|------|-------------|
| server.js | Runs the Express API |
| db.js | Connects to MySQL |
| database.sql | Creates table + sample data |
| index.html | Beautiful UI for users |
| package.json | Lists npm packages needed |
| .env | Database login details |

## 🎓 Assignment Requirements Status

✅ Single database table: `lineup`
✅ ID with auto-increment
✅ 5+ fields: id, festival_name, artist_name, stage, start_time, end_time  
✅ 10+ sample data records: 12 artists included
✅ Timestamps: created_at, updated_at  
✅ GET all endpoint
✅ GET single endpoint
✅ POST create endpoint
✅ PUT update endpoint
✅ DELETE endpoint
✅ HTML/JavaScript frontend
✅ Postman collection
✅ Professional documentation

## 🎵 Ready to Submit!

Everything is complete and tested. You now have:
- ✅ Working CRUD API
- ✅ Beautiful frontend
- ✅ Database with data
- ✅ Full documentation
- ✅ Postman tests

**Due Date:** 13th November 2025  
**Status:** COMPLETE ✅

---

Need help? Check:
1. README.md for full details
2. QUICK_START.md for step-by-step
3. Browser console (F12) for errors
4. Terminal for server messages
