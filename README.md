# Sneha Uppu - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience in data science and software engineering.

## 🚀 Live Demo

Visit my portfolio: [sneha-uppu-portfolio.vercel.app](https://sneha-uppu-portfolio.vercel.app)

## 📁 Project Structure

```
Portfolio/
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

## 🛠️ Technologies & Tools

### Frontend
- **HTML5, CSS3, JavaScript** - Core web technologies
- **Bootstrap 5** - Responsive framework
- **Font Awesome** - Icons
- **Devicon** - Programming language icons

### Libraries & Animations
- **AOS (Animate On Scroll)** - Scroll animations
- **Particles.js** - Interactive background particles
- **Typed.js** - Typing effect animations

### Deployment
- **Vercel** - Static site hosting with automatic deployments

### Form Handling
- **FormSubmit** - Contact form backend (no server required)

## 🚀 How to Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/uppusneha11/Portfolio.git
   cd Portfolio
   ```

2. **Open in browser**:
   
   **Option 1**: Simply open `index.html` in your web browser
   
   **Option 2**: Use a local server for better experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **View the site**:
   - Navigate to `http://localhost:8000` in your browser

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Animations** - Smooth scrolling, particle effects, and typing animations
- **Dynamic Skills Display** - Scrolling carousel and categorized skill grid
- **Collapsible Experience Section** - Accordion-style work experience timeline
- **Project Showcase** - Detailed project cards with descriptions and links
- **Contact Form** - Functional contact form with email integration
- **Downloadable Resume** - Direct PDF download option

## 🎨 How It Works

1. **Static Site Architecture**: This is a pure static website with no backend server required. All content is rendered client-side using vanilla JavaScript.

2. **Animations**: 
   - Particles.js creates the animated background on the hero section
   - AOS library handles scroll-triggered animations
   - Typed.js creates the typing effect for role descriptions

3. **Skills System**: Skills are dynamically loaded from a JavaScript array and rendered both as a scrolling carousel and a categorized grid.

4. **Contact Form**: Uses FormSubmit.co as a free form backend service that sends form submissions directly to email without requiring a server.

5. **Deployment**: Hosted on Vercel's edge network for instant global delivery. Any push to the main branch automatically triggers a new deployment.

## 📄 License

© 2026 Sneha Uppu. All rights reserved.

---