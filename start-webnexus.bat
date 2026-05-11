@echo off
cd /d "%~dp0"
echo Starting WebNexus website...
echo.
if not exist node_modules (
  echo Installing required packages...
  call npm.cmd install
)
echo.
echo Open this URL in your browser:
echo http://localhost:5600
echo.
set PORT=5600
node server.js
