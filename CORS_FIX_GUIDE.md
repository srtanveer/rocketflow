# 🔧 CORS Fix - Quick Deployment

## Issue
CORS error when testing from `localhost:3000` against production API (`https://api.beta.rocketflow.biz`)

## Fix Applied
Updated CORS configuration in `server/src/index.js` to allow:
- Production domains (beta.rocketflow.biz)
- Localhost (for development testing)
- All origins in development mode

## Quick Update Steps

### Option 1: Quick cPanel Update (5 minutes)

1. **Upload Files**
   - Go to cPanel File Manager
   - Navigate to `/home/ohddcnbt/rocketflow-v1/src`
   - Delete old `index.js`
   - Upload new `server/src/index.js` from your local machine

2. **Restart App**
   - Go to "Setup Node.js App" in cPanel
   - Find your application
   - Click "Restart"
   - Wait for status: "Running"

3. **Test**
   - Try uploading from localhost again
   - Should work now ✅

### Option 2: Full Package Deployment (10 minutes)

1. **Upload Package**
   - Upload `server-deployment.zip` to cPanel
   - Extract to `/home/ohddcnbt/rocketflow-v1` (overwrite existing)

2. **Restart App**
   - Go to "Setup Node.js App"
   - Click "Restart"

3. **Test**
   - Try upload again ✅

## Alternative: Test Locally (Recommended for Development)

Instead of hitting production, run backend locally:

1. **Update Client .env**
   ```env
   NEXT_PUBLIC_ADMIN_API="http://localhost:4000"
   ```

2. **Start Local Backend**
   ```bash
   cd server
   npm run dev
   ```

3. **Start Client**
   ```bash
   cd client
   npm run dev
   ```

4. **Test**
   - Everything works on localhost
   - No CORS issues
   - Can test without affecting production

## What Changed

**Before:**
```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://beta.rocketflow.biz', ...]
    : '*',
  ...
}))
```

**After:**
```javascript
const allowedOrigins = [
  'https://beta.rocketflow.biz',
  'http://localhost:3000',  // ← Added this
  'http://localhost:3001',
  ...
]

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true)
    if (process.env.NODE_ENV !== 'production') return callback(null, true)
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(null, false)
    }
  },
  ...
}))
```

## Files Updated
- ✅ `server/src/index.js` - Enhanced CORS configuration
- ✅ `server-deployment.zip` - Updated package ready

## Recommendation

For **development/testing**: Use localhost backend
For **production testing**: Deploy this update first

---

**Updated**: November 12, 2025, 11:36 AM
