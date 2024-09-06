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

let cardsBoard = ['', '', '', '', '', '', '', '', '', '', '', '']
let firstClickOnCard = false
let winner
let firstCard
let secondCard

/*------------------------ Cached Element References ------------------------*/

const cards = document.querySelectorAll('.card')
/*-------------------------------- Functions --------------------------------*/

function flipCard(event) {
    event.target.parentElement.classList.add('flip');

    if (firstClickOnCard === false) {
        firstCard = event.target.parentElement;
        firstClickOnCard = true;
    } else if (firstClickOnCard === true) {
        secondCard = event.target.parentElement;
        firstClickOnCard = false;

        let firstCardImgSrc = firstCard.querySelector('.card-back').src;
        let secondCardImgSrc = secondCard.querySelector('.card-back').src;

        if (firstCardImgSrc === secondCardImgSrc) {
            console.log('The images match!');
            firstCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
        } else {
            console.log('The images do not match.');
        }
    }
}


/*----------------------------- Event Listeners -----------------------------*/

cards.forEach(function (card) {
    card.addEventListener('click', flipCard)
})