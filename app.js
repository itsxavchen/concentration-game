/**
 * - The memory card board is initially displayed with all cards facing up.
 * - Player XC begins the game by clicking on the card grid.
 * - The corresponding timer is triggered when Player XC clicks on a card.
 * - Player XC can select two cards at a time to check for matching patterns. If the patterns match, the cards remain face-up; if not, the cards flip back over with the front side up.
 * - Player XC continues playing until all cards are matched and face-up.
 * - After a brief delay following the completion of Player XC's game, the cards flip over and shuffle, and Player ML takes their turn.
 *  - The winner is determined by the time taken to complete the game.
 *  - Once Player ML finishes, A message appears to determine who the winner is with a "Start Again" button.
 */

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let firstClickOnCard = false
let firstCard = null
let secondCard = null
let lives = 5

/*------------------------ Cached Element References ------------------------*/

const cards = document.querySelectorAll('.card')
const livesDisplay = document.querySelector('.lives')
const buttonEl = document.querySelector('.button')

/*-------------------------------- Functions --------------------------------*/

function flipCard(event) {
    event.target.parentElement.classList.add('flip');
    if (firstClickOnCard === false) {
        firstCard = event.target.parentElement;
        firstClickOnCard = true;
    } else if (firstClickOnCard === true) {
        secondCard = event.target.parentElement;
        firstClickOnCard = false;
        matchCheck ()
    }
}

function loseLife() {
    if (lives > 0) {
        lives --
        livesDisplay.innerHTML = lives
    } else {
        console.log('you are dead')
        livesDisplay.innerHTML = 'DEAD'
    }
}

function matchCheck () {
    firstCardImgSrc = firstCard.querySelector('.card-back').src;
    secondCardImgSrc = secondCard.querySelector('.card-back').src;
    if (firstCardImgSrc === secondCardImgSrc) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } else {
        setTimeout(function () {
            loseLife()
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
        }, 800)
    }
}

function reset () {
    lives = 5;
    livesDisplay.innerHTML = lives;
    firstCard = null
    secondCard = null
    firstClickOnCard = false
    cards.forEach(function (card) {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    })
}

/*----------------------------- Event Listeners -----------------------------*/

cards.forEach(function (card) {
    card.addEventListener('click', flipCard)
})

buttonEl.addEventListener('click', reset)