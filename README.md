# Portfolio Website

A clean, modern portfolio website showcasing my projects, skills, and experience in Data Engineering, Data Analysis, and Data Science.

## 🚀 Live Demo

Deployed on [Render](https://render.com)

## ✨ Features

- **Responsive Design**: Works seamlessly on all devices
- **Interactive Particle Background**: Dynamic particle effects on the homepage
- **Accordion Experience Section**: Expandable job experiences with descriptions
- **Project Showcase**: Display projects with images and descriptions
- **Dynamic Skills**: Skills loaded dynamically and organized by category
- **Contact Form**: Integrated with FormSubmit for easy message handling
- **Smooth Animations**: Powered by AOS (Animate On Scroll) library

## 🛠️ Technologies Used

**Backend:**
- Flask (Python)

**Frontend:**
- HTML5, CSS3, JavaScript
- Bootstrap 5
- Particles.js for interactive background
- Typed.js for typing animation
- AOS for scroll animations
- Font Awesome icons

**Deployment:**
- Render (Platform as a Service)
- Gunicorn (WSGI server)

**Contact Form:**
- FormSubmit (no backend required)

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

## 🚀 Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/uppusneha11/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**:
   ```bash
   python app.py
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:5000
   ```

## 📁 Project Structure

```
Portfolio/
├── app.py                  # Flask application
├── requirements.txt        # Python dependencies
├── Procfile               # Render deployment configuration
├── templates/
│   └── index.html         # Main HTML template
├── static/
│   ├── css/
│   │   └── style.css      # Custom styles
│   ├── js/
│   │   └── script.js      # JavaScript functionality
│   ├── images/            # Project images and profile photo
│   └── resume.pdf         # Resume file
```

## 🎨 Customization

### Update Skills
Edit the skills in `app.py`:
```python
skills = [
    {'category': 'Programming', 'items': ['Python', 'R', 'SQL']},
    # Add your skills here
]
```

### Update Projects
Modify project details in `templates/index.html` in the Projects section.

### Change Contact Email
Update the FormSubmit email in `templates/index.html`:
```html
<form action="https://formsubmit.co/your-email@example.com" method="POST">
```

## 🌐 Deployment on Render

1. Push your code to GitHub
2. Create a new **Web Service** on Render
3. Connect your GitHub repository
4. Render will automatically detect the `Procfile` and deploy your app
5. Your portfolio will be live at `https://your-app-name.onrender.com`
