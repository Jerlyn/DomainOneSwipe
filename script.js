// Card data from CPACC Domain One
const cardData = [
    {
        id: 1,
        category: "Models of Disability",
        icon: "balance-scale",
        title: "Medical Model of Disability",
        content: "The medical model views disability as a <strong>problem of the person</strong>, directly caused by disease, trauma, or health condition. In this model, management of disability aims at a 'cure,' or the individual's adjustment to lead to an effective cure. The medical component of disabilities is a critical reality for many people.",
        source: "CPACC Domain One"
    },
    // ...other card data omitted for brevity...
];

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cardContainer = document.getElementById('card-container');
    const swipeLeftButton = document.getElementById('swipe-left-button');
    const swipeRightButton = document.getElementById('swipe-right-button');
    const progressFill = document.getElementById('progress-fill');
    const currentCardElement = document.getElementById('current-card');
    const totalCardsElement = document.getElementById('total-cards');
    const knowCountElement = document.getElementById('know-count');
    const studyCountElement = document.getElementById('study-count');
    const tabKnowCountElement = document.getElementById('tab-know-count');
    const tabStudyCountElement = document.getElementById('tab-study-count');
    const finalKnowCountElement = document.getElementById('final-know-count');
    const finalStudyCountElement = document.getElementById('final-study-count');
    const gameCompleteElement = document.getElementById('game-complete');
    const restartButton = document.getElementById('restart-button');
    const reviewModeButton = document.getElementById('review-mode-button');
    const reviewStudyButton = document.getElementById('review-study-button');
    const settingsButton = document.getElementById('settings-button');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsClose = document.getElementById('settings-close');
    const listButton = document.getElementById('list-button');
    const listPanel = document.getElementById('list-panel');
    const listClose = document.getElementById('list-close');
    const highContrastToggle = document.getElementById('high-contrast-toggle');
    const largeTextToggle = document.getElementById('large-text-toggle');
    const reducedMotionToggle = document.getElementById('reduced-motion-toggle');
    const resetProgressButton = document.getElementById('reset-progress');
    const exportDataButton = document.getElementById('export-data');
    const instructions = document.getElementById('instructions');
    const closeInstructions = document.querySelector('.close-instructions');
    const reviewModeBanner = document.getElementById('review-mode-banner');
    const searchInput = document.getElementById('search-input');
    const allList = document.getElementById('all-list');
    const knowList = document.getElementById('know-list');
    const studyList = document.getElementById('study-list');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const cardDetailModal = document.getElementById('card-detail-modal');
    const modalClose = document.getElementById('modal-close');
    const modalCloseButton = document.getElementById('modal-close-button');
    const modalMarkButton = document.getElementById('modal-mark-button');
    const modalCardTitle = document.getElementById('modal-card-title');
    const modalCardContent = document.getElementById('modal-card-content');
    const knowStat = document.getElementById('know-stat');
    const studyStat = document.getElementById('study-stat');

    // Game state
    let currentCardIndex = 0;
    let currentData = [...cardData]; // This allows us to filter for review mode
    let knowCards = [];
    let studyCards = [];
    let cards = [];
    let currentCard = null;
    let hammerManager = null;
    let isReviewMode = false;
    let currentModalCardId = null;

    // Check if we're on a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Initialize the game
    function initGame(reviewMode = false) {
        isReviewMode = reviewMode;
        
        // If review mode, use only study cards
        if (reviewMode) {
            reviewModeBanner.classList.add('active');
            currentData = studyCards.map(id => cardData.find(card => card.id === id));
        } else {
            reviewModeBanner.classList.remove('active');
            currentData = [...cardData];
        }
        
        // Shuffle the cards if not in review mode
        if (!reviewMode) {
            currentData.sort(() => Math.random() - 0.5);
        }
        
        // Update total cards count
        totalCardsElement.textContent = currentData.length;
        currentCardIndex = 0;
        currentCardElement.textContent = currentCardIndex + 1;
        
        // Create and display cards
        cardContainer.innerHTML = '';
        cards = [];
        
        if (currentData.length === 0) {
            // No cards to display
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <h3>No Cards to Review</h3>
                <p>You've marked all cards as known. Great job!</p>
                <button class="primary-button" id="reset-for-new-session">Start New Session</button>
            `;
            cardContainer.appendChild(emptyState);
            
            document.getElementById('reset-for-new-session').addEventListener('click', () => {
                initGame(false);
            });
            
            // Hide swipe buttons
            swipeLeftButton.style.display = 'none';
            swipeRightButton.style.display = 'none';
            
            return;
        } else {
            // Show swipe buttons
            swipeLeftButton.style.display = '';
            swipeRightButton.style.display = '';
        }
        
        currentData.forEach((data, index) => {
            const card = createCard(data);
            if (index === 0) {
                currentCard = card;
                card.style.zIndex = 100;
            } else {
                card.style.zIndex = 99 - index;
                card.style.transform = 'scale(0.95) translateY(10px)';
                card.style.opacity = '0.7';
            }
            cardContainer.appendChild(card);
            cards.push(card);
        });
        
        // Initialize gesture recognition if there are cards, but only on desktop
        if (cards.length > 0 && !isMobile) {
            initHammer();
        } else if (isMobile && cards.length > 0) {
            // On mobile, make cards non-draggable
            cards.forEach(card => {
                card.style.cursor = 'default';
            });
        }
        
        // Update progress bar
        updateProgress();
        
        // Hide game complete screen
        gameCompleteElement.classList.remove('active');
        
        // Update lists
        renderLists();
    }

    // Create a single card
    function createCard(data) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = data.id;
        card.dataset.category = data.category;
        
        // Get category icon
        let categoryIcon = getCategoryIcon(data.category);
        
        // Card header
        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        cardHeader.innerHTML = `
            <span class="card-tag"><i class="fas fa-${data.icon || categoryIcon}"></i> ${data.category}</span>
            <span class="card-id">#${data.id}</span>
        `;
        
        // Swipe overlays
        const swipeLeftOverlay = document.createElement('div');
        swipeLeftOverlay.className = 'swipe-overlay swipe-left';
        swipeLeftOverlay.textContent = 'Study';
        
        const swipeRightOverlay = document.createElement('div');
        swipeRightOverlay.className = 'swipe-overlay swipe-right';
        swipeRightOverlay.textContent = 'Know';
        
        // Card progress indicator
        const cardProgress = document.createElement('div');
        cardProgress.className = 'card-progress-indicator';
        cardProgress.textContent = `${currentCardIndex + 1}/${currentData.length}`;
        
        // Card content area (scrollable)
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';
        cardContent.innerHTML = `
            <h3 class="card-title">${data.title}</h3>
            <div class="card-text">${data.content}</div>
        `;
        
        // Card footer
        const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';
        cardFooter.innerHTML = `<span>Source: ${data.source}</span>`;
        
        // Construct the card
        card.appendChild(cardHeader);
        card.appendChild(cardContent);
        card.appendChild(cardFooter);
        card.appendChild(swipeLeftOverlay);
        card.appendChild(swipeRightOverlay);
        card.appendChild(cardProgress);
        
        return card;
    }
    
    // Get icon based on category
    function getCategoryIcon(category) {
        const iconMap = {
            "Models of Disability": "balance-scale",
            "Visual Disabilities": "eye",
            "Auditory Disabilities": "assistive-listening-systems",
            "Deaf-Blindness": "hands",
            "Speech and Language Disabilities": "comment",
            "Mobility, Flexibility, and Body Structure Disabilities": "wheelchair",
            "Cognitive Disabilities": "brain",
            "Seizure Disabilities": "bolt",
            "Psychological Disabilities": "head-side-brain",
            "Multiple/Complex Disabilities": "layer-group"
        };
        
        return iconMap[category] || "info-circle";
    }

    // Initialize Hammer.js for swipe gestures (desktop only)
    function initHammer() {
        if (hammerManager) {
            hammerManager.destroy();
        }
        
        if (!currentCard) return;
        
        hammerManager = new Hammer.Manager(currentCard);
        
        // Add recognizers
        const swipe = new Hammer.Swipe();
        const pan = new Hammer.Pan({ 
            threshold: 0, 
            direction: Hammer.DIRECTION_HORIZONTAL 
        });
        
        hammerManager.add(pan);
        hammerManager.add(swipe).recognizeWith(pan);
        
        // Handle pan event
        hammerManager.on('pan', function(e) {
            const moveX = e.deltaX;
            const opacity = Math.min(Math.abs(moveX) / 200, 1);
            const rotate = moveX * 0.1;
            
            currentCard.style.transform = `translateX(${moveX}px) rotate(${rotate}deg)`;
            
            // Show appropriate overlay
            if (moveX > 0) {
                currentCard.querySelector('.swipe-right').style.opacity = opacity;
                currentCard.querySelector('.swipe-left').style.opacity = 0;
            } else {
                currentCard.querySelector('.swipe-left').style.opacity = opacity;
                currentCard.querySelector('.swipe-right').style.opacity = 0;
            }
        });
        
        // Handle swipe event
        hammerManager.on('swiperight swipeleft', function(e) {
            if (e.type === 'swiperight') {
                swipeRight();
            } else {
                swipeLeft();
            }
        });
        
        // Handle pan end
        hammerManager.on('panend', function(e) {
            const moveX = e.deltaX;
            const threshold = 150;
            
            // Reset overlays
            currentCard.querySelector('.swipe-right').style.opacity = 0;
            currentCard.querySelector('.swipe-left').style.opacity = 0;
            
            // Check if swipe was strong enough
            if (moveX > threshold) {
                swipeRight();
            } else if (moveX < -threshold) {
                swipeLeft();
            } else {
                // Reset card position
                currentCard.style.transform = '';
            }
        });
    }

    // Swipe card left (need to study)
    function swipeLeft() {
        if (!currentCard) return;
        
        const cardId = parseInt(currentCard.dataset.id);
        
        // Add to study cards if not already there
        if (!studyCards.includes(cardId)) {
            studyCards.push(cardId);
            
            // Remove from know cards if it was there
            const knowIndex = knowCards.indexOf(cardId);
            if (knowIndex !== -1) {
                knowCards.splice(knowIndex, 1);
            }
        }
        
        // Update counters
        updateCounters();
        
        // Add animation class
        currentCard.classList.add('swiped-left');
        
        // Visual feedback
        studyStat.classList.add('pulse');
        setTimeout(() => {
            studyStat.classList.remove('pulse');
        }, 500);
        
        goToNextCard();
    }

    // Swipe card right (know)
    function swipeRight() {
        if (!currentCard) return;
        
        const cardId = parseInt(currentCard.dataset.id);
        
        // Add to know cards if not already there
        if (!knowCards.includes(cardId)) {
            knowCards.push(cardId);
            
            // Remove from study cards if it was there
            const studyIndex = studyCards.indexOf(cardId);
            if (studyIndex !== -1) {
                studyCards.splice(studyIndex, 1);
            }
        }
        
        // Update counters
        updateCounters();
        
        // Add animation class
        currentCard.classList.add('swiped-right');
        
        // Visual feedback
        knowStat.classList.add('pulse');
        setTimeout(() => {
            knowStat.classList.remove('pulse');
        }, 500);
        
        goToNextCard();
    }
    
    // Update counters
    function updateCounters() {
        // Update counter elements
        knowCountElement.textContent = knowCards.length;
        studyCountElement.textContent = studyCards.length;
        tabKnowCountElement.textContent = knowCards.length;
        tabStudyCountElement.textContent = studyCards.length;
        
        // Save state
        saveState();
    }

    // Move to the next card
    function goToNextCard() {
        setTimeout(() => {
            if (currentCard) {
                currentCard.remove();
            }
            
            currentCardIndex++;
            
            // Check if there are more cards
            if (currentCardIndex < cards.length) {
                currentCard = cards[currentCardIndex];
                currentCard.style.transform = '';
                currentCard.style.opacity = '1';
                currentCard.style.zIndex = 100;
                
                // Update card progress indicator
                currentCard.querySelector('.card-progress-indicator').textContent = `${currentCardIndex + 1}/${currentData.length}`;
                
                // Adjust next visible card
                if (currentCardIndex + 1 < cards.length) {
                    cards[currentCardIndex + 1].style.transform = 'scale(0.95) translateY(10px)';
                    cards[currentCardIndex + 1].style.opacity = '0.7';
                }
                
                // Initialize hammer on new current card, but only on desktop
                if (!isMobile) {
                    initHammer();
                }
                
                // Update progress
                currentCardElement.textContent = currentCardIndex + 1;
                updateProgress();
            } else {
                // No more cards, game is complete
                currentCard = null;
                showGameComplete();
            }
        }, 300);
    }

    // Update progress bar
    function updateProgress() {
        const progress = (currentCardIndex / currentData.length) * 100;
        progressFill.style.width = `${progress}%`;
    }

    // Show game complete screen
    function showGameComplete() {
        finalKnowCountElement.textContent = knowCards.length;
        finalStudyCountElement.textContent = studyCards.length;
        gameCompleteElement.classList.add('active');
    }
    
    // Render lists of know and study cards
    function renderLists() {
        // Clear lists
        allList.innerHTML = '';
        knowList.innerHTML = '';
        studyList.innerHTML = '';
        
        // Filter by search term if provided
        const searchTerm = searchInput.value.toLowerCase();
        
        // Render all cards
        cardData.forEach(card => {
            if (searchTerm && !(card.title.toLowerCase().includes(searchTerm) || 
                               card.content.toLowerCase().includes(searchTerm) ||
                               card.category.toLowerCase().includes(searchTerm))) {
                return;
            }
            
            const isKnown = knowCards.includes(card.id);
            const isToStudy = studyCards.includes(card.id);
            const status = isKnown ? 'know' : (isToStudy ? 'study' : '');
            
            // Create list item
            const listItem = createListItem(card, status);
            
            // Add to appropriate lists
            allList.appendChild(listItem.cloneNode(true));
            
            if (isKnown) {
                knowList.appendChild(listItem.cloneNode(true));
            }
            
            if (isToStudy) {
                studyList.appendChild(listItem.cloneNode(true));
            }
        });
        
        // Add empty state if needed
        if (allList.children.length === 0) {
            allList.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><p>No matching cards found</p></div>`;
        }
        
        if (knowList.children.length === 0) {
            knowList.innerHTML = `<div class="empty-state"><i class="fas fa-check-circle"></i><p>No cards marked as known yet</p></div>`;
        }
        
        if (studyList.children.length === 0) {
            studyList.innerHTML = `<div class="empty-state"><i class="fas fa-book"></i><p>No cards marked for study yet</p></div>`;
        }
        
        // Add event listeners to list items
        document.querySelectorAll('.list-item').forEach(item => {
            item.addEventListener('click', function() {
                const cardId = parseInt(this.dataset.id);
                showCardDetail(cardId);
            });
        });
    }
    
    // Create a list item
    function createListItem(card, status) {
        const listItem = document.createElement('div');
        listItem.className = 'list-item';
        listItem.dataset.id = card.id;
        
        // Determine icon class based on status
        const iconClass = status === 'know' ? 'know' : (status === 'study' ? 'study' : '');
        
        // Get category icon
        const categoryIcon = getCategoryIcon(card.category);
        
        listItem.innerHTML = `
            <div class="list-item-icon ${iconClass}">
                <i class="fas fa-${status === 'know' ? 'check' : (status === 'study' ? 'book' : categoryIcon)}"></i>
            </div>
            <div class="list-item-content">
                <div class="list-item-title">${card.title}</div>
                <div class="list-item-category">${card.category}</div>
            </div>
            <button class="list-item-action" aria-label="View Details">
                <i class="fas fa-chevron-right"></i>
            </button>
        `;
        
        return listItem;
    }
    
    // Show card detail in modal
    function showCardDetail(cardId) {
        const card = cardData.find(card => card.id === cardId);
        if (!card) return;
        
        currentModalCardId = cardId;
        
        // Populate modal
        modalCardTitle.textContent = card.title;
        modalCardContent.innerHTML = `
            <div class="card-tag" style="display: inline-block; margin-bottom: 1rem;">
                <i class="fas fa-${card.icon || getCategoryIcon(card.category)}"></i> ${card.category}
            </div>
            <div class="card-text">${card.content}</div>
            <div style="margin-top: 1rem; font-size: 0.8rem; color: #666;">
                Source: ${card.source}
            </div>
        `;
        
        // Update button text based on card status
        const isKnown = knowCards.includes(cardId);
        modalMarkButton.textContent = isKnown ? 'Mark as Need to Study' : 'Mark as Known';
        modalMarkButton.className = isKnown ? 'secondary-button' : 'primary-button';
        modalMarkButton.innerHTML = isKnown ? 
            '<i class="fas fa-book"></i> Mark as Need to Study' : 
            '<i class="fas fa-check"></i> Mark as Known';
        
        // Show modal
        cardDetailModal.classList.add('active');
    }
    
    // Toggle card status
    function toggleCardStatus(cardId) {
        if (knowCards.includes(cardId)) {
            // Move from known to study
            const index = knowCards.indexOf(cardId);
            knowCards.splice(index, 1);
            studyCards.push(cardId);
        } else if (studyCards.includes(cardId)) {
            // Move from study to known
            const index = studyCards.indexOf(cardId);
            studyCards.splice(index, 1);
            knowCards.push(cardId);
        } else {
            // Not in either list, add to known
            knowCards.push(cardId);
        }
        
        // Update counters
        updateCounters();
        
        // Update lists
        renderLists();
    }
    
    // Reset card position (fail-safe)
    function resetCardPosition() {
        if (currentCard) {
            // Reset card position and animations
            currentCard.style.transform = '';
            currentCard.querySelector('.swipe-right').style.opacity = 0;
            currentCard.querySelector('.swipe-left').style.opacity = 0;
        }
    }

    // Load saved state from localStorage
    function loadState() {
        try {
            const savedState = localStorage.getItem('accessibilitySwiperState');
            if (savedState) {
                const state = JSON.parse(savedState);
                knowCards = state.knowCards || [];
                studyCards = state.studyCards || [];
                
                // Apply settings
                if (state.highContrast) {
                    highContrastToggle.checked = true;
                    document.body.classList.add('high-contrast');
                }
                
                if (state.largeText) {
                    largeTextToggle.checked = true;
                    document.body.classList.add('larger-text');
                }
                
                if (state.reducedMotion) {
                    reducedMotionToggle.checked = true;
                    document.body.classList.add('reduced-motion');
                }
                
                // Update counters
                updateCounters();
            }
        } catch (e) {
            console.error('Error loading saved state:', e);
        }
    }

    // Save state to localStorage
    function saveState() {
        const state = {
            knowCards,
            studyCards,
            highContrast: highContrastToggle.checked,
            largeText: largeTextToggle.checked,
            reducedMotion: reducedMotionToggle.checked
        };
        localStorage.setItem('accessibilitySwiperState', JSON.stringify(state));
    }
    
    // Export data to JSON file
    function exportData() {
        const data = {
            knowCards: knowCards.map(id => {
                const card = cardData.find(c => c.id === id);
                return { id: card.id, title: card.title, category: card.category };
            }),
            studyCards: studyCards.map(id => {
                const card = cardData.find(c => c.id === id);
                return { id: card.id, title: card.title, category: card.category };
            }),
            stats: {
                total: cardData.length,
                known: knowCards.length,
                toStudy: studyCards.length
            },
            exportDate: new Date().toISOString()
        };
        
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'accessibility-swiper-progress.json';
        a.click();
        
        URL.revokeObjectURL(url);
    }

    // Event listeners
    swipeLeftButton.addEventListener('click', swipeLeft);
    swipeRightButton.addEventListener('click', swipeRight);
    restartButton.addEventListener('click', () => initGame(false));
    reviewModeButton.addEventListener('click', () => initGame(true));
    reviewStudyButton.addEventListener('click', () => {
        initGame(true);
        listPanel.classList.remove('open');
    });

    // Settings panel
    settingsButton.addEventListener('click', () => {
        settingsPanel.classList.add('open');
    });
    
    settingsClose.addEventListener('click', () => {
        settingsPanel.classList.remove('open');
    });
    
    // List panel
    listButton.addEventListener('click', () => {
        renderLists(); // Make sure lists are up to date
        listPanel.classList.add('open');
    });
    
    listClose.addEventListener('click', () => {
        listPanel.classList.remove('open');
    });
    
    // Modal events
    modalClose.addEventListener('click', () => {
        cardDetailModal.classList.remove('active');
    });
    
    modalCloseButton.addEventListener('click', () => {
        cardDetailModal.classList.remove('active');
    });
    
    modalMarkButton.addEventListener('click', () => {
        if (currentModalCardId) {
            toggleCardStatus(currentModalCardId);
            showCardDetail(currentModalCardId); // Refresh modal content
        }
    });
    
    // Tab navigation
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Search input
    searchInput.addEventListener('input', renderLists);
    
    // Accessibility toggles
    highContrastToggle.addEventListener('change', () => {
        if (highContrastToggle.checked) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
        saveState();
    });
    
    largeTextToggle.addEventListener('change', () => {
        if (largeTextToggle.checked) {
            document.body.classList.add('larger-text');
        } else {
            document.body.classList.remove('larger-text');
        }
        saveState();
    });
    
    reducedMotionToggle.addEventListener('change', () => {
        if (reducedMotionToggle.checked) {
            document.body.classList.add('reduced-motion');
        } else {
            document.body.classList.remove('reduced-motion');
        }
        saveState();
    });
    
    resetProgressButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset your progress? This will clear all your "known" and "to study" cards.')) {
            knowCards = [];
            studyCards = [];
            updateCounters();
            initGame(false);
            settingsPanel.classList.remove('open');
        }
    });
    
    exportDataButton.addEventListener('click', exportData);
    
    // Close instructions
    closeInstructions.addEventListener('click', () => {
        instructions.style.display = 'none';
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Only process if a card is showing and no modal is open
        if (currentCard && !cardDetailModal.classList.contains('active') && 
            !settingsPanel.classList.contains('open') && 
            !listPanel.classList.contains('open')) {
            
            if (e.key === 'ArrowLeft') {
                swipeLeft();
            } else if (e.key === 'ArrowRight') {
                swipeRight();
            }
        }
        
        // Close modals with Escape key
        if (e.key === 'Escape') {
            cardDetailModal.classList.remove('active');
            settingsPanel.classList.remove('open');
            listPanel.classList.remove('open');
        }
    });
    
    // Double-tap fail-safe
    document.addEventListener('dblclick', function() {
        resetCardPosition();
    });
    
    // Also add touch-based double-tap detection for mobile
    if (isMobile) {
        let lastTap = 0;
        document.addEventListener('touchend', function(e) {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < 500 && tapLength > 0) {
                // Double tap detected
                resetCardPosition();
                e.preventDefault();
            }
            
            lastTap = currentTime;
        });
    }
    
    // Stats click to open lists
    knowStat.addEventListener('click', () => {
        renderLists();
        listPanel.classList.add('open');
        // Switch to know tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        document.querySelector('[data-tab="know"]').classList.add('active');
        document.getElementById('know-tab').classList.add('active');
    });
    
    studyStat.addEventListener('click', () => {
        renderLists();
        listPanel.classList.add('open');
        // Switch to study tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        document.querySelector('[data-tab="study"]').classList.add('active');
        document.getElementById('study-tab').classList.add('active');
    });

    // Close modals when clicking outside
    cardDetailModal.addEventListener('click', (e) => {
        if (e.target === cardDetailModal) {
            cardDetailModal.classList.remove('active');
        }
    });

    // Save state when leaving the page
    window.addEventListener('beforeunload', saveState);

    // Check for saved state and initialize game
    loadState();
    
    // Initialize the game
    initGame();
});
