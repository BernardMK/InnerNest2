
// Enhanced Games Popup System
// Guarded event listeners: some pages may not include these elements
const supportCard = document.getElementById('supportCard');
if (supportCard) {
    supportCard.addEventListener('click', function() {
        const supportModal = document.getElementById('supportModal');
        if (supportModal) supportModal.classList.add('active');
    });
}

// Open video modal for Mindfulness card
const mindfulnessCard = document.getElementById('mindfulnessCard');
if (mindfulnessCard) {
    mindfulnessCard.addEventListener('click', function() {
        const mindfulnessModal = document.getElementById('mindfulnessModal');
        if (mindfulnessModal) mindfulnessModal.classList.add('active');
    });
}
function showAndScroll(id) {
    const section = document.getElementById(id);
    section.style.display = 'flex';
    
    // Scroll with offset
    setTimeout(() => {
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 120; // Adjust 100 to your preferred offset
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }, 10);
}

// Close video modal function
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    
    // Stop video playback when closing
    const iframe = modal.querySelector('iframe');
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
}

// Close modal when clicking outside the video content
document.querySelectorAll('.video-modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});
const gamesPopupHTML = `
<div id="gamesOverlay" class="games-overlay">
    <div class="games-popup">
        <button class="close-popup" id="closeGames" aria-label="Close games menu">&times;</button>
        <div class="popup-header">
            <h2 class="games-title">Stress Relief Mini Games</h2>
            <p class="games-subtitle">Choose a game to relax and unwind</p>
        </div>
        
        <div class="games-grid">
            <div class="game-card" data-game="breathing" data-category="relaxation">
                <div class="game-icon">🫁</div>
                <h3>Breathing Exercise</h3>
                <p>Guided breathing for calm</p>
                <span class="game-badge">Relaxation</span>
            </div>
            
            <div class="game-card" data-game="bubble" data-category="interactive">
                <div class="game-icon">🫧</div>
                <h3>Pop Bubbles</h3>
                <p>Pop bubbles to release stress</p>
                <span class="game-badge">Interactive</span>
            </div>
            
            <div class="game-card" data-game="paint" data-category="creative">
                <div class="game-icon">🎨</div>
                <h3>Zen Paint</h3>
                <p>Draw to express yourself</p>
                <span class="game-badge">Creative</span>
            </div>
            
            <div class="game-card" data-game="memory" data-category="cognitive">
                <div class="game-icon">🧩</div>
                <h3>Memory Match</h3>
                <p>Focus your mind</p>
                <span class="game-badge">Cognitive</span>
            </div>
            
            <div class="game-card" data-game="typing" data-category="mindful">
                <div class="game-icon">⌨️</div>
                <h3>Mindful Typing</h3>
                <p>Type away your worries</p>
                <span class="game-badge">Mindful</span>
            </div>
            
            <div class="game-card" data-game="garden" data-category="creative">
                <div class="game-icon">🌱</div>
                <h3>Zen Garden</h3>
                <p>Create peaceful patterns</p>
                <span class="game-badge">Creative</span>
            </div>

            <div class="game-card" data-game="whackamole" data-category="active">
                <div class="game-icon">🔨</div>
                <h3>Stress Whack</h3>
                <p>Whack away your stress</p>
                <span class="game-badge">Active</span>
            </div>

            <div class="game-card" data-game="balloon" data-category="interactive">
                <div class="game-icon">🎈</div>
                <h3>Balloon Pop</h3>
                <p>Pop floating balloons</p>
                <span class="game-badge">Interactive</span>
            </div>

            <div class="game-card" data-game="simon" data-category="cognitive">
                <div class="game-icon">🎵</div>
                <h3>Memory Melody</h3>
                <p>Follow the pattern</p>
                <span class="game-badge">Cognitive</span>
            </div>

            <div class="game-card" data-game="colormatch" data-category="cognitive">
                <div class="game-icon">🌈</div>
                <h3>Color Match</h3>
                <p>Match the colors quickly</p>
                <span class="game-badge">Cognitive</span>
            </div>

            <div class="game-card" data-game="mandala" data-category="creative">
                <div class="game-icon">🔮</div>
                <h3>Mandala Creator</h3>
                <p>Create symmetrical art</p>
                <span class="game-badge">Creative</span>
            </div>

            <div class="game-card" data-game="starfield" data-category="relaxation">
                <div class="game-icon">⭐</div>
                <h3>Starfield Journey</h3>
                <p>Relax in space</p>
                <span class="game-badge">Relaxation</span>
            </div>

            <div class="game-card" data-game="wordsearch" data-category="cognitive">
                <div class="game-icon">🔍</div>
                <h3>Calm Word Search</h3>
                <p>Find peaceful words</p>
                <span class="game-badge">Cognitive</span>
            </div>

            <div class="game-card" data-game="2048" data-category="puzzle">
                <div class="game-icon">🎯</div>
                <h3>Zen 2048</h3>
                <p>Combine tiles mindfully</p>
                <span class="game-badge">Puzzle</span>
            </div>

            <div class="game-card" data-game="meditation" data-category="mindful">
                <div class="game-icon">🧘‍♀️</div>
                <h3>Guided Meditation</h3>
                <p>Audio meditation session</p>
                <span class="game-badge">Mindful</span>
            </div>
        </div>
        
        <div id="gameContainer" class="game-container" style="display: none;">
            <button class="back-button" id="backToGames">
                <span>←</span> Back to Games
            </button>
            <div id="gameContent"></div>
        </div>
    </div>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('beforeend', gamesPopupHTML);
    
    // Translate games popup immediately after insertion
    if (window.languageManager) {
        const t = translations[window.languageManager.currentLanguage];
        window.languageManager.translateGamesPopup(t.games);
    }
    
    initializeGamesPopup();
});

function initializeGamesPopup() {
    const overlay = document.getElementById('gamesOverlay');
    const closeBtn = document.getElementById('closeGames');
    const gameCards = document.querySelectorAll('.game-card');
    const gameContainer = document.getElementById('gameContainer');
    const gameContent = document.getElementById('gameContent');
    const backBtn = document.getElementById('backToGames');
    const gamesGrid = document.querySelector('.games-grid');

    // Open popup when clicking the Games floating card
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach(card => {
        const cardText = card.querySelector('h3');
        if (cardText && (cardText.textContent.trim() === 'Games' || cardText.textContent.trim() === 'Juegos')) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function() {
                overlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                overlay.classList.add('active');
            });
        }
    });

    // Close popup
    closeBtn.addEventListener('click', closePopup);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closePopup();
    });

    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.style.display === 'flex') {
            closePopup();
        }
    });

    function closePopup() {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            showGamesGrid();
        }, 300);
    }

    backBtn.addEventListener('click', showGamesGrid);

    function showGamesGrid() {
        gameContainer.style.opacity = '0';
        setTimeout(() => {
            gameContainer.style.display = 'none';
            gamesGrid.style.display = 'grid';
            gameContent.innerHTML = '';
            setTimeout(() => {
                gamesGrid.style.opacity = '1';
            }, 10);
        }, 300);
    }

    // Add hover sound effect simulation
    gameCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.addEventListener('click', function() {
            const gameType = this.dataset.game;
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                launchGame(gameType);
            }, 150);
        });

        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    function launchGame(gameType) {
        gamesGrid.style.opacity = '0';
        setTimeout(() => {
            gamesGrid.style.display = 'none';
            gameContainer.style.display = 'block';
            setTimeout(() => {
                gameContainer.style.opacity = '1';
            }, 10);
            
            switch(gameType) {
                case 'breathing': loadBreathingGame(); break;
                case 'bubble': loadBubbleGame(); break;
                case 'paint': loadPaintGame(); break;
                case 'memory': loadMemoryGame(); break;
                case 'typing': loadTypingGame(); break;
                case 'garden': loadGardenGame(); break;
                case 'whackamole': loadWhackAMoleGame(); break;
                case 'balloon': loadBalloonGame(); break;
                case 'simon': loadSimonGame(); break;
                case 'colormatch': loadColorMatchGame(); break;
                case 'mandala': loadMandalaGame(); break;
                case 'starfield': loadStarfieldGame(); break;
                case 'wordsearch': loadWordSearchGame(); break;
                case '2048': load2048Game(); break;
                case 'meditation': loadMeditationGame(); break;
            }
        }, 300);
    }

    // BREATHING EXERCISE GAME
    function loadBreathingGame() {
        gameContent.innerHTML = `
            <div class="breathing-game">
                <h2>Breathing Exercise</h2>
                <p class="game-description">Follow the circle to regulate your breathing</p>
                <div class="breathing-circle" id="breathCircle">
                    <span id="breathText">Ready</span>
                </div>
                <p id="breathInstruction">Click start when you're ready</p>
                <button id="startBreath" class="game-button">Start Breathing</button>
            </div>
        `;

        const circle = document.getElementById('breathCircle');
        const text = document.getElementById('breathText');
        const instruction = document.getElementById('breathInstruction');
        const startBtn = document.getElementById('startBreath');
        let isBreathing = false;

        startBtn.addEventListener('click', function() {
            if (!isBreathing) {
                isBreathing = true;
                startBtn.textContent = 'Stop';
                startBtn.classList.add('active');
                breatheCycle();
            } else {
                isBreathing = false;
                startBtn.textContent = 'Start Breathing';
                startBtn.classList.remove('active');
                circle.style.transform = 'scale(1)';
                text.textContent = 'Ready';
                instruction.textContent = 'Click start when you\'re ready';
            }
        });

        function breatheCycle() {
            if (!isBreathing) return;
            
            text.textContent = 'Inhale';
            instruction.textContent = 'Breathe in slowly through your nose...';
            circle.style.transform = 'scale(1.5)';
            circle.style.transition = 'transform 4s ease-in-out';
            
            setTimeout(() => {
                if (!isBreathing) return;
                text.textContent = 'Hold';
                instruction.textContent = 'Hold your breath gently...';
                
                setTimeout(() => {
                    if (!isBreathing) return;
                    text.textContent = 'Exhale';
                    instruction.textContent = 'Breathe out slowly through your mouth...';
                    circle.style.transform = 'scale(1)';
                    
                    setTimeout(() => {
                        if (isBreathing) breatheCycle();
                    }, 4000);
                }, 2000);
            }, 4000);
        }
    }

    // BUBBLE POP GAME
    function loadBubbleGame() {
        gameContent.innerHTML = `
            <div class="bubble-game">
                <h2>Pop the Bubbles</h2>
                <p class="game-description">Click on the bubbles as they float up</p>
                <p class="game-score">Popped: <span id="bubbleScore">0</span></p>
                <div id="bubbleCanvas" class="bubble-canvas"></div>
            </div>
        `;

        const canvas = document.getElementById('bubbleCanvas');
        const scoreEl = document.getElementById('bubbleScore');
        let score = 0;

        function createBubble() {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            bubble.style.left = Math.random() * (canvas.offsetWidth - 60) + 'px';
            bubble.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            bubble.addEventListener('click', function(e) {
                e.stopPropagation();
                score++;
                scoreEl.textContent = score;
                
                // Create pop effect
                const pop = document.createElement('div');
                pop.className = 'pop-effect';
                pop.style.left = e.clientX - canvas.getBoundingClientRect().left + 'px';
                pop.style.top = e.clientY - canvas.getBoundingClientRect().top + 'px';
                pop.textContent = '+1';
                canvas.appendChild(pop);
                
                this.style.animation = 'bubblePop 0.3s ease-out';
                setTimeout(() => {
                    this.remove();
                    pop.remove();
                }, 300);
            });
            
            canvas.appendChild(bubble);
            
            setTimeout(() => {
                if (bubble.parentElement) bubble.remove();
            }, 6000);
        }

        const bubbleInterval = setInterval(() => {
            if (gameContainer.style.display === 'none') {
                clearInterval(bubbleInterval);
            } else {
                createBubble();
            }
        }, 800);
    }

    // ZEN PAINT GAME
    function loadPaintGame() {
        gameContent.innerHTML = `
            <div class="paint-game">
                <h2>Zen Paint</h2>
                <p class="game-description">Express yourself freely through art</p>
                <div class="paint-controls">
                    <label class="control-label">
                        <span>Color:</span>
                        <input type="color" id="paintColor" value="#6366f1">
                    </label>
                    <label class="control-label">
                        <span>Brush: <span id="brushValue">15</span>px</span>
                        <input type="range" id="brushSize" min="5" max="30" value="15">
                    </label>
                    <button id="clearCanvas" class="game-button-sm">Clear Canvas</button>
                </div>
                <canvas id="paintCanvas" width="600" height="400"></canvas>
            </div>
        `;

        const canvas = document.getElementById('paintCanvas');
        const ctx = canvas.getContext('2d');
        const colorPicker = document.getElementById('paintColor');
        const brushSize = document.getElementById('brushSize');
        const brushValue = document.getElementById('brushValue');
        const clearBtn = document.getElementById('clearCanvas');

        // White background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let isDrawing = false;

        brushSize.addEventListener('input', function() {
            brushValue.textContent = this.value;
        });

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startDrawing(e.touches[0]);
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            draw(e.touches[0]);
        });
        canvas.addEventListener('touchend', stopDrawing);

        clearBtn.addEventListener('click', () => {
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });

        function startDrawing(e) {
            isDrawing = true;
            draw(e);
        }

        function draw(e) {
            if (!isDrawing) return;
            
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX || e.pageX) - rect.left;
            const y = (e.clientY || e.pageY) - rect.top;
            
            ctx.beginPath();
            ctx.arc(x, y, brushSize.value / 2, 0, Math.PI * 2);
            ctx.fillStyle = colorPicker.value;
            ctx.fill();
        }

        function stopDrawing() {
            isDrawing = false;
        }
    }

    // MEMORY MATCH GAME
    function loadMemoryGame() {
        const emojis = ['🌸', '🌺', '🌻', '🌷', '🌹', '🏵️', '🌼', '💐'];
        const cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
        
        gameContent.innerHTML = `
            <div class="memory-game">
                <h2>Memory Match</h2>
                <p class="game-description">Find all matching pairs of flowers</p>
                <div class="game-stats">
                    <p class="game-score">Matches: <span id="memoryScore">0 / 8</span></p>
                    <p class="game-score">Moves: <span id="memoryMoves">0</span></p>
                </div>
                <div class="memory-grid" id="memoryGrid"></div>
                <button id="resetMemory" class="game-button-sm">New Game</button>
            </div>
        `;

        const grid = document.getElementById('memoryGrid');
        const scoreEl = document.getElementById('memoryScore');
        const movesEl = document.getElementById('memoryMoves');
        const resetBtn = document.getElementById('resetMemory');
        let flipped = [];
        let matches = 0;
        let moves = 0;
        let canFlip = true;

        function createCards() {
            grid.innerHTML = '';
            cards.forEach((emoji, index) => {
                const card = document.createElement('div');
                card.className = 'memory-card';
                card.dataset.emoji = emoji;
                card.dataset.index = index;
                card.innerHTML = `
                    <div class="card-front">?</div>
                    <div class="card-back">${emoji}</div>
                `;
                
                card.addEventListener('click', flipCard);
                grid.appendChild(card);
            });
        }

        function flipCard() {
            if (!canFlip || flipped.length === 2 || this.classList.contains('flipped')) return;
            
            this.classList.add('flipped');
            flipped.push(this);
            
            if (flipped.length === 2) {
                moves++;
                movesEl.textContent = moves;
                canFlip = false;
                setTimeout(checkMatch, 800);
            }
        }

        function checkMatch() {
            const [card1, card2] = flipped;
            
            if (card1.dataset.emoji === card2.dataset.emoji) {
                card1.classList.add('matched');
                card2.classList.add('matched');
                matches++;
                scoreEl.textContent = `${matches} / 8`;
                
                if (matches === 8) {
                    setTimeout(() => {
                        alert(window.languageManager ? window.languageManager.getAlert('games.memoryWin', { moves: moves }) : `🎉 Congratulations! You won in ${moves} moves!`);
                    }, 500);
                }
            } else {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }
            
            flipped = [];
            canFlip = true;
        }

        resetBtn.addEventListener('click', () => {
            matches = 0;
            moves = 0;
            flipped = [];
            scoreEl.textContent = '0 / 8';
            movesEl.textContent = '0';
            cards.sort(() => Math.random() - 0.5);
            createCards();
        });

        createCards();
    }

    // MINDFUL TYPING GAME
    function loadTypingGame() {
        const affirmations = [
            "I am calm and peaceful",
            "I choose to be happy",
            "I am worthy of love",
            "I release all tension",
            "I am in control of my thoughts",
            "I embrace positive energy",
            "I am grateful for this moment",
            "I trust in my journey",
            "I breathe in peace",
            "I am enough"
        ];

        gameContent.innerHTML = `
            <div class="typing-game">
                <h2>Mindful Typing</h2>
                <p class="game-description">Type each affirmation slowly and mindfully</p>
                <p class="game-score">Completed: <span id="typingScore">0</span></p>
                <div class="typing-target" id="typingTarget"></div>
                <input type="text" id="typingInput" class="typing-input" placeholder="Start typing..." autocomplete="off">
                <p class="typing-feedback" id="typingFeedback"></p>
            </div>
        `;

        const target = document.getElementById('typingTarget');
        const input = document.getElementById('typingInput');
        const feedback = document.getElementById('typingFeedback');
        const scoreEl = document.getElementById('typingScore');
        let currentAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        let completed = 0;

        target.textContent = currentAffirmation;
        input.focus();

        input.addEventListener('input', function() {
            const typed = this.value;
            const targetText = currentAffirmation;
            
            if (typed === targetText) {
                completed++;
                scoreEl.textContent = completed;
                feedback.textContent = '✨ Perfect! Take a deep breath...';
                feedback.style.color = '#10b981';
                this.disabled = true;
                
                setTimeout(() => {
                    currentAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
                    target.textContent = currentAffirmation;
                    input.value = '';
                    input.disabled = false;
                    input.focus();
                    feedback.textContent = '';
                }, 2000);
            } else if (targetText.startsWith(typed)) {
                feedback.textContent = '✓ Keep going...';
                feedback.style.color = '#6366f1';
            } else {
                feedback.textContent = '↻ Take your time, start over';
                feedback.style.color = '#f59e0b';
            }
        });
    }

    // ZEN GARDEN GAME
    function loadGardenGame() {
        gameContent.innerHTML = `
            <div class="garden-game">
                <h2>Zen Garden</h2>
                <p class="game-description">Draw peaceful patterns in the sand</p>
                <canvas id="gardenCanvas" width="600" height="400"></canvas>
                <button id="clearGarden" class="game-button">Clear Garden</button>
            </div>
        `;

        const canvas = document.getElementById('gardenCanvas');
        const ctx = canvas.getContext('2d');
        const clearBtn = document.getElementById('clearGarden');

        ctx.fillStyle = '#f5e6d3';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);

        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startDrawing(e.touches[0]);
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            draw(e.touches[0]);
        });
        canvas.addEventListener('touchend', () => isDrawing = false);

        clearBtn.addEventListener('click', () => {
            ctx.fillStyle = '#f5e6d3';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });

        function startDrawing(e) {
            isDrawing = true;
            const rect = canvas.getBoundingClientRect();
            lastX = (e.clientX || e.pageX) - rect.left;
            lastY = (e.clientY || e.pageY) - rect.top;
        }

        function draw(e) {
            if (!isDrawing) return;
            
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX || e.pageX) - rect.left;
            const y = (e.clientY || e.pageY) - rect.top;
            
            ctx.strokeStyle = '#8b7355';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.stroke();
            
            ctx.fillStyle = '#a0826d';
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
            
            lastX = x;
            lastY = y;
        }
    }

    // Continue with remaining games... (keeping the same structure but adding descriptions and polish)
    // Due to length, I'll include the essential polished elements for the remaining games

    function loadWhackAMoleGame() {
        gameContent.innerHTML = `
            <div class="whack-game">
                <h2>Stress Whack</h2>
                <p class="game-description">Release stress by whacking the moles!</p>
                <p class="game-score">Score: <span id="whackScore">0</span> | Time: <span id="whackTime">30</span>s</p>
                <div class="whack-grid" id="whackGrid"></div>
                <button id="startWhack" class="game-button">Start Game</button>
            </div>
        `;

        const grid = document.getElementById('whackGrid');
        const scoreEl = document.getElementById('whackScore');
        const timeEl = document.getElementById('whackTime');
        const startBtn = document.getElementById('startWhack');
        let score = 0;
        let timeLeft = 30;
        let gameInterval;
        let moleInterval;

        for (let i = 0; i < 9; i++) {
            const hole = document.createElement('div');
            hole.className = 'whack-hole';
            hole.innerHTML = '<div class="mole">🎃</div>';
            hole.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                    score++;
                    scoreEl.textContent = score;
                    this.classList.remove('active');
                    this.classList.add('whacked');
                    setTimeout(() => this.classList.remove('whacked'), 200);
                }
            });
            grid.appendChild(hole);
        }

        startBtn.addEventListener('click', function() {
            score = 0;
            timeLeft = 30;
            scoreEl.textContent = score;
            timeEl.textContent = timeLeft;
            startBtn.disabled = true;

            gameInterval = setInterval(() => {
                timeLeft--;
                timeEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(gameInterval);
                    clearInterval(moleInterval);
                    startBtn.disabled = false;
                    alert(window.languageManager ? window.languageManager.getAlert('games.whackGameOver', { score: score }) : `🎯 Game Over! Your score: ${score}`);
                }
            }, 1000);

            moleInterval = setInterval(() => {
                const holes = document.querySelectorAll('.whack-hole');
                holes.forEach(h => h.classList.remove('active'));
                const randomHole = holes[Math.floor(Math.random() * holes.length)];
                randomHole.classList.add('active');
            }, 800);
        });
    }

    function loadBalloonGame() {
        gameContent.innerHTML = `
            <div class="balloon-game">
                <h2>Balloon Pop</h2>
                <p class="game-description">Pop the colorful balloons as they float</p>
                <p class="game-score">Popped: <span id="balloonScore">0</span></p>
                <div id="balloonCanvas" class="balloon-canvas"></div>
            </div>
        `;

        const canvas = document.getElementById('balloonCanvas');
        const scoreEl = document.getElementById('balloonScore');
        let score = 0;

        function createBalloon() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * (canvas.offsetWidth - 60) + 'px';
            balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDuration = (Math.random() * 2 + 4) + 's';
            
            balloon.innerHTML = '<div class="balloon-string"></div>';
            
            balloon.addEventListener('click', function(e) {
                e.stopPropagation();
                score++;
                scoreEl.textContent = score;
                
                const pop = document.createElement('div');
                pop.className = 'pop-effect';
                pop.style.left = e.clientX - canvas.getBoundingClientRect().left + 'px';
                pop.style.top = e.clientY - canvas.getBoundingClientRect().top + 'px';
                pop.textContent = '🎈';
                canvas.appendChild(pop);
                
                this.style.animation = 'balloonPop 0.3s ease-out';
                setTimeout(() => {
                    this.remove();
                    pop.remove();
                }, 300);
            });
            
            canvas.appendChild(balloon);
            
            setTimeout(() => {
                if (balloon.parentElement) balloon.remove();
            }, 7000);
        }

        const balloonInterval = setInterval(() => {
            if (gameContainer.style.display === 'none') {
                clearInterval(balloonInterval);
            } else {
                createBalloon();
            }
        }, 1000);
    }

    function loadSimonGame() {
        gameContent.innerHTML = `
            <div class="simon-game">
                <h2>Memory Melody</h2>
                <p class="game-description">Watch and repeat the pattern</p>
                <p class="game-score">Level: <span id="simonLevel">1</span></p>
                <div class="simon-board">
                    <div class="simon-btn" data-color="red" style="background: #e74c3c;"></div>
                    <div class="simon-btn" data-color="blue" style="background: #3498db;"></div>
                    <div class="simon-btn" data-color="green" style="background: #2ecc71;"></div>
                    <div class="simon-btn" data-color="yellow" style="background: #f1c40f;"></div>
                </div>
                <button id="startSimon" class="game-button">Start Game</button>
                <p id="simonStatus" class="simon-status"></p>
            </div>
        `;

        const buttons = document.querySelectorAll('.simon-btn');
        const levelEl = document.getElementById('simonLevel');
        const startBtn = document.getElementById('startSimon');
        const statusEl = document.getElementById('simonStatus');
        let sequence = [];
        let playerSequence = [];
        let level = 1;
        let isPlaying = false;

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                if (sequence.length === 0 || isPlaying) return;
                
                const color = this.dataset.color;
                playerSequence.push(color);
                lightUp(this);
                
                if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
                    statusEl.textContent = '❌ Wrong! Starting over...';
                    statusEl.style.color = '#ef4444';
                    setTimeout(() => {
                        resetGame();
                    }, 1000);
                    return;
                }
                
                if (playerSequence.length === sequence.length) {
                    level++;
                    levelEl.textContent = level;
                    statusEl.textContent = '✅ Correct! Next level...';
                    statusEl.style.color = '#10b981';
                    playerSequence = [];
                    setTimeout(playSequence, 1000);
                }
            });
        });

        startBtn.addEventListener('click', function() {
            resetGame();
            playSequence();
            startBtn.disabled = true;
        });

        function resetGame() {
            sequence = [];
            playerSequence = [];
            level = 1;
            levelEl.textContent = level;
            statusEl.textContent = '';
            startBtn.disabled = false;
        }

        function playSequence() {
            isPlaying = true;
            statusEl.textContent = 'Watch the pattern...';
            statusEl.style.color = '#6366f1';
            const colors = ['red', 'blue', 'green', 'yellow'];
            sequence.push(colors[Math.floor(Math.random() * 4)]);
            
            let i = 0;
            const interval = setInterval(() => {
                const btn = document.querySelector(`[data-color="${sequence[i]}"]`);
                lightUp(btn);
                i++;
                if (i >= sequence.length) {
                    clearInterval(interval);
                    isPlaying = false;
                    statusEl.textContent = 'Your turn!';
                }
            }, 600);
        }

        function lightUp(btn) {
            btn.style.opacity = '1';
            btn.style.transform = 'scale(0.95)';
            btn.style.boxShadow = '0 0 20px currentColor';
            setTimeout(() => {
                btn.style.opacity = '0.7';
                btn.style.transform = 'scale(1)';
                btn.style.boxShadow = '';
            }, 300);
        }
    }

    function loadColorMatchGame() {
        gameContent.innerHTML = `
            <div class="colormatch-game">
                <h2>Color Match</h2>
                <p class="game-description">Click the color of the TEXT, not the word</p>
                <p class="game-score">Score: <span id="colorScore">0</span> | Time: <span id="colorTime">30</span>s</p>
                <div class="color-display">
                    <div class="color-word" id="colorWord"></div>
                    <div class="color-buttons">
                        <button class="color-btn" data-color="red" style="background: #e74c3c;">Red</button>
                        <button class="color-btn" data-color="blue" style="background: #3498db;">Blue</button>
                        <button class="color-btn" data-color="green" style="background: #2ecc71;">Green</button>
                        <button class="color-btn" data-color="yellow" style="background: #f1c40f;">Yellow</button>
                        <button class="color-btn" data-color="purple" style="background: #9b59b6;">Purple</button>
                        <button class="color-btn" data-color="orange" style="background: #e67e22;">Orange</button>
                    </div>
                </div>
                <button id="startColor" class="game-button">Start Game</button>
            </div>
        `;

        const wordEl = document.getElementById('colorWord');
        const scoreEl = document.getElementById('colorScore');
        const timeEl = document.getElementById('colorTime');
        const startBtn = document.getElementById('startColor');
        const buttons = document.querySelectorAll('.color-btn');
        let score = 0;
        let timeLeft = 30;
        let currentColor;
        let gameInterval;

        const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
        const colorMap = {
            red: '#e74c3c', blue: '#3498db', green: '#2ecc71',
            yellow: '#f1c40f', purple: '#9b59b6', orange: '#e67e22'
        };

        buttons.forEach(btn => {
            btn.addEventListener('click', function() {
                if (timeLeft <= 0) return;
                
                if (this.dataset.color === currentColor) {
                    score++;
                    scoreEl.textContent = score;
                    this.style.transform = 'scale(1.1)';
                    setTimeout(() => this.style.transform = '', 200);
                    generateQuestion();
                } else {
                    score = Math.max(0, score - 1);
                    scoreEl.textContent = score;
                    this.style.filter = 'brightness(0.5)';
                    setTimeout(() => this.style.filter = '', 200);
                }
            });
        });

        startBtn.addEventListener('click', function() {
            score = 0;
            timeLeft = 30;
            scoreEl.textContent = score;
            timeEl.textContent = timeLeft;
            startBtn.disabled = true;
            generateQuestion();

            gameInterval = setInterval(() => {
                timeLeft--;
                timeEl.textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(gameInterval);
                    startBtn.disabled = false;
                    wordEl.textContent = 'GAME OVER';
                    wordEl.style.color = '#ef4444';
                    setTimeout(() => alert(window.languageManager ? window.languageManager.getAlert('games.paintFinalScore', { score: score }) : `🎨 Final Score: ${score}`), 300);
                }
            }, 1000);
        });

        function generateQuestion() {
            const wordColor = colors[Math.floor(Math.random() * colors.length)];
            currentColor = colors[Math.floor(Math.random() * colors.length)];
            
            wordEl.textContent = wordColor.toUpperCase();
            wordEl.style.color = colorMap[currentColor];
        }
    }

    function loadMandalaGame() {
        gameContent.innerHTML = `
            <div class="mandala-game">
                <h2>Mandala Creator</h2>
                <p class="game-description">Create beautiful symmetrical patterns</p>
                <div class="mandala-controls">
                    <label class="control-label">
                        <span>Color:</span>
                        <input type="color" id="mandalaColor" value="#6366f1">
                    </label>
                    <label class="control-label">
                        <span>Symmetry: <span id="symmetryValue">8</span></span>
                        <input type="range" id="mandalaSymmetry" min="4" max="12" value="8">
                    </label>
                    <button id="clearMandala" class="game-button-sm">Clear</button>
                </div>
                <canvas id="mandalaCanvas" width="500" height="500"></canvas>
            </div>
        `;

        const canvas = document.getElementById('mandalaCanvas');
        const ctx = canvas.getContext('2d');
        const colorPicker = document.getElementById('mandalaColor');
        const symmetrySlider = document.getElementById('mandalaSymmetry');
        const symmetryValue = document.getElementById('symmetryValue');
        const clearBtn = document.getElementById('clearMandala');

        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        let isDrawing = false;

        symmetrySlider.addEventListener('input', function() {
            symmetryValue.textContent = this.value;
        });

        canvas.addEventListener('mousedown', () => isDrawing = true);
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
        canvas.addEventListener('mousemove', draw);

        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            isDrawing = true;
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            draw(e.touches[0]);
        });
        canvas.addEventListener('touchend', () => isDrawing = false);

        clearBtn.addEventListener('click', () => {
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        });

        function draw(e) {
            if (!isDrawing) return;

            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX || e.pageX) - rect.left - canvas.width / 2;
            const y = (e.clientY || e.pageY) - rect.top - canvas.height / 2;
            const symmetry = parseInt(symmetrySlider.value);

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);

            for (let i = 0; i < symmetry; i++) {
                ctx.rotate((Math.PI * 2) / symmetry);
                ctx.beginPath();
                ctx.arc(x, y, 3, 0, Math.PI * 2);
                ctx.fillStyle = colorPicker.value;
                ctx.fill();
            }

            ctx.restore();
        }
    }

    function loadStarfieldGame() {
        gameContent.innerHTML = `
            <div class="starfield-game">
                <h2>Starfield Journey</h2>
                <p class="game-description">Watch the stars and let your mind drift</p>
                <canvas id="starCanvas" width="700" height="500"></canvas>
                <div class="starfield-controls">
                    <button id="toggleStars" class="game-button">Pause</button>
                    <label class="control-label">
                        <span>Speed: <span id="speedValue">Normal</span></span>
                        <input type="range" id="starSpeed" min="1" max="5" value="2">
                    </label>
                </div>
            </div>
        `;

        const canvas = document.getElementById('starCanvas');
        const ctx = canvas.getContext('2d');
        const toggleBtn = document.getElementById('toggleStars');
        const speedSlider = document.getElementById('starSpeed');
        const speedValue = document.getElementById('speedValue');
        let isPaused = false;
        let speed = 2;

        const speedNames = ['Very Slow', 'Slow', 'Normal', 'Fast', 'Very Fast'];

        const stars = [];
        for (let i = 0; i < 200; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                z: Math.random() * canvas.width,
                size: Math.random() * 2
            });
        }

        speedSlider.addEventListener('input', function() {
            speed = parseInt(this.value);
            speedValue.textContent = speedNames[speed - 1];
        });

        toggleBtn.addEventListener('click', function() {
            isPaused = !isPaused;
            this.textContent = isPaused ? 'Resume' : 'Pause';
            this.classList.toggle('active', !isPaused);
        });

        function animate() {
            if (gameContainer.style.display === 'none') return;

            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (!isPaused) {
                stars.forEach(star => {
                    star.z -= speed;
                    if (star.z <= 0) {
                        star.z = canvas.width;
                        star.x = Math.random() * canvas.width;
                        star.y = Math.random() * canvas.height;
                    }

                    const k = 128 / star.z;
                    const px = (star.x - canvas.width / 2) * k + canvas.width / 2;
                    const py = (star.y - canvas.height / 2) * k + canvas.height / 2;
                    const size = (1 - star.z / canvas.width) * star.size * 3;

                    ctx.fillStyle = '#fff';
                    ctx.beginPath();
                    ctx.arc(px, py, size, 0, Math.PI * 2);
                    ctx.fill();
                });
            }

            requestAnimationFrame(animate);
        }

        animate();
    }

    function loadWordSearchGame() {
        const words = ['CALM', 'PEACE', 'RELAX', 'HAPPY', 'BREATHE', 'SMILE', 'JOY', 'HOPE'];
        
        gameContent.innerHTML = `
            <div class="wordsearch-game">
                <h2>Calm Word Search</h2>
                <p class="game-description">Find all the peaceful words</p>
                <p class="game-score">Found: <span id="foundWords">0</span> / ${words.length}</p>
                <div class="word-list">
                    ${words.map(w => `<span class="word-item" data-word="${w}">${w}</span>`).join('')}
                </div>
                <div id="wordGrid" class="word-grid"></div>
            </div>
        `;

        const grid = document.getElementById('wordGrid');
        const foundEl = document.getElementById('foundWords');
        let found = 0;
        const gridSize = 10;
        const gridData = Array(gridSize).fill().map(() => Array(gridSize).fill(''));

        words.forEach(word => {
            let placed = false;
            while (!placed) {
                const dir = Math.random() > 0.5 ? 'h' : 'v';
                const row = Math.floor(Math.random() * gridSize);
                const col = Math.floor(Math.random() * gridSize);

                if (dir === 'h' && col + word.length <= gridSize) {
                    let canPlace = true;
                    for (let i = 0; i < word.length; i++) {
                        if (gridData[row][col + i] !== '' && gridData[row][col + i] !== word[i]) {
                            canPlace = false;
                        }
                    }
                    if (canPlace) {
                        for (let i = 0; i < word.length; i++) {
                            gridData[row][col + i] = word[i];
                        }
                        placed = true;
                    }
                } else if (dir === 'v' && row + word.length <= gridSize) {
                    let canPlace = true;
                    for (let i = 0; i < word.length; i++) {
                        if (gridData[row + i][col] !== '' && gridData[row + i][col] !== word[i]) {
                            canPlace = false;
                        }
                    }
                    if (canPlace) {
                        for (let i = 0; i < word.length; i++) {
                            gridData[row + i][col] = word[i];
                        }
                        placed = true;
                    }
                }
            }
        });

        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (gridData[i][j] === '') {
                    gridData[i][j] = letters[Math.floor(Math.random() * letters.length)];
                }
            }
        }

        gridData.forEach((row, i) => {
            row.forEach((letter, j) => {
                const cell = document.createElement('div');
                cell.className = 'word-cell';
                cell.textContent = letter;
                cell.dataset.row = i;
                cell.dataset.col = j;
                grid.appendChild(cell);
            });
        });

        let selectedCells = [];
        let isSelecting = false;

        grid.addEventListener('mousedown', () => isSelecting = true);
        grid.addEventListener('mouseup', checkWord);

        document.querySelectorAll('.word-cell').forEach(cell => {
            cell.addEventListener('mouseenter', function() {
                if (isSelecting) {
                    this.classList.add('selected');
                    selectedCells.push(this);
                }
            });
        });

        function checkWord() {
            isSelecting = false;
            const word = selectedCells.map(c => c.textContent).join('');
            const reversedWord = word.split('').reverse().join('');
            
            if (words.includes(word) || words.includes(reversedWord)) {
                const foundWord = words.includes(word) ? word : reversedWord;
                selectedCells.forEach(c => c.classList.add('found'));
                document.querySelector(`[data-word="${foundWord}"]`).classList.add('word-found');
                found++;
                foundEl.textContent = found;
                
                if (found === words.length) {
                    setTimeout(() => alert(window.languageManager ? window.languageManager.getAlert('games.wordSearchComplete') : '🎉 Congratulations! You found all words!'), 300);
                }
            } else {
                selectedCells.forEach(c => c.classList.remove('selected'));
            }
            
            selectedCells = [];
        }
    }

    function load2048Game() {
        gameContent.innerHTML = `
            <div class="game2048">
                <h2>Zen 2048</h2>
                <p class="game-description">Combine tiles to reach 2048</p>
                <p class="game-score">Score: <span id="score2048">0</span></p>
                <div id="grid2048" class="grid2048"></div>
                <button id="restart2048" class="game-button">New Game</button>
                <p class="game-hint">Use arrow keys to play</p>
            </div>
        `;

        const grid = document.getElementById('grid2048');
        const scoreEl = document.getElementById('score2048');
        const restartBtn = document.getElementById('restart2048');
        let board = Array(4).fill().map(() => Array(4).fill(0));
        let score = 0;

        function initGame() {
            board = Array(4).fill().map(() => Array(4).fill(0));
            score = 0;
            scoreEl.textContent = score;
            addNewTile();
            addNewTile();
            render();
        }

        function addNewTile() {
            const empty = [];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    if (board[i][j] === 0) empty.push([i, j]);
                }
            }
            if (empty.length > 0) {
                const [row, col] = empty[Math.floor(Math.random() * empty.length)];
                board[row][col] = Math.random() > 0.9 ? 4 : 2;
            }
        }

        function render() {
            grid.innerHTML = '';
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 4; j++) {
                    const tile = document.createElement('div');
                    tile.className = 'tile2048';
                    if (board[i][j] !== 0) {
                        tile.textContent = board[i][j];
                        tile.classList.add(`tile-${board[i][j]}`);
                        tile.style.animation = 'tileAppear 0.2s ease';
                    }
                    grid.appendChild(tile);
                }
            }
        }

        function move(direction) {
            let moved = false;
            const newBoard = board.map(row => [...row]);

            if (direction === 'left' || direction === 'right') {
                for (let i = 0; i < 4; i++) {
                    const row = direction === 'left' ? board[i] : board[i].reverse();
                    const newRow = slide(row);
                    if (direction === 'right') newRow.reverse();
                    newBoard[i] = newRow;
                    if (JSON.stringify(board[i]) !== JSON.stringify(newBoard[i])) moved = true;
                }
            } else {
                for (let j = 0; j < 4; j++) {
                    const col = board.map(row => row[j]);
                    const newCol = direction === 'up' ? slide(col) : slide(col.reverse()).reverse();
                    for (let i = 0; i < 4; i++) {
                        newBoard[i][j] = newCol[i];
                        if (board[i][j] !== newBoard[i][j]) moved = true;
                    }
                }
            }

            if (moved) {
                board = newBoard;
                addNewTile();
                render();
            }
        }

        function slide(row) {
            let arr = row.filter(val => val !== 0);
            for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] === arr[i + 1]) {
                    arr[i] *= 2;
                    score += arr[i];
                    scoreEl.textContent = score;
                    arr.splice(i + 1, 1);
                }
            }
            while (arr.length < 4) arr.push(0);
            return arr;
        }

        document.addEventListener('keydown', (e) => {
            if (gameContainer.style.display === 'none') return;
            e.preventDefault();
            if (e.key === 'ArrowLeft') move('left');
            if (e.key === 'ArrowRight') move('right');
            if (e.key === 'ArrowUp') move('up');
            if (e.key === 'ArrowDown') move('down');
        });

        restartBtn.addEventListener('click', initGame);
        initGame();
    }

    function loadMeditationGame() {
        gameContent.innerHTML = `
            <div class="meditation-game">
                <h2>Guided Meditation</h2>
                <p class="game-description">Take a moment for yourself</p>
                <div class="meditation-display">
                    <div class="meditation-circle" id="meditationCircle">
                        <span id="meditationText">Ready</span>
                    </div>
                    <p id="meditationInstruction">Choose a duration and click start</p>
                </div>
                <div class="meditation-controls">
                    <select id="meditationDuration" class="meditation-select">
                        <option value="1">1 minute</option>
                        <option value="3">3 minutes</option>
                        <option value="5" selected>5 minutes</option>
                        <option value="10">10 minutes</option>
                    </select>
                    <button id="startMeditation" class="game-button">Start Meditation</button>
                </div>
                <div class="meditation-progress">
                    <div class="progress-bar" id="meditationProgress"></div>
                </div>
            </div>
        `;

        const circle = document.getElementById('meditationCircle');
        const text = document.getElementById('meditationText');
        const instruction = document.getElementById('meditationInstruction');
        const startBtn = document.getElementById('startMeditation');
        const durationSelect = document.getElementById('meditationDuration');
        const progressBar = document.getElementById('meditationProgress');

        const meditationSteps = [
            { text: 'Settle In', instruction: 'Find a comfortable position and close your eyes if you wish', duration: 15 },
            { text: 'Notice', instruction: 'Notice the sounds around you without judgment', duration: 20 },
            { text: 'Breathe', instruction: 'Feel your breath moving in and out naturally', duration: 30 },
            { text: 'Body Scan', instruction: 'Gently scan your body from head to toe', duration: 40 },
            { text: 'Present', instruction: 'Simply be present in this moment', duration: 30 },
            { text: 'Gratitude', instruction: 'Think of something you are grateful for', duration: 25 },
            { text: 'Release', instruction: 'Let go of any tension you may be holding', duration: 30 },
            { text: 'Return', instruction: 'Slowly bring your awareness back to the room', duration: 20 }
        ];

        let isMeditating = false;
        let currentStep = 0;
        let totalDuration = 0;
        let elapsed = 0;
        let progressInterval;

        startBtn.addEventListener('click', function() {
            if (!isMeditating) {
                isMeditating = true;
                startBtn.textContent = 'Stop';
                startBtn.classList.add('active');
                durationSelect.disabled = true;
                const duration = parseInt(durationSelect.value) * 60;
                totalDuration = duration;
                elapsed = 0;
                currentStep = 0;
                startMeditation();
            } else {
                stopMeditation();
            }
        });

        function startMeditation() {
            if (!isMeditating) return;

            const step = meditationSteps[currentStep % meditationSteps.length];
            text.textContent = step.text;
            instruction.textContent = step.instruction;
            circle.style.transform = 'scale(1.1)';
            circle.style.transition = 'transform 2s ease-in-out';

            const stepDuration = Math.min(step.duration * 1000, (totalDuration - elapsed) * 1000);
            
            setTimeout(() => {
                if (isMeditating) circle.style.transform = 'scale(1)';
            }, stepDuration / 2);

            progressInterval = setInterval(() => {
                if (!isMeditating) {
                    clearInterval(progressInterval);
                    return;
                }
                elapsed += 0.1;
                const progress = (elapsed / totalDuration) * 100;
                progressBar.style.width = Math.min(progress, 100) + '%';

                if (elapsed >= totalDuration) {
                    clearInterval(progressInterval);
                    completeMeditation();
                }
            }, 100);

            setTimeout(() => {
                if (isMeditating && elapsed < totalDuration) {
                    currentStep++;
                    startMeditation();
                }
            }, stepDuration);
        }

        function stopMeditation() {
            isMeditating = false;
            clearInterval(progressInterval);
            startBtn.textContent = 'Start Meditation';
            startBtn.classList.remove('active');
            durationSelect.disabled = false;
            text.textContent = 'Paused';
            instruction.textContent = 'Click start to continue or choose a new duration';
            circle.style.transform = 'scale(1)';
            progressBar.style.width = '0%';
            elapsed = 0;
        }

        function completeMeditation() {
            isMeditating = false;
            startBtn.textContent = 'Start Meditation';
            startBtn.classList.remove('active');
            durationSelect.disabled = false;
            text.textContent = '✨ Complete';
            instruction.textContent = 'Well done! You completed your meditation session';
            circle.style.transform = 'scale(1)';
            
            setTimeout(() => {
                progressBar.style.width = '0%';
                text.textContent = 'Ready';
                instruction.textContent = 'Choose a duration and click start';
            }, 5000);
        }
    }
    function loadSimonGame() {
    gameContent.innerHTML = `
        <div class="simon-game">
            <h2>Memory Melody</h2>
            <p class="game-description">Watch and repeat the pattern</p>
            <p class="game-score">Level: <span id="simonLevel">1</span></p>
            <div class="simon-board">
                <div class="simon-btn" data-color="red" data-freq="329.63" style="background: #e74c3c;"></div>
                <div class="simon-btn" data-color="blue" data-freq="261.63" style="background: #3498db;"></div>
                <div class="simon-btn" data-color="green" data-freq="293.66" style="background: #2ecc71;"></div>
                <div class="simon-btn" data-color="yellow" data-freq="349.23" style="background: #f1c40f;"></div>
            </div>
            <button id="startSimon" class="game-button">Start Game</button>
            <p id="simonStatus" class="simon-status"></p>
        </div>
    `;

    const buttons = document.querySelectorAll('.simon-btn');
    const levelEl = document.getElementById('simonLevel');
    const startBtn = document.getElementById('startSimon');
    const statusEl = document.getElementById('simonStatus');
    let sequence = [];
    let playerSequence = [];
    let level = 1;
    let isPlaying = false;

    // Audio Context for sounds
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    // Function to play a tone
    function playTone(frequency, duration = 300) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
    }

    // Function to play error sound
    function playErrorSound() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
        oscillator.type = 'sawtooth';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    }

    // Function to play success sound
    function playSuccessSound() {
        const frequencies = [523.25, 659.25, 783.99];
        frequencies.forEach((freq, index) => {
            setTimeout(() => {
                playTone(freq, 150);
            }, index * 100);
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (sequence.length === 0 || isPlaying) return;
            
            // Resume audio context on user interaction (required by browsers)
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            const color = this.dataset.color;
            const frequency = parseFloat(this.dataset.freq);
            playerSequence.push(color);
            
            lightUp(this);
            playTone(frequency, 300);
            
            if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
                statusEl.textContent = '❌ Wrong! Starting over...';
                statusEl.style.color = '#ef4444';
                playErrorSound();
                setTimeout(() => {
                    resetGame();
                }, 1000);
                return;
            }
            
            if (playerSequence.length === sequence.length) {
                level++;
                levelEl.textContent = level;
                statusEl.textContent = '✅ Correct! Next level...';
                statusEl.style.color = '#10b981';
                playSuccessSound();
                playerSequence = [];
                setTimeout(playSequence, 1500);
            }
        });
    });

    startBtn.addEventListener('click', function() {
        // Resume audio context on user interaction
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        resetGame();
        playSequence();
        startBtn.disabled = true;
    });

    function resetGame() {
        sequence = [];
        playerSequence = [];
        level = 1;
        levelEl.textContent = level;
        statusEl.textContent = '';
        startBtn.disabled = false;
    }

    function playSequence() {
        isPlaying = true;
        statusEl.textContent = 'Watch the pattern...';
        statusEl.style.color = '#6366f1';
        const colors = ['red', 'blue', 'green', 'yellow'];
        sequence.push(colors[Math.floor(Math.random() * 4)]);
        
        let i = 0;
        const interval = setInterval(() => {
            const btn = document.querySelector(`[data-color="${sequence[i]}"]`);
            const frequency = parseFloat(btn.dataset.freq);
            lightUp(btn);
            playTone(frequency, 300);
            i++;
            if (i >= sequence.length) {
                clearInterval(interval);
                isPlaying = false;
                statusEl.textContent = 'Your turn!';
            }
        }, 600);
    }

    function lightUp(btn) {
        btn.style.opacity = '1';
        btn.style.transform = 'scale(0.95)';
        btn.style.boxShadow = '0 0 30px currentColor';
        btn.style.filter = 'brightness(1.3)';
        setTimeout(() => {
            btn.style.opacity = '0.7';
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = '';
            btn.style.filter = '';
        }, 300);
    }
}
}
function retranslateGamesPopup() {
    if (window.languageManager) {
        const t = translations[window.languageManager.currentLanguage];
        window.languageManager.translateGamesPopup(t.games);
    }
}
window.addEventListener('languageChanged', retranslateGamesPopup);


// DOM Elements
const mobileToggle = document.getElementById('mobileToggle');
const mobileNav = document.getElementById('mobileNav');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const conditionItems = document.querySelectorAll('.condition-item');
const serviceCards = document.querySelectorAll('.service-card');
const heroButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

// Mobile Navigation Toggle (delegated, capture-phase handler to avoid duplicate listeners)
document.addEventListener('click', function _mobileToggleHandler(e) {
    const toggle = e.target.closest('.mobile-menu-toggle');
    if (!toggle) return;

    // prevent other click handlers (avoid double toggle if multiple scripts add listeners)
    e.stopImmediatePropagation();
    e.preventDefault();

    const nav = document.getElementById('mobileNav');

    // Toggle active state
    toggle.classList.toggle('active');
    if (nav) nav.classList.toggle('active');

    // Animate hamburger spans safely
    const spans = toggle.querySelectorAll('span');
    if (nav && nav.classList.contains('active')) {
        if (spans[0]) spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (spans[1]) spans[1].style.opacity = '0';
        if (spans[2]) spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        if (spans[0]) spans[0].style.transform = 'rotate(0) translate(0, 0)';
        if (spans[1]) spans[1].style.opacity = '1';
        if (spans[2]) spans[2].style.transform = 'rotate(0) translate(0, 0)';
    }

}, true); // use capture phase

// Close mobile nav when clicking on a link (guarded)
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('mobileNav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        if (nav) nav.classList.remove('active');
        if (toggle) toggle.classList.remove('active');

        if (toggle) {
            const spans = toggle.querySelectorAll('span');
            if (spans[0]) spans[0].style.transform = 'rotate(0) translate(0, 0)';
            if (spans[1]) spans[1].style.opacity = '1';
            if (spans[2]) spans[2].style.transform = 'rotate(0) translate(0, 0)';
        }
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
            alert(window.languageManager ? window.languageManager.getAlert('games.comingSoon') : 'Coming soon! This feature is under development.');
    }
}

function showTherapyOptions() {
    alert(window.languageManager ? window.languageManager.getAlert('therapyOptions') : 'Professional Therapy\n\nConnect with licensed therapists:\n• Individual counseling\n• Specialized treatment approaches\n• Flexible scheduling\n• Online and in-person options\n\nContact us to schedule your consultation!');
}

function showGroupSessions() {
    alert(window.languageManager ? window.languageManager.getAlert('groupSessions') : 'Group Sessions\n\nJoin our supportive community:\n• Anxiety support groups\n• Depression recovery circles\n• Stress management workshops\n• Trauma healing groups\n\nFind your group and start healing together!');
}

function showResourcesLibrary() {
    alert(window.languageManager ? window.languageManager.getAlert('resourcesLibrary') : 'Resources Library\n\nExplore our comprehensive collection:\n• Educational articles\n• Self-help guides\n• Meditation resources\n• Crisis support information\n\nAccess tools for your mental health journey!');
}

// Button click handlers
function bookAppointment() {
    alert(window.languageManager ? window.languageManager.getAlert('bookAppointment') : 'Book Appointment\n\nWe\'ll connect you with a qualified mental health professional.\n\nFeatures:\n• Choose your preferred therapist\n• Select convenient time slots\n• Online or in-person sessions\n• Insurance verification assistance\n\nCall us at: (555) 123-MIND\nOr visit our booking portal online!');
}

function findResources(conditionType) {
    if (window.languageManager) {
        const resource = window.languageManager.getAlert(`resourceType.${conditionType}`);
        const message = window.languageManager.getAlert('findResources', { resource: resource });
        alert(message);
    } else {
        // Fallback if translation system not loaded
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
    overlay.className = 'emergency-overlay-responsive';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(5px);
        padding: 15px;
        overflow-y: auto;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'emergency-modal-responsive';
    modal.style.cssText = `
        background: #719a8d;
        padding: clamp(20px, 5vw, 30px);
        border-radius: 15px;
        max-width: 900px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        color: #ffffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        margin: auto;
    `;
    
    modal.innerHTML = `
        <div style="text-align: center; margin-top: clamp(20px, 4vw, 25px); padding: clamp(12px, 3vw, 15px); background: rgb(219, 53, 69); border-radius: 14px; border: 1px solid rgb(219, 53, 69);">
            <p style="margin: 0; font-weight: bold; color: rgba(255, 255, 255, 1); font-size: clamp(0.875rem, 2.5vw, 1rem); line-height: 1.4;">⚠️ If you're in immediate danger, call <a href="tel:911" style="color: #ffffffff;">911</a></p>
        </div>
        <div style="text-align: center; margin-bottom: clamp(15px, 3vw, 20px);">
            <h2 style="color: #ffffffff;margin-top: 10px; margin-bottom: 10px; font-size: clamp(1.2rem, 5vw, 1.8rem); line-height: 1.3;">🆘 Crisis Support Resources</h2>
            <p style="font-size: clamp(0.875rem, 3vw, 1rem); color: #ffffff;">You are not alone. Help is available 24/7.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: clamp(15px, 3vw, 20px);">
            <!-- Ohio Hot-Lines -->
            <div style="border: 2px solid transparent; border-radius: 10px; padding: clamp(12px, 3vw, 15px); background: transparent;">
                <h3 style="background-color: #5d8b7e;border-radius: 14px;color: #ffffff; margin-bottom: 15px; text-align: center; font-size: clamp(1rem, 4vw, 1.3rem);">Ohio Hot-Lines</h3>
                
                <div style="margin-bottom: 12px; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">Suicide Prevention</h4>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:988" style="font-style: italic;color: #ffffffff; text-decoration:   underline;">988</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Text:</strong> <a href="sms:741741?body=4HOPE" style="font-style: italic;color: #ffffffff; text-decoration:   underline;">4HOPE to 741741</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://988lifeline.org" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">988lifeline.org</a></p>
                </div>
                
                <div style="margin-bottom: 12px; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">OhioMHAS</h4>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:1-877-275-6364" style="font-style: italic;color: #ffffffff; text-decoration:   underline;">1-877-275-6364</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://mha.ohio.gov" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">mha.ohio.gov</a></p>
                </div>
                
                <div style="margin-bottom: 12px; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">Franklin County ADAMH</h4>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:614-276-2273" style="font-style: italic;color: #ffffffff; text-decoration:   underline;">614-276-2273</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://adamhfranklin.org" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">adamhfranklin.org</a></p>
                </div>
                
                <div style="margin-bottom: 0; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">Netcare Access</h4>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:614-276-2273" style="font-style: italic;color: #ffffffff; text-decoration:   underline;">614-276-2273</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://mha.ohio.gov" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">mha.ohio.gov</a></p>
                </div>
            </div>
            
            <!-- National Hot-Lines -->
            <div style="border: 2px solid transparent; border-radius: 10px; padding: clamp(12px, 3vw, 15px); background: transparent;">
                <h3 style="background-color: #5d8b7e;border-radius: 14px;color: #ffffff; margin-bottom: 15px; text-align: center; font-size: clamp(1rem, 4vw, 1.3rem);">National Hot-Lines</h3>
                
                <div style="margin-bottom: 12px; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">Suicide Prevention</h4>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:988" style="font-style: italic;color: #ffffffff; text-decoration:   underline;">988</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://988lifeline.org" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">988lifeline.org</a></p>
                </div>
                
                <div style="margin-bottom: 12px; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">NAMI Helpline</h4>
                    <p style="font-size: clamp(0.75rem, 2vw, 0.85rem); margin-bottom: 4px;">(National Alliance on Mental Illness)</p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:1-800-950-6264" style="color: #ffffffff; text-decoration:   underline;">1-800-950-6264</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://nami.org/help" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">nami.org/help</a></p>
                </div>
                
                <div style="margin-bottom: 12px; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">SAMHSA Helpline</h4>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:1-800-662-4357" style="color: #ffffffff; text-decoration:   underline;">1-800-662-4357</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://findtreatment.gov" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">findtreatment.gov</a></p>
                </div>
                
                <div style="margin-bottom: 0; padding: clamp(8px, 2vw, 10px); background: #5d8b7e; border-radius: 5px;">
                    <h4 style="margin-bottom: 8px; color: #ffffffff; font-size: clamp(0.875rem, 3vw, 1.1rem);">Veterans Crisis Line</h4>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-word;"><strong>Call:</strong> <a href="tel:988" style="color: #ffffffff; text-decoration:   underline;">Dial 988, press 1</a></p>
                    <p style="font-size: clamp(0.8rem, 2.5vw, 1rem); margin: 4px 0; word-break: break-all;"><strong>Website:</strong> <a href="https://www.veteranscrisisline.net" style="font-style: italic;color: #ffffffff; text-decoration:   underline;" target="_blank">veteranscrisisline.net</a></p>
                </div>
            </div>
        </div>
        
        
        
        <div style="text-align: center; margin-top: clamp(12px, 3vw, 15px);">
            <button id="closeModalBtn" style="
                background: rgb(219, 53, 69);
                color: white;
                border: none;
                padding: clamp(10px, 2.5vw, 12px) clamp(20px, 5vw, 30px);
                border-radius: 25px;
                cursor: pointer;
                font-weight: bold;
                transition: background 0.3s ease;
                font-size: clamp(0.875rem, 2.5vw, 1rem);
                min-width: clamp(100px, 25vw, 140px);
                width: auto;
            ">Close</button>
        </div>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Close modal functionality
    const closeBtn = modal.querySelector('#closeModalBtn');
    closeBtn.addEventListener('mouseover', () => {
        closeBtn.style.background = '#5a6268';
    });
    closeBtn.addEventListener('mouseout', () => {
        closeBtn.style.background = '#6c757d';
    });
    
    const closeModal = () => {
        document.body.style.overflow = 'auto';
        overlay.style.opacity = '0';
        setTimeout(() => {
            if (document.body.contains(overlay)) {
                document.body.removeChild(overlay);
            }
        }, 300);
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
    
    // Fade in animation
    setTimeout(() => {
        overlay.style.opacity = '1';
        overlay.style.transition = 'opacity 0.3s ease';
    }, 10);
}

// Add responsive CSS for the emergency modal
const responsiveEmergencyStyles = document.createElement('style');
responsiveEmergencyStyles.textContent = `
    .emergency-overlay-responsive {
        opacity: 0;
    }
    
    .emergency-modal-responsive {
        animation: slideUp 0.3s ease-out;
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Responsive adjustments for very small screens */
    @media (max-width: 480px) {
        .emergency-modal-responsive {
            border-radius: 12px !important;
        }
        
        .emergency-overlay-responsive {
            padding: 10px !important;
            align-items: flex-start !important;
            padding-top: 20px !important;
        }
    }
    
    /* Smooth scrolling for modal content */
    .emergency-modal-responsive {
        scrollbar-width: thin;
        scrollbar-color: #5d8b7e #719a8d;
    }
    
    .emergency-modal-responsive::-webkit-scrollbar {
        width: 8px;
    }
    
    .emergency-modal-responsive::-webkit-scrollbar-track {
        background: #719a8d;
        border-radius: 10px;
    }
    
    .emergency-modal-responsive::-webkit-scrollbar-thumb {
        background: #5d8b7e;
        border-radius: 10px;
    }
    
    .emergency-modal-responsive::-webkit-scrollbar-thumb:hover {
        background: #4a6f62;
    }
`;

document.head.appendChild(responsiveEmergencyStyles);

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
            background: #719a8d;
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