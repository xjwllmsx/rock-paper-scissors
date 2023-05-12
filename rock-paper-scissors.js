'use strict';

// Selecting elements
const btnRock = document.getElementById('btn--rock');
const btnPaper = document.getElementById('btn--paper');
const btnScissors = document.getElementById('btn--scissors');
const btnNewGame = document.getElementById('btn--new');
const display = document.getElementById('display');
const displayPlayerChoice = document.createElement('p');
const displayComputerChoice = document.createElement('p');
const displayGameResults = document.createElement('p');
const displayPlayerScore = document.createElement('p');
const displayComputerScore = document.createElement('p');
const endGameMessage = document.createElement('p');

display.appendChild(displayPlayerScore);
display.appendChild(displayComputerScore);

// Starting conditions
let playerScore, computerScore, playing;

const init = function () {
  playerScore = 0;
  computerScore = 0;
  playing = true;

  displayPlayerScore.textContent = `Your Score: ${playerScore}`;
  displayComputerScore.textContent = `Computer Score: ${computerScore}`;

  btnNewGame.classList.add('hidden');
};
init();

btnNewGame.addEventListener('click', function () {
  init();
  display.removeChild(displayComputerChoice);
  display.removeChild(displayPlayerChoice);
  display.removeChild(displayGameResults);
  display.removeChild(endGameMessage);
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

/*
// Update: Needs to take in button selection instead of answer to prompt
const getPlayerChoice = function (selection) {
  let playerChoice = selection;
  // A prompt captures the player's choice and converts it to all lowercase letters
  // let playerChoice = prompt(
  //   'What would you like to play: rock, paper, or scissors?'
  // ).toLowerCase();
  return playerChoice.toLowerCase();
};
*/

const playRound = function (playerSelection, computerSelection) {
  // Logs the player's choice to the console
  displayPlayerChoice.textContent = `You chose: ${
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
  }`;
  display.appendChild(displayPlayerChoice);

  // Logs the computer's choice to the console
  displayComputerChoice.textContent = `Computer chose: ${
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
  }`;
  display.appendChild(displayComputerChoice);

  // If the player's choice beats the computer's choice
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    displayGameResults.textContent = `${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}. You win! 🏆`;
    display.appendChild(displayGameResults);
    displayPlayerScore.textContent = `Your Score: ${++playerScore}`;
    return playerScore;
    // If the computer's choice beats the player's choice
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    displayGameResults.textContent = `${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}. You lose 😢`;
    display.appendChild(displayGameResults);
    displayComputerScore.textContent = `Your Score: ${++computerScore}`;
    return computerScore;
    // If the player's choice and the computer's choice is the same
  } else if (playerSelection === computerSelection) {
    displayGameResults.textContent = 'Tie game';
    display.appendChild(displayGameResults);
    return 'tie';
  }
};

const game = function () {
  // A variable for the computer's selection
  let computerSelection = getComputerChoice();
  // A variable for the player's selection
  let playerSelection = getPlayerChoice();

  // This function runs a round of rock, paper, scissors and outputs a score
  const letsPlay = function (round) {
    if (round === 'win') {
      return (playerScore = ++playerScore);
    } else if (round === 'lose') {
      return (computerScore = ++computerScore);
    } else {
      return 0;
    }
  };
  // Call the letsPlay function for the first round
  letsPlay(playRound(playerSelection, computerSelection));
  // Calls the letsPlay function a second time
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  letsPlay(playRound(playerSelection, computerSelection));
  // Calls the letsPlay function a third time
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  letsPlay(playRound(playerSelection, computerSelection));
  // Calls the letsPlay function a fourth time
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  letsPlay(playRound(playerSelection, computerSelection));
  // Calls the letsPlay function a fifth time
  computerSelection = getComputerChoice();
  playerSelection = getPlayerChoice();
  letsPlay(playRound(playerSelection, computerSelection));

  // This calculates who wins based on the cumulative scores.
  const calcWinner = function (playerScore, computerScore) {
    if (playerScore > computerScore) {
      return `You win (${playerScore} vs ${computerScore}!)`;
    } else if (computerScore > playerScore) {
      return `You lose (${playerScore} vs ${computerScore}. Try again!)`;
    } else {
      return `Tie game (${playerScore} vs ${computerScore})`;
    }
  };

  // Returns the result of the function
  return calcWinner(playerScore, computerScore);
};

// Calls the game function and displays in the console.
// console.log(game());

btnRock.addEventListener('click', function () {
  if (playing) {
    playRound('rock', getComputerChoice());
  }
  if (playerScore === 5) {
    playing = false;
    display.appendChild(endGameMessage);
    endGameMessage.textContent = `Game over! You annihilated the computer!`;
    btnNewGame.classList.remove('hidden');
  } else if (computerScore === 5) {
    playing = false;
    display.appendChild(endGameMessage);
    endGameMessage.textContent = `Game over! Looks like you got pwned by the computer. Better luck next time!`;
    btnNewGame.classList.remove('hidden');
  }
});
btnPaper.addEventListener('click', function () {
  if (playing) {
    playRound('paper', getComputerChoice());
  }

  if (playerScore === 5) {
    playing = false;
    display.appendChild(endGameMessage);
    endGameMessage.textContent = `Game over! You annihilated the computer!`;
    btnNewGame.classList.remove('hidden');
  } else if (computerScore === 5) {
    playing = false;
    display.appendChild(endGameMessage);
    endGameMessage.textContent = `Game over! Looks like you got pwned by the computer. Better luck next time!`;
    btnNewGame.classList.remove('hidden');
  }
});
btnScissors.addEventListener('click', function () {
  if (playing) {
    playRound('scissors', getComputerChoice());
  }
  if (playerScore === 5) {
    playing = false;
    display.appendChild(endGameMessage);
    endGameMessage.textContent = `Game over! You annihilated the computer!`;
    btnNewGame.classList.remove('hidden');
  } else if (computerScore === 5) {
    playing = false;
    display.appendChild(endGameMessage);
    endGameMessage.textContent = `Game over! Looks like you got pwned by the computer. Better luck next time!`;
    btnNewGame.classList.remove('hidden');
  }
});
