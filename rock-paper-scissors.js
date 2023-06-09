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
let playerScore, computerScore, playing; // Think about adding playerScore and computerScore to an array called scores

// Initialization
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

// Restart Game
btnNewGame.addEventListener('click', init);
btnCloseModal.addEventListener('click', init);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !gameOver.classList.contains('hidden')) {
        init();
    }
});

const choices = ['Rock', 'Paper', 'Scissors'];

// Generates the Computer's choice
const getComputerChoice = function () {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
};

// Round game function
const playRound = function (playerSelection, computerSelection) {
    // Displays player and computer choice
    const displayChoice = function (message, element) {
        displayRoundMessage.classList.remove('hidden');
        element.textContent = message;
        displayRoundMessage.appendChild(element);
    };
    displayChoice(`You chose: ${playerSelection}`, displayPlayerChoice);
    displayChoice(
        `Computer chose: ${computerSelection}`,
        displayComputerChoice
    );

    // If the player's choice beats the computer's choice
    if (
        (playerSelection === choices[0] && computerSelection === choices[2]) ||
        (playerSelection === choices[1] && computerSelection === choices[0]) ||
        (playerSelection === choices[2] && computerSelection === choices[1])
    ) {
        displayGameResults.textContent = `${playerSelection} beats ${computerSelection}. You win! 🏆`;
        displayRoundMessage.appendChild(displayGameResults);
        displayPlayerScore.textContent = `${++playerScore}`;
        return playerScore;

        // If the computer's choice beats the player's choice
    } else if (
        (computerSelection === choices[0] && playerSelection === choices[2]) ||
        (computerSelection === choices[1] && playerSelection === choices[0]) ||
        (computerSelection === choices[2] && playerSelection === choices[1])
    ) {
        displayGameResults.textContent = `${computerSelection} beats ${playerSelection}. You lose 😢`;
        displayRoundMessage.appendChild(displayGameResults);
        displayComputerScore.textContent = `${++computerScore}`;
        return computerScore;

        // If the player's choice and the computer's choice is the same
    } else if (playerSelection === computerSelection) {
        displayGameResults.textContent = 'Tie game';
        displayRoundMessage.appendChild(displayGameResults);
    }
};

// Runs end of game message after someone wins
const declareWinner = function () {
    // Message to appear after someone wins the game
    const winnerAnnouncement = function (
        gameVerdictString,
        endGameMessageString
    ) {
        playing = false;
        overlay.classList.remove('hidden');
        gameOver.classList.remove('hidden');
        gameVerdict.textContent = gameVerdictString;
        gameOverMessage.appendChild(endGameMessage);
        endGameMessage.textContent = endGameMessageString;
        btnNewGame.classList.remove('hidden');
    };

    if (playerScore === 5) {
        winnerAnnouncement(
            '🎉 You win! 🎉',
            `You annihilated the computer! Think you can win again? Click on the button below to find out.`
        );
    } else if (computerScore === 5) {
        winnerAnnouncement(
            'You lose 😭',
            `Nice try, but it looks like the Computer bested you this time. Click on the button below to try again.`
        );
    }
};

btnRock.addEventListener('click', function () {
    if (playing) {
        playRound(choices[0], getComputerChoice());
    }
    declareWinner();
});

btnPaper.addEventListener('click', function () {
    if (playing) {
        playRound(choices[1], getComputerChoice());
    }
    declareWinner();
});

btnScissors.addEventListener('click', function () {
    if (playing) {
        playRound(choices[2], getComputerChoice());
    }
    declareWinner();
});
