// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
}

// Phone number validation
function isValidPhoneNumber(phone) {
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
    const phoneRegex = /^[\+]?[0-9]{10,15}$/;
    return phoneRegex.test(cleaned);
}

// Form validation
function validateForm() {
    let hasError = false;
    
    // Clear previous error messages
    const errorElements = ['phone', 'email_label', 'subject', 'message_label'];
    errorElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.color = '';
            element.style.fontWeight = '';
            // Reset the text content if it was an error message
            if (element.textContent && (element.textContent.includes('Please enter') || element.textContent.includes('must be'))) {
                element.textContent = element.getAttribute('data-original-text') || '';
            }
        }
    });
    
    // Get form reference
    const form = document.forms["myForm"];
    if (!form) {
        console.error('Form "myForm" not found');
        return false;
    }
    
    // Validate name (optional field)
    const name = form["name"] ? form["name"].value : "";
    
    // Validate phone
    const phone = form["phone"] ? form["phone"].value : "";
    if (phone === "" || !isValidPhoneNumber(phone)) {
        const phoneError = document.getElementById("phone");
        if (phoneError) {
            phoneError.textContent = "Please enter a valid phone number";
            phoneError.style.color = "red";
            phoneError.style.fontWeight = "bold";
        }
        hasError = true;
    }
    
    // Validate email
    const email = form["email"] ? form["email"].value : "";
    if (email === "" || !isValidEmail(email)) {
        const emailError = document.getElementById("email_label");
        if (emailError) {
            emailError.textContent = "Please enter a valid email address";
            emailError.style.color = "red";
            emailError.style.fontWeight = "bold";
        }
        hasError = true;
    }
    
    // Validate date (optional field)
    const date = form["date"] ? form["date"].value : "";
    
    // Validate subject
    const subject = form["subject"] ? form["subject"].value : "";
    if (subject === "" || subject.length < 5) {
        const subjectError = document.getElementById("subject");
        if (subjectError) {
            subjectError.textContent = "Subject must be at least 5 characters";
            subjectError.style.color = "red";
            subjectError.style.fontWeight = "bold";
        }
        hasError = true;
    }
    
    // Validate message
    const message = form["message"] ? form["message"].value : "";
    if (message === "" || message.length < 20) {
        const messageError = document.getElementById("message_label");
        if (messageError) {
            messageError.textContent = "Message must be at least 20 characters";
            messageError.style.color = "red";
            messageError.style.fontWeight = "bold";
        }
        hasError = true;
    }
    
    // Return validation result
    return !hasError;
}

// Crisis Modal functionality
function initCrisisModal() {
    const crisisBtn = document.getElementById('crisisBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeBtn');
    
    if (crisisBtn && modalOverlay) {
        crisisBtn.addEventListener('click', function() {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }
    
    if (closeBtn && modalOverlay) {
        closeBtn.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) {
        console.warn('Theme toggle button not found');
        return;
    }
    
    let isDarkMode = false;
    
    // Check if user has a saved preference
    try {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            isDarkMode = true;
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '☀️';
        }
    } catch (e) {
        console.warn('localStorage not available:', e);
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
        
        // Save preference (optional - wrapped in try/catch)
        try {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        } catch (e) {
            console.warn('Could not save theme preference:', e);
        }
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileNav = document.getElementById('mobileNav');
    
    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileNav.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing InnerNest...');
    
    try {
        initThemeToggle();
        console.log('✓ Theme toggle initialized');
    } catch (e) {
        console.error('Error initializing theme toggle:', e);
    }
    
    try {
        initCrisisModal();
        console.log('✓ Crisis modal initialized');
    } catch (e) {
        console.error('Error initializing crisis modal:', e);
    }
    
    try {
        initMobileMenu();
        console.log('✓ Mobile menu initialized');
    } catch (e) {
        console.error('Error initializing mobile menu:', e);
    }
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🕊️ InnerNest initialized successfully!');
});