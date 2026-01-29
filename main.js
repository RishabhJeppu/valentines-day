import './style.css'

// Global variables
let currentPage = 1;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializePageNavigation();
  initializeFinalButton();
  startTypewriterEffect();
});

/**
 * Page Navigation System
 */
function initializePageNavigation() {
  const nextButtons = document.querySelectorAll('.next-btn');

  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      const nextPageId = button.getAttribute('data-next');
      transitionToPage(nextPageId);
    });
  });
}

function transitionToPage(pageId) {
  const currentPageElement = document.querySelector('.page.active');
  const nextPageElement = document.getElementById(pageId);

  if (currentPageElement && nextPageElement) {
    // Remove active class from current page
    currentPageElement.classList.remove('active');

    // Add active class to next page after short delay
    setTimeout(() => {
      nextPageElement.classList.add('active');

      // Trigger special effects based on page
      if (pageId === 'page3') {
        activateScreenShake();
      }

      if (pageId === 'page4') {
        activateLightningEffect();
      }

      if (pageId === 'page7') {
        startTypewriterEffect2();
      }

      if (pageId === 'page8') {
        createSparkles();
      }
    }, 300);
  }
}

/**
 * Typewriter Effects
 */
function startTypewriterEffect() {
  const typewriterElement = document.querySelector('.typewriter-text');
  if (typewriterElement) {
    const text = typewriterElement.getAttribute('data-text');
    typewriterElement.textContent = '';

    let charIndex = 0;
    const typingSpeed = 80;

    function typeCharacter() {
      if (charIndex < text.length) {
        typewriterElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeCharacter, typingSpeed);
      }
    }

    setTimeout(typeCharacter, 500);
  }
}

function startTypewriterEffect2() {
  const typewriterElement = document.querySelector('.typewriter-text-2');
  if (typewriterElement) {
    const text = typewriterElement.getAttribute('data-text');
    typewriterElement.textContent = '';

    let charIndex = 0;
    const typingSpeed = 100;

    function typeCharacter() {
      if (charIndex < text.length) {
        typewriterElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeCharacter, typingSpeed);
      }
    }

    setTimeout(typeCharacter, 1000);
  }
}

/**
 * Final Proposal Button
 */
function initializeFinalButton() {
  const finalButton = document.querySelector('.final-btn');

  if (finalButton) {
    finalButton.addEventListener('click', () => {
      showFinalCelebration();
      createConfetti();
      createHeartsAnimation();
    });
  }
}

function showFinalCelebration() {
  const finalResponse = document.querySelector('.final-response');
  const finalCelebration = document.querySelector('.final-celebration');
  const finalButton = document.querySelector('.final-btn');

  const messages = [
    'Forever starts today! 💕',
    'To a lifetime of golgappa and love! 🌸',
    'Best decision ever made! 💖',
    'You and me, always! ❤️',
    'Our story begins now! 💫'
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  finalCelebration.textContent = randomMessage;

  finalResponse.classList.remove('hidden');

  setTimeout(() => {
    finalResponse.classList.add('show');
  }, 100);

  if (finalButton) {
    finalButton.style.opacity = '0.3';
    finalButton.style.pointerEvents = 'none';
  }
}

/**
 * Hearts Animation
 */
function createHeartsAnimation() {
  const heartsContainer = document.querySelector('.hearts-container');
  const page8Container = document.querySelector('#page8');

  // Create hearts container if not on page 8
  const container = page8Container && page8Container.classList.contains('active') 
    ? page8Container 
    : heartsContainer;

  if (!container) return;

  const heartCount = 30;

  for (let i = 0; i < heartCount; i++) {
    setTimeout(() => {
      createHeart(container);
    }, i * 150);
  }
}

function createHeart(container) {
  const heart = document.createElement('div');
  heart.innerHTML = '💖';
  heart.style.position = 'absolute';
  heart.style.fontSize = `${Math.random() * 30 + 20}px`;
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = '-50px';
  heart.style.opacity = '0';
  heart.style.transition = 'all 3s ease-out';
  heart.style.zIndex = '100';
  heart.style.pointerEvents = 'none';

  container.appendChild(heart);

  setTimeout(() => {
    heart.style.bottom = '110vh';
    heart.style.opacity = '1';
    heart.style.transform = `translateX(${(Math.random() - 0.5) * 200}px) rotate(${Math.random() * 360}deg)`;
  }, 50);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

/**
 * Confetti Animation
 */
function createConfetti() {
  const confettiContainer = document.querySelector('.confetti-container');

  if (!confettiContainer) return;

  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      createConfettiPiece(confettiContainer);
    }, i * 100);
  }
}

