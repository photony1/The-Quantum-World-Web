# Oral Defense Prep Checklist

## Architecture
- Backend: Node.js, Express, mysql2, dotenv, cors
- Database: MySQL `campus_crud`, table `lineup(id, name, genre, stage, time)`
- Frontend: Vanilla HTML/CSS/JS, fetch to REST API at `http://localhost:3000/api/lineup`

## Run & Demo
- Start backend: from `lineup-crud-app/backend` run `npm start` (port 3000)
- Initialize DB: `node setup-database.js` (creates DB/table, seeds 12 artists)
- Open frontend: `lineup-crud-app/frontend/index.html` and demo Create/Read/Update/Delete
- Assignment B: open `assignment B.html`, enter a, b, c → Solve; use Reset

## Backend Walkthrough
- Routes: `GET/POST/PUT/DELETE /api/lineup` (+ `GET /api/lineup/:id`)
- SQL: parameterized queries to prevent injection
- Errors: proper status codes and JSON messages

## Frontend Walkthrough
- API base URL logic handles `file://` vs localhost
- Render table dynamically, bind Edit/Delete buttons
- Form submit → Create/Update; loads data on page load

## Assignment B Logic
- Discriminant `b^2 - 4ac`
- Cases: two real, one real, complex roots
- Input validation and Reset button

## Design Choices
- MySQL for relational schema and easy seeding
- Express for simple REST API
- Quantum theme: high contrast, neon accents, subtle animations

## Common Questions
- Change DB creds: `.env` in backend
- Add new field: alter table + update API + update frontend form/table
- CORS and fetch errors: cors middleware + error handling

## Troubleshooting
- MySQL not running → start service/XAMPP, check port 3306
- Frontend shows “Loading…” → ensure backend on 3000
- Access denied → verify MySQL user/password in `.env`

## Quick Commands
- Install backend deps: `npm install` (in backend)
- Start API: `npm start` (in backend)
- Setup DB: `node setup-database.js`

## Links
- Repo: https://github.com/photony1/The-Quantum-World-Web
- Frontend: `lineup-crud-app/frontend/index.html`
- Backend: `lineup-crud-app/backend/server.js`
- DB Setup: `lineup-crud-app/backend/setup-database.js`
- Assignment B: `assignment B.html`
