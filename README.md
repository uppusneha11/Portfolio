# Sneha Uppu - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience in data science and software engineering.

## 🚀 Live Demo

Visit my portfolio: [Your Vercel URL will appear here after deployment]

## ✨ Features

- **Responsive Design**: Fully responsive and mobile-friendly
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Particle.js background animations
  - Typing effect for role descriptions
  - Smooth scroll navigation
  - Animated skill tags
  - Collapsible experience sections
- **Contact Form**: Integrated with FormSubmit for easy contact
- **Fast Loading**: Static site with optimized performance

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5
- **Libraries**: 
  - AOS (Animate On Scroll)
  - Particles.js
  - Typed.js
  - Font Awesome
- **Deployment**: Vercel

## 📁 Project Structure

```
Copy_Portfolio/
├── index.html  
├── static/
│   ├── css/
│   │   └── style.css 
│   ├── js/
│   │   └── script.js 
│   ├── images/  
│   └── resume.pdf 
├── vercel.json 
└── README.md  
```

## 🚀 Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login** to [Vercel](https://vercel.com)

2. **Import Git Repository**:
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it as a static site

3. **Deploy**:
   - Click "Deploy"
   - Your site will be live in seconds!

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Production Deployment**:
   ```bash
   vercel --prod
   ```

## 🔧 Local Development

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd Copy_Portfolio
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js
     npx serve
     ```

3. **View**:
   - Navigate to `http://localhost:8000`

## 📝 Customization

### Update Skills
Edit the skills array in `static/js/script.js` (line ~190):

```javascript
const skills = [
    {'category': 'Programming', 'items': ['Python', 'R', 'SQL', ...]},
    // Add your categories and skills here
];
```

### Update Projects
Edit project sections in `index.html` (starting at line ~268)

### Update Resume
Replace `static/resume.pdf` with your updated resume

### Update Images
Add your images to `static/images/` and update references in `index.html`

## 🌟 Features to Note

- **No Backend Required**: Completely static site - no server needed!
- **Instant Loading**: Deployed on Vercel's edge network
- **Free Hosting**: Vercel's free tier is perfect for portfolios
- **Auto HTTPS**: SSL certificate automatically configured
- **Custom Domain**: Can easily add your own domain in Vercel settings

## 📧 Contact Form

The contact form uses [FormSubmit](https://formsubmit.co/), a free form backend service. No registration needed - it works automatically!

## 🎨 Color Scheme

- Primary: `#667eea` (Purple-Blue)
- Secondary: `#764ba2` (Purple)
- Accent: Gradient from primary to secondary

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

© 2025 Sneha Uppu. All rights reserved.

## 🙏 Acknowledgments

- Bootstrap for the responsive framework
- Font Awesome for icons
- AOS for scroll animations
- Particles.js for background effects
- Typed.js for typing animations

---

**Note**: This portfolio was converted from Flask to a static site for better performance and instant loading on Vercel!