function createConfettiPiece(container) {
  const confetti = document.createElement('div');
  const confettiEmojis = ['🎉', '🎊', '💕', '🌸', '💖', '✨', '⭐', '🌟'];
  const emoji = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];

  confetti.innerHTML = emoji;
  confetti.style.position = 'absolute';
  confetti.style.fontSize = `${Math.random() * 30 + 20}px`;
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.bottom = '-50px';
  confetti.style.opacity = '0';
  confetti.style.transition = 'all 3s ease-out';
  confetti.style.pointerEvents = 'none';
  confetti.style.zIndex = '50';

  container.appendChild(confetti);

  setTimeout(() => {
    confetti.style.bottom = '110vh';
    confetti.style.opacity = '1';
    confetti.style.transform = `translateX(${(Math.random() - 0.5) * 300}px) rotate(${Math.random() * 720}deg) scale(${Math.random() * 0.5 + 0.8})`;
  }, 50);

  setTimeout(() => {
    confetti.remove();
  }, 3000);
}

/**
 * Sparkles Animation
 */
function createSparkles() {
  const sparklesContainer = document.querySelector('.sparkles-container');
  
  if (!sparklesContainer) return;

  // Sparkles are handled by CSS, but we can add dynamic ones
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createSparkle(sparklesContainer);
    }, i * 200);
  }
}

function createSparkle(container) {
  const sparkle = document.createElement('div');
  sparkle.innerHTML = '✨';
  sparkle.style.position = 'absolute';
  sparkle.style.fontSize = `${Math.random() * 20 + 15}px`;
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 100}%`;
  sparkle.style.opacity = '0';
  sparkle.style.transition = 'all 2s ease-out';
  sparkle.style.pointerEvents = 'none';

  container.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.opacity = '1';
    sparkle.style.transform = `scale(1.5) rotate(${Math.random() * 360}deg)`;
  }, 50);

  setTimeout(() => {
    sparkle.style.opacity = '0';
  }, 1500);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

/**
 * Screen Shake Effect (Page 3)
 */
function activateScreenShake() {
  const page = document.getElementById('page3');
  if (page) {
    const content = page.querySelector('.content');
    if (content) {
      content.style.animation = 'shake 0.5s cubic-bezier(.36,.07,.19,.97) 3';

      setTimeout(() => {
        content.style.animation = '';
      }, 1500);
    }
  }
}

/**
 * Lightning Effect (Page 4)
 */
function activateLightningEffect() {
  const lightning = document.querySelector('#page4 .lightning-effect');
  if (lightning) {
    lightning.style.animation = 'lightning 5s 2';
    
    setTimeout(() => {
      lightning.style.animation = '';
    }, 10000);
  }
}

/**
 * Keyboard Navigation (Optional Enhancement)
 */
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'Enter') {
    const activeNextBtn = document.querySelector('.page.active .next-btn');
    if (activeNextBtn) {
      activeNextBtn.click();
    }
  }
});

/**
 * Prevent accidental page reload
 */
window.addEventListener('beforeunload', (e) => {
  const activePage = document.querySelector('.page.active');
  if (activePage && activePage.id !== 'page1') {
    e.preventDefault();
    e.returnValue = '';
    return '';
  }
});

console.log('Valentine\'s Day Proposal - Loaded Successfully! 💕');