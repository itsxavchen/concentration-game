
/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let firstClickOnCard = false
let firstCard = null
let secondCard = null
let lives = 10

/*------------------------ Cached Element References ------------------------*/

const cards = document.querySelectorAll('.card')
const livesDisplay = document.querySelector('.lives')
const buttonEl = document.querySelector('.button')
const cardsWrapper = document.querySelector('.cards-wrapper')

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
        livesDisplay.innerHTML = 'GAME OVER'
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

function randomiseArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function reset () {
    lives = 10;
    livesDisplay.innerHTML = lives;
    firstCard = null
    secondCard = null
    firstClickOnCard = false
    cards.forEach(function (card) {
        card.classList.remove('flip');
    });
    setTimeout(function(){
        const shuffledCards = Array.from(cards);
        randomiseArray(shuffledCards);
        cardsWrapper.innerHTML = '';
        shuffledCards.forEach(function (card) {
            // card.classList.remove('flip');
            card.addEventListener('click', flipCard);
            cardsWrapper.appendChild(card);
        })
    }, 800)
}

/*----------------------------- Event Listeners -----------------------------*/

cards.forEach(function (card) {
    card.addEventListener('click', flipCard)
})

buttonEl.addEventListener('click', reset)