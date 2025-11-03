# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: View the Site Locally

The server is running! Open your browser to:

```
http://localhost:8000
```

You should see the Faces of Open Source Uzbekistan homepage.

### Step 2: Explore the Pages

Navigate through:
- **Home** (`/`) - Portrait gallery (currently showing "Coming Soon")
- **About** (`/about.html`) - Project information
- **Submit** (`/submit.html`) - Nomination form
- **Contact** (`/contact.html`) - Contact information

### Step 3: Add Your First Person

1. **Add a photo** to `media/portraits/`:
   - Name it `firstname-lastname.jpg`
   - Recommended size: 1200x1600px (3:4 ratio)
   - Black & white preferred

2. **Edit** `data/people.json`:
   ```json
   [
     {
       "id": "firstname-lastname",
       "name": "First Last",
       "title": "Open Source Developer",
       "image": "media/portraits/firstname-lastname.jpg",
       "story": "Their story here...",
       "links": [
         {
           "title": "GitHub",
           "url": "https://github.com/username"
         }
       ]
     }
   ]
   ```

3. **Refresh** the browser - you'll see them on the homepage!

### Step 4: Customize

Edit `css/style.css` to match your brand:
- Change colors in the `:root` section
- Adjust fonts
- Modify layout

### Step 5: Deploy to Cloudflare

When ready to go live:

1. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial site setup"
   git push
   ```

2. Follow the detailed steps in `DEPLOYMENT.md`

3. Your site will be live at `facesofopensource.uz`!

## 📁 Key Files

- `index.html` - Homepage with gallery
- `data/people.json` - All person data
- `css/style.css` - Styling
- `js/main.js` - Gallery logic
- `submit.html` - Nomination form

## 🆘 Need Help?

- Check `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment guide
- Read `CONTRIBUTING.md` to contribute

## ✅ Checklist

- [ ] Site running locally
- [ ] Explored all pages
- [ ] Added first person
- [ ] Customized colors/branding
- [ ] Pushed to GitHub
- [ ] Deployed to Cloudflare
- [ ] Custom domain configured
- [ ] Shared with community!

---

**Welcome to Faces of Open Source Uzbekistan!** 🇺🇿
