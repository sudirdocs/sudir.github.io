// Memory Game
const gameBoard = document.getElementById('game-board');
const cards = ['🍎', '🍌', '🍓', '🍏', '🍓', '🍌', '🍎', '🍏'];
cards.sort(() => Math.random() - 0.5); // Shuffle cards

let selectedCards = [];
let matchedCards = 0;

cards.forEach((card, index) => {
  const cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML = card;
  cardElement.addEventListener('click', () => flipCard(cardElement, index));
  gameBoard.appendChild(cardElement);
});

function flipCard(cardElement, index) {
  if (selectedCards.length === 2) return;

  cardElement.classList.add('flipped');
  selectedCards.push({ cardElement, card: cards[index], index });

  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  if (selectedCards[0].card === selectedCards[1].card) {
    matchedCards++;
    selectedCards = [];
  } else {
    selectedCards.forEach(({ cardElement }) => cardElement.classList.remove('flipped'));
    selectedCards = [];
  }

  if (matchedCards === cards.length / 2) {
    alert('You win!');
  }
}

// Theme Toggle
const themeToggleButton = document.querySelector('.theme-toggle');
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
