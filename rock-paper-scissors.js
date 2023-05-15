'use strict';

// Selecting elements
const btnRock = document.getElementById('btn--rock');
const btnPaper = document.getElementById('btn--paper');
const btnScissors = document.getElementById('btn--scissors');
const btnNewGame = document.getElementById('btn--new');
const displayRoundMessage = document.querySelector('.display--round-message');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const displayPlayerScore = document.getElementById('player--score');
const displayComputerScore = document.getElementById('computer--score');
const gameOver = document.querySelector('.game-over');
const gameVerdict = document.getElementById('display--game-verdict');
const gameOverMessage = document.getElementById('display--game-over-message');
const displayPlayerChoice = document.createElement('p');
const displayComputerChoice = document.createElement('p');
const displayGameResults = document.createElement('p');
const endGameMessage = document.createElement('p');

// Starting conditions
let playerScore, computerScore, playing;

const init = function () {
    playerScore = 0;
    computerScore = 0;
    playing = true;

    displayPlayerScore.textContent = `${playerScore}`;
    displayComputerScore.textContent = `${computerScore}`;

    gameOver.classList.add('hidden');
    overlay.classList.add('hidden');
    displayRoundMessage.classList.add('hidden');
};
init();

btnNewGame.addEventListener('click', init);
btnCloseModal.addEventListener('click', init);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !gameOver.classList.contains('hidden')) {
        init();
    }
});

// Generates the Computer's choice
const getComputerChoice = function () {
    // Randomly generate a number between 1 & 3 and assign it to the variable computerChoice
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        computerChoice = 'rock';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
};

const playRound = function (playerSelection, computerSelection) {
    // Displays the player's choice
    displayRoundMessage.classList.remove('hidden');
    displayPlayerChoice.textContent = `You chose: ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`;
    displayRoundMessage.appendChild(displayPlayerChoice);

    // Displays the computer's choice
    displayRoundMessage.classList.remove('hidden');
    displayComputerChoice.textContent = `Computer chose: ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
    displayRoundMessage.appendChild(displayComputerChoice);
    // If the player's choice beats the computer's choice
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        displayGameResults.textContent = `${
            playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
        } beats ${computerSelection}. You win! 🏆`;
        displayRoundMessage.appendChild(displayGameResults);
        displayPlayerScore.textContent = `${++playerScore}`;
        return playerScore;
        // If the computer's choice beats the player's choice
    } else if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        displayGameResults.textContent = `${
            computerSelection.charAt(0).toUpperCase() +
            computerSelection.slice(1)
        } beats ${playerSelection}. You lose 😢`;
        displayRoundMessage.appendChild(displayGameResults);
        displayComputerScore.textContent = `${++computerScore}`;
        return computerScore;
        // If the player's choice and the computer's choice is the same
    } else if (playerSelection === computerSelection) {
        displayGameResults.textContent = 'Tie game';
        displayRoundMessage.appendChild(displayGameResults);
        return 'tie';
    }
};

const playerWinsGame = function () {
    playing = false;
    overlay.classList.remove('hidden');
    gameOver.classList.remove('hidden');
    gameVerdict.textContent = '🎉 You win! 🎉';
    gameOverMessage.appendChild(endGameMessage);
    endGameMessage.textContent = `You annihilated the computer! Think you can win again? Click on the button below to find out.`;
    btnNewGame.classList.remove('hidden');
};

const computerWinsGame = function () {
    playing = false;
    overlay.classList.remove('hidden');
    gameOver.classList.remove('hidden');
    gameVerdict.textContent = 'You lose 😭';
    gameOverMessage.appendChild(endGameMessage);
    endGameMessage.textContent = `Nice try, but it looks like the Computer bested you this time. Click on the button below to try again.`;
    btnNewGame.classList.remove('hidden');
};

btnRock.addEventListener('click', function () {
    if (playing) {
        playRound('rock', getComputerChoice());
    }
    if (playerScore === 5) {
        playerWinsGame();
    } else if (computerScore === 5) {
        computerWinsGame();
    }
});
btnPaper.addEventListener('click', function () {
    if (playing) {
        playRound('paper', getComputerChoice());
    }

    if (playerScore === 5) {
        playerWinsGame();
    } else if (computerScore === 5) {
        computerWinsGame();
    }
});
btnScissors.addEventListener('click', function () {
    if (playing) {
        playRound('scissors', getComputerChoice());
    }
    if (playerScore === 5) {
        playerWinsGame();
    } else if (computerScore === 5) {
        computerWinsGame();
    }
});
