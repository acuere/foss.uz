# Faces of Open Source Uzbekistan

An on-going photographic documentation of the people behind the development and advancement of open source software in Uzbekistan.

**Live Site:** [facesofopensource.uz](https://facesofopensource.uz)

Inspired by [Faces of Open Source](https://facesofopensource.com) by Peter Adams.

## 🎯 Project Goals

- Celebrate the Uzbek open source community
- Document the people behind the code
- Inspire the next generation of contributors
- Build visibility for open source work in Central Asia

## 📁 Project Structure

```
foss.uz/
├── index.html          # Home page with portrait gallery
├── about.html          # About the project
├── submit.html         # Submission form for nominations
├── contact.html        # Contact information
├── person.html         # Template for individual person pages
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── main.js         # Main JavaScript
│   ├── submit.js       # Form submission handling
│   └── person.js       # Person detail page logic
├── data/
│   └── people.json     # Data for all featured people
├── media/
│   └── portraits/      # Portrait photos (store in GitHub)
└── README.md
```

## 🚀 Quick Start

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/foss.uz.git
   cd foss.uz
   ```

2. Start a local web server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open your browser to `http://localhost:8000`

### Deploy to Cloudflare Pages

1. **Connect your repository:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub account
   - Select the `foss.uz` repository

2. **Configure build settings:**
   - Framework preset: None (or Static HTML)
   - Build command: (leave empty)
   - Build output directory: `/`
   - Root directory: `/`

3. **Deploy:**
   - Click "Save and Deploy"
   - Your site will be live in minutes!

4. **Custom Domain:**
   - Go to your project settings
   - Click "Custom domains"
   - Add `facesofopensource.uz`
   - Update your DNS records as instructed

## 📸 Adding a New Person

### 1. Prepare the Photo

- Take a high-quality portrait photo
- Prefer black and white or convert to grayscale
- Recommended size: 1200x1600px (3:4 aspect ratio)
- Format: JPG
- Save to `media/portraits/firstname-lastname.jpg`

### 2. Update people.json

Add a new entry to `data/people.json`:

```json
{
  "id": "firstname-lastname",
  "name": "First Last",
  "title": "Role or Project",
  "image": "media/portraits/firstname-lastname.jpg",
  "story": "Write the person's story here. Include their journey into open source, contributions, and impact.\n\nUse \\n\\n for new paragraphs.",
  "links": [
    {
      "title": "GitHub",
      "url": "https://github.com/username"
    },
    {
      "title": "Website",
      "url": "https://example.com"
    }
  ]
}
```

### 3. Commit and Push

```bash
git add media/portraits/firstname-lastname.jpg data/people.json
git commit -m "Add [Person Name]"
git push origin main
```

Cloudflare Pages will automatically deploy your changes!

## 📝 Submission Workflow

1. Community members submit nominations via the form on `/submit.html`
2. Submissions create GitHub Issues automatically (when configured)
3. Review and reach out to the nominee
4. Schedule photoshoot and interview
5. Add person to the site following the steps above

## 🎨 Customization

### Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --color-bg: #ffffff;
    --color-text: #1a1a1a;
    --color-gray: #666666;
    --color-accent: #000000;
}
```

### Typography

Change fonts in the `:root` section:

```css
:root {
    --font-main: -apple-system, BlinkMacSystemFont, "Segoe UI", ...;
    --font-heading: "Helvetica Neue", Helvetica, Arial, ...;
}
```

## 🔧 GitHub Issues Integration (Optional)

The website now supports two submission methods:

### 1. GitHub Issues (Recommended)
When users select "GitHub PR" on the submission form, they'll be redirected to create a GitHub issue with pre-filled content. This allows community review and discussion.

**To enable:**
- Issues are already enabled by default on GitHub repositories
- Issue template is at `.github/ISSUE_TEMPLATE/nomination.md`
- No additional setup required!

### 2. Email Submission
When users select "Email", their default email client opens with a pre-filled message to `hello@facesofopensource.uz`.

**To set up email:**
- Configure email forwarding for `hello@facesofopensource.uz`
- Or update the email address in `js/submit.js`

## 🚀 Cloudflare Setup

### GitHub Secrets Required

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

1. **CLOUDFLARE_API_TOKEN**
   - Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - Create token with "Cloudflare Pages — Edit" permissions
   - Add as GitHub secret

2. **CLOUDFLARE_ACCOUNT_ID**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Copy Account ID from the right sidebar
   - Add as GitHub secret

### Automatic Deployments

Once secrets are configured:
- Every push to `main` triggers automatic deployment
- Pull requests get preview deployments
- Deployments complete in ~1 minute

## 🔧 GitHub Issues Integration (Optional)

To automatically create GitHub Issues from form submissions:

1. Create a GitHub Personal Access Token with `repo` scope
2. Use a serverless function (Cloudflare Workers) to handle submissions
3. Update `js/submit.js` to call your worker endpoint

Example Cloudflare Worker:

```javascript
export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }
    
    const data = await request.json();
    
    const response = await fetch('https://api.github.com/repos/yourusername/foss.uz/issues', {
      method: 'POST',
      headers: {
        'Authorization': `token ${env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: `New Nomination: ${data.nomineeName}`,
        body: formatIssueBody(data),
        labels: ['nomination']
      })
    });
    
    return response;
  }
}
```

## 📄 License

This project structure and code are released under the MIT License. Individual portrait photos and stories remain the copyright of their respective subjects and the photographer.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

- **Submit nominations** for people to feature
- **Improve the code** - submit PRs for bug fixes or enhancements
- **Share the project** within the Uzbek tech community
- **Translate content** to Russian or Uzbek

## 📧 Contact

- **Website:** [facesofopensource.uz](https://facesofopensource.uz)
- **Email:** hello@facesofopensource.uz
- **GitHub:** [github.com/yourusername/foss.uz](https://github.com/yourusername/foss.uz)

## 🙏 Credits

Inspired by [Faces of Open Source](https://facesofopensource.com) by Peter Adams.

---

Built with ❤️ for the Uzbek open source community
