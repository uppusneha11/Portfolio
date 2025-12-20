# Interactive Portfolio Website

A beautiful, modern, and interactive portfolio website built with **Flask**, **Bootstrap 5**, **Jinja2 Templates**, and **REST APIs**.

## ✨ Features

- **Modern & Responsive Design**: Beautiful UI that works seamlessly across all devices
- **Smooth Animations**: Powered by AOS (Animate On Scroll) library
- **Interactive Elements**: 
  - Particle.js background effects
  - Typing animation for job titles
  - Smooth scrolling navigation
  - Animated skill progress bars
  - Counter animations for statistics
- **API Integration**:
  - GitHub API for displaying repositories
  - Quotable API for inspiring quotes
  - Custom Flask API endpoints
- **Sections**:
  - Hero section with animated elements
  - About section with dynamic quote
  - Skills section with animated progress bars
  - Projects section with GitHub integration
  - Contact section with form

## 🛠️ Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5
- **Templating**: Jinja2
- **APIs**: 
  - GitHub REST API
  - Quotable API
- **Libraries**:
  - Particles.js
  - Typed.js
  - AOS (Animate On Scroll)
  - Font Awesome

## 📋 Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

## 🚀 Installation & Setup

1. **Navigate to the project directory**:
   ```bash
   cd /Users/snehauppu/Documents/Portfolio
   ```

2. **Install required packages**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask application**:
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
├── app.py                      # Main Flask application
├── requirements.txt            # Python dependencies
├── README.md                   # Project documentation
├── templates/
│   └── index.html             # Main HTML template with Jinja2
├── static/
│   ├── css/
│   │   └── style.css          # Custom CSS styles
│   ├── js/
│   │   └── script.js          # JavaScript for interactivity
│   └── images/                # Image assets
```

## 🎨 Customization

### Personal Information
Edit the following in `templates/index.html`:
- Name and title in the hero section
- About section content
- Contact information
- Social media links

### Skills
Modify the skills data in `app.py` in the `get_skills()` function:
```python
skills = [
    {'name': 'Your Skill', 'level': 90, 'category': 'frontend'},
    # Add more skills...
]
```

### GitHub Projects
Enter your GitHub username in the input field on the Projects section to load your repositories dynamically.

### Colors & Theme
Edit CSS variables in `static/css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --dark-color: #1e293b;
    /* Modify colors here */
}
```

## 🔌 API Endpoints

- `GET /` - Main portfolio page
- `GET /api/github/<username>` - Fetch GitHub repositories
- `GET /api/quote` - Get random inspiring quote
- `GET /api/skills` - Get skills data

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Features to Explore

1. **Particle Animation**: Hover and click on the hero section background
2. **Dynamic Quotes**: Click "New Quote" button in the About section
3. **GitHub Integration**: Enter any GitHub username to view repositories
4. **Smooth Navigation**: Click nav links for smooth scrolling
5. **Animated Skills**: Scroll to skills section to see animated progress bars

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sneha Uppu**

---

**Made with ❤️ using Flask, Bootstrap & APIs**

