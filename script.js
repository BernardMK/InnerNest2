// DOM Elements
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const conditionItems = document.querySelectorAll('.condition-item');
const serviceCards = document.querySelectorAll('.service-card');
const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

// Mobile Navigation Toggle
mobileToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    mobileToggle.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileToggle.querySelectorAll('span');
    if (mobileNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
    }
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileToggle.classList.remove('active');
        
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(0) translate(0, 0)';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'rotate(0) translate(0, 0)';
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation link active state
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
        
        // Update active state
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Condition item interactions
conditionItems.forEach((item, index) => {
    // Add click interaction
    item.addEventListener('click', () => {
        const conditionType = item.id;
        showConditionModal(conditionType);
    });
    
    // Add entrance animation
    item.style.animationDelay = `${index * 0.1}s`;
    item.classList.add('fade-in-up');
});

// Service card interactions
serviceCards.forEach((card, index) => {
    const button = card.querySelector('.service-btn');
    
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const serviceType = card.querySelector('h3').textContent;
        handleServiceClick(serviceType);
    });
    
    // Add entrance animation
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add('fade-in-up');
});

// Condition modal functionality
function showConditionModal(conditionType) {
    const conditionInfo = getConditionInfo(conditionType);
    
    // Create modal
    const modal = createModal(conditionInfo);
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');
    
    [closeBtn, modalOverlay].forEach(element => {
        element.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => document.body.removeChild(modal), 300);
        });
    });
}

