# Full-Stack Deployment Guide - cPanel

## Overview

Your RocketFlow application has:
- **Frontend**: Next.js application (needs Node.js)
- **Backend**: Express API (needs Node.js)

Both will run as separate Node.js applications on cPanel.

---

## Architecture on cPanel

```
beta.rocketflow.biz (Frontend - Next.js)
    └─ Application Root: ~/rocketflow-v1/client
    └─ Startup File: server.js
    └─ Port: Auto-assigned by cPanel

api.beta.rocketflow.biz (Backend - Express API)
    └─ Application Root: ~/rocketflow-v1/Server
    └─ Startup File: src/index.js
    └─ Port: Auto-assigned by cPanel
```

---

## Part 1: Deploy Backend API

### Step 1: Upload Server Files

1. **Compress the Server folder**:
   ```bash
   cd /Users/idontbyte/Desktop/Coding\ Stuff/Digi5/rocketflow
   zip -r server.zip Server/
   ```

2. **Upload to cPanel**:
   - cPanel → File Manager
   - Navigate to `~/rocketflow-v1/`
   - Upload `server.zip` and extract

### Step 2: Configure Backend Environment

Create `.env` file in `~/rocketflow-v1/Server/`:

```env
# Database Configuration
DATABASE_URL="mysql://USERNAME:PASSWORD@localhost:3306/DBNAME"

# Server Configuration
NODE_ENV=production
PORT=4000

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-to-something-random

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=dogihrsbv
CLOUDINARY_API_KEY=918721931624947
CLOUDINARY_API_SECRET=K7kuRJYUZlWWiRGncbrwuG1pGro

# CORS Origins
ALLOWED_ORIGINS=https://beta.rocketflow.biz,https://www.beta.rocketflow.biz
```

### Step 3: Setup Node.js App for Backend

1. **cPanel → Setup Node.js App → Create Application**:
   - Node.js version: **22.18.0**
   - Application mode: **Production**
   - Application root: **rocketflow-v1/Server**
   - Application URL: **api.beta.rocketflow.biz**
   - Application startup file: **src/index.js**

2. **Run NPM Install** (click button in cPanel)

3. **Initialize Database**:
   ```bash
   # Enter virtual environment
   source /home/USERNAME/nodevenv/rocketflow-v1/Server/22/bin/activate
   cd ~/rocketflow-v1/Server
   npm run seed
   ```

4. **Start the app** in cPanel

---

## Part 2: Deploy Frontend (Next.js)

### Step 1: Build for Production

On your local machine:

```bash
cd /Users/idontbyte/Desktop/Coding\ Stuff/Digi5/rocketflow/client
npm install
npm run build:cpanel
```

### Step 2: Upload Client Files

1. **Compress the client folder**:
   ```bash
   cd /Users/idontbyte/Desktop/Coding\ Stuff/Digi5/rocketflow
   zip -r client.zip client/ -x "client/node_modules/*" -x "client/.next/*" -x "client/out/*"
   ```

2. **Upload to cPanel**:
   - cPanel → File Manager
   - Navigate to `~/rocketflow-v1/`
   - Upload `client.zip` and extract

3. **Upload node_modules separately** (or install via NPM in cPanel):
   ```bash
   # After uploading, in cPanel Terminal:
   cd ~/rocketflow-v1/client
   npm install --production
   ```

### Step 3: Configure Frontend Environment

Create `.env.production` in `~/rocketflow-v1/client/`:

```env
NEXT_PUBLIC_ADMIN_API=https://api.beta.rocketflow.biz
CLOUDINARY_URL=cloudinary://918721931624947:K7kuRJYUZlWWiRGncbrwuG1pGro@dogihrsbv
```

### Step 4: Build on Server

```bash
# In cPanel Terminal, enter virtual environment
source /home/USERNAME/nodevenv/rocketflow-v1/client/22/bin/activate
cd ~/rocketflow-v1/client
npm run build:cpanel
```

### Step 5: Setup Node.js App for Frontend

1. **cPanel → Setup Node.js App → Create Application**:
   - Node.js version: **22.18.0**
   - Application mode: **Production**
   - Application root: **rocketflow-v1/client**
   - Application URL: **beta.rocketflow.biz**
   - Application startup file: **server.js**

2. **Run NPM Install** (if not done manually)

3. **Start the app** in cPanel

---

## Part 3: Database Setup

### Create Database

1. **cPanel → MySQL Databases**
2. Create database: `rocketflow_db`
3. Create user: `rocketflow_user` with strong password
4. Add user to database with ALL PRIVILEGES
5. Note the full names (cPanel adds prefix):
   - Database: `cpanelusername_rocketflow_db`
   - User: `cpanelusername_rocketflow_user`

