# Cloudflare Pages Deployment Guide

## Prerequisites

1. A GitHub account
2. A Cloudflare account (free tier works perfectly)
3. Domain `facesofopensource.uz` registered and ready

## Step-by-Step Deployment

### 1. Prepare Your Repository

```bash
# Make sure everything is committed
git add .
git commit -m "Initial commit - Faces of Open Source Uzbekistan"

# Push to GitHub
git remote add origin https://github.com/yourusername/foss.uz.git
git branch -M main
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com/
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**

### 3. Select Your Repository

1. Authorize Cloudflare to access your GitHub account
2. Select the `foss.uz` repository
3. Click **Begin setup**

### 4. Configure Build Settings

Set up your project with these settings:

- **Project name:** `foss-uz` (or your preferred name)
- **Production branch:** `main`
- **Framework preset:** None (or Static HTML)
- **Build command:** Leave empty
- **Build output directory:** `/`
- **Root directory:** `/`
- **Environment variables:** None needed

Click **Save and Deploy**

### 5. Wait for Deployment

- First deployment takes 1-2 minutes
- You'll get a URL like `foss-uz.pages.dev`
- Test the site on this URL first

### 6. Add Custom Domain

1. Go to your project in Cloudflare Pages
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter `facesofopensource.uz`
5. Click **Continue**

### 7. Update DNS

Cloudflare will provide DNS records to add:

**Option A: If domain is on Cloudflare:**
- Records will be added automatically
- Wait a few minutes for DNS propagation

**Option B: If domain is elsewhere:**
- Add CNAME record: `facesofopensource.uz` → `foss-uz.pages.dev`
- Or update nameservers to Cloudflare's

### 8. Enable SSL/TLS

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set mode to **Full** or **Full (strict)**
3. Wait for SSL certificate to be issued (usually instant)

### 9. Configure Additional Settings (Optional)

**Enable Web Analytics:**
1. Go to **Web Analytics** in Cloudflare
2. Add your site
3. Copy the tracking code if you want analytics

**Set up redirects:**
Edit `wrangler.toml` if you need redirects:
```toml
[[redirects]]
  from = "/www"
  to = "/"
  status = 301
```

## Automatic Deployments

Once set up, every push to `main` branch triggers a new deployment automatically!

```bash
# Make changes
git add .
git commit -m "Add new person"
git push

# Cloudflare automatically deploys in ~1 minute
```

## Branch Previews

Push to any branch to get a preview URL:

```bash
git checkout -b feature/new-design
git push origin feature/new-design

# Cloudflare creates a preview at:
# feature-new-design.foss-uz.pages.dev
```

## Troubleshooting

### Site not loading
- Check DNS propagation: `dig facesofopensource.uz`
- Verify SSL certificate is active
- Check Cloudflare Pages deployment logs

### CSS/JS not loading
- Verify file paths are correct (case-sensitive)
- Check browser console for errors
- Clear Cloudflare cache if needed

### Images not displaying
- Ensure images are committed to Git
- Check file paths in `people.json`
- Verify images are in `media/portraits/`

## Performance Tips

1. **Enable Cloudflare optimization:**
   - Auto Minify (HTML, CSS, JS)
   - Brotli compression
   - Image optimization

2. **Use Cloudflare CDN:**
   - Already enabled by default!
   - Your site is cached globally

3. **Optimize images before uploading:**
   ```bash
   # Using ImageOptim (Mac)
   # Or online tools like TinyPNG
   ```

## Monitoring

Check your site's performance:
- Cloudflare Web Analytics (free)
- Google PageSpeed Insights
- WebPageTest

## Cost

**Free!** Cloudflare Pages free tier includes:
- Unlimited bandwidth
- Unlimited requests
- 500 builds per month
- Built-in CDN
- DDoS protection
- Free SSL certificate

## Next Steps

1. ✅ Deploy the site
2. 🎨 Customize branding and colors
3. 📸 Start adding people
4. 📢 Share with the community
5. 🚀 Celebrate Uzbek open source!

---

Questions? Check the [Cloudflare Pages docs](https://developers.cloudflare.com/pages/) or open an issue on GitHub.
