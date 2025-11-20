#!/bin/bash

# Automated Deployment Script for cPanel
# This script builds and prepares the deployment package

set -e  # Exit on error

echo "🚀 RocketFlow - cPanel Deployment Automation"
echo "=============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the client directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: package.json not found!${NC}"
    echo "Please run this script from the client directory"
    exit 1
fi

echo -e "${YELLOW}📦 Step 1: Installing dependencies...${NC}"
npm install

echo ""
echo -e "${YELLOW}🔨 Step 2: Building application...${NC}"
npm run build:cpanel

echo ""
echo -e "${YELLOW}🔍 Step 3: Verifying build...${NC}"
if [ -d "out" ]; then
    echo -e "${GREEN}✅ Build directory created${NC}"
else
    echo -e "${RED}❌ Build failed - 'out' directory not found${NC}"
    exit 1
fi

# Check for essential files
if [ -f "out/index.html" ] && [ -f "out/.htaccess" ]; then
    echo -e "${GREEN}✅ Essential files present${NC}"
else
    echo -e "${RED}❌ Missing essential files${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}📊 Build Statistics:${NC}"
FILE_COUNT=$(find out -type f | wc -l | tr -d ' ')
echo "   Files: $FILE_COUNT"

if command -v du &> /dev/null; then
    SIZE=$(du -sh out | cut -f1)
    echo "   Size: $SIZE"
fi

echo ""
echo -e "${YELLOW}📦 Step 4: Creating deployment package...${NC}"

# Create deployment package name with timestamp
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
PACKAGE_NAME="rocketflow_deploy_${TIMESTAMP}.zip"

# Remove old deployment packages (optional)
rm -f rocketflow_deploy_*.zip 2>/dev/null || true

# Create zip file
if command -v zip &> /dev/null; then
    cd out
    zip -r ../$PACKAGE_NAME . -q
    cd ..
    echo -e "${GREEN}✅ Package created: $PACKAGE_NAME${NC}"
    
    # Calculate package size
    if command -v du &> /dev/null; then
        PACKAGE_SIZE=$(du -sh $PACKAGE_NAME | cut -f1)
        echo "   Package size: $PACKAGE_SIZE"
    fi
else
    echo -e "${YELLOW}⚠️  'zip' command not found. Please compress the 'out' folder manually.${NC}"
fi

echo ""
echo -e "${GREEN}✨ Build complete!${NC}"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${GREEN}📋 Next Steps:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Login to your cPanel account"
echo "2. Navigate to File Manager"
echo "3. Go to public_html (or your domain's root)"
echo "4. Upload: $PACKAGE_NAME"
echo "5. Extract the ZIP file"
echo "6. Delete the ZIP file after extraction"
echo "7. Verify .htaccess is present (enable hidden files)"
echo "8. Visit your domain to test"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo -e "${YELLOW}📖 Documentation:${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "• Complete guide: DEPLOYMENT.md"
echo "• Quick reference: DEPLOY_QUICK.md"
echo "• Checklist: DEPLOYMENT_CHECKLIST.md"
echo "• This summary: CPANEL_READY.md"
echo ""
echo -e "${GREEN}🎉 Happy deploying!${NC}"
echo ""
