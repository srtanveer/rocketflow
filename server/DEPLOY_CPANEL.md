# Deploying the RocketFlow Admin API to cPanel (Node.js)

This document describes a simple, repeatable process to deploy the backend (`server/`) to a cPanel Node.js application. The server already listens on `process.env.PORT` and defaults to `4000`.

Prerequisites
- cPanel account with Node.js Application feature (CloudLinux Node.js selector / Application Manager)
- A MySQL database created in cPanel (or an external DB reachable from the server)
- Environment variables configured via the cPanel Node.js App UI (see below)

Files changed for cPanel readiness
- `src/index.js`: binds to `0.0.0.0` so the process is reachable in cPanel/container environments.
- `start-cpanel.sh`: convenience script to install deps and start the app (optional).

Environment variables (set these in cPanel's Node.js App > Environment Variables):
- `PORT` (optional, cPanel usually provides a port)
- `DB_HOST` (e.g. `localhost` if using the cPanel MySQL database)
- `DB_PORT` (default `3306`)
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `JWT_SECRET`
- `CLOUDINARY_URL` (if using Cloudinary uploads)
- `NEXT_PUBLIC_ADMIN_API` (if you want the frontend to point to this API's public URL)

Recommended steps (cPanel UI)
1. Upload the `server/` folder to your cPanel account (for example under `~/rocketflow-server`).
2. In cPanel > "Setup Node.js App":
   - Create a new application
   - Application root: path to the `server` folder (e.g. `home/username/rocketflow/server`)
   - Application startup file: `src/index.js`
   - Node version: choose a supported Node (v18+ recommended)
   - Add the Environment Variables listed above
3. After creating the app, use the cPanel UI to run `npm install` (or run the included `start-cpanel.sh` if you have SSH access and prefer a script).
4. Start the application from the cPanel UI. cPanel will provide a URL/port mapping; set `NEXT_PUBLIC_ADMIN_API` in your frontend environment or deploy the frontend separately.

SSH / advanced steps
If you have SSH access to the cPanel account you can:

```bash
cd ~/rocketflow/server
# install production deps
npm install --production
# start the app (alternatively use the cPanel Node UI which tracks process)
npm run start
```

Notes
- cPanel often manages the process lifecycle — use the Node.js App manager to start/stop and to set environment variables.
- If you use a cPanel-provided MySQL, update `DB_HOST` to `localhost` and ensure the DB user has privileges for the database.
- For local testing before deploy, run the server with `npm run dev` in `server/`.

If you want, I can also:
- Add a small `ecosystem.config.js` for PM2 if you prefer PM2 on a VPS instead of cPanel.
- Provide a step-by-step SSH script to create the DB user and run migrations (if you plan to run migrations via the server).

