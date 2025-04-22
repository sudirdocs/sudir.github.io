// Theme Toggle Functionality
const themeToggleButton = document.querySelector('.theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggleButton.textContent = '🌞'; // Change button to light mode
  } else {
    themeToggleButton.textContent = '🌙'; // Change button to dark mode
  }
});

// Scroll Color Change (for dynamic effects)
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const socialLinks = document.querySelectorAll('.socials a');

  socialLinks.forEach(link => {
    link.style.color = `rgb(${scrollPosition % 255}, ${255 - (scrollPosition % 255)}, 200)`;
  });
});

// Memory Game Logic (basic functionality)
const gameBoard = document.getElementById('game-board');
const gameCards = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
let selectedCards = [];
let matchedCards = [];

gameCards.sort(() => 0.5 - Math.random()).forEach(card => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.textContent = card;
  cardElement.addEventListener('click', () => handleCardClick(cardElement, card));
  gameBoard.appendChild(cardElement);
});

function handleCardClick(cardElement, card) {
  if (selectedCards.length < 2 && !matchedCards.includes(cardElement)) {
    cardElement.style.backgroundColor = 'lightgreen';
    selectedCards.push({ cardElement, card });
    
    if (selectedCards.length === 2) {
      setTimeout(() => checkMatch(), 500);
    }
  }
}

function checkMatch() {
  if (selectedCards[0].card === selectedCards[1].card) {
    matchedCards.push(selectedCards[0].cardElement, selectedCards[1].cardElement);
    selectedCards = [];
  } else {
    selectedCards[0].cardElement.style.backgroundColor = '';
    selectedCards[1].cardElement.style.backgroundColor = '';
    selectedCards = [];
  }
}
