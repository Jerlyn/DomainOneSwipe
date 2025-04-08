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
    {
        id: 2,
        category: "Models of Disability",
        icon: "users",
        title: "Social Model of Disability",
        content: "The social model of disability says that the <strong>way society is conceptualized causes disability</strong>, rather than a person's impairment or difference. It focuses on removing barriers that restrict life choices for people with disabilities. When barriers are removed, people with disability can be independent and equal in society.",
        source: "CPACC Domain One"
    },
    {
        id: 3,
        category: "Models of Disability",
        icon: "sitemap",
        title: "Biopsychosocial Model",
        content: "The Biopsychosocial Model attempts to <strong>account for both the social and biomedical models</strong> of disability. It suggests that to understand a person's medical condition, both biological factors and psychosocial factors need to be considered. The ICF by the WHO is derived from this model.",
        source: "CPACC Domain One"
    },
    {
        id: 4,
        category: "Models of Disability",
        icon: "chart-line",
        title: "Economic Model",
        content: "The economic model of disability defines disability by a person's <strong>inability to participate in work</strong>. It assesses the degree to which impairment affects productivity and economic consequences for the individual, employer, and state. This model is used by policymakers for determining disability benefits.",
        source: "CPACC Domain One"
    },
    {
        id: 5,
        category: "Models of Disability",
        icon: "tools",
        title: "Functional Solutions Model",
        content: "The functional solutions model <strong>identifies the limitations due to disability</strong> with the intent to create solutions to overcome those limitations. The primary task is to reduce the impact of functional limitations through technological or methodological innovation.",
        source: "CPACC Domain One"
    },
    {
        id: 6,
        category: "Models of Disability",
        icon: "users",
        title: "Social Identity/Cultural Affiliation Model",
        content: "This model refers to <strong>deriving personal identity from membership in a group</strong> of like-minded individuals. It's most evident among people who are deaf. Deaf culture and identity derive strength from being part of a close-knit linguistic minority.",
        source: "CPACC Domain One"
    },
    {
        id: 7,
        category: "Models of Disability",
        icon: "hands-helping",
        title: "Charity Model",
        content: "The charity model regards people with disabilities as <strong>unfortunate and in need of outside help</strong>. People providing charity are viewed as benevolent. It's related to the medical model, treating disability as an individual problem, and to the economic model in terms of economic consequences.",
        source: "CPACC Domain One"
    },
    {
        id: 8,
        category: "Visual Disabilities",
        icon: "eye",
        title: "Blindness",
        content: "Blindness is a sensory disability involving <strong>some vision loss, nearly complete vision loss, and complete vision loss</strong>. Some people are completely blind, others can perceive light versus dark or general shapes but cannot read text or recognize people by sight.",
        source: "CPACC Domain One"
    },
    {
        id: 9,
        category: "Visual Disabilities",
        icon: "palette",
        title: "Color Vision Deficiency",
        content: "Color vision deficiency is a sensory disability where a person <strong>may not be able to distinguish certain color combinations</strong>. The most common form affects a person's ability to distinguish reds and greens. Red-green color vision defects affect 1 in 12 males and 1 in 200 females.",
        source: "CPACC Domain One"
    },
    {
        id: 10,
        category: "Visual Disabilities",
        icon: "low-vision",
        title: "Low Vision",
        content: "Low vision is <strong>uncorrectable vision loss that interferes with daily activities</strong>. It's better defined in terms of function rather than numerical test results. A person with low vision will typically need magnification to read or discern details and may benefit from high contrast text and graphics.",
        source: "CPACC Domain One"
    },
    {
        id: 11,
        category: "Auditory Disabilities",
        icon: "deaf",
        title: "Deafness",
        content: "Deafness is the <strong>total or near total loss of hearing</strong>. A person who is deaf has difficulty with sounds, including audio in multimedia. The first language of people born deaf is often sign language, and they may feel less comfortable reading text as a second language.",
        source: "CPACC Domain One"
    },
    {
        id: 12,
        category: "Auditory Disabilities",
        icon: "assistive-listening-systems",
        title: "Hard of Hearing",
        content: "Hard of hearing refers to people with <strong>hearing loss ranging from mild to severe</strong> who still have some useful hearing. People who are hard of hearing may communicate through sign language and/or spoken language, with or without amplification. Most can use the phone and hearing aids.",
        source: "CPACC Domain One"
    },
    {
        id: 13,
        category: "Auditory Disabilities",
        icon: "brain",
        title: "Central Auditory Processing Disorder",
        content: "Auditory processing disorder is <strong>difficulty hearing and understanding speech despite normal hearing sensitivity</strong>. It's not an inability to hear, but an inability to interpret, organize, or analyze what's heard. The hearing pathway works well but parts of the brain do not.",
        source: "CPACC Domain One"
    },
    {
        id: 14,
        category: "Deaf-Blindness",
        icon: "hands",
        title: "Deaf-Blindness Overview",
        content: "Deaf-Blindness is a sensory disability including <strong>both deafness and blindness</strong>. Most people who are Deaf-Blind are not completely deaf nor completely blind. They experience both disabilities with the added complexity that meaningful sensory input is limited to touch, smell, and taste.",
        source: "CPACC Domain One"
    },
    {
        id: 15,
        category: "Speech and Language Disabilities",
        icon: "comment",
        title: "Speech Sound Disorders",
        content: "Speech sound disorders range from <strong>mild slurred speech to complete inability to speak</strong>. The ability to physically speak may be unrelated to language capabilities; a person may read, write, and understand language even if their mouth structure or neuromuscular connections prevent speaking.",
        source: "CPACC Domain One"
    },
    {
        id: 16,
        category: "Speech and Language Disabilities",
        icon: "comments",
        title: "Organic Speech Sound Disorders",
        content: "Organic speech sound disorders result from <strong>motor/neurological disorders</strong>, including apraxia of speech (difficulty planning speech movements), dysarthria (difficulty controlling speech muscles), structural deficiencies like cleft palate, and sensory disorders like hearing loss.",
        source: "CPACC Domain One"
    },
    {
        id: 17,
        category: "Speech and Language Disabilities",
        icon: "comment-dots",
        title: "Functional Speech Sound Disorders",
        content: "Functional speech sound disorders <strong>do not stem from acquired or developmental disorders</strong> and have no known cause. They typically include errors in articulation (clear and distinct sounds) and phonology (sound patterns).",
        source: "CPACC Domain One"
    },
    {
        id: 18,
        category: "Speech and Language Disabilities",
        icon: "volume-mute",
        title: "No Speech (Mutism)",
        content: "Having no speech, or mutism, is an <strong>inability to speak</strong>. It can be caused by brain damage, speech muscle issues, emotional/psychological reasons, or a combination. Neurogenic mutism comes from brain injury, while psychogenic mutism has psychological rather than neurological causes.",
        source: "CPACC Domain One"
    },
    {
        id: 19,
        category: "Speech and Language Disabilities",
        icon: "language",
        title: "Aphasia",
        content: "Aphasia is a <strong>language disorder from neurological damage</strong> affecting all language use, not just speech. It impacts production or comprehension of speech and ability to read or write. A person with aphasia may not recognize words, understand what is said, speak, or form sentences properly.",
        source: "CPACC Domain One"
    },
    {
        id: 20,
        category: "Mobility, Flexibility, and Body Structure Disabilities",
        icon: "hand-paper",
        title: "Manual Dexterity/Fine Motor Control",
        content: "Fine motor skills are <strong>intricate hand and wrist movements</strong> needed to manipulate objects, produce neat handwriting, and dress independently. Examples of difficulties include trouble tying shoelaces, using keyboards, picking up small objects, or using both hands simultaneously.",
        source: "CPACC Domain One"
    },
    {
        id: 21,
        category: "Mobility, Flexibility, and Body Structure Disabilities",
        icon: "walking",
        title: "Ambulation",
        content: "Ambulation is the <strong>ability to walk from place to place</strong> independently with or without an assistive device. A person's ability to walk may be impacted by congenital conditions, disease, or injury, such as cerebral palsy, neuromuscular disorders, amputation, arthritis, and back injuries.",
        source: "CPACC Domain One"
    },
    {
        id: 22,
        category: "Mobility, Flexibility, and Body Structure Disabilities",
        icon: "tired",
        title: "Muscle Fatigue",
        content: "Muscle fatigue is a common non-specific symptom associated with many health conditions. It presents as an <strong>overwhelming sense of tiredness, lack of energy, or exhaustion</strong>, with difficulty performing voluntary tasks. Symptoms include soreness, pain, shortness of breath, and muscle trembling.",
        source: "CPACC Domain One"
    },
    {
        id: 23,
        category: "Mobility, Flexibility, and Body Structure Disabilities",
        icon: "child",
        title: "Body Size or Shape",
        content: "Body size or shape disabilities are caused by <strong>disorders affecting a person's stature, proportions, or shape</strong>. Examples include acromegaly, dwarfism, rheumatoid arthritis, and obesity. Associated conditions often include orthopedic issues, muscle weakness, sensory loss, and cardiopulmonary disorders.",
        source: "CPACC Domain One"
    },
    {
        id: 24,
        category: "Cognitive Disabilities",
        icon: "brain",
        title: "Intellectual Disabilities",
        content: "Intellectual disability involves <strong>significant limitations in intellectual functioning</strong> (reasoning, learning, problem solving) and adaptive behavior covering everyday social and practical skills. Three main criteria: deficits in intellectual functions (typically IQ below 70-75), impairments in adaptive behavior, and manifestation during developmental years.",
        source: "CPACC Domain One"
    },
    {
        id: 25,
        category: "Cognitive Disabilities",
        icon: "book-reader",
        title: "Reading and Dyslexia",
        content: "Dyslexia affects a person's <strong>ability to read despite normal intelligence</strong>. Characteristics include difficulty with phonological processing, spelling, and rapid visual verbal responding. Reading disabilities may include inability to perceive text or process the meaning of words, phrases, and ideas.",
        source: "CPACC Domain One"
    },
    {
        id: 26,
        category: "Cognitive Disabilities",
        icon: "calculator",
        title: "Math and Computation",
        content: "Math and computational disabilities impact a person's <strong>ability to learn and communicate math</strong>. Dyscalculia involves inability to understand arithmetic and calculation, complicated by issues like dysgraphia. Signs include trouble with quantities, counting money, estimating time, and understanding math logic.",
        source: "CPACC Domain One"
    },
    {
        id: 27,
        category: "Cognitive Disabilities",
        icon: "running",
        title: "Attention Deficit Hyperactivity Disorder",
        content: "ADHD involves <strong>inattention/distraction symptoms</strong> (diminished attention span, getting distracted, difficulty organizing tasks) and/or <strong>hyperactive/impulsive symptoms</strong> (restlessness, difficulty remaining seated, fidgeting, interrupting conversations). Not all persons with ADHD have symptoms in both categories.",
        source: "CPACC Domain One"
    },
    {
        id: 28,
        category: "Cognitive Disabilities",
        icon: "puzzle-piece",
        title: "Autism Spectrum Disorders",
        content: "Autism spectrum disorders are complex brain development disorders with <strong>difficulties in social interaction and communication</strong>, plus restricted and repetitive activities. Characteristics include sensory sensitivities, difficulty with verbal/non-verbal communication, and challenges in social interactions.",
        source: "CPACC Domain One"
    },
    {
        id: 29,
        category: "Cognitive Disabilities",
        icon: "people-arrows",
        title: "Non-Verbal Learning Disability",
        content: "Nonverbal Learning Disability is similar to Asperger Syndrome, with <strong>normal intelligence and language development</strong> but trouble with social skills, sensory input, and transitions. Signs include great vocabulary but poor abstract reasoning, physical awkwardness, poor social skills, and trouble with changes.",
        source: "CPACC Domain One"
    },
    {
        id: 30,
        category: "Seizure Disabilities",
        icon: "bolt",
        title: "General Seizure Disorders",
        content: "A seizure is a <strong>sudden, uncontrolled electrical disturbance in the brain</strong> causing changes in behavior, movements, feelings, or consciousness. Having two or more seizures or recurrent seizure tendency is epilepsy. Symptoms range from visual hallucinations and inability to speak to convulsions.",
        source: "CPACC Domain One"
    },
    {
        id: 31,
        category: "Seizure Disabilities",
        icon: "lightbulb",
        title: "Photosensitive Epilepsy",
        content: "Photosensitive epilepsy involves <strong>seizures triggered by flashing or flickering lights or patterns</strong>. Some have seizures only from these triggers, while others have seizures at other times too. Lights flashing between 16-25 times per second are most likely to trigger seizures.",
        source: "CPACC Domain One"
    },
    {
        id: 32,
        category: "Psychological Disabilities",
        icon: "exclamation-circle",
        title: "Anxiety Disorders",
        content: "Anxiety disorders involve more than temporary worry or fear. For people with anxiety disorders, <strong>anxiety doesn't go away and can worsen over time</strong>, interfering with daily activities. Types include generalized anxiety disorder, panic disorder, social anxiety disorder, and phobias.",
        source: "CPACC Domain One"
    },
    {
        id: 33,
        category: "Psychological Disabilities",
        icon: "chart-bar",
        title: "Mood Disorders",
        content: "Mood disorders affect a person's <strong>emotional state</strong>. Emotions may fluctuate between extreme sadness and happiness, or there may be prolonged periods of sadness. Common mood disorders include depression, bipolar disorder, seasonal affective disorder, and self-harm.",
        source: "CPACC Domain One"
    },
    {
        id: 34,
        category: "Psychological Disabilities",
        icon: "theater-masks",
        title: "Psychotic Disorders",
        content: "Psychotic disorders affect a person's <strong>thinking and perceptions</strong>, causing loss of touch with reality. One type is schizophrenia. Main symptoms are delusions (believing things that aren't true) and hallucinations (perceiving things that aren't there). People may also have cognitive impairments.",
        source: "CPACC Domain One"
    },
    {
        id: 35,
        category: "Multiple/Complex Disabilities",
        icon: "layer-group",
        title: "Multiple/Complex Disabilities Overview",
        content: "Multiple or complex disabilities occur when <strong>more than one disability is present simultaneously</strong>. They can include physical, mental, or combined types of disabilities. People with multiple disabilities typically show deficits in intellectual functioning, adaptive skills, motor skills, sensory functioning, and communication.",
        source: "CPACC Domain One"
    }
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