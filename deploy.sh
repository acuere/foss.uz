#!/bin/bash

# Manual Cloudflare Pages Deployment Script
# Use this if you want to deploy directly from your machine

echo "🚀 Deploying to Cloudflare Pages..."
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "📦 Wrangler CLI not found. Installing..."
    npm install -g wrangler
    
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install Wrangler. Please install manually:"
        echo "   npm install -g wrangler"
        exit 1
    fi
fi

# Check if logged in
echo "🔐 Checking authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "Please log in to Cloudflare:"
    wrangler login
fi

# Deploy
echo ""
echo "📤 Deploying to Cloudflare Pages..."
wrangler pages deploy . --project-name=foss-uz --branch=main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully deployed to Cloudflare Pages!"
    echo ""
    echo "🌐 Your site will be available at:"
    echo "   https://foss-uz.pages.dev"
    echo "   https://facesofopensource.uz (if domain is configured)"
    echo ""
else
    echo ""
    echo "❌ Deployment failed. Please check:"
    echo "1. You're logged in: wrangler whoami"
    echo "2. Project exists in Cloudflare Pages"
    echo "3. You have correct permissions"
    echo ""
    echo "For automatic deployments via GitHub Actions, ensure:"
    echo "- CLOUDFLARE_API_TOKEN secret is set"
    echo "- CLOUDFLARE_ACCOUNT_ID secret is set"
fi
