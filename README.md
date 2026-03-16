# Academic Website - Final Version

A modern, bold academic website with **Computer Modern Sans Serif** typography and a professional **Navy Blue & Light Blue** color scheme. Features multilingual support for English, Chinese (中文), and Japanese (日本語).

## ✨ Key Features

### 🎨 **Design**
- **Typography**: Computer Modern Sans Serif (LaTeX-style professional fonts)
- **Color Scheme**: 
  - Main: Navy Blue (#0A2158)
  - Sub: Light Blue (#B9D9EB)
- **Style**: Bold, modern, clean academic aesthetic
- **Animations**: Smooth fade-ins, hover effects, and micro-interactions
- **Responsive**: Perfect on desktop, tablet, and mobile

### 🌐 **Multilingual Support**
- **Three Languages**: English, Chinese (中文), Japanese (日本語)
- **Live Switching**: Toggle languages without page reload
- **Persistent**: Language choice saved across sessions
- **Home Page**: Fully translated in all three languages

### 🔤 **Typography System**

| Element | Font | Usage |
|---------|------|-------|
| All Text | Computer Modern Sans Serif | Body, headings, navigation, UI |
| Code (optional) | Computer Modern Typewriter | Code snippets if needed |
| Math (optional) | Computer Modern Math via MathJax | Mathematical equations |

**Why Computer Modern?**
- The same fonts used in LaTeX scientific papers
- Professional academic credibility
- Excellent screen readability
- Clean, modern sans-serif aesthetic

## 🎨 Color Palette

```css
--primary-color: #0A2158      /* Navy Blue - Main color */
--secondary-color: #B9D9EB    /* Light Blue - Accent */
--accent-color: #3a7bc8       /* Medium Blue - Links */
--text-color: #1a1a1a         /* Dark text */
--bg-color: #ffffff           /* White background */
```

## 📁 File Structure

```
academic-website-final/
├── index.html          # Home page (fully multilingual)
├── research.html       # Research projects and publications
├── blogs.html          # Technical blog posts
├── opinions.html       # Opinion pieces
├── cv.html            # Curriculum Vitae
├── style.css          # Main stylesheet (Navy/Light Blue theme)
├── script.js          # Language switching system
├── lang-home.js       # Home page language handler
└── README.md          # This file
```

## 🚀 Quick Start Guide

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **+** (top right) → **New repository**
3. **Repository name**: `your-username.github.io`
   - Replace `your-username` with your actual GitHub username
   - Example: `dorian-cmu.github.io`
4. **Description**: "My academic website"
5. Keep it **Public**
6. ✅ Check "Add a README file"
7. Click **Create repository**

### Step 2: Upload Files

**Method A: Via GitHub Website (Easiest)**

1. In your repository, click **Add file** → **Upload files**
2. Drag and drop ALL files:
   - index.html
   - research.html
   - blogs.html
   - opinions.html
   - cv.html
   - style.css
   - script.js
   - lang-home.js
   - README.md (this will replace the default one)
3. Scroll down and click **Commit changes**

**Method B: Via Git Command Line**

```bash
# Navigate to your downloaded files folder
cd /path/to/academic-website-final

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Academic website with CM Sans Serif fonts"

# Connect to GitHub (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (top menu)
2. Scroll down left sidebar → click **Pages**
3. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. ✅ Wait 2-5 minutes
6. Your site will be live at: `https://your-username.github.io`

### Step 4: Add Your Profile Picture

1. Prepare your image:
   - File name: `profile.jpg` or `profile.png`
   - Recommended size: 400×400 pixels minimum
2. Upload to repository root (same folder as index.html)
3. The image will automatically appear on your home page!

## 📝 Customization Guide

### Update Personal Information

1. **Home Page** (`index.html`):
   - Replace "Dorian" with your name
   - Update research description
   - Add your email address
   - Update contact information

2. **Research Page** (`research.html`):
   - Add your actual research projects
   - Update descriptions and dates
   - Add publications and links

3. **Blogs & Opinions** (`blogs.html`, `opinions.html`):
   - Replace placeholder posts with your content
   - Create individual post HTML files as needed

4. **CV Page** (`cv.html`):
   - Fill in education, experience, publications
   - Upload your PDF CV and link it

### Customize Colors (Optional)

Edit `style.css` lines 9-16:

```css
:root {
    --primary-color: #0A2158;       /* Change navy blue */
    --secondary-color: #B9D9EB;     /* Change light blue */
    --accent-color: #3a7bc8;        /* Change link color */
    --text-color: #1a1a1a;         /* Change text color */
}
```

**Popular Academic Color Schemes:**
- **Classic**: Navy (#003366) + Gold (#FFD700)
- **Forest**: Dark Green (#1e6e3a) + Light Green (#a8d5ba)
- **Crimson**: Deep Red (#9b2226) + Cream (#f0e5d8)
- **Current**: Navy Blue (#0A2158) + Light Blue (#B9D9EB) ✓

### Change Fonts (Advanced)

The website currently uses **Computer Modern Sans Serif** for everything.

To use different fonts:

1. Find fonts on [Google Fonts](https://fonts.google.com)
2. Update `@import` line in `style.css` (line 21)
3. Update `--font-main` variable (line 18)

Example:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

:root {
    --font-main: 'Inter', 'Helvetica Neue', Arial, sans-serif;
}
```

### Add Mathematical Equations (Optional)

If you need to display math equations like LaTeX:

1. Add MathJax to `<head>` of your HTML pages:

```html
<script>
  window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['$$', '$$']]
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>
```

2. Use in your content:
```html
<p>Inline equation: \(E = mc^2\)</p>
<p>Display equation:</p>
$$\Delta w_i \propto (y - \theta_y)(x_i - \theta_x)$$
```

## 🌐 Multilingual Features

### How Language Switching Works

1. User clicks language button (EN/中文/日本語)
2. Choice is saved to browser's `localStorage`
3. Content updates immediately
4. Preference persists across pages and visits

### Adding Translations to Other Pages

The home page is fully translated. To add translations to other pages:

1. **Add data attributes to HTML elements**:

```html
<h2 class="lang-content" 
    data-lang-en="Research" 
    data-lang-zh="研究" 
    data-lang-ja="研究">
    Research
</h2>
```

2. **Create page-specific language file** (`lang-pagename.js`):

```javascript
window.addEventListener('languageChanged', function(e) {
    const lang = e.detail.language;
    document.querySelectorAll('.lang-content').forEach(element => {
        const content = element.getAttribute(`data-lang-${lang}`);
        if (content) {
            element.innerHTML = content;
        }
    });
});
```

3. **Include in HTML**:

```html
<script src="script.js"></script>
<script src="lang-pagename.js"></script>
```

### Adding More Languages

To add Korean, Spanish, etc.:

1. Add button to language switcher:
```html
<button class="lang-btn" data-lang="ko">한국어</button>
```

2. Add translations to content:
```html
data-lang-ko="한국어 텍스트"
```

3. Update navigation in `script.js` `translations` object

## 🔧 Advanced Features

### Custom Domain

1. Buy domain (Namecheap, Google Domains, etc.)
2. Add `CNAME` file to repository root:
   ```
   yourdomain.com
   ```
3. Configure DNS (A records or CNAME):
   ```
   Type: A
   Host: @
   Value: 185.199.108.153 (GitHub Pages IP)
   ```
4. [Full GitHub guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Google Analytics

Add before `</head>` in all HTML files:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Blog Post

1. Create new file: `blog-post-slug.html`
2. Copy structure from `blogs.html`
3. Add your content
4. Update link in `blogs.html` list

Template:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Post Title - Your Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="language-switcher">
        <button class="lang-btn active" data-lang="en">EN</button>
        <button class="lang-btn" data-lang="zh">中文</button>
        <button class="lang-btn" data-lang="ja">日本語</button>
    </div>

    <nav><!-- Copy from other pages --></nav>

    <div class="container">
        <h1>Your Blog Post Title</h1>
        <p class="post-date">March 2026</p>
        
        <section>
            <p>Your content here...</p>
        </section>
    </div>

    <footer><!-- Copy from other pages --></footer>
    <script src="script.js"></script>
</body>
</html>
```

## 📱 Responsive Design

The website automatically adapts to all screen sizes:
- **Desktop** (>768px): Full layout with side-by-side elements
- **Tablet** (768px): Adjusted spacing and layout
- **Mobile** (<768px): Stacked single-column layout

## 🖨️ Print Styles

CV page is optimized for printing:
- Command/Ctrl + P to print
- Navigation and language switcher hidden
- Clean black & white layout
- Proper page breaks

## 🐛 Troubleshooting

**Site not appearing?**
- Wait 5-10 minutes after enabling Pages
- Check Settings → Pages for deployment status
- Verify repository is public

**Fonts not loading?**
- Requires internet connection (fonts loaded from CDN)
- Fallback fonts will load if CDN unavailable

**Colors look wrong?**
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Verify `style.css` was uploaded correctly

**Language switcher not working?**
- Check browser console (F12) for errors
- Ensure `script.js` and `lang-home.js` are loaded
- Verify JavaScript is enabled

**Profile image not showing?**
- Check file name is exactly `profile.jpg` or `profile.png`
- Verify image is in repository root folder
- File names are case-sensitive on GitHub

## 📚 Resources

- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/en/pages)
- **Computer Modern Fonts**: [github.com/dreampulse/computer-modern-web-font](https://github.com/dreampulse/computer-modern-web-font)
- **MathJax Documentation**: [docs.mathjax.org](https://docs.mathjax.org/)
- **HTML/CSS Guide**: [developer.mozilla.org](https://developer.mozilla.org/)

## 📄 License

Free to use and modify for your academic website. Attribution appreciated but not required.

---

**Created**: March 2026  
**Version**: Final - Computer Modern Sans Serif with Navy Blue & Light Blue theme  
**Font**: Computer Modern Sans Serif (LaTeX-style)  
**Colors**: Navy Blue (#0A2158) + Light Blue (#B9D9EB)  
**Languages**: English, 中文, 日本語
