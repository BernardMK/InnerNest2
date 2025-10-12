// Blog Comments System
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

// Add CSS for blog comments
function addBlogStyles() {
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
            background: rgb(222, 222, 213);
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
            color: #ff0000ff;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #e40000ff;
        }
        ::placeholder{
            color: rgba(0, 0, 0, 1);
        }
        
        .modal-header h2 {
            color: #ffffffff;
            font-size: 1.8rem;
            font-weight: 600;
            margin: 0;
        }
        
        .blog-comment-item {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 15px;
            border-left: 4px solid #6BA292;
            transition: all 0.3s ease;
        }
        
        .blog-comment-item:hover {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
        }
        
        .comment-author {
            font-weight: 600;
            color: #588377;
            margin-bottom: 5px;
            font-size: 1.1em;
        }
        
        .comment-date {
            color: #999;
            font-size: 0.9em;
            margin-bottom: 10px;
        }
        
        .comment-text {
            color: #555;
            line-height: 1.6;
            margin: 0;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                margin: 20px;
                padding: 30px 25px;
                max-width: none;
                width: calc(100% - 40px);
            }
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    addBlogStyles();
    initBlogComments();
    console.log('Blog comments initialized');
});