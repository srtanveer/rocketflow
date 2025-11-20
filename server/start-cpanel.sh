#!/usr/bin/env bash
# Helper script to install deps and start the app on cPanel Node.js application
# Usage: upload project, create Node.js app in cPanel pointing to this folder, then run this script

set -euo pipefail

# Install dependencies (production)
npm install --production

# Ensure environment variables are set in cPanel (use cPanel's "Setup Node.js App" or Environment Variables settings)
# Start the app
npm run start
