@echo off
REM Music Festival Line-Up CRUD App - Startup Script for Windows

echo.
echo ========================================
echo   MUSIC FESTIVAL LINE-UP CRUD APP
echo   Windows Startup Script
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js detected
echo.

REM Navigate to backend folder
cd /d "%~dp0backend"
echo Current directory: %cd%
echo.

REM Check if node_modules exists, if not run npm install
if not exist "node_modules" (
    echo Installing dependencies (npm install)...
    echo.
    call npm install
    if errorlevel 1 (
        echo ERROR: npm install failed!
        pause
        exit /b 1
    )
    echo.
    echo ✓ Dependencies installed successfully
    echo.
)

echo ========================================
echo   Starting Backend Server...
echo ========================================
echo.
echo The server will run on: http://localhost:3000
echo.
echo Once started, open the frontend:
echo File: frontend\index.html
echo.
echo Press CTRL+C to stop the server
echo.

REM Start the server
call npm start
