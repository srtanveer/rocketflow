# RocketFlow Deployment Guide

## Backend Deployment (cPanel)

### Prerequisites
- cPanel hosting account with Node.js support
- MySQL database created (ohddcnbt_adminpanel)
- Database user with full permissions (ohddcnbt_root)
- Node.js v18+ enabled in cPanel

### Step 1: Upload Files
1. Download `server-final.zip` from your local machine
2. In cPanel, navigate to File Manager
3. Go to `/home/ohddcnbt/rocketflow-v1` (or your desired path)
4. Upload `server-final.zip`
5. Extract the archive

### Step 2: Configure Environment
1. Rename `.env.production` to `.env`
2. Verify the following settings in `.env`:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=ohddcnbt_root
   DB_PASSWORD=rocket1234567
   DB_NAME=ohddcnbt_adminpanel
   JWT_SECRET=rocketflowsecrettttt
   PORT=4000
   CLOUDINARY_URL=cloudinary://918721931624947:K7kuRJYUZlWWiRGncbrwuG1pGro@dogihrsbv
   NODE_ENV=production
   ```

### Step 3: Create Database Tables
1. Open phpMyAdmin in cPanel
2. Select database `ohddcnbt_adminpanel`
3. Click on "SQL" tab
4. Open `schema.sql` and copy all content
5. Paste into SQL query box and click "Go"
6. Verify 3 tables created: `User`, `Post`, `Tutorial`

### Step 4: Install Dependencies
1. In cPanel, open Terminal (if available)
2. Navigate to your project directory:
   ```bash
   cd /home/ohddcnbt/rocketflow-v1
   ```
3. Install dependencies:
   ```bash
   npm install --production
   ```

**Note:** If Terminal is not available, contact your hosting provider to run npm install, or use SSH if enabled.

### Step 5: Setup Node.js Application
1. In cPanel, go to "Setup Node.js App"
2. Click "Create Application"
3. Configure:
   - Node.js version: 18.x or higher (22.x recommended)
   - Application mode: Production
   - Application root: `/home/ohddcnbt/rocketflow-v1`
   - Application URL: `api.beta.rocketflow.biz` (or your subdomain)
   - Application startup file: `src/index.js`
   - Environment variables: (copy from .env file)
4. Click "Create"

### Step 6: Start the Application
1. In Node.js App setup, click "Start App"
2. Wait for status to show "Running"
3. Note the application URL

### Step 7: Test Endpoints
Test the following URLs in your browser:
- Health check: `https://api.beta.rocketflow.biz/health`
- Health check (API): `https://api.beta.rocketflow.biz/api/health`

Both should return: `{"ok":true,"ts":...,"env":"production"}`

### Step 8: Create Admin User
Use a tool like Postman or curl to create the first admin user:
```bash
curl -X POST https://api.beta.rocketflow.biz/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@rocketflow.biz","password":"yourpassword","name":"Admin"}'
```

## Frontend Deployment

### Using Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables:
   - `NEXT_PUBLIC_ADMIN_API`: `https://api.beta.rocketflow.biz`
   - `CLOUDINARY_URL`: (your cloudinary URL)
4. Deploy

### Using cPanel (Static Export)
1. Build the Next.js app locally:
   ```bash
   cd client
   npm run build
   ```
2. Upload the `out` folder to cPanel public_html
3. Configure domain to point to the folder

## Troubleshooting

### Backend Issues

**Problem:** Cannot connect to database
- **Solution:** Verify `DB_HOST=localhost` in `.env`
- Check database credentials in phpMyAdmin
- Ensure database user has full permissions

**Problem:** 404 on all routes
- **Solution:** Check Application startup file is set to `src/index.js`
- Verify Application root path is correct
- Restart the Node.js application

**Problem:** npm install fails
- **Solution:** Contact hosting provider for support
- They may need to run the installation manually
- Check Node.js version compatibility

**Problem:** Upload endpoint not working
- **Solution:** Verify CLOUDINARY_URL is set correctly
- Check file size limits (5MB max)
- Ensure route is registered in index.js

### Frontend Issues

**Problem:** API calls failing with CORS error
- **Solution:** Verify backend CORS settings include your frontend domain
- Check `NEXT_PUBLIC_ADMIN_API` environment variable

**Problem:** Images not uploading
- **Solution:** Verify `/uploads` endpoint is accessible
- Check Cloudinary credentials
- Test upload endpoint directly

## API Routes

All routes support both `/api/*` and `/*` prefixes for compatibility:

### Authentication
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration

### Posts
- `GET /posts` - List all posts
- `GET /posts/:slug` - Get single post
- `POST /posts` - Create post (requires auth)
- `PUT /posts/:slug` - Update post (requires auth)
- `DELETE /posts/:slug` - Delete post (requires auth)

### Tutorials
- `GET /tutorials` - List all tutorials
- `GET /tutorials/:slug` - Get single tutorial
- `POST /tutorials` - Create tutorial (requires auth)
- `PUT /tutorials/:slug` - Update tutorial (requires auth)
- `DELETE /tutorials/:slug` - Delete tutorial (requires auth)

### Uploads
- `POST /uploads` - Upload image to Cloudinary

## Security Notes

1. **Change JWT_SECRET** in production to a strong random string
2. **Database password** should be strong and unique
3. **Cloudinary credentials** should be kept secure
4. Enable **SSL/HTTPS** for both frontend and backend
5. Consider adding **rate limiting** for production

## Performance Optimization

1. **Connection pooling** is already configured (10 connections)
2. **Image optimization** via Cloudinary transformations
3. **Database indexes** on slug and date fields
4. **Error logging** for debugging production issues

## Maintenance

### Updating the Application
1. Make changes locally
2. Create new deployment ZIP
3. Upload to cPanel
4. Extract (overwrite existing)
5. Restart Node.js application

### Database Backup
1. In phpMyAdmin, select database
2. Click "Export"
3. Choose "Quick" export method
4. Save SQL file locally

### Monitoring
- Check Node.js App status regularly
- Monitor error logs in cPanel
- Check database size and optimize if needed

## Support

For issues:
1. Check error logs in cPanel
2. Verify all environment variables
3. Test database connection via phpMyAdmin
4. Ensure Node.js version is compatible
5. Contact hosting provider for server-level issues
