// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

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
        }
    });
});

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Start counter animation for stats
            if (entry.target.classList.contains('stat')) {
                animateCounter(entry.target);
            }
            
            // Start skill progress animation
            if (entry.target.classList.contains('skill-item')) {
                animateSkillProgress(entry.target);
            }
        }
    });
}, observerOptions);

// Enhanced animation setup
document.addEventListener('DOMContentLoaded', () => {
    // Section titles with fade-in
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // About section elements
    document.querySelectorAll('.about-text p').forEach((el, index) => {
        el.classList.add('slide-in-left', `stagger-${index + 1}`);
        observer.observe(el);
    });
    
    // Stats with bounce animation
    document.querySelectorAll('.stat').forEach((el, index) => {
        el.classList.add('bounce-in', `stagger-${index + 1}`);
        observer.observe(el);
    });
    
    // Skills with scale animation
    document.querySelectorAll('.skill-item').forEach((el, index) => {
        el.classList.add('scale-in', `stagger-${(index % 5) + 1}`);
        observer.observe(el);
    });
    
    // Project cards with slide animations
    document.querySelectorAll('.project-card').forEach((el, index) => {
        const animationClass = index % 2 === 0 ? 'slide-in-left' : 'slide-in-right';
        el.classList.add(animationClass, `stagger-${index + 1}`);
        observer.observe(el);
    });
    
    // Timeline items
    document.querySelectorAll('.timeline-item').forEach((el, index) => {
        el.classList.add(`stagger-${index + 1}`);
        observer.observe(el);
    });
    
    // Contact section
    document.querySelector('.contact-info')?.classList.add('slide-in-left');
    document.querySelector('.contact-form')?.classList.add('slide-in-right');
    observer.observe(document.querySelector('.contact-info'));
    observer.observe(document.querySelector('.contact-form'));
    
    // Add floating animation to hero image
    const heroImage = document.querySelector('.hero-image .image-placeholder');
    if (heroImage) {
        heroImage.classList.add('float-animation');
    }
    
    // Add pulse animation to primary buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.classList.add('pulse-animation');
    });
});

// Counter animation function
function animateCounter(statElement) {
    const numberElement = statElement.querySelector('h3');
    if (!numberElement) return;
    
    const finalNumber = parseInt(numberElement.textContent.replace(/\D/g, ''));
    const suffix = numberElement.textContent.replace(/\d/g, '');
    let currentNumber = 0;
    const increment = finalNumber / 50; // Adjust speed here
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(timer);
        }
        numberElement.textContent = Math.floor(currentNumber) + suffix;
    }, 40);
}

// Skill progress animation
function animateSkillProgress(skillElement) {
    // Add progress bar to skill items if not already present
    if (!skillElement.querySelector('.skill-progress')) {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'skill-progress';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'skill-progress-bar';
        
        // Set random progress for demo (you can customize this)
        const progress = Math.floor(Math.random() * 40) + 60; // 60-100%
        progressBar.style.setProperty('--progress', progress + '%');
        
        progressContainer.appendChild(progressBar);
        skillElement.appendChild(progressContainer);
        
        // Trigger animation
        setTimeout(() => {
            progressBar.classList.add('animate');
        }, 200);
    }
}

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Enhanced parallax and scroll effects
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    }
    
    // Parallax effect for section backgrounds
    document.querySelectorAll('.about, .skills, .projects, .experience').forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const speed = (scrolled - section.offsetTop + windowHeight) * 0.1;
        
        if (rect.top < windowHeight && rect.bottom > 0) {
            section.style.transform = `translateY(${speed}px)`;
        }
    });
    
    // Navbar background opacity based on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const opacity = Math.min(scrolled / 100, 0.95);
        navbar.style.background = `rgba(255, 255, 255, ${opacity})`;
        navbar.style.backdropFilter = scrolled > 50 ? 'blur(10px)' : 'none';
    }
    
    // Progress indicator
    updateProgressIndicator();
});

// Progress indicator for scroll position
function createProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #60a5fa, #8b5cf6);
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
}

function updateProgressIndicator() {
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / scrollHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }
}

// Initialize progress indicator
createProgressIndicator();

// Text reveal animation
function createTextReveal() {
    const textElements = document.querySelectorAll('h1, h2, h3, p');
    
    textElements.forEach(element => {
        // Skip if already processed
        if (element.classList.contains('text-reveal')) return;
        
        const text = element.textContent;
        const words = text.split(' ');
        
        if (words.length > 1) {
            element.classList.add('text-reveal');
            element.innerHTML = words.map(word => 
                `<span style="transition-delay: ${Math.random() * 0.5}s">${word}</span>`
            ).join(' ');
            
            observer.observe(element);
        }
    });
}

// Smooth scroll with offset for fixed navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize text reveal on load
window.addEventListener('load', () => {
    // Small delay to ensure all content is loaded
    setTimeout(createTextReveal, 500);
});

// Intersection Observer for various animations
const advancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add staggered animation to child elements
            const children = entry.target.children;
            Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.3 });

// Apply to skill categories and project grids
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.skills-grid, .projects-grid').forEach(element => {
            // Set initial state for children
            Array.from(element.children).forEach(child => {
                child.style.opacity = '0';
                child.style.transform = 'translateY(30px)';
                child.style.transition = 'all 0.6s ease';
            });
            advancedObserver.observe(element);
        });
    }, 1000);
});

// Skills animation on scroll
const skillItems = document.querySelectorAll('.skill-item');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            }, index * 100);
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => {
    skillObserver.observe(item);
});

// Add CSS animation for skills
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-item {
        opacity: 0;
    }
`;
document.head.appendChild(styleSheet);

// Dark mode toggle (optional feature)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '🌙';
    toggle.classList.add('dark-mode-toggle');
    toggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1001;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        
        // Save preference
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '☀️';
    }
    
    document.body.appendChild(toggle);
}

// Initialize dark mode toggle
// createDarkModeToggle(); // Uncomment to enable dark mode

// Smooth reveal animation for project cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease';
    projectObserver.observe(card);
});

// Add scroll-to-top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.classList.add('scroll-to-top');
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(button);
}

// Initialize scroll to top button
createScrollToTopButton();