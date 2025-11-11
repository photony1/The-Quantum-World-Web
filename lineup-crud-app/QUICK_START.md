# Quick Start Guide - Group 7 CRUD App

## 🚀 Getting Started (5 minutes)

### Step 1: Create the Database
Open MySQL Workbench or MySQL Command Line and run:

```sql
CREATE DATABASE campus_crud;
USE campus_crud;

CREATE TABLE lineup (
  id INT PRIMARY KEY AUTO_INCREMENT,
  festival_name VARCHAR(150) NOT NULL,
  artist_name VARCHAR(150) NOT NULL,
  stage VARCHAR(100) NOT NULL,
  start_time VARCHAR(50),
  end_time VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO lineup (festival_name, artist_name, stage, start_time, end_time) VALUES
('Lusaka Music Fest 2025', 'Chef 187', 'Main Stage', '18:00', '19:30'),
('Lusaka Music Fest 2025', 'Dizmo', 'Dance Arena', '19:45', '21:15'),
('Lusaka Music Fest 2025', 'Macky2', 'Sunset Stage', '21:30', '23:00'),
('Lusaka Music Fest 2025', 'Blood Kid', 'Main Stage', '23:15', '00:45'),
('Lusaka Music Fest 2025', 'Yo Maps', 'Dance Arena', '01:00', '02:30'),
('Lusaka Music Fest 2025', 'Jae Cash', 'Harmony Stage', '14:00', '15:30'),
('Lusaka Music Fest 2025', 'Slap Dee', 'Main Stage', '15:45', '17:15'),
('Lusaka Music Fest 2025', 'K Millian', 'Sunset Stage', '17:30', '19:00'),
('Lusaka Music Fest 2025', 'Munga', 'Dance Arena', '20:00', '21:30'),
('Lusaka Music Fest 2025', 'T-Sean', 'Harmony Stage', '22:00', '23:30'),
('Lusaka Music Fest 2025', 'Jay Ritch', 'Main Stage', '02:00', '03:30'),
('Lusaka Music Fest 2025', 'Mainje', 'Sunset Stage', '04:00', '05:00');
```

### Step 2: Install Node Packages
```bash
cd backend
npm install
```

### Step 3: Start the Server
```bash
npm start
```

You should see: `Server running on http://localhost:3000`

### Step 4: Open Frontend
Open `frontend/index.html` in your web browser

## ✅ Test the API

### Using the Frontend (Easiest)
1. Open the HTML file in your browser
2. Fill in the form and click "Save Artist"
3. See the lineup table update in real-time

### Using Postman
1. Import `Postman_Collection.json`
2. Test each endpoint:
   - **GET /api/lineup** - See all artists
   - **GET /api/lineup/1** - Get artist #1
   - **POST /api/lineup** - Add new artist
   - **PUT /api/lineup/1** - Update artist #1
   - **DELETE /api/lineup/1** - Delete artist #1

### Using Command Line (curl)
```bash
# Get all artists
curl http://localhost:3000/api/lineup

# Get artist #1
curl http://localhost:3000/api/lineup/1

# Add new artist
curl -X POST http://localhost:3000/api/lineup \
  -H "Content-Type: application/json" \
  -d '{"festival_name":"Lusaka Music Fest 2025","artist_name":"New Artist","stage":"Main Stage","start_time":"20:00","end_time":"21:30"}'

# Update artist #1
curl -X PUT http://localhost:3000/api/lineup/1 \
  -H "Content-Type: application/json" \
  -d '{"festival_name":"Lusaka Music Fest 2025","artist_name":"Updated Name","stage":"Dance Arena","start_time":"21:00","end_time":"22:30"}'

# Delete artist #1
curl -X DELETE http://localhost:3000/api/lineup/1
```

## 📁 File Structure
```
lineup-crud-app/
├── backend/
│   ├── package.json (dependencies)
│   ├── .env (database config)
│   ├── server.js (main API server)
│   ├── db.js (database connection)
│   └── database.sql (SQL script)
├── frontend/
│   └── index.html (beautiful UI)
├── README.md (full documentation)
├── Postman_Collection.json (test collection)
└── setup.bat (one-click setup)
```

## 🐛 Troubleshooting

**Error: "Failed to connect to database"**
- Make sure MySQL is running
- Check .env file has correct credentials
- Verify database exists

**Error: "Cannot find module 'express'"**
- Run: `npm install` in backend folder

**Blank page in frontend**
- Make sure backend server is running (npm start)
- Check browser console for errors (F12)
- Try opening in a different browser

**Port 3000 already in use**
- Change PORT in .env file
- Or kill the process: `netstat -ano | findstr :3000`

## 📝 Assignment Requirements - All Met! ✅

- ✅ Single-table database (lineup table)
- ✅ 10+ sample records (12 artists)
- ✅ Timestamps (created_at, updated_at)
- ✅ GET endpoint - list all
- ✅ GET endpoint - single record
- ✅ POST endpoint - create
- ✅ PUT endpoint - update
- ✅ DELETE endpoint - delete
- ✅ HTML/JavaScript frontend
- ✅ Beautiful, responsive UI
- ✅ Postman-ready API

## 🎯 What to Submit

1. **Backend folder** with all Node.js files
2. **Frontend folder** with HTML UI
3. **Postman collection** (JSON file)
4. **Screenshots** showing:
   - API endpoints in Postman
   - Frontend working with data
   - Database with sample data
5. **README** with setup instructions

Good luck! 🎵
