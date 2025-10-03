// DOM Elements
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
const conditionItems = document.querySelectorAll('.condition-item');

// Mobile Navigation Toggle
if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNav.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close mobile nav when clicking on a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !mobileToggle.contains(e.target)) {
            mobileNav.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    });
}

// Condition item interactions
conditionItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const blogId = item.getAttribute('data-blog-id');
        if (blogId) {
            window.location.href = `blog.html?id=${blogId}`;
        }
    });
    
    // Add entrance animation
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in-up');
});

// Scroll animations
function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Navigation scroll effect
function handleNavigationScroll() {
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Floating animation for hero cards
function initFloatingAnimations() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        card.style.animationDelay = `${randomDelay}s`;
        card.style.animationDuration = `${randomDuration}s`;
    });
}

// Emergency contact feature
function initEmergencyContact() {
    const emergencyBtn = document.createElement('button');
    emergencyBtn.innerHTML = '🆘 Crisis Support';
    emergencyBtn.className = 'emergency-contact';
    emergencyBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 12px 20px;
        background: linear-gradient(135deg, #dc3545, #c82333);
        color: white;
        border: none;
        border-radius: 25px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
        animation: pulse 2s infinite;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3); }
            50% { box-shadow: 0 4px 20px rgba(220, 53, 69, 0.6); transform: scale(1.05); }
            100% { box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3); }
        }
        
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
    `;
    document.head.appendChild(style);
    
    emergencyBtn.addEventListener('click', () => {
        showEmergencyContacts();
    });
    
    document.body.appendChild(emergencyBtn);
}

function showEmergencyContacts() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: 20px;
    `;
    
    modal.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #dc3545; margin-bottom: 10px;">🆘 Crisis Support Resources</h2>
            <p style="font-size: 16px; color: #666;">You are not alone. Help is available 24/7.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            <div style="border: 2px solid #dc3545; border-radius: 10px; padding: 15px; background: #fef2f2;">
                <h3 style="color: #dc3545; margin-bottom: 15px; text-align: center;">🏠 Ohio Hot-Lines</h3>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545;">Suicide Prevention</h4>
                    <p><strong>Call:</strong> <a href="tel:988" style="color: #dc3545; text-decoration: none;">988</a></p>
                    <p><strong>Text:</strong> <a href="sms:741741?body=4HOPE" style="color: #dc3545; text-decoration: none;">Text 4HOPE to 741741</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545;">OhioMHAS</h4>
                    <p><strong>Call:</strong> <a href="tel:1-877-275-6364" style="color: #dc3545; text-decoration: none;">1-877-275-6364</a></p>
                </div>
                
                <div style="padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545;">Franklin County ADAMH</h4>
                    <p><strong>Call:</strong> <a href="tel:614-276-2273" style="color: #dc3545; text-decoration: none;">614-276-2273</a></p>
                </div>
            </div>
            
            <div style="border: 2px solid #0066cc; border-radius: 10px; padding: 15px; background: #f0f8ff;">
                <h3 style="color: #0066cc; margin-bottom: 15px; text-align: center;">🇺🇸 National Hot-Lines</h3>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc;">Suicide Prevention</h4>
                    <p><strong>Call:</strong> <a href="tel:988" style="color: #0066cc; text-decoration: none;">988</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc;">NAMI Helpline</h4>
                    <p><strong>Call:</strong> <a href="tel:1-800-950-6264" style="color: #0066cc; text-decoration: none;">1-800-950-6264</a></p>
                </div>
                
                <div style="padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc;">Veterans Crisis Line</h4>
                    <p><strong>Call:</strong> <a href="tel:988" style="color: #0066cc; text-decoration: none;">988, press 1</a></p>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 25px; padding: 15px; background: #fff3cd; border-radius: 10px; border: 1px solid #ffeaa7;">
            <p style="margin: 0; font-weight: bold; color: #856404;">⚠️ If you're in immediate danger, call <a href="tel:911" style="color: #856404;">911</a></p>
        </div>
        
        <div style="text-align: center; margin-top: 15px;">
            <button id="closeModal" style="
                background: #6c757d;
                color: white;
                border: none;
                padding: 10px 25px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                transition: background 0.3s ease;
            ">Close</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    const closeBtn = modal.querySelector('#closeModal');
    closeBtn.addEventListener('mouseover', () => {
        closeBtn.style.background = '#5a6268';
    });
    closeBtn.addEventListener('mouseout', () => {
        closeBtn.style.background = '#6c757d';
    });
    
    const closeModal = () => {
        document.body.removeChild(overlay);
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeModal();
    });
    
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(135deg, #6BA292, #588377);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(107, 162, 146, 0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    let isDarkMode = false;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
        
        // Save theme preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
    
    themeToggle.addEventListener('mouseenter', () => {
        themeToggle.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    themeToggle.addEventListener('mouseleave', () => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
    });
    
    document.body.appendChild(themeToggle);
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    handleScrollAnimations();
    handleNavigationScroll();
    initFloatingAnimations();
    initThemeToggle();
    initEmergencyContact();
    
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});