# 🚀 RocketFlow Deployment Checklist

## ✅ Pre-Deployment Verification

### Backend Files Ready
- [x] `server-deployment.zip` created (0.04 MB)
- [x] All controllers have error handling
- [x] CORS configured for production
- [x] Upload route enhanced with validation
- [x] Request logging middleware added
- [x] Global error handlers implemented
- [x] All routes support /api/* and /* prefixes
- [x] Health check endpoints available

### Frontend Files Ready
- [x] `.env` configured with production API URL
- [x] `.env.production` created
- [x] API calls using correct endpoints
- [x] Upload functionality integrated
- [x] No build errors

### Database Ready
- [x] `schema.sql` available in package
- [x] User table schema defined
- [x] Post table schema defined
- [x] Tutorial table schema defined

---

## 📋 Deployment Steps

### Step 1: cPanel - Upload Files ⏱️ ~5 minutes
- [ ] Log into cPanel
- [ ] Navigate to File Manager
- [ ] Go to `/home/ohddcnbt/rocketflow-v1`
- [ ] Upload `server-deployment.zip`
- [ ] Extract archive
- [ ] Verify all files extracted successfully

### Step 2: Configure Environment ⏱️ ~2 minutes
- [ ] Rename `.env.production` to `.env`
- [ ] Open `.env` in editor
- [ ] Verify `DB_HOST=localhost`
- [ ] Verify `DB_USER=ohddcnbt_root`
- [ ] Verify `DB_NAME=ohddcnbt_adminpanel`
- [ ] Verify `JWT_SECRET` is set
- [ ] Verify `CLOUDINARY_URL` is set
- [ ] Verify `NODE_ENV=production`

### Step 3: Create Database Tables ⏱️ ~3 minutes
- [ ] Open phpMyAdmin in cPanel
- [ ] Select database `ohddcnbt_adminpanel`
- [ ] Click "SQL" tab
- [ ] Open `schema.sql` file from extracted files
- [ ] Copy entire SQL content
- [ ] Paste into SQL query box
- [ ] Click "Go" to execute
- [ ] Verify success message appears
- [ ] Click "Structure" tab
- [ ] Confirm 3 tables exist: `User`, `Post`, `Tutorial`

### Step 4: Install Dependencies ⏱️ ~10-15 minutes
**Option A: If Terminal Available**
- [ ] Open Terminal in cPanel
- [ ] Run: `cd /home/ohddcnbt/rocketflow-v1`
- [ ] Run: `npm install --production`
- [ ] Wait for installation to complete
- [ ] Verify no errors

**Option B: If No Terminal**
- [ ] Contact hosting provider support
- [ ] Request npm install for your Node.js app
- [ ] Provide path: `/home/ohddcnbt/rocketflow-v1`
- [ ] Wait for confirmation

### Step 5: Setup Node.js Application ⏱️ ~5 minutes
- [ ] In cPanel, find "Setup Node.js App"
- [ ] Click "Create Application"
- [ ] Fill in configuration:
  - [ ] Node.js version: **22.18.0** (or 18.x+)
  - [ ] Application mode: **Production**
  - [ ] Application root: `/home/ohddcnbt/rocketflow-v1`
  - [ ] Application URL: `api.beta.rocketflow.biz`
  - [ ] Application startup file: `src/index.js`
- [ ] Add environment variables from `.env` file
- [ ] Click "Create"

### Step 6: Start Application ⏱️ ~1 minute
- [ ] In Node.js App list, find your application
- [ ] Click "Start App" button
- [ ] Wait for status to change to "Running"
- [ ] Note the application URL

### Step 7: Test Backend Endpoints ⏱️ ~5 minutes
Open in browser and verify responses:

- [ ] Test: `https://api.beta.rocketflow.biz/health`
  - Expected: `{"ok":true,"ts":...,"env":"production"}`
  
- [ ] Test: `https://api.beta.rocketflow.biz/api/health`
  - Expected: `{"ok":true,"ts":...,"env":"production"}`

### Step 8: Create Admin User ⏱️ ~2 minutes
Using Postman, curl, or browser console:

```bash
curl -X POST https://api.beta.rocketflow.biz/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@rocketflow.biz","password":"YourSecurePassword123","name":"Admin"}'
```

- [ ] Run signup request
- [ ] Verify response contains `token`
- [ ] Save token for testing

### Step 9: Test Authenticated Endpoints ⏱️ ~5 minutes
Using the token from Step 8:

**Test Create Post:**
```bash
curl -X POST https://api.beta.rocketflow.biz/posts \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title":"Test Post","slug":"test-post","excerpt":"Test","content":"<p>Test content</p>","featuredImage":"https://via.placeholder.com/800","author":"Admin","tags":["test"]}'
```
- [ ] Create post request
- [ ] Verify post created successfully

**Test List Posts:**
- [ ] Visit: `https://api.beta.rocketflow.biz/posts`
- [ ] Verify your test post appears

**Test Upload:**
- [ ] Use Postman or frontend to upload an image
- [ ] Verify Cloudinary URL returned

---

## 🔍 Troubleshooting Guide

### Issue: Cannot start Node.js app
**Symptoms**: App shows error status
**Checks**:
- [ ] Verify `src/index.js` exists in application root
- [ ] Check startup file path is correct: `src/index.js`
- [ ] Review error logs in Node.js App panel
- [ ] Verify Node.js version is 18.x or higher

### Issue: Database connection failed
**Symptoms**: 500 errors, "connection refused"
**Checks**:
- [ ] Verify `.env` has `DB_HOST=localhost`
- [ ] Check database exists in phpMyAdmin
- [ ] Verify database user credentials
- [ ] Check database user has full permissions
- [ ] Try restarting Node.js app

### Issue: npm install fails
**Symptoms**: Missing dependencies, module not found
**Checks**:
- [ ] Verify `package.json` exists
- [ ] Check Node.js version compatibility
- [ ] Contact hosting provider for manual installation
- [ ] Try SSH access if available

### Issue: 404 on all routes
**Symptoms**: All endpoints return 404
**Checks**:
- [ ] Verify application URL is correct
- [ ] Check application is running
- [ ] Verify startup file: `src/index.js`
- [ ] Check application root path
- [ ] Review Node.js App logs

### Issue: CORS errors
**Symptoms**: Frontend can't access API
**Checks**:
- [ ] Verify frontend domain in CORS settings
- [ ] Check `NODE_ENV=production` in .env
- [ ] Verify HTTPS is enabled
- [ ] Check browser console for exact error

### Issue: Upload fails
**Symptoms**: Image upload returns error
**Checks**:
- [ ] Verify `CLOUDINARY_URL` in .env
- [ ] Check file size (max 5MB)
- [ ] Verify file is image type
- [ ] Test Cloudinary credentials directly

---

## 📊 Post-Deployment Verification

### Backend Health Check
- [ ] Health endpoint returns 200 OK
- [ ] Database connection successful
- [ ] Authentication working (signup/login)
- [ ] Posts CRUD operations working
- [ ] Tutorials CRUD operations working
- [ ] Image uploads working
- [ ] Error handling working (test with invalid data)

### Frontend Integration
- [ ] Can login to admin panel
- [ ] Can create new posts
- [ ] Can upload images
- [ ] Can view posts list
- [ ] Can edit posts
- [ ] Can delete posts
- [ ] Can create tutorials
- [ ] Public pages load correctly

### Performance Check
- [ ] API response time < 500ms
- [ ] Database queries optimized
- [ ] Images loading from Cloudinary
- [ ] No memory leaks
- [ ] Application stable under load

---

## 🔒 Security Checklist

Post-deployment security tasks:

- [ ] Change JWT_SECRET to strong random value
- [ ] Verify database password is strong
- [ ] Enable HTTPS/SSL on api.beta.rocketflow.biz
- [ ] Enable HTTPS/SSL on beta.rocketflow.biz
- [ ] Test all endpoints for security vulnerabilities
- [ ] Set up regular database backups
- [ ] Configure firewall rules if available
- [ ] Review and limit database user permissions
- [ ] Keep Cloudinary credentials secure
- [ ] Monitor error logs regularly

---

## 📈 Monitoring Setup

Recommended monitoring:

- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Configure error alerting
- [ ] Monitor database size
- [ ] Track API response times
- [ ] Review logs weekly
- [ ] Monitor disk space usage
- [ ] Track Cloudinary usage/limits

---

## 🎉 Deployment Complete!

When all checkboxes are complete:
- Backend is running on `https://api.beta.rocketflow.biz`
- Frontend is accessible on `https://beta.rocketflow.biz`
- Database is populated and accessible
- All features are working
- Security measures in place
- Monitoring configured

**Your RocketFlow application is live! 🚀**

---

## 📞 Support Resources

- **Deployment Guide**: `DEPLOYMENT_GUIDE.md`
- **Update Summary**: `UPDATE_SUMMARY.md`
- **Database Schema**: `schema.sql`
- **Hosting Provider**: Contact for server-level issues
- **GitHub Issues**: For code-related questions

---

**Last Updated**: November 12, 2025
**Package Version**: server-deployment.zip (0.04 MB)
**Status**: ✅ Ready for Production
