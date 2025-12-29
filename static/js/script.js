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
        detect_on: 'window',
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
        },
        modes: {
            repulse: {
                distance: 150,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
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

// Load skills from API
async function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    try {
        const response = await fetch('/api/skills');
        const data = await response.json();
        
        if (data.success) {
            skillsContainer.innerHTML = '';
            
            // Iterate through each category (order preserved from backend)
            data.skills.forEach((skillCategory, catIndex) => {
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'skill-category';
                categoryDiv.setAttribute('data-aos', 'fade-up');
                categoryDiv.setAttribute('data-aos-delay', catIndex * 50);
                
                let skillsHTML = skillCategory.items.map(skill => 
                    `<span class="skill-tag">${skill}</span>`
                ).join('');
                
                categoryDiv.innerHTML = `
                    <h3 class="skill-category-title">${skillCategory.category}</h3>
                    <div class="skill-tags">
                        ${skillsHTML}
                    </div>
                `;
                
                skillsContainer.appendChild(categoryDiv);
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

// Contact form submission - FormSubmit handles this automatically
// No JavaScript needed - form submits directly to FormSubmit

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

// Experience Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    console.log('Found accordion headers:', accordionHeaders.length);
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            console.log('Accordion clicked!', this.getAttribute('data-target'));
            const target = this.getAttribute('data-target');
            const content = document.getElementById(target);
            
            if (!content) {
                console.error('Content not found for:', target);
                return;
            }
            
            // Toggle current accordion
            this.classList.toggle('active');
            content.classList.toggle('active');
            
            console.log('Toggled:', this.classList.contains('active'));
        });
    });
});


