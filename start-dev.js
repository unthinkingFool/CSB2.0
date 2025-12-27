#!/usr/bin/env node

/**
 * Campus Hub Development Server Startup Script
 * 
 * This script starts both the backend and frontend servers automatically.
 * It also provides helpful startup information and troubleshooting tips.
 */

import { spawn } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(`
╔════════════════════════════════════════════════════════════╗
║     🚀 Campus Hub - Development Startup Script 🚀         ║
║                                                            ║
║  This script will start both backend and frontend servers ║
╚════════════════════════════════════════════════════════════╝
`);

// Verify Node modules are installed
if (!existsSync(path.join(__dirname, 'node_modules'))) {
  console.error('❌ node_modules not found. Installing dependencies...');
  const npm = spawn('npm', ['install'], { cwd: __dirname, stdio: 'inherit' });
  npm.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ npm install failed');
      process.exit(1);
    }
    startServers();
  });
} else {
  startServers();
}

function startServers() {
  console.log('📦 Starting Backend Server...');
  const backend = spawn('node', ['server.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true,
  });

  // Give backend 3 seconds to start before starting frontend
  setTimeout(() => {
    console.log('\n📱 Starting Frontend Server...');
    const frontend = spawn('npm', ['run', 'dev'], {
      cwd: __dirname,
      stdio: 'inherit',
      shell: true,
    });

    // Graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down servers...');
      backend.kill();
      frontend.kill();
      process.exit(0);
    });
  }, 3000);

  backend.on('error', (err) => {
    console.error('❌ Backend error:', err);
  });
}
