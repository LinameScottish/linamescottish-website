// ===== Smooth Scrolling & Navigation =====
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

// ===== FAQ Accordion Functionality =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===== Scroll Animation for Elements =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, stat cards, and other elements
document.querySelectorAll('.service-card, .stat-card, .faq-item, .contact-item').forEach(el => {
    observer.observe(el);
});

// ===== Navbar Sticky Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(139, 132, 183, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(139, 132, 183, 0.1)';
    }
});

// ===== Progress Bar Animation =====
const progressBars = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            
            progressObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// ===== Active Navigation Link =====
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--primary-color)';
        } else {
            link.style.color = 'var(--text-color)';
        }
    });
});

// ===== Mobile Menu Toggle (if needed) =====
const handleMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    
    // Add mobile menu functionality if needed
    if (window.innerWidth <= 768) {
        navLinks.style.flexDirection = 'column';
    } else {
        navLinks.style.flexDirection = 'row';
    }
};

window.addEventListener('resize', handleMobileMenu);
handleMobileMenu();

// ===== Page Load Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Trigger animations for visible elements
    const visibleElements = document.querySelectorAll('.service-card, .stat-card');
    visibleElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in');
        }, index * 100);
    });
});

// ===== Prevent Flash of Unstyled Content =====
document.body.style.opacity = '0';
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.transition = 'opacity 0.5s ease-in';
    document.body.style.opacity = '1';
});

// ===== Contact Form Handling (if form is added) =====
const handleContactForm = () => {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
            alert('شكراً لتواصلك معنا! سنرد عليك قريباً.');
            form.reset();
        });
    }
};

handleContactForm();

// ===== Parallax Effect for Hero Section =====
const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
}

// ===== Video Play/Pause Handling =====
const videoContainer = document.querySelector('.video-container video');
if (videoContainer) {
    videoContainer.addEventListener('play', () => {
        console.log('Video started playing');
    });
    
    videoContainer.addEventListener('pause', () => {
        console.log('Video paused');
    });
}

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Show success message
        alert('شكراً لتواصلك معنا! سنرد عليك قريباً على ' + email);
        
        // Reset form
        contactForm.reset();
    });
}

console.log('Linam Scotch Website - Script loaded successfully!');
