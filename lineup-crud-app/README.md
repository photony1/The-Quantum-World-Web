# Music Festival Line-Up CRUD Application
## Group 7 - ICT251 Activity 4

This is a complete Node.js/Express REST API CRUD application for managing a music festival line-up.

## Project Structure
```
lineup-crud-app/
├── backend/
│   ├── package.json
│   ├── .env
│   ├── server.js
│   ├── db.js
│   └── database.sql
└── frontend/
    └── index.html
```

## Setup Instructions

### 1. Database Setup

First, create the database and table:

1. **Open MySQL command line or MySQL Workbench**
2. **Run the SQL script:**
   ```sql
   CREATE DATABASE IF NOT EXISTS campus_crud;
   USE campus_crud;
   
   CREATE TABLE IF NOT EXISTS lineup (
     id INT PRIMARY KEY AUTO_INCREMENT,
     festival_name VARCHAR(150) NOT NULL,
     artist_name VARCHAR(150) NOT NULL,
     stage VARCHAR(100) NOT NULL,
     start_time VARCHAR(50),
     end_time VARCHAR(50),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   );
   
   -- Insert sample data (12 records)
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

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:
```bash
npm init -y
npm install express mysql2 dotenv cors
npm install --save-dev nodemon
```

Or simply run:
```bash
npm install
```

Update `.env` file with your database credentials:
```
PORT=3000
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=campus_crud
```

Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The API will be available at: **http://localhost:3000**

### 3. Frontend Setup

Open `frontend/index.html` in your browser or serve it through a local server.

## API Endpoints

### GET - List all lineup records
```
GET http://localhost:3000/api/lineup
```

**Response:**
```json
[
  {
    "id": 1,
    "festival_name": "Lusaka Music Fest 2025",
    "artist_name": "Chef 187",
    "stage": "Main Stage",
    "start_time": "18:00",
    "end_time": "19:30",
    "created_at": "2025-11-11T12:00:00.000Z",
    "updated_at": "2025-11-11T12:00:00.000Z"
  }
]
```

### GET - Get one record by ID
```
GET http://localhost:3000/api/lineup/:id
```

Example:
```
GET http://localhost:3000/api/lineup/1
```

### POST - Create a new record
```
POST http://localhost:3000/api/lineup
Content-Type: application/json

{
  "festival_name": "Lusaka Music Fest 2025",
  "artist_name": "New Artist",
  "stage": "Main Stage",
  "start_time": "20:00",
  "end_time": "21:30"
}
```

**Response:**
```json
{
  "id": 13,
  "festival_name": "Lusaka Music Fest 2025",
  "artist_name": "New Artist",
  "stage": "Main Stage",
  "start_time": "20:00",
  "end_time": "21:30",
  "message": "Lineup record created successfully"
}
```

### PUT - Update a record
```
PUT http://localhost:3000/api/lineup/:id
Content-Type: application/json

{
  "festival_name": "Lusaka Music Fest 2025",
  "artist_name": "Updated Artist",
  "stage": "Dance Arena",
  "start_time": "21:00",
  "end_time": "22:30"
}
```

### DELETE - Delete a record
```
DELETE http://localhost:3000/api/lineup/:id
```

Example:
```
DELETE http://localhost:3000/api/lineup/1
```

## Testing with Postman

1. **Open Postman**
2. **Test each endpoint:**
   - GET http://localhost:3000/api/lineup
   - GET http://localhost:3000/api/lineup/1
   - POST http://localhost:3000/api/lineup (with JSON body)
   - PUT http://localhost:3000/api/lineup/1 (with JSON body)
   - DELETE http://localhost:3000/api/lineup/1

## Frontend Features

- 📋 View all artists in the lineup
- ➕ Add new artists
- ✏️ Edit existing artists
- 🗑️ Delete artists
- 🔄 Real-time updates
- 📱 Responsive design
- 🎨 Beautiful UI with gradient background

## Database Schema

**Table: `lineup`**

| Column | Type | Constraints |
|--------|------|-------------|
| id | INT | PRIMARY KEY, AUTO_INCREMENT |
| festival_name | VARCHAR(150) | NOT NULL |
| artist_name | VARCHAR(150) | NOT NULL |
| stage | VARCHAR(100) | NOT NULL |
| start_time | VARCHAR(50) | NULL |
| end_time | VARCHAR(50) | NULL |
| created_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP |
| updated_at | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP ON UPDATE |

## Requirements Met

✅ Single-table database with 10+ sample records
✅ Node.js/Express REST API
✅ GET endpoint (list and single)
✅ POST endpoint (create)
✅ PUT endpoint (update)
✅ DELETE endpoint (delete)
✅ HTML/JavaScript frontend
✅ CORS enabled for cross-origin requests
✅ Timestamps (created_at, updated_at)
✅ Error handling
✅ Postman-ready API

## Notes

- Make sure MySQL is running before starting the backend
- The frontend runs on any port (just open the HTML file)
- The backend runs on port 3000
- CORS is enabled to allow frontend to communicate with API
- All timestamps are automatically managed by the database

## Author
Group 7 - ICT251 Activity 4