function createModal(info) {
    const modal = document.createElement('div');
    modal.className = 'condition-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <div class="modal-icon">${info.icon}</div>
                <h2>${info.title}</h2>
            </div>
            <div class="modal-body">
                <p class="modal-description">${info.description}</p>
                <h3>Common Symptoms:</h3>
                <ul class="symptom-list">
                    ${info.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                </ul>
                <h3>Coping Strategies:</h3>
                <ul class="strategy-list">
                    ${info.strategies.map(strategy => `<li>${strategy}</li>`).join('')}
                </ul>
                <div class="modal-actions">
                    <button class="btn-primary" onclick="bookAppointment()">Book Consultation</button>
                    <button class="btn-secondary" onclick="findResources('${info.id}')">Find Resources</button>
                </div>
            </div>
        </div>
    `;
    
    return modal;
}

function getConditionInfo(conditionType) {
    const conditions = {
        anxiety: {
            id: 'anxiety',
            icon: '😰',
            title: 'Anxiety Disorders',
            description: 'Anxiety disorders involve excessive fear or worry that interferes with daily activities. They are among the most common mental health conditions.',
            symptoms: [
                'Excessive worrying about daily situations',
                'Restlessness or feeling on edge',
                'Rapid heartbeat or palpitations',
                'Sweating or trembling',
                'Difficulty concentrating',
                'Sleep disturbances'
            ],
            strategies: [
                'Practice deep breathing exercises',
                'Use progressive muscle relaxation',
                'Engage in regular physical exercise',
                'Limit caffeine and alcohol intake',
                'Try mindfulness and meditation',
                'Maintain a regular sleep schedule'
            ]
        },
        depression: {
            id: 'depression',
            icon: '😔',
            title: 'Depression',
            description: 'Depression is a mood disorder that causes persistent feelings of sadness and loss of interest in activities you once enjoyed.',
            symptoms: [
                'Persistent sad or empty mood',
                'Loss of interest in activities',
                'Fatigue and decreased energy',
                'Changes in appetite or weight',
                'Sleep disturbances',
                'Feelings of worthlessness or guilt'
            ],
            strategies: [
                'Maintain social connections',
                'Establish a daily routine',
                'Engage in regular exercise',
                'Practice self-care activities',
                'Set small, achievable goals',
                'Seek professional support'
            ]
        },
        stress: {
            id: 'stress',
            icon: '😓',
            title: 'Stress Management',
            description: 'Chronic stress can affect your physical and mental health. Learning to manage stress is essential for overall wellbeing.',
            symptoms: [
                'Feeling overwhelmed',
                'Irritability or mood swings',
                'Physical tension or headaches',
                'Changes in appetite',
                'Difficulty sleeping',
                'Trouble concentrating'
            ],
            strategies: [
                'Practice time management skills',
                'Learn to say no to excessive demands',
                'Use relaxation techniques',
                'Take regular breaks',
                'Maintain work-life balance',
                'Build a support network'
            ]
        },
        trauma: {
            id: 'trauma',
            icon: '💔',
            title: 'Trauma & PTSD',
            description: 'Trauma can result from experiencing or witnessing a deeply distressing event. PTSD is a condition that can develop after trauma.',
            symptoms: [
                'Intrusive memories or flashbacks',
                'Nightmares or sleep disturbances',
                'Avoidance of trauma-related triggers',
                'Negative changes in thinking and mood',
                'Hypervigilance or being easily startled',
                'Emotional numbness'
            ],
            strategies: [
                'Practice grounding techniques',
                'Create a safe environment',
                'Build a strong support system',
                'Engage in trauma-informed therapy',
                'Practice self-compassion',
                'Develop healthy coping mechanisms'
            ]
        },
        biPolarDisorder: {
            id: 'biPolarDisorder',
            icon: '😵‍💫',
            title: 'Bipolar Disorder',
            description: 'Bipolar disorder is characterized by extreme mood swings, including emotional highs (mania or hypomania) and lows (depression).',
            symptoms: [
                'Frequent mood changes',
                'Increased energy or activity levels',
                'Racing thoughts or rapid speech',
                'Impulsive or risky behavior',
                'Feelings of hopelessness or despair',
                'Changes in sleep patterns'
            ],
            strategies: [
                'Maintain a consistent daily routine',
                'Track mood changes',
                ' Avoid alcohol and drugs',
                'Take medications as prescribed',
                'Educate yourself about the disorder',
                'Build a strong support system',
                'Engage in therapy or counseling',
                'Practice self-compassion'
            ]
        },
        eatingDisorder: {
            id: 'eatingDisorder',
            icon: '🍽️',
            title: 'Eating Disorders',
            description: 'Eating disorders involve unhealthy eating habits that negatively impact physical and mental health.',
            symptoms: [
                'Preoccupation with food, weight, and body image',
                'Extreme dietary restrictions',
                'Binge eating episodes',
                'Purging behaviors (vomiting, laxatives)',
                'Excessive exercise',
                'Social withdrawal',
            ],
            strategies: [
                'Seek professional help from a therapist or dietitian',
                'Avoid dieting or restrictive eating',
                'Practice mindful eating',
                'Build a support network',
                'Engage in self-care activities',
                'Challenge negative thoughts about body image'
            ]
        }, 
        relationships: {
            id: 'relationships',
            icon: '💑',
            title: 'Relationship Issues',
            description: 'Healthy relationships are vital for mental wellbeing. Addressing relationship issues can improve communication and emotional connection.',
            symptoms: [
                'Frequent arguments or conflicts',
                'Feeling misunderstood or unappreciated',
                'Lack of trust or intimacy',
                'Emotional distance or withdrawal',
                'Jealousy or insecurity',
                'Difficulty resolving disagreements'
            ],
            strategies: [
                'Practice active listening',
                'Communicate openly and honestly',
                'Set healthy boundaries',
                'Seek couples or family therapy',
                'Spend quality time together',
                'Show appreciation and gratitude'
            ]
        },
        selfcare: {
            id: 'selfcare',
            icon: '🌸',
            title: 'Self-Care & Wellness',
            description: 'Self-care is essential for maintaining mental and physical health. Prioritizing self-care can enhance overall wellbeing.',
            symptoms: [
                'Feeling overwhelmed or stressed',
                'Neglecting personal needs',
                'Difficulty relaxing',
                'Loss of motivation',
                'Feeling guilty about taking breaks',
                'Physical symptoms of stress'
            ],
            strategies: [
                'Establish a daily self-care routine',
                'Prioritize adequate sleep',
                'Eat nutritious meals regularly',
                'Engage in activities you enjoy',
                'Practice mindfulness or meditation',
                'Set realistic expectations for yourself'
            ]
        },
       panicdisorder: {
            id: 'panicdisorder',
            icon: '😱',
            title: 'Panic Disorder',
            description: 'Panic disorder is characterized by recurrent and unexpected panic attacks, along with persistent concern about future attacks.',
            symptoms: [
                'Sudden and intense fear or discomfort',
                'Rapid heartbeat or palpitations',
                'Shortness of breath',
                'Chest pain or discomfort',
                'Dizziness or lightheadedness',
                'Fear of losing control or "going crazy"'
            ],
            strategies: [
                'Practice deep breathing exercises',
                'Use grounding techniques',
                'Challenge negative thoughts',
                'Gradual exposure to feared situations',
                'Seek professional help if needed',
                'Join a support group'
            ]
        }, 
        delusionaldisorder: {
            id: 'delusionaldisorder',
            icon: '🤯',
            title: 'Delusional Disorder',
            description: 'Delusional disorder is characterized by the presence of one or more delusions that persist for at least one month.',
            symptoms: [
                'Strongly held false beliefs',
                'Difficulty distinguishing reality from delusion',
                'Possible hallucinations',
                'Social withdrawal',
                'Emotional distress',
                'Impaired functioning'
            ],
            strategies: [
                'Seek professional help from a psychiatrist or therapist',
                'Engage in supportive therapy',
                'Educate yourself about the disorder',
                'Build a strong support system',
                'Practice self-compassion'
            ]
        }
    };

    return conditions[conditionType] || conditions.anxiety;
}

// Service click handlers
function handleServiceClick(serviceType) {
    switch(serviceType) {
        case 'Professional Therapy':
            showTherapyOptions();
            break;
        case 'Group Sessions':
            showGroupSessions();
            break;
        case 'Resources Library':
            showResourcesLibrary();
            break;
        default:
            alert('Coming soon! This feature is under development.');
    }
}

function showTherapyOptions() {
    alert('Professional Therapy\n\nConnect with licensed therapists:\n• Individual counseling\n• Specialized treatment approaches\n• Flexible scheduling\n• Online and in-person options\n\nContact us to schedule your consultation!');
}

function showGroupSessions() {
    alert('Group Sessions\n\nJoin our supportive community:\n• Anxiety support groups\n• Depression recovery circles\n• Stress management workshops\n• Trauma healing groups\n\nFind your group and start healing together!');
}

function showResourcesLibrary() {
    alert('Resources Library\n\nExplore our comprehensive collection:\n• Educational articles\n• Self-help guides\n• Meditation resources\n• Crisis support information\n\nAccess tools for your mental health journey!');
}

// Button click handlers
function bookAppointment() {
    alert('Book Appointment\n\nWe\'ll connect you with a qualified mental health professional.\n\nFeatures:\n• Choose your preferred therapist\n• Select convenient time slots\n• Online or in-person sessions\n• Insurance verification assistance\n\nCall us at: (555) 123-MIND\nOr visit our booking portal online!');
}

function findResources(conditionType) {
    const resourceLinks = {
        anxiety: 'anxiety management tools and exercises',
        depression: 'depression support resources and guides',
        stress: 'stress reduction techniques and worksheets',
        trauma: 'trauma recovery resources and support groups',
        relationships: 'relationship building tools and communication guides',
        selfcare: 'self-care planning tools and wellness activities'
    };
    
    const resource = resourceLinks[conditionType] || 'mental health resources';
    alert(`Find Resources\n\nDiscover helpful ${resource}:\n\n• Educational materials\n• Interactive tools\n• Support group finder\n• Crisis hotlines\n• Professional referrals\n\nVisit our resources section for comprehensive support!`);
}

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
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
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

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Theme toggle functionality (bonus feature)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
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
    
    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
    });
    
    themeToggle.addEventListener('mouseenter', () => {
        themeToggle.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    themeToggle.addEventListener('mouseleave', () => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
    });
    
    document.body.appendChild(themeToggle);
}

// Emergency contact feature
function initEmergencyContact() {
    const emergencyBtn = document.createElement('button');
    emergencyBtn.innerHTML = '🆘 Crisis Support';
    emergencyBtn.className = 'emergency-contact';
    emergencyBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
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
    
    // Add pulse animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3); }
            50% { box-shadow: 0 4px 20px rgba(220, 53, 69, 0.6); transform: scale(1.05); }
            100% { box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3); }
        }
    `;
    document.head.appendChild(style);
    
    emergencyBtn.addEventListener('click', () => {
        showEmergencyContacts();
    });
    
    document.body.appendChild(emergencyBtn);
}

function showEmergencyContacts() {
    // Create modal overlay
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
    
    // Create modal content
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
    `;
    
    modal.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #dc3545; margin-bottom: 10px;">🆘 Crisis Support Resources</h2>
            <p style="font-size: 16px; color: #666;">You are not alone. Help is available 24/7.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 20px;">
            <!-- Ohio Hot-Lines -->
            <div style="border: 2px solid #dc3545; border-radius: 10px; padding: 15px; background: #fef2f2;">
                <h3 style="color: #dc3545; margin-bottom: 15px; text-align: center;">🏠 Ohio Hot-Lines</h3>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545;">Suicide Prevention</h4>
                    <p><strong>Call:</strong> <a href="tel:988" style="color: #dc3545; text-decoration: none;">988</a></p>
                    <p><strong>Text:</strong> <a href="sms:741741?body=4HOPE" style="color: #dc3545; text-decoration: none;">Text 4HOPE to 741741</a></p>
                    <p><strong>Website:</strong> <a href="https://988lifeline.org" style="color: #dc3545; text-decoration: none;" target="_blank">988lifeline.org</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545;">OhioMHAS</h4>
                    <p><strong>Call:</strong> <a href="tel:1-877-275-6364" style="color: #dc3545; text-decoration: none;">1-877-275-6364</a></p>
                    <p><strong>Website:</strong> <a href="https://mha.ohio.gov" style="color: #dc3545; text-decoration: none;" target="_blank">mha.ohio.gov</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545;">Franklin County ADAMH Crisis Line</h4>
                    <p><strong>Call:</strong> <a href="tel:614-276-2273" style="color: #dc3545; text-decoration: none;">614-276-2273</a></p>
                    <p><strong>Website:</strong> <a href="https://adamhfranklin.org" style="color: #dc3545; text-decoration: none;" target="_blank">adamhfranklin.org</a></p>
                </div>
                
                <div style="margin-bottom: 0; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545;">Netcare Access (Central Ohio)</h4>
                    <p><strong>Call:</strong> <a href="tel:614-276-2273" style="color: #dc3545; text-decoration: none;">614-276-2273</a></p>
                    <p><strong>Website:</strong> <a href="https://mha.ohio.gov" style="color: #dc3545; text-decoration: none;" target="_blank">mha.ohio.gov</a></p>
                </div>
            </div>
            
            <!-- National Hot-Lines -->
            <div style="border: 2px solid #0066cc; border-radius: 10px; padding: 15px; background: #f0f8ff;">
                <h3 style="color: #0066cc; margin-bottom: 15px; text-align: center;">🇺🇸 National Hot-Lines</h3>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc;">Suicide Prevention</h4>
                    <p><strong>Call:</strong> <a href="tel:988" style="color: #0066cc; text-decoration: none;">988</a></p>
                    <p><strong>Website:</strong> <a href="https://988lifeline.org" style="color: #0066cc; text-decoration: none;" target="_blank">988lifeline.org</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc;">NAMI Helpline</h4>
                    <p style="font-size: 13px; margin-bottom: 5px;">(National Alliance on Mental Illness)</p>
                    <p><strong>Call:</strong> <a href="tel:1-800-950-6264" style="color: #0066cc; text-decoration: none;">1-800-950-6264</a></p>
                    <p><strong>Website:</strong> <a href="https://nami.org/help" style="color: #0066cc; text-decoration: none;" target="_blank">nami.org/help</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc;">SAMHSA Helpline</h4>
                    <p><strong>Call:</strong> <a href="tel:1-800-662-4357" style="color: #0066cc; text-decoration: none;">1-800-662-4357</a></p>
                    <p><strong>Website:</strong> <a href="https://findtreatment.gov" style="color: #0066cc; text-decoration: none;" target="_blank">findtreatment.gov</a></p>
                </div>
                
                <div style="margin-bottom: 0; padding: 10px; background: white; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc;">Veterans Crisis Line</h4>
                    <p><strong>Call:</strong> <a href="tel:988" style="color: #0066cc; text-decoration: none;">Dial 988, press 1</a></p>
                    <p><strong>Website:</strong> <a href="https://www.veteranscrisisline.net" style="color: #0066cc; text-decoration: none;" target="_blank">veteranscrisisline.net</a></p>
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
    
    // Close modal functionality
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
    
    // Close with Escape key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Initialize the emergency contact button
initEmergencyContact();

// Add CSS for modal and dark mode
function addCustomStyles() {
    const styles = `
        <style>
        .condition-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .condition-modal.active {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }
        
        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #999;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #333;
        }
        
        .modal-header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .modal-icon {
            font-size: 3rem;
            margin-bottom: 15px;
        }
        
        .modal-header h2 {
            color: #588377;
            font-size: 1.8rem;
            font-weight: 600;
        }
        
        .modal-description {
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 25px;
            color: #555;
        }
        
        .modal-body h3 {
            color: #588377;
            margin: 25px 0 15px 0;
            font-size: 1.2rem;
        }
        
        .symptom-list,
        .strategy-list {
            margin-bottom: 25px;
            padding-left: 20px;
        }
        
        .symptom-list li,
        .strategy-list li {
            margin-bottom: 8px;
            line-height: 1.5;
            color: #666;
        }
        
        .modal-actions {
            display: flex;
            gap: 15px;
            margin-top: 30px;
            flex-wrap: wrap;
        }
        
        .modal-actions button {
            flex: 1;
            min-width: 150px;
        }
        
        .dark-mode {
            background: linear-gradient(135deg, #2C3E37 0%, #1a2922 100%);
            color: #F7EFE5;
        }
        
        .dark-mode .nav {
            background: rgba(44, 62, 55, 0.95);
        }
        
        .dark-mode .main-container,
        .dark-mode .disorder-container {
            background: linear-gradient(135deg, rgba(44, 62, 55, 0.9), rgba(26, 41, 34, 0.9));
        }
        
        .dark-mode .service-card,
        .dark-mode .modal-content {
            background: #2C3E37;
            color: #F7EFE5;
            border: 1px solid rgba(107, 162, 146, 0.3);
        }
        
        .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3); }
            50% { box-shadow: 0 4px 25px rgba(220, 53, 69, 0.6); }
            100% { box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3); }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                margin: 20px;
                padding: 30px 25px;
                max-width: none;
                width: calc(100% - 40px);
            }
            
            .modal-actions {
                flex-direction: column;
            }
            
            .modal-actions button {
                width: 100%;
            }
            
            .theme-toggle,
            .emergency-contact {
                right: 15px;
            }
            
            .emergency-contact {
                bottom: 70px;
                padding: 10px 16px;
                font-size: 0.9rem;
            }
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    addCustomStyles();
    handleScrollAnimations();
    handleNavigationScroll();
    initFloatingAnimations();
    initTypingEffect();
    initThemeToggle();
    initEmergencyContact();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🕊️ InnerNest initialized successfully!');
});