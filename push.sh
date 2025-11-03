#!/bin/bash

# Push to GitHub script
# Run this to push your code to GitHub

echo "🚀 Pushing Faces of Open Source Uzbekistan to GitHub..."
echo ""

# Check if we have commits
if ! git log --oneline -1 > /dev/null 2>&1; then
    echo "❌ No commits found. Please commit your changes first."
    exit 1
fi

# Check remote
echo "📡 Checking remote repository..."
git remote -v

echo ""
echo "🔄 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next steps:"
    echo "1. Visit https://github.com/acuere/foss.uz to see your code"
    echo "2. Set up Cloudflare Pages at https://dash.cloudflare.com/pages"
    echo "3. Add GitHub secrets for automatic deployments"
    echo "4. Configure your custom domain: facesofopensource.uz"
    echo ""
    echo "📖 See NEXT_STEPS.md for detailed instructions!"
else
    echo ""
    echo "⚠️ Push failed. You might need to:"
    echo "1. Set up SSH keys: ssh-keygen -t ed25519 -C 'your_email@example.com'"
    echo "2. Add to GitHub: cat ~/.ssh/id_ed25519.pub"
    echo "3. Or use HTTPS: git remote set-url origin https://github.com/acuere/foss.uz.git"
    echo ""
    echo "Then try again: ./push.sh"
fi
