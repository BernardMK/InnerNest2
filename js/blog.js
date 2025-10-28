const submitBtn = document.getElementById("test-submit");
const form = document.getElementById("test_collector");
const title = document.getElementById("test-title");
const successMessage = document.getElementById("submit-message");

const nameInput = document.getElementById("name");
const subjectInput = document.getElementById("subject-input");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

function validateName() {
    const value = nameInput.value.trim();
    if (value.length < 2) {
        nameInput.classList.add("error");
        nameError.classList.add("show");
        return false;
    } else {
        nameInput.classList.remove("error");
        nameError.classList.remove("show");
        return true;
    }
}

function validateSubject() {
    const value = subjectInput.value.trim();
    if (value.length < 3) {
        subjectInput.classList.add("error");
        subjectError.classList.add("show");
        return false;
    } else {
        subjectInput.classList.remove("error");
        subjectError.classList.remove("show");
        return true;
    }
}

function validateMessage() {
    const value = messageInput.value.trim();
    if (value.length < 10) {
        messageInput.classList.add("error");
        messageError.classList.add("show");
        return false;
    } else {
        messageInput.classList.remove("error");
        messageError.classList.remove("show");
        return true;
    }
}

// Real-time validation
nameInput.addEventListener("blur", validateName);
subjectInput.addEventListener("blur", validateSubject);
messageInput.addEventListener("blur", validateMessage);

// Remove error on input
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length >= 2) {
        nameInput.classList.remove("error");
        nameError.classList.remove("show");
    }
});

subjectInput.addEventListener("input", () => {
    if (subjectInput.value.trim().length >= 3) {
        subjectInput.classList.remove("error");
        subjectError.classList.remove("show");
    }
});

messageInput.addEventListener("input", () => {
    if (messageInput.value.trim().length >= 10) {
        messageInput.classList.remove("error");
        messageError.classList.remove("show");
    }
});

submitBtn.addEventListener("click", () => {
    // Validate all fields
    const isNameValid = validateName();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();

    // If all fields are valid, show success message
    if (isNameValid && isSubjectValid && isMessageValid) {
        form.style.display = "none";
        title.style.display = "none";
        successMessage.style.display = "flex";
    }
});
const commentsData = {
    1: [
        { id: 1, author: "Dr. Sarah Johnson", date: "2026-01-13", text: "Thank you for sharing this, Rajan. Your journey resonates with so many people dealing with anxiety. The grounding techniques you mentioned are evidence-based and really effective." },
        { id: 2, author: "Maya Sharma", date: "2026-01-14", text: "I've been struggling with panic attacks too. Could you share more about the specific grounding exercises that helped you the most?" },
        { id: 3, author: "James Wilson", date: "2026-01-15", text: "This gives me hope. I'm just starting my journey with anxiety management. Thank you for being so open about your experience." },
        { id: 4, author: "Priya Patel", date: "2026-01-16", text: "Five years is a long journey, but you made it through! Your story is inspiring and shows that recovery is possible." }
    ],
    2: [
        { id: 1, author: "Michael Chen", date: "2026-01-24", text: "Mara, your perspective on therapy being a lifeline rather than luxury is so important. Mental health should be prioritized just like physical health." },
        { id: 2, author: "Dr. Lisa Rodriguez", date: "2026-01-25", text: "As a therapist, I appreciate you sharing this. The therapeutic relationship truly is transformative when there's consistency and trust." },
        { id: 3, author: "Alex Thompson", date: "2026-01-26", text: "Thank you for destigmatizing therapy. Your words might encourage someone who's hesitating to take that first step." }
    ],
    3: [
        { id: 1, author: "Carlos Mendez", date: "2026-02-18", text: "Peer support groups have been game-changers for me too, Emily. There's something powerful about shared experiences and mutual understanding." },
        { id: 2, author: "Rachel Kim", date: "2026-02-19", text: "I've been thinking about joining a support group but feel nervous. Your experience gives me courage to try it out." }
    ],
    4: [
        { id: 1, author: "Jennifer Walsh", date: "2026-03-03", text: "Arun, I love how you've integrated mindfulness into your workday. Ten minutes can make such a huge difference. I'm going to try this approach!" }
    ],
    5: [
        { id: 1, author: "Dr. Amanda Foster", date: "2026-03-09", text: "Sofia, your resilience is remarkable. Art therapy and guided imagery are wonderful tools for trauma recovery. Thank you for sharing your healing journey." },
        { id: 2, author: "Marcus Johnson", date: "2026-03-10", text: "Your words about healing being a journey, not a destination, really hit home. Thank you for the reminder to be patient with ourselves." },
        { id: 3, author: "Isabella Garcia", date: "2026-03-11", text: "Community art projects sound amazing! I'm inspired to look for creative healing opportunities in my area." },
        { id: 4, author: "David Park", date: "2026-03-12", text: "Thank you for showing that joy can be reclaimed even after trauma. Your story gives hope to others on similar journeys." },
        { id: 5, author: "Nina Patel", date: "2026-03-13", text: "The small moments of joy you mention are so precious. Sometimes we overlook them, but they're often where healing begins." }
    ],
    6: [
        { id: 1, author: "Sarah Mitchell", date: "2026-03-16", text: "Liam, your digital detox journey is so relevant in today's world. I've noticed my anxiety levels decrease when I limit my screen time too." },
        { id: 2, author: "Tom Bradley", date: "2026-03-17", text: "30 minutes a day seems challenging but doable. Did you gradually reduce your screen time or go cold turkey?" },
        { id: 3, author: "Emma Wilson", date: "2026-03-18", text: "Journaling and deep breathing are such underrated practices. Thanks for the reminder to get back to these basics!" }
    ]
};

