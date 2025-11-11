@echo off
REM Music Festival CRUD App - Database Setup Helper
REM This script helps you set up the MySQL database

echo.
echo ========================================
echo   DATABASE SETUP HELPER
echo ========================================
echo.

echo Checking for MySQL...
powershell -Command "Get-Service | Where-Object {$_.Name -like '*mysql*'}" >nul 2>&1

if errorlevel 1 (
    echo.
    echo ❌ MySQL is NOT installed or not in services
    echo.
    echo SOLUTION OPTIONS:
    echo.
    echo Option 1: Download XAMPP (Easiest)
    echo   URL: https://www.apachefriends.org/
    echo   - Install XAMPP
    echo   - Start MySQL from XAMPP Control Panel
    echo   - Then run this script again
    echo.
    echo Option 2: Install MySQL Server
    echo   URL: https://dev.mysql.com/downloads/mysql/
    echo   - Download and install MySQL
    echo   - Use default port 3306
    echo   - Then run this script again
    echo.
    echo Option 3: Use Docker
    echo   Command: docker run --name mysql -e MYSQL_ROOT_PASSWORD="" -p 3306:3306 -d mysql
    echo.
    pause
    exit /b 1
)

echo ✓ MySQL service found
echo.

cd /d "%~dp0\backend" >nul 2>&1
if errorlevel 1 (
    echo Error: Could not find backend folder
    pause
    exit /b 1
)

echo Setting up database...
echo.

call node setup-database.js

if errorlevel 1 (
    echo.
    echo ❌ Database setup failed
    echo Make sure MySQL is running!
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Database setup complete!
echo.
echo Next steps:
echo 1. In a terminal, run: npm start
echo 2. Open: frontend\index.html
echo 3. Done!
echo.
pause
