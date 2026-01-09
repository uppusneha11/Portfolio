AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');
let menuTimeout;

if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('mouseenter', function() {
        clearTimeout(menuTimeout);
        navbarCollapse.classList.add('show');
    });
    
    navbarCollapse.addEventListener('mouseenter', function() {
        clearTimeout(menuTimeout);
        navbarCollapse.classList.add('show');
    });
    
    navbarToggler.addEventListener('mouseleave', function() {
        menuTimeout = setTimeout(() => {
            if (!navbarCollapse.matches(':hover')) {
                navbarCollapse.classList.remove('show');
            }
        }, 200);
    });
    
    navbarCollapse.addEventListener('mouseleave', function() {
        menuTimeout = setTimeout(() => {
            navbarCollapse.classList.remove('show');
        }, 200);
    });
    
    navbarCollapse.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navbarCollapse.classList.remove('show');
        });
    });
    
    navbarToggler.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

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

function loadSkills() {
    const skillsContainer = document.getElementById('skills-container');
    const scrollContainer1 = document.getElementById('skills-scroll-1');
    const scrollContainer2 = document.getElementById('skills-scroll-2');
    
    // Skills data
    const skills = [
        {'category': 'Programming', 'items': ['Python', 'R', 'SQL', 'Java', 'HTML', 'CSS', 'JavaScript', 'Bootstrap']},
        {'category': 'Data Engineering', 'items': ['ETL Pipelines', 'BeautifulSoup (Web Scraping)', 'Apache Airflow', 'Docker', 'Data Validation']},
        {'category': 'Data Visualization', 'items': ['Tableau','Power BI','Plotly', 'Matplotlib', 'Seaborn']},
        {'category': 'Data Science', 'items': ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Tensorflow', 'Keras', 'API']},
        {'category': 'Databases & Cloud', 'items': ['MySQL', 'PostgreSQL', 'Google Firebase', 'Firestore', 'AWS']},
        {'category': 'Tools & Platforms', 'items': ['Git', 'GitHub', 'Microsoft Office', 'Salesforce', 'Jira', 'MATLAB', 'fly.io']},
        {'category': 'IDEs', 'items': ['VS Code', 'Google Colab', 'Jupyter Notebook']},
        {'category': 'Soft Skills', 'items': ['Team Collaboration', 'Problem-Solving', 'Communication (Written & Verbal)', 'Time Management', 'Adaptability', 'Leadership']}
    ];
    
    // Icon mappings
    const availableIconMappings = {
        // Programming 
        'python': { name: 'Python', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        'r': { name: 'R', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
        'sql': { name: 'SQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        'java': { name: 'Java', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        'html': { name: 'HTML', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        'css': { name: 'CSS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        'javascript': { name: 'JavaScript', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        'bootstrap': { name: 'Bootstrap', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        'html/css': { name: 'HTML/CSS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        
        // Data Engineering
        'docker': { name: 'Docker', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        'apache airflow': { name: 'Airflow', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png' },
        
        // Data Visualization
        'tableau': { name: 'Tableau', imgSrc: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
        'matplotlib': { name: 'Matplotlib', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        
        // Data Science (all images for consistency)
        'pandas': { name: 'Pandas', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        'numpy': { name: 'NumPy', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        'scikit-learn': { name: 'Scikit-learn', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        'pytorch': { name: 'PyTorch', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        'tensorflow': { name: 'TensorFlow', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        'keras': { name: 'Keras', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
        
        // Databases & Cloud
        'mysql': { name: 'MySQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        'postgresql': { name: 'PostgreSQL', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        'firebase': { name: 'Firebase', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        'google firebase': { name: 'Firebase', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        'aws': { name: 'AWS', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        
        // Tools
        'git': { name: 'Git', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        'github': { name: 'GitHub', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        'salesforce': { name: 'Salesforce', imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
        'jira': { name: 'Jira', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        'matlab': { name: 'MATLAB', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg' },
        
        // IDEs
        'vs code': { name: 'VS Code', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        'jupyter': { name: 'Jupyter', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        'jupyter notebook': { name: 'Jupyter', imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' }
    };
    
    // Extract and match skills
    const allUserSkills = [];
    skills.forEach(category => {
        category.items.forEach(skill => allUserSkills.push(skill));
    });
    
    const matchedSkills = [];
    allUserSkills.forEach(userSkill => {
        const normalized = userSkill.toLowerCase().trim();
        if (availableIconMappings[normalized]) {
            matchedSkills.push({
                ...availableIconMappings[normalized],
                originalName: userSkill
            });
        }
    });
    
    // Remove duplicates
    const uniqueSkills = matchedSkills.filter((skill, index, self) =>
        index === self.findIndex(s => (s.icon || s.imgSrc) === (skill.icon || skill.imgSrc))
    );
    
    try {
        // Load scrolling carousel
        if (scrollContainer1 && scrollContainer2 && uniqueSkills.length > 0) {
            const iconsHTML = uniqueSkills.map(skill => {
                if (skill.imgSrc) {
                    return `
                        <div class="skill-icon-item" data-skill="${skill.originalName}">
                            <img src="${skill.imgSrc}" alt="${skill.originalName}" class="skill-icon-img">
                            <span class="skill-tooltip">${skill.originalName}</span>
                        </div>
                    `;
                } else {
                    return `
                        <div class="skill-icon-item" data-skill="${skill.originalName}">
                            <i class="${skill.icon}"></i>
                            <span class="skill-tooltip">${skill.originalName}</span>
                        </div>
                    `;
                }
            }).join('');
            
            scrollContainer1.innerHTML = iconsHTML;
            scrollContainer2.innerHTML = iconsHTML;
        }
        
        // Load traditional grid
        if (skillsContainer) {
            skillsContainer.innerHTML = '';
            skills.forEach((skillCategory, catIndex) => {
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
        }
        
        AOS.refresh();
    } catch (error) {
        console.error('Error loading skills:', error);
        if (skillsContainer) skillsContainer.innerHTML = '<p class="text-center text-muted">Error loading skills</p>';
    }
}

loadSkills();

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

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

console.log('%c Portfolio Loaded Successfully! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; font-size: 16px; border-radius: 5px;');
console.log('%c Made with ❤️ using HTML, CSS, JavaScript & Bootstrap ', 'color: #667eea; font-size: 14px;');

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
            
            this.classList.toggle('active');
            content.classList.toggle('active');
            
            console.log('Toggled:', this.classList.contains('active'));
        });
    });
});
