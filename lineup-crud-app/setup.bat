@echo off
REM Quick Setup Script for Music Festival Line-Up CRUD App

echo.
echo ===== Music Festival Line-Up CRUD Setup =====
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    exit /b 1
)

echo [1/4] Node.js found: 
node --version

echo.
echo [2/4] Installing backend dependencies...
cd backend
call npm install

echo.
echo [3/4] Database setup information:
echo Please manually run the SQL script from database.sql in your MySQL client
echo Location: backend\database.sql

echo.
echo [4/4] Setup complete!
echo.
echo Next steps:
echo 1. Run the SQL script in MySQL to create the database
echo 2. Update .env file if needed (backend\.env)
echo 3. Start the backend: npm start (in backend folder)
echo 4. Open frontend\index.html in your browser
echo.
echo Happy coding!
pause
