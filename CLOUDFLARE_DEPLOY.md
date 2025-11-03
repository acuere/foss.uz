# Quick Cloudflare Deployment Guide

Since you've already pushed to GitHub, you have two deployment options:

## Option 1: Automatic via Cloudflare Pages (Recommended)

### Step 1: Connect GitHub to Cloudflare

1. Go to **Cloudflare Pages**: https://dash.cloudflare.com/pages
2. Click **"Create a project"**
3. Click **"Connect to Git"**
4. Select **"acuere/foss.uz"** repository
5. Click **"Begin setup"**

### Step 2: Configure Build Settings

```
Project name: foss-uz
Production branch: main
Framework preset: None
Build command: (leave empty)
Build output directory: /
Root directory: (leave empty)
```

### Step 3: Deploy!

Click **"Save and Deploy"** - Your site will be live in ~30 seconds at:
- `https://foss-uz.pages.dev`

### Step 4: Add Custom Domain (Optional)

1. In your Cloudflare Pages project, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: `facesofopensource.uz`
4. Follow DNS instructions

✅ **Done! Every push to `main` will auto-deploy!**

---

## Option 2: Manual via CLI (Alternative)

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

### Step 3: Deploy

```bash
# Using the deploy script
./deploy.sh

# Or directly with wrangler
wrangler pages deploy . --project-name=foss-uz --branch=main
```

---

## Enable Automatic GitHub Deployments

To enable automatic deployments on every push (already configured in `.github/workflows/deploy.yml`):

### Add GitHub Secrets

Go to: https://github.com/acuere/foss.uz/settings/secrets/actions

Add these secrets:

1. **CLOUDFLARE_API_TOKEN**
   - Go to: https://dash.cloudflare.com/profile/api-tokens
   - Click "Create Token"
   - Use template: "Edit Cloudflare Workers"
   - Or create custom with permissions: `Cloudflare Pages:Edit`
   - Copy the token
   - Add as GitHub secret

2. **CLOUDFLARE_ACCOUNT_ID**
   - Go to: https://dash.cloudflare.com/
   - Copy your Account ID from the right sidebar
   - Add as GitHub secret

✅ **Now GitHub Actions will auto-deploy on every push!**

---

## Current Status

✅ **License:** MIT License  
✅ **Repository:** https://github.com/acuere/foss.uz  
✅ **Code pushed:** Yes  
⏳ **Cloudflare setup:** Choose Option 1 or 2 above  
⏳ **Domain:** Configure after initial deployment  

---

## Quick Commands

```bash
# Local development
python3 -m http.server 8000

# Manual deploy (if using CLI)
./deploy.sh

# Check Wrangler status
wrangler whoami

# View deployed site
# After setup: https://foss-uz.pages.dev
```

---

## Next Steps

1. ✅ You already pushed to GitHub
2. 🎯 Choose deployment option above (Option 1 recommended)
3. 🌐 Configure custom domain
4. 📸 Add more Uzbek open source contributors!

**Recommended:** Use Option 1 (Cloudflare Pages UI) - it's the easiest and gives you automatic deployments!
