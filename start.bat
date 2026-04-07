@echo off
REM TaskMateAI - One-Click Starter for Windows
REM This script starts the TaskMateAI application using Docker Compose

echo ============================================
echo    TaskMateAI - One-Click Starter
echo ============================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker ist nicht installiert!
    echo Bitte installiere Docker Desktop von: https://www.docker.com/products/docker-desktop
    pause
    exit /b 1
)

REM Check if Docker is running
docker ps >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker läuft nicht!
    echo Bitte starte Docker Desktop und führe dieses Script erneut aus.
    pause
    exit /b 1
)

echo [OK] Docker is running...
echo.
echo Starting TaskMateAI...
echo.

REM Start Docker Compose
docker-compose up -d

if errorlevel 1 (
    echo [ERROR] Fehler beim Starten von TaskMateAI!
    pause
    exit /b 1
)

echo.
echo ============================================
echo    TaskMateAI ist jetzt verfügbar!
echo ============================================
echo.
echo Oeffne deinen Browser und gehe zu:
echo http://localhost:8080
echo.
echo Drücke eine beliebige Taste, um den Browser zu oeffnen...
pause >nul

REM Open browser
start http://localhost:8080

echo.
echo Zum Stoppen der Anwendung, führe aus: docker-compose down
echo.
pause
