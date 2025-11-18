#!/bin/bash

# Build Verification Script for cPanel Deployment
# Run this after building to verify everything is ready

echo "🔍 Verifying build for cPanel deployment..."
echo ""

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' directory not found!"
    echo "   Run 'npm run build:cpanel' first"
    exit 1
fi

echo "✅ 'out' directory exists"

# Check for essential files
REQUIRED_FILES=(
    "out/index.html"
    "out/.htaccess"
    "out/404.html"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file found"
    else
        echo "❌ Missing: $file"
    fi
done

# Check for _next directory
if [ -d "out/_next" ]; then
    echo "✅ '_next' directory found (static assets)"
else
    echo "⚠️  Warning: '_next' directory not found"
fi

# Check .htaccess content
if [ -f "out/.htaccess" ]; then
    if grep -q "RewriteEngine On" out/.htaccess; then
        echo "✅ .htaccess has rewrite rules"
    else
        echo "⚠️  Warning: .htaccess may be missing rewrite rules"
    fi
fi

# Count files
FILE_COUNT=$(find out -type f | wc -l)
echo ""
echo "📊 Total files to deploy: $FILE_COUNT"

# Calculate size
if command -v du &> /dev/null; then
    SIZE=$(du -sh out | cut -f1)
    echo "📦 Total size: $SIZE"
fi

echo ""
echo "✨ Build verification complete!"
echo ""
echo "Next steps:"
echo "1. Compress the 'out' folder"
echo "2. Upload to cPanel"
echo "3. Extract in public_html"
echo "4. Test your site"
echo ""
echo "See DEPLOYMENT.md for detailed instructions"
