// Theme Toggle Button Functionality
const themeToggleButton = document.querySelector('.theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggleButton.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});

// Memory Game Script
const gameBoard = document.getElementById('game-board');

// Initialize the memory game
const cards = ['🍎', '🍎', '🍌', '🍌', '🍍', '🍍', '🍉', '🍉'];
let selectedCards = [];
let matchedCards = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    const shuffledCards = shuffle([...cards]);
    gameBoard.innerHTML = '';
    shuffledCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard(e) {
    const clickedCard = e.target;
    if (selectedCards.length < 2 && !clickedCard.classList.contains('flipped') && !matchedCards.includes(clickedCard)) {
        clickedCard.classList.add('flipped');
        selectedCards.push(clickedCard);
        if (selectedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const [firstCard, secondCard] = selectedCards;
    if (firstCard.textContent === secondCard.textContent) {
        matchedCards.push(firstCard, secondCard);
        resetSelection();
        if (matchedCards.length === cards.length) {
            setTimeout(() => {
                alert('You won! 🎉');
                createBoard(); // Reset the board after winning
            }, 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetSelection();
        }, 1000);
    }
}

function resetSelection() {
    selectedCards = [];
}

// Create the board when the page loads
createBoard();
