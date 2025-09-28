// Initialize all modern libraries and effects
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Typed.js for hero section
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'Full Stack Developer',
                'Frontend Specialist',
                'UI/UX Enthusiast',
                'React Developer',
                'JavaScript Expert'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // GSAP Animations
    initGSAPAnimations();
    
    // Initialize Vanilla Tilt for cards
    initTiltEffects();
    
    // Initialize Three.js background (optional)
    // initThreeJSBackground();
    
    // Initialize Swiper for projects (if you want a carousel)
    // initProjectSwiper();
});

// GSAP Animations
function initGSAPAnimations() {
    // Hero section animation
    gsap.timeline()
        .from('.hero-text h1', {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        .from('.hero-text p', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-buttons .btn', {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.3');

    // Parallax effect for sections
    gsap.utils.toArray('.parallax-section').forEach(section => {
        gsap.to(section, {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });

    // Skills animation
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
        gsap.from(item, {
            scale: 0,
            rotation: 180,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.1
        });
    });

    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            delay: index * 0.2
        });
    });

    // Timeline animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const isEven = index % 2 === 0;
        gsap.from(item, {
            x: isEven ? -100 : 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Counter animation with GSAP
    gsap.utils.toArray('.stat h3').forEach(counter => {
        const target = parseInt(counter.textContent);
        const suffix = counter.textContent.replace(/\d/g, '');
        
        gsap.to(counter, {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            onUpdate: function() {
                counter.textContent = Math.ceil(counter.textContent) + suffix;
            }
        });
    });
}

// Initialize Tilt Effects
function initTiltEffects() {
    // Add tilt effect to project cards
    VanillaTilt.init(document.querySelectorAll('.project-card'), {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2
    });

    // Add tilt effect to skill items
    VanillaTilt.init(document.querySelectorAll('.skill-item'), {
        max: 10,
        speed: 300,
        perspective: 1000
    });
}

// Optional: Three.js animated background
function initThreeJSBackground() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Add to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.position = 'relative';
        renderer.domElement.style.position = 'absolute';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '-1';
        heroSection.appendChild(renderer.domElement);
    }

    // Create floating particles
    const geometry = new THREE.BufferGeometry();
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x2563eb,
        size: 0.02,
        transparent: true,
        opacity: 0.6
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        particles.rotation.x += 0.001;
        particles.rotation.y += 0.002;
        
        renderer.render(scene, camera);
    }
    
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Optional: Swiper for projects carousel
function initProjectSwiper() {
    const swiper = new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
}

// Mobile Navigation Toggle (keep existing functionality)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced scroll progress indicator
function createScrollProgress() {
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

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / scrollHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Contact form handling with enhanced validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Enhanced validation
        if (!name || name.length < 2) {
            showNotification('Please enter a valid name', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (!subject || subject.length < 3) {
            showNotification('Please enter a subject', 'error');
            return;
        }
        
        if (!message || message.length < 10) {
            showNotification('Please enter a message (at least 10 characters)', 'error');
            return;
        }
        
        // Simulate form submission with loading animation
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Add loading animation
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        setTimeout(() => {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            this.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Set background color based on type
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    
    notification.style.background = colors[type] || colors.info;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add scroll-to-top button with enhanced styling
function createScrollToTop() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb, #8b5cf6);
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    button.addEventListener('click', () => {
        gsap.to(window, {duration: 1, scrollTo: 0, ease: 'power2.out'});
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
            button.style.transform = 'scale(1)';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
            button.style.transform = 'scale(0.8)';
        }
    });
    
    document.body.appendChild(button);
}

// Initialize scroll to top
createScrollToTop();

// Add intersection observer for enhanced animations
const enhancedObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

// Observe elements for enhanced animations
document.querySelectorAll('.enhance-on-scroll').forEach(el => {
    enhancedObserver.observe(el);
});