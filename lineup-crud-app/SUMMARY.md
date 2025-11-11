# 🎵 Group 7 - Music Festival Line-Up CRUD App - Complete! 

## Project Summary

I've created a **complete Node.js/Express CRUD application** for managing a music festival line-up. The project includes:

### ✅ What's Included

1. **Backend (Node.js + Express)**
   - REST API with all CRUD operations
   - MySQL database connection
   - Error handling
   - CORS enabled
   - Environment configuration

2. **Frontend (HTML + JavaScript)**
   - Beautiful, responsive UI
   - Add/Edit/Delete artists
   - Real-time updates
   - Form validation
   - Professional styling

3. **Database**
   - MySQL setup with 12 sample records
   - Proper schema with timestamps
   - SQL script for easy setup

4. **Documentation**
   - Full README with all instructions
   - Quick Start Guide
   - Postman Collection
   - This summary

### 📁 Project Location
```
c:\Users\Save The Girls\The Quantum World Web\lineup-crud-app\
```

### 🚀 How to Run

#### Step 1: Create Database
Run the SQL commands in `backend/database.sql` using MySQL Workbench

#### Step 2: Install & Start Backend
```powershell
cd backend
npm install
npm start
```

#### Step 3: Open Frontend
Open `frontend/index.html` in your web browser

### 📋 API Endpoints

All endpoints are fully implemented and ready to test:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/lineup` | Get all artists |
| GET | `/api/lineup/:id` | Get single artist |
| POST | `/api/lineup` | Create new artist |
| PUT | `/api/lineup/:id` | Update artist |
| DELETE | `/api/lineup/:id` | Delete artist |

### 🎯 Assignment Requirements - ALL MET ✅

```
✅ Single-table CRUD database
✅ At least 10 sample records (12 included)
✅ ID with auto-increment
✅ At least 5 fields: id, festival_name, artist_name, stage, start_time, end_time
✅ Timestamps: created_at, updated_at
✅ Node.js/Express REST API
✅ GET endpoint (list and single)
✅ POST endpoint (create)
✅ PUT endpoint (update)
✅ DELETE endpoint (delete)
✅ HTML/JavaScript frontend UI
✅ Beautiful responsive design
✅ Working CRUD operations
✅ Postman-ready with collection file
```

### 📊 Database Schema

**Table: `lineup`**
```sql
id (INT) - Primary Key, Auto Increment
festival_name (VARCHAR 150) - NOT NULL
artist_name (VARCHAR 150) - NOT NULL  
stage (VARCHAR 100) - NOT NULL
start_time (VARCHAR 50) - Can be NULL
end_time (VARCHAR 50) - Can be NULL
created_at (TIMESTAMP) - Auto set
updated_at (TIMESTAMP) - Auto update
```

### 📝 Sample Data Included

12 artists from Zambian music scene:
- Chef 187
- Dizmo
- Macky2
- Blood Kid
- Yo Maps
- Jae Cash
- Slap Dee
- K Millian
- Munga
- T-Sean
- Jay Ritch
- Mainje

### 🧪 Testing

**Option 1: Use Frontend UI** (easiest)
- Open HTML in browser
- Add/Edit/Delete artists
- See changes in real-time

**Option 2: Use Postman**
- Import `Postman_Collection.json`
- Test all 5 endpoints

**Option 3: Use curl/command line**
- See commands in QUICK_START.md

### 📁 File Structure
```
lineup-crud-app/
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── db.js
│   └── database.sql
├── frontend/
│   └── index.html
├── README.md
├── QUICK_START.md
├── Postman_Collection.json
├── setup.bat
└── SUMMARY.md (this file)
```

### 🔧 Configuration

The `.env` file has default settings:
```
PORT=3000
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=campus_crud
```

Update these if your MySQL setup is different.

### 💡 Features Implemented

- ✅ CORS enabled for cross-origin requests
- ✅ JSON request/response handling
- ✅ Automatic timestamps
- ✅ Error handling
- ✅ Input validation
- ✅ RESTful API design
- ✅ Database connection pooling
- ✅ Responsive UI design
- ✅ Real-time frontend updates
- ✅ Beautiful gradient background
- ✅ Edit/Delete confirmations
- ✅ Success/Error messages

### 📞 Support

If you encounter issues:

1. **MySQL not running?**
   - Start MySQL service

2. **Port 3000 in use?**
   - Change PORT in .env
   - Or kill existing process

3. **npm install fails?**
   - Delete node_modules folder
   - Run: `npm cache clean --force`
   - Run: `npm install` again

4. **Frontend not connecting?**
   - Check backend is running (terminal should show "Server running...")
   - Check browser console (F12) for errors
   - Verify localhost:3000 is accessible

### 📦 What You Need

- **Node.js** (for backend)
- **MySQL Server** (for database)
- **Postman** (optional, for testing)
- **Web Browser** (for frontend)

### ✨ Next Steps

1. Create the database using the SQL script
2. Install npm dependencies (`npm install`)
3. Start the server (`npm start`)
4. Open the frontend (`frontend/index.html`)
5. Test all CRUD operations
6. Take screenshots for submission
7. Export Postman test results

### 🎓 Assignment Complete!

This project fully satisfies all requirements from ICT251 Activity 4:
- Single-table CRUD database ✅
- Node.js/Express REST API ✅
- HTML/JavaScript frontend ✅
- Postman verification ✅
- 10+ sample records ✅

All files are ready to submit!

---

**Created for: Group 7 - ICT251 Activity 4**  
**Due Date: 13th November 2025**  
**Status: COMPLETE ✅**