// Initialize blog comments - only comment tags are clickable
function initBlogComments() {
    // Target only the last tag (Comments tag), not the entire card
    const commentTags = document.querySelectorAll('.condition-item .condition-tags .tag:last-child');
    
    commentTags.forEach(tag => {
        // Make it look clickable
        tag.style.cursor = 'pointer';
        tag.style.transition = 'all 0.3s ease';
        
        // Add hover effect
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'scale(1.05)';
            tag.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'scale(1)';
            tag.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        });
        
        // Add click listener
        tag.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling to parent
            const blogItem = this.closest('.condition-item');
            const blogId = blogItem.getAttribute('data-blog-id');
            showBlogCommentsModal(blogId);
        });
    });
}

function showBlogCommentsModal(blogId) {
    const blogTitles = {
        1: "Finding Calm When My Heart Won't Slow Down",
        2: "Why Therapy Is My Lifeline, Not a Luxury",
        3: "Together We Thrive: Peer Support in Recovery",
        4: "Mindfulness at Work: A Daily Reset",
        5: "Building Resilience After Trauma",
        6: "Digital Detox & Mental Clarity"
    };
    
    const comments = commentsData[blogId] || [];
    
    const modal = document.createElement('div');
    modal.className = 'condition-modal active';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content" style="max-width: 800px;">
            <button class="modal-close">&times;</button>
            <div class="modal-header">
                <h2 style="color: #588377;">Comments - ${blogTitles[blogId]}</h2>
            </div>
            <div class="modal-body">
                <div id="commentsContainer">
                    ${comments.length === 0 ? 
                        '<div style="text-align: center; color: #999; padding: 40px;"><p>No comments yet. Be the first to share your thoughts!</p></div>' :
                        comments.map(comment => `
                            <div class="blog-comment-item">
                                <div class="comment-author">${comment.author}</div>
                                <div class="comment-date">${formatCommentDate(comment.date)}</div>
                                <p class="comment-text">${comment.text}</p>
                            </div>
                        `).join('')
                    }
                </div>
                
                <div style="margin-top: 30px; padding-top: 30px; border-top: 2px solid #588377;">
                    <h3 style="color: #588377; margin-bottom: 20px;">Add a Comment</h3>
                    <div style="margin-bottom: 15px;">
                        <input type="text" id="commentName" placeholder="Your Name" style="width: 100%;color: black; padding: 12px; border: 2px solid rgba(88, 131, 119, 1); border-radius: 8px; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 15px;">
                        <textarea id="commentText" rows="4" placeholder="Write your comment here..." style="width: 100%; padding: 12px; border: 2px solid #588377; border-radius: 8px; font-size: 1rem; resize: vertical;"></textarea>
                    </div>
                    <button type="button" class="btn-primary" id="submitComment" style="width: 17%;border-radius: 14px;border: solid transparent;background-color: #588377;color: #ffffffff; padding: 7px;">Submit Comment</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    [closeBtn, overlay].forEach(el => {
        el.addEventListener('click', () => {
            modal.classList.remove('active');
            setTimeout(() => document.body.removeChild(modal), 300);
        });
    });
    
    document.getElementById('submitComment').addEventListener('click', () => {
        const name = document.getElementById('commentName').value.trim();
        const text = document.getElementById('commentText').value.trim();
        
        if (!name || !text) {
            alert('Please fill in both your name and comment.');
            return;
        }
        
        const newComment = {
            id: Date.now(),
            author: name,
            date: new Date().toISOString().split('T')[0],
            text: text
        };
        
        if (!commentsData[blogId]) {
            commentsData[blogId] = [];
        }
        commentsData[blogId].push(newComment);
        
        const commentHtml = `
            <div class="blog-comment-item" style="animation: slideIn 0.5s ease-out;">
                <div class="comment-author">${newComment.author}</div>
                <div class="comment-date">${formatCommentDate(newComment.date)}</div>
                <p class="comment-text">${newComment.text}</p>
            </div>
        `;
        
        const container = document.getElementById('commentsContainer');
        const noComments = container.querySelector('div[style*="text-align: center"]');
        if (noComments) {
            container.innerHTML = '';
        }
        container.insertAdjacentHTML('beforeend', commentHtml);
        
        // Update the comment count in the tag
        const blogItem = document.querySelector(`.condition-item[data-blog-id="${blogId}"]`);
        const commentTag = blogItem.querySelector('.condition-tags .tag:last-child');
        const newCount = commentsData[blogId].length;
        commentTag.textContent = `${newCount} Comment${newCount !== 1 ? 's' : ''}`;
        
        document.getElementById('commentName').value = '';
        document.getElementById('commentText').value = '';
        
        const successMsg = document.createElement('div');
        successMsg.style.cssText = 'background: #4CAF50; color: white; padding: 15px; border-radius: 8px; margin-top: 15px; text-align: center;';
        successMsg.textContent = 'Comment added successfully!';
        document.querySelector('.modal-body').appendChild(successMsg);
        
        setTimeout(() => successMsg.remove(), 3000);
    });
}

function formatCommentDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Theme toggle functionality
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
    
    emergencyBtn.addEventListener('click', () => {
        showEmergencyContacts();
    });
    
    emergencyBtn.addEventListener('mouseenter', () => {
        emergencyBtn.style.transform = 'scale(1.05)';
    });
    
    emergencyBtn.addEventListener('mouseleave', () => {
        emergencyBtn.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(emergencyBtn);
}

function showEmergencyContacts() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'emergency-overlay';
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
        padding: 20px;
        overflow-y: auto;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'emergency-modal';
    modal.style.cssText = `
        background: #719a8d;
        padding: 30px;
        border-radius: 15px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: auto;
    `;
    
    modal.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #dc3545; margin-bottom: 10px;">🆘 Crisis Support Resources</h2>
            <p style="font-size: 16px; color: #ffffffff;">You are not alone. Help is available 24/7.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            <!-- Ohio Hot-Lines -->
            <div id="local" style="border: 2px solid #5d8b7e; border-radius: 10px; padding: 15px; background: #5d8b7e;">
                <h3 style="color: #ffffffff; margin-bottom: 15px; text-align: center; font-size: clamp(1rem, 4vw, 1.3rem);">🏠 Ohio Hot-Lines</h3>
                
                <div style="margin-bottom: 15px; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545; font-size: clamp(0.9rem, 3vw, 1.1rem);">Suicide Prevention</h4>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:988" style="color: #dc3545; text-decoration: none;">988</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Text:</strong> <a href="sms:741741?body=4HOPE" style="color: #dc3545; text-decoration: none;">Text 4HOPE to 741741</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://988lifeline.org" style="color: #dc3545; text-decoration: none;" target="_blank">988lifeline.org</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545; font-size: clamp(0.9rem, 3vw, 1.1rem);">OhioMHAS</h4>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:1-877-275-6364" style="color: #dc3545; text-decoration: none;">1-877-275-6364</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://mha.ohio.gov" style="color: #dc3545; text-decoration: none;" target="_blank">mha.ohio.gov</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545; font-size: clamp(0.9rem, 3vw, 1.1rem);">Franklin County ADAMH Crisis Line</h4>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:614-276-2273" style="color: #dc3545; text-decoration: none;">614-276-2273</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://adamhfranklin.org" style="color: #dc3545; text-decoration: none;" target="_blank">adamhfranklin.org</a></p>
                </div>
                
                <div style="margin-bottom: 0; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #dc3545; font-size: clamp(0.9rem, 3vw, 1.1rem);">Netcare Access (Central Ohio)</h4>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:614-276-2273" style="color: #dc3545; text-decoration: none;">614-276-2273</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://mha.ohio.gov" style="color: #dc3545; text-decoration: none;" target="_blank">mha.ohio.gov</a></p>
                </div>
            </div>
            
            <!-- National Hot-Lines -->
            <div id="national" style="border: 2px solid #5d8b7e; border-radius: 10px; padding: 15px; background: #5d8b7e;">
                <h3 style="color: #ffffffff; margin-bottom: 15px; text-align: center; font-size: clamp(1rem, 4vw, 1.3rem);">🇺🇸 National Hot-Lines</h3>
                
                <div style="margin-bottom: 15px; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc; font-size: clamp(0.9rem, 3vw, 1.1rem);">Suicide Prevention</h4>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:988" style="color: #0066cc; text-decoration: none;">988</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://988lifeline.org" style="color: #0066cc; text-decoration: none;" target="_blank">988lifeline.org</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc; font-size: clamp(0.9rem, 3vw, 1.1rem);">NAMI Helpline</h4>
                    <p style="font-size: clamp(0.75rem, 2vw, 0.9rem); margin-bottom: 5px;">(National Alliance on Mental Illness)</p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:1-800-950-6264" style="color: #0066cc; text-decoration: none;">1-800-950-6264</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://nami.org/help" style="color: #0066cc; text-decoration: none;" target="_blank">nami.org/help</a></p>
                </div>
                
                <div style="margin-bottom: 15px; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc; font-size: clamp(0.9rem, 3vw, 1.1rem);">SAMHSA Helpline</h4>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:1-800-662-4357" style="color: #0066cc; text-decoration: none;">1-800-662-4357</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://findtreatment.gov" style="color: #0066cc; text-decoration: none;" target="_blank">findtreatment.gov</a></p>
                </div>
                
                <div style="margin-bottom: 0; padding: 10px; background: #719a8d; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #0066cc; font-size: clamp(0.9rem, 3vw, 1.1rem);">Veterans Crisis Line</h4>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Call:</strong> <a href="tel:988" style="color: #0066cc; text-decoration: none;">Dial 988, press 1</a></p>
                    <p style="font-size: clamp(0.85rem, 2.5vw, 1rem); margin: 5px 0;"><strong>Website:</strong> <a href="https://www.veteranscrisisline.net" style="color: #0066cc; text-decoration: none;" target="_blank">veteranscrisisline.net</a></p>
                </div>
            </div>
        </div>
        
        <div style="text-align: center; margin-top: 25px; padding: 15px; background: #fff3cd; border-radius: 10px; border: 1px solid #ffeaa7;">
            <p style="margin: 0; font-weight: bold; color: #856404; font-size: clamp(0.9rem, 2.5vw, 1rem);">⚠️ If you're in immediate danger, call <a href="tel:911" style="color: #856404;">911</a></p>
        </div>
        
        <div style="text-align: center; margin-top: 15px;">
            <button id="closeModal" style="
                background: #6c757d;
                color: white;
                border: none;
                padding: 12px 30px;
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                transition: background 0.3s ease;
                font-size: clamp(0.9rem, 2.5vw, 1rem);
                width: auto;
                min-width: 120px;
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



// Scroll animations handler
function handleScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

// Floating animations
function initFloatingAnimations() {
    const floatingElements = document.querySelectorAll('.floating-card, .service-card');
    floatingElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
}

// Typing effect
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-effect');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    setTimeout(typeWriter, 500);
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
    initBlogComments();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🕊️ InnerNest initialized successfully!');
    console.log('📝 Blog comments system active');
    console.log('🆘 Emergency contact system active');
});