# Cloudflare Pages - Let Cloudflare Handle Deployment

**Important:** Don't use custom deploy scripts in Cloudflare Pages build settings!

## ✅ Correct Configuration in Cloudflare Pages Dashboard:

When setting up your project at https://dash.cloudflare.com/pages:

```
Framework preset: None
Build command: (leave EMPTY - no command needed!)
Build output directory: /
Root directory: (leave empty)
```

## Why?

Cloudflare Pages automatically:
- ✅ Detects your static HTML files
- ✅ Uploads them to their CDN
- ✅ Makes them available instantly
- ✅ No build step needed!

## ❌ Don't Do This:

```
Build command: ./deploy.sh    ❌ WRONG!
Build command: npm run deploy  ❌ WRONG!
Build command: wrangler pages deploy  ❌ WRONG!
```

These commands are for **manual CLI deployment only**, not for Cloudflare Pages automatic deployment.

## The `deploy.sh` Script Is Only For:

Manual deployment from your local machine:
```bash
# If you want to deploy from your computer (optional)
./deploy.sh
```

## 🎯 Quick Fix for Your Current Error:

1. Go to your Cloudflare Pages project settings
2. Go to **Settings** → **Builds & deployments**
3. Make sure **Build command** is **EMPTY**
4. Make sure **Build output directory** is `/`
5. Save and trigger a new deployment

That's it! Cloudflare will just copy your files and serve them.

## For GitHub Actions Auto-Deploy:

The `.github/workflows/deploy.yml` file handles this automatically when you push to GitHub.
Just make sure the secrets are set (you already have them).

---

**TL;DR:** Leave build command empty in Cloudflare Pages dashboard. Your site is pure static HTML - no build needed!