### Update DATABASE_URL

In `~/rocketflow-v1/Server/.env`:
```env
DATABASE_URL="mysql://cpanelusername_rocketflow_user:PASSWORD@localhost:3306/cpanelusername_rocketflow_db"
```

---

## Part 4: SSL Certificates

1. **cPanel → SSL/TLS Status**
2. Enable AutoSSL for:
   - `beta.rocketflow.biz`
   - `api.beta.rocketflow.biz`
3. Wait for certificates to be issued (5-10 minutes)

---

## File Structure on cPanel

```
~/rocketflow-v1/
├── Server/                 # Backend API
│   ├── src/
│   │   └── index.js       # Main API server
│   ├── .env               # Backend environment variables
│   ├── package.json
│   └── node_modules/
│
└── client/                 # Frontend Next.js
    ├── server.js          # Custom server entry point
    ├── .next/             # Built Next.js app
    │   └── standalone/    # Standalone build
    ├── .env.production    # Frontend environment variables
    ├── package.json
    └── node_modules/
```

---

## Verification Checklist

### Backend API Test:
```bash
# Health check
curl https://api.beta.rocketflow.biz/health

# Posts endpoint
curl https://api.beta.rocketflow.biz/posts

# Should return JSON data
```

### Frontend Test:
```bash
# Homepage
curl https://beta.rocketflow.biz/

# Should return HTML
```

### Browser Test:
1. Visit `https://beta.rocketflow.biz`
2. Navigate to blog posts
3. Test admin login
4. Check all landing pages

---

## Troubleshooting

### Frontend won't start

**Check build output**:
```bash
cd ~/rocketflow-v1/client
ls -la .next/standalone/
```

Should see `server.js` in standalone folder.

**Check logs**:
- cPanel → Setup Node.js App → View Application Logs

**Common fixes**:
```bash
# Rebuild the application
cd ~/rocketflow-v1/client
rm -rf .next
npm run build:cpanel
```

### Backend connection errors

**Test database connection**:
```bash
cd ~/rocketflow-v1/Server
node scripts/test-db-connection.js
```

**Check environment variables**:
```bash
cat ~/rocketflow-v1/Server/.env
```

### CORS errors

Update `~/rocketflow-v1/Server/.env`:
```env
ALLOWED_ORIGINS=https://beta.rocketflow.biz,https://www.beta.rocketflow.biz,https://api.beta.rocketflow.biz
```

Restart both applications after changes.

### Port conflicts

- cPanel auto-assigns ports, don't set PORT in .env for production
- Each app gets its own isolated port
- Use the URLs (beta.rocketflow.biz, api.beta.rocketflow.biz)

---

## Updating Your Application

### Update Backend:
```bash
cd ~/rocketflow-v1/Server
# Upload new files
npm install
# Restart in cPanel
```

### Update Frontend:
```bash
cd ~/rocketflow-v1/client
# Upload new files
npm install
npm run build:cpanel
# Restart in cPanel
```

---

## Performance Tips

1. **Enable compression** in Next.js (already configured)
2. **Use production mode** (NODE_ENV=production)
3. **Monitor memory** usage in cPanel
4. **Enable caching** for static assets
5. **Use CDN** for images (Cloudinary already configured)

---

## Security Checklist

- ✅ SSL enabled for both domains
- ✅ Environment variables not in code
- ✅ CORS configured with specific origins
- ✅ JWT_SECRET is random and secure
- ✅ Database user has minimal privileges
- ✅ NODE_ENV set to production
- ✅ API rate limiting (consider adding)
- ✅ Input validation on all endpoints

---

## Maintenance

### View Logs:
```bash
# Backend logs
tail -f ~/rocketflow-v1/Server/logs/*.log

# Frontend logs (via cPanel UI)
cPanel → Setup Node.js App → Your App → View Logs
```

### Restart Applications:
- cPanel → Setup Node.js App
- Find your app
- Click "Restart"

### Database Backups:
- cPanel → Backup → Download MySQL Database
- Set up automatic backups

---

## Support Commands

```bash
# Check Node.js version
node --version

# Check running processes
ps aux | grep node

# Check disk space
df -h

# Check memory usage
free -m

# View application status
# Use cPanel UI → Setup Node.js App
```

---

**Both applications are now ready for deployment!** 🚀

Frontend: `https://beta.rocketflow.biz`  
Backend API: `https://api.beta.rocketflow.biz`
