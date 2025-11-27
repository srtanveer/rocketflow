# RocketFlow Client - cPanel Deployment Instructions

## Package Contents
This `client.zip` contains a production-ready Next.js application built with standalone output mode.

### What's Included:
- ✅ Production build files (.next directory)
- ✅ Server entry point (server.js)
- ✅ Required Node modules
- ✅ Static assets (public directory)
- ✅ Environment configuration (.env.production)
- ✅ Package dependencies (package.json, package-lock.json)

## Deployment Steps

### 1. Upload to cPanel
1. Log into your cPanel account
2. Navigate to **File Manager**
3. Go to your application directory (e.g., `/home/username/rocketflow-client`)
4. Upload `client.zip`
5. Extract the zip file

### 2. Set Up Node.js Application
1. Go to **Setup Node.js App** in cPanel
2. Click **Create Application**
3. Configure:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/home/username/rocketflow-client`
   - **Application URL**: Your domain/subdomain
   - **Application startup file**: `server.js`
   - **Environment variables**: Add if needed (API URLs, etc.)

### 3. Install Dependencies (if needed)
Most dependencies are already included in the standalone build. If needed:
```bash
npm install --production
```

### 4. Start the Application
The cPanel Node.js app manager will automatically start your application using `server.js`.

### 5. Environment Variables
Add these in the cPanel Node.js App interface:
- `NODE_ENV=production`
- `PORT=<assigned-port>` (cPanel will assign this)
- `NEXT_PUBLIC_API_URL=<your-backend-url>` (if using separate backend)

## File Structure After Extraction:
```
rocketflow-client/
├── server.js              # Main server file
├── package.json           # Dependencies
├── package-lock.json      # Lock file
├── .env.production        # Production environment vars
├── node_modules/          # Required dependencies (minimal)
├── .next/                 # Next.js build output
│   ├── static/           # Static assets
│   └── server/           # Server-side code
└── public/               # Public static files
```

## Important Notes:

1. **Server.js**: This is your application entry point. cPanel will use this to start your app.

2. **Port Configuration**: cPanel assigns a port automatically. Don't hardcode the port.

3. **Environment Variables**: Set `NEXT_PUBLIC_API_URL` to point to your backend server URL.

4. **Memory/Performance**: Standalone mode includes only necessary dependencies for better performance.

5. **Static Files**: The `public/` directory and `.next/static/` contain all static assets.

## Backend Integration
If you're using the separate backend server:
1. Deploy the backend separately (server.zip)
2. Update `NEXT_PUBLIC_API_URL` environment variable to point to backend URL
3. Ensure CORS is configured on the backend

## Troubleshooting

### Application won't start:
- Check Node.js version (18.x or higher required)
- Verify `server.js` is set as startup file
- Check error logs in cPanel Node.js App section

### 404 Errors:
- Ensure `.next/static/` directory exists
- Check that `public/` directory is present
- Verify application root path in cPanel

### API Connection Issues:
- Verify `NEXT_PUBLIC_API_URL` environment variable
- Check backend server is running
- Ensure CORS is configured correctly

## Support
For issues, check:
- cPanel Error Logs
- Node.js Application logs
- Browser Console for client-side errors

---
Generated: November 23, 2025
