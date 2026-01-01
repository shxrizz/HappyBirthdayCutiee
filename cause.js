 // Reasons database
 const reasons = [
    { 
        text: "OHHH BABEEE IT'S FINALLYY YOURR BIRTHDAYYY... okay so yes i copied your idea💔😥,becuz i couldn't think of anything else hat i could make for you online. I was about to make a happy birthday box thingy but uff.. anywayss you remember last time I made a cat edit for you?😹 it was kinda funny and idk why did I even make that beacuse I wouldn't normally make it, ig I had aa crush you from back then?idk who knows... Well today is your speciall dayy!!! 💖", 
        emoji: "🌟",
        gif: "gif1.gif"
    },
    { 
        text: "May your day be filled with love, laughter, and endless joy!!! you see this bear in the background? I WANNA DO THE SAME THINGG TOO YOUUU TODAYYYY(I WISH I WAS THERE). Today, I want you to just relax and enjoy..When you get this, I might be on my trip and wouldn'tbe able to talk to you(I hate it swear to god)I really wanted to spend time with you... and you know what? we will!!. 🌸 ", 
        emoji: "💗",
        gif: "gif2.gif"
    },
    { 
        text: "Wishing you success, happiness, and everything your heart desires(you already got me tho hehehe). Even tho I can't see you, I just know it that you would be looking DAMN GORGEOUS today,anyways you always look damn gorgeous but today you would be looking EXTRAA CUTEEEEE. even tho aapke bangs ke saath jo hua🥀but fir bhi yaar tu cute hai and YOU ARE THE BESTESTTT MANASVIII. Mein ajeeb ajeeb si harkate karta hoon and you still with me makes me wonder tujhey mere mein kya dikh gaya. ✨ ", 
        emoji: "💕",
        gif: "gif1.gif"
    },
    { 
        text: "well, each day I have spent with you was just fabulous. Loving you makes me feel I am on heaven while I am still on Earth... Your voice is as pleasant as thr ripples of water fall, your smile as bright as all the stars combined, your face so beautiful that time itself might just stop to admire you, your heart as warm as the sunshine falling on the field of flowers at the dawn, your eyes like the gentle ocean waves that calms down anything, your hair as soft as the petal of roses, you are just magical darling, your very essence is of a fragnant flower, your lips are kissable tho(i got poetic right?...Stay the amazing my beautiful,cute,pretty girlfriend. Have the happiest year ahead! 🥳 ", 
        emoji: "🌟",
        gif: "gif2.gif"
    }
];

// State management
let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

// Create reason card with gif
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Friendship Memory">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "back.out"
    });

    return card;
}

// Display new reason
function displayNewReason() {
    if (isTransitioning) return;
    isTransitioning = true;

    if (currentReasonIndex < reasons.length) {
        const card = createReasonCard(reasons[currentReasonIndex]);
        reasonsContainer.appendChild(card);
        
        // Update counter
        reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${reasons.length}`;
        
        currentReasonIndex++;

        // Check if we should transform the button
        if (currentReasonIndex === reasons.length) {
            gsap.to(shuffleButton, {
                scale: 1.1,
                duration: 0.5,
                ease: "elastic.out",
                onComplete: () => {
                    shuffleButton.textContent = "Something more here💫";
                    shuffleButton.classList.add('story-mode');
                    shuffleButton.addEventListener('click', () => {
                        gsap.to('body', {
                            opacity: 0,
                            duration: 1,
                            onComplete: () => {
                                window.location.href = 'last.html'; // Replace with the actual URL of the next page
                            }
                        });
                    });
                }
            });
        }

        // Create floating elements
        createFloatingElement();
        
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    } else {
        // Handle navigation to new page or section
        window.location.href = "#storylane";
        // Or trigger your next page functionality
    }
}

// Initialize button click
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
    displayNewReason();
});

// Floating elements function (same as before)
function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = Math.random() * window.innerHeight + 'px';
    element.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.body.appendChild(element);

    gsap.to(element, {
        y: -500,
        duration: Math.random() * 10 + 10,
        opacity: 0,
        onComplete: () => element.remove()
    });
}

// Custom cursor (same as before)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2
    });
});

// Create initial floating elements
setInterval(createFloatingElement, 2000);
