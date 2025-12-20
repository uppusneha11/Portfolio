// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Burger menu hover effect for mobile
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
let menuTimeout;

if (navbarToggler && navbarCollapse) {
    const navContainer = navbarToggler.closest('.navbar');
    
    // Show menu on hover over burger
    navbarToggler.addEventListener('mouseenter', function() {
        clearTimeout(menuTimeout);
        navbarCollapse.classList.add('show');
    });
    
    // Keep menu open when hovering over menu items
    navbarCollapse.addEventListener('mouseenter', function() {
        clearTimeout(menuTimeout);
        navbarCollapse.classList.add('show');
    });
    
    // Hide menu when mouse leaves burger
    navbarToggler.addEventListener('mouseleave', function() {
        menuTimeout = setTimeout(() => {
            if (!navbarCollapse.matches(':hover')) {
                navbarCollapse.classList.remove('show');
            }
        }, 200);
    });
    
    // Hide menu when mouse leaves the menu
    navbarCollapse.addEventListener('mouseleave', function() {
        menuTimeout = setTimeout(() => {
            navbarCollapse.classList.remove('show');
        }, 200);
    });
    
    // Also close menu when clicking a link
    navbarCollapse.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
        });
    });
    
    // Prevent Bootstrap's default toggle behavior
    navbarToggler.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Typed.js effect for hero section
const typed = new Typed('#typed-text', {
    strings: [
        'Web Designer',
        'Data Scientist',
        'Data Engineer',
        'Tech Enthusiast',
        'Creative Thinker',
        'Problem Solver'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Particles.js configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Counter animation for statistics
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// Load inspiring quote
async function loadQuote() {
    const quoteText = document.getElementById('daily-quote');
    const quoteAuthor = document.getElementById('quote-author');
    
    try {
        quoteText.textContent = 'Loading...';
        quoteAuthor.textContent = '';
        
        const response = await fetch('/api/quote');
        const data = await response.json();
        
        if (data.success) {
            quoteText.textContent = `"${data.quote.content}"`;
            quoteAuthor.textContent = `— ${data.quote.author}`;
        } else {
            quoteText.textContent = '"The only way to do great work is to love what you do."';
            quoteAuthor.textContent = '— Steve Jobs';
        }
    } catch (error) {
        console.error('Error loading quote:', error);
        quoteText.textContent = '"Code is like humor. When you have to explain it, it\'s bad."';
        quoteAuthor.textContent = '— Cory House';
    }
}

// Load quote on page load
loadQuote();

// New quote button
document.getElementById('new-quote-btn').addEventListener('click', loadQuote);

// Load skills from API
async function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        
        if (data.success) {
            skillsContainer.innerHTML = '';
            data.skills.forEach((skill, index) => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.setAttribute('data-aos', 'fade-up');
                skillItem.setAttribute('data-aos-delay', index * 100);
                
                skillItem.innerHTML = `
                    <div class="skill-header">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-percentage">${skill.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-level="${skill.level}"></div>
                    </div>
                `;
                
                skillsContainer.appendChild(skillItem);
            });
            
            // Animate skill bars when in view
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target.querySelector('.skill-progress');
                        const level = progressBar.getAttribute('data-level');
                        setTimeout(() => {
                            progressBar.style.width = level + '%';
                        }, 100);
                        skillObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            document.querySelectorAll('.skill-item').forEach(item => {
                skillObserver.observe(item);
            });
            
            AOS.refresh();
        }
    } catch (error) {
        console.error('Error loading skills:', error);
        skillsContainer.innerHTML = '<p class="text-center text-muted">Error loading skills</p>';
    }
}

// Load skills on page load
loadSkills();

// Load GitHub repositories
async function loadGitHubRepos(username) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = `
        <div class="col-12">
            <div class="spinner-container">
                <div class="spinner"></div>
            </div>
        </div>
    `;
    
    try {
        const response = await fetch(`/api/github/${username}`);
        const data = await response.json();
        
        if (data.success && data.repos.length > 0) {
            projectsContainer.innerHTML = '';
            data.repos.forEach((repo, index) => {
                const col = document.createElement('div');
                col.className = 'col-lg-4 col-md-6 mb-4';
                col.setAttribute('data-aos', 'fade-up');
                col.setAttribute('data-aos-delay', index * 100);
                
                const language = repo.language || 'Code';
                const description = repo.description || 'No description available';
                const stars = repo.stargazers_count || 0;
                const forks = repo.forks_count || 0;
                
                col.innerHTML = `
                    <div class="project-card">
                        <div class="project-icon">
                            <i class="fas fa-code"></i>
                        </div>
                        <div class="project-body">
                            <h3 class="project-title">${repo.name}</h3>
                            <p class="project-description">${description}</p>
                            <div class="project-stats">
                                <span class="project-stat">
                                    <i class="fas fa-star"></i>
                                    ${stars}
                                </span>
                                <span class="project-stat">
                                    <i class="fas fa-code-branch"></i>
                                    ${forks}
                                </span>
                            </div>
                            <div class="project-tags">
                                <span class="project-tag">${language}</span>
                            </div>
                            <div class="project-links">
                                <a href="${repo.html_url}" target="_blank" class="project-link primary">
                                    <i class="fab fa-github"></i> View Code
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                
                projectsContainer.appendChild(col);
            });
            
            AOS.refresh();
        } else {
            projectsContainer.innerHTML = `
                <div class="col-12 text-center">
                    <p class="text-muted">No repositories found for user "${username}"</p>
                </div>
            `;
        }
    } catch (error) {
        console.error('Error loading GitHub repos:', error);
        projectsContainer.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-danger">Error loading repositories. Please try again.</p>
            </div>
        `;
    }
}

// Load repos button click handler
document.getElementById('load-repos-btn').addEventListener('click', () => {
    const username = document.getElementById('github-username').value.trim();
    if (username) {
        loadGitHubRepos(username);
    } else {
        alert('Please enter a GitHub username');
    }
});

// Load repos on Enter key
document.getElementById('github-username').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const username = e.target.value.trim();
        if (username) {
            loadGitHubRepos(username);
        }
    }
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Show success message
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.disabled = true;
    
    // Reset form after 2 seconds
    setTimeout(() => {
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Add scroll reveal effect to elements
const revealElements = document.querySelectorAll('[data-aos]');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// Preloader (optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

console.log('%c Portfolio Loaded Successfully! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; font-size: 16px; border-radius: 5px;');
console.log('%c Made with ❤️ using Flask, Bootstrap & APIs ', 'color: #667eea; font-size: 14px;');

