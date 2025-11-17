# 🚀 Frontend Deployment Fix

## Issue
Production frontend (`https://beta.rocketflow.biz`) was calling `http://localhost:4000` instead of `https://api.beta.rocketflow.biz`

## Root Cause
Next.js embeds environment variables at **build time**, not runtime. The production site was built with the wrong API URL.

## ✅ Fix Applied

### 1. Updated Environment Variables
- Removed quotes from `.env` and `.env.production`
- Set `NEXT_PUBLIC_ADMIN_API=https://api.beta.rocketflow.biz`

### 2. Rebuilt Frontend
- Ran `npm run build` with correct production API URL
- Build successful ✅

## 📦 Deployment Options

### Option A: Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Fix production API URL"
   git push origin masum
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import `rocketflow` repository
   - Select `client` folder as root directory

3. **Configure Environment Variables**
   - Add: `NEXT_PUBLIC_ADMIN_API` = `https://api.beta.rocketflow.biz`
   - Add: `CLOUDINARY_URL` = `cloudinary://918721931624947:K7kuRJYUZlWWiRGncbrwuG1pGro@dogihrsbv`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Update domain to `beta.rocketflow.biz`

### Option B: Deploy to cPanel (Static Export)

1. **Export Static Build**
   ```bash
   cd client
   npm run build
   ```

2. **Upload to cPanel**
   - Build is in `client/.next` folder
   - Upload entire `.next` folder to cPanel
   - Point domain to the build folder

**Note**: Next.js 15 requires Node.js runtime for some features. Vercel is recommended.

### Option C: Deploy via GitHub Pages

Not recommended for this project as it requires server-side rendering.

## 🔧 For Local Development

If you want to test locally against production API:

**Current Setup** (Production API):
```env
NEXT_PUBLIC_ADMIN_API=https://api.beta.rocketflow.biz
```

**Local Backend Setup**:
```env
NEXT_PUBLIC_ADMIN_API=http://localhost:4000
```

Then restart dev server:
```bash
npm run dev
```

## ✅ Verification Checklist

After deployment:

- [ ] Visit `https://beta.rocketflow.biz/admin`
- [ ] Open browser DevTools → Network tab
- [ ] Try to signup/login
- [ ] Verify API calls go to `https://api.beta.rocketflow.biz`
- [ ] NOT `http://localhost:4000` ❌

## 📝 Important Notes

1. **Environment Variables in Next.js**:
   - Variables prefixed with `NEXT_PUBLIC_` are embedded at build time
   - You must rebuild after changing them
   - They are visible in browser (client-side)

2. **Don't Use Quotes**:
   - ❌ `NEXT_PUBLIC_ADMIN_API="https://..."`
   - ✅ `NEXT_PUBLIC_ADMIN_API=https://...`

3. **Rebuild Required**:
   - Every time you change `NEXT_PUBLIC_*` variables
   - Run `npm run build` before deploying

## 🎯 Recommended: Vercel Deployment

Vercel is the best option because:
- ✅ Built by Next.js creators
- ✅ Automatic builds on git push
- ✅ Easy environment variable management
- ✅ Free SSL certificates
- ✅ CDN and edge network
- ✅ Automatic domain configuration

---

**Status**: ✅ Build successful, ready to deploy
**Next Step**: Choose deployment option and deploy frontend
