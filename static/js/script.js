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
        {'category': 'Languages & Query', 'items': ['Python', 'SQL', 'R', 'DAX', 'Bash']},
        {'category': 'AI/ML Libraries', 'items': ['pandas','NumPy', 'scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'NLTK', 'LangChain', 'SciPy', 'BERT', 'Node2Vec', 'statsmodels', 'Matplotlib', 'Seaborn', 'Plotly']},
        {'category': 'BI & Visualization', 'items': ['Tableau', 'Tableau Server', 'Power BI', 'Looker', 'Streamlit', 'Google Data Studio', 'Metabase', 'Advanced Excel (Power Query)']},
        {'category': 'Data Engineering & Warehousing', 'items': ['Apache Spark', 'Apache Airflow', 'Apache Kafka', 'dbt', 'Snowflake', 'Databricks', 'Amazon Redshift', 'Google BigQuery', 'Azure Synapse', 'ETL/ELT Pipelines', 'Data Modeling']},
        {'category': 'Databases', 'items': ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'MongoDB', 'Redis', 'FAISS', 'Pinecone']},
        {'category': 'Cloud & MLOps', 'items': ['Amazon Web Services', 'AWS SageMaker', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'Docker', 'Git', 'GitHub', 'CI/CD', 'Jupyter Notebook']},
        {'category': 'AI/ML Techniques', 'items': ['ML', 'NLP', 'GenAI', 'LLMs', 'RAG', 'Predictive Modeling', 'A/B Testing', 'Statistical Analysis', 'Causal Inference', 'Cohort Analysis', 'Funnel Analysis', 'Feature Engineering', 'MLOps', 'Information Retrieval', 'Recommendation Systems']},
        {'category': 'Business & Methodology', 'items': ['Salesforce CRM', 'Requirements Gathering', 'Business Requirements Documents (BRDs)', 'Gap Analysis', 'Process Mapping', 'UAT', 'Data Governance', 'Data Quality', 'Agile', 'Scrum', 'JIRA', 'Confluence', 'Cross-Functional Stakeholder Management']},
        {'category': 'Soft Skills', 'items': ['Team Collaboration', 'Problem Solving', 'Communication (Written & Verbal)', 'Time Management', 'Adaptability', 'Leadership']}
    ];
    
    // Use authentic vendor/project logos only; skills without an official logo are omitted from the ribbon.
    const availableIconMappings = {
        'python': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        'r': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg' },
        'bash': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
        'pandas': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        'numpy': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        'scikit-learn': { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        'tensorflow': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        'pytorch': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        'langchain': { imgSrc: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
        'scipy': { imgSrc: 'https://cdn.simpleicons.org/scipy/8CAAE6' },
        'tableau': { imgSrc: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
        'tableau server': { imgSrc: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
        'power bi': { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
        'looker': { imgSrc: 'https://cdn.simpleicons.org/looker/4285F4' },
        'streamlit': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
        'metabase': { imgSrc: 'https://cdn.simpleicons.org/metabase/509EE3' },
        'plotly': { imgSrc: 'https://cdn.simpleicons.org/plotly/3F4F75' },
        'matplotlib': { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' },
        'apache spark': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg' },
        'apache airflow': { imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png' },
        'apache kafka': { imgSrc: 'https://cdn.simpleicons.org/apachekafka/231F20' },
        'snowflake': { imgSrc: 'https://cdn.simpleicons.org/snowflake/29B5E8' },
        'databricks': { imgSrc: 'https://cdn.simpleicons.org/databricks/FF3621' },
        'google bigquery': { imgSrc: 'https://cdn.simpleicons.org/googlebigquery/669DF6' },
        'postgresql': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        'mysql': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        'microsoft sql server': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
        'mongodb': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        'redis': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        'docker': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        'git': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        'github': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        'jupyter notebook': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        'amazon web services': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        'microsoft azure': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        'google cloud platform (gcp)': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        'salesforce crm': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
        'jira': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        'confluence': { imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg' }
    };
    
    // Extract and match skills
    const allUserSkills = [];
    skills.forEach(category => {
        category.items.forEach(skill => allUserSkills.push(skill));
    });
    
    const matchedSkills = allUserSkills
        .map(userSkill => {
            const mapping = availableIconMappings[userSkill.toLowerCase().trim()];
            return mapping ? { ...mapping, originalName: userSkill } : null;
        })
        .filter(Boolean);
    
    try {
        // Load scrolling carousel
        if (scrollContainer1 && scrollContainer2 && matchedSkills.length > 0) {
            const iconsHTML = matchedSkills.map(skill => {
                if (skill.imgSrc) {
                    return `
                        <div class="skill-icon-item" data-skill="${skill.originalName}">
                            <img src="${skill.imgSrc}" alt="${skill.originalName}" class="skill-icon-img">
                            <span class="skill-tooltip">${skill.originalName}</span>
                        </div>
                    `;
                }
            }).join('');
            
            scrollContainer1.innerHTML = iconsHTML;
            scrollContainer2.innerHTML = iconsHTML;

            // A failed remote logo should disappear completely, including its flex gap.
            document.querySelectorAll('.skill-icon-img').forEach(image => {
                image.addEventListener('error', () => {
                    image.closest('.skill-icon-item')?.remove();
                }, { once: true });
            });
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
