@echo off
REM ============================================
REM Music Festival Line-Up CRUD App - Auto Setup
REM Group 7 - ICT251 Activity 4
REM ============================================

setlocal enabledelayedexpansion
color 0A

echo.
echo ============================================
echo   Music Festival Line-Up CRUD Setup
echo   Group 7 - ICT251 Activity 4
echo ============================================
echo.

REM Check if Node.js is installed
echo [Checking] Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed!
    echo Please install from: https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js installed:
node --version
echo.

REM Check if npm is available
echo [Checking] npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not available!
    pause
    exit /b 1
)

echo [OK] npm installed:
npm --version
echo.

REM Navigate to backend
echo [Step 1] Navigating to backend folder...
cd backend
if errorlevel 1 (
    echo [ERROR] Could not find backend folder
    pause
    exit /b 1
)
echo [OK] In backend folder
echo.

REM Install dependencies
echo [Step 2] Installing npm dependencies...
echo This may take a minute...
call npm install
if errorlevel 1 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [OK] Dependencies installed
echo.

REM Print next steps
cd ..
echo ============================================
echo   Setup Complete! Next Steps:
echo ============================================
echo.
echo [STEP 1] Create Database
echo   Open MySQL Workbench or MySQL CLI
echo   Run all SQL from: backend\database.sql
echo.
echo [STEP 2] Update .env (if needed)
echo   Open: backend\.env
echo   Update credentials if different
echo.
echo [STEP 3] Start Backend Server
echo   In PowerShell/CMD run:
echo   cd backend
echo   npm start
echo.
echo [STEP 4] Open Frontend
echo   Open in browser:
echo   frontend\index.html
echo.
echo [STEP 5] Test with Postman
echo   Import: Postman_Collection.json
echo   Test all 5 endpoints
echo.
echo ============================================
echo   Documentation
echo ============================================
echo   - README.md .......... Full guide
echo   - QUICK_START.md .... Quick setup
echo   - GETTING_STARTED.md. Visual guide
echo   - SUMMARY.md ........ Project overview
echo.
echo   Happy Coding! 🎵
echo ============================================
echo.

pause
