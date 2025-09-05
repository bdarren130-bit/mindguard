#!/bin/bash

echo "🚀 Deploying MindGuard to Vercel"
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js first."
    echo "Download from: https://nodejs.org/"
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📝 Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Login to Vercel if not already logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel"
    vercel login
else
    echo "✅ Already logged in to Vercel"
fi

echo ""
echo "📦 Installing dependencies..."
npm install

echo ""
echo "🌐 Deploying to Vercel..."
echo "Follow the prompts below:"
echo "- Press Enter for default options"
echo "- Choose 'Yes' for overwrite settings"
echo "- Set environment variables when prompted"
echo ""

vercel

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Set environment variables in Vercel dashboard"
echo "2. Test your API endpoints"
echo "3. Configure custom domain (optional)"
echo ""
echo "📧 Support: support@mindguard.app"