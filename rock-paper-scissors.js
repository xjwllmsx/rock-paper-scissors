// Selecting elements
const btnRock = document.getElementById('btn--rock');
const btnPaper = document.getElementById('btn--paper');
const btnScissors = document.getElementById('btn--scissors');

// Generates the Computer's choice
const getComputerChoice = function () {
  // Randomly generate a number between 1 & 3 and assign it to the variable computerChoice
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  // console.log(computerChoice) // Used to test the above expression
  if (computerChoice === 1) {
    computerChoice = 'rock';
  } else if (computerChoice === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  return computerChoice;
};

// Update: Needs to take in button selection instead of answer to prompt
const getPlayerChoice = function (selection) {
  let playerChoice = selection;
  // A prompt captures the player's choice and converts it to all lowercase letters
  // let playerChoice = prompt(
  //   'What would you like to play: rock, paper, or scissors?'
  // ).toLowerCase();
  return playerChoice.toLowerCase();
};

const playRound = function (playerSelection, computerSelection) {
  // Logs the player's choice to the console
  console.log(
    `You chose: ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }`
  );
  // Logs the computer's choice to the console
  console.log(
    `Computer chose: ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`
  );
  // If the player's choice beats the computer's choice
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(
      `${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${computerSelection}. You win! 🏆`
    );
    return 'win';
    // If the computer's choice beats the player's choice
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
  ) {
    console.log(
      `${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${playerSelection}. You lose 😢`
    );
    return 'lose';
    // If the player's choice and the computer's choice is the same
  } else if (playerSelection === computerSelection) {
    // console.log('Tie game');
    return 'tie';
    // If neither rock, paper, or scissors was entered as the player's choice
  } else {
    return 'Please enter rock, paper, or scissors.';
  }
};

const game = function () {
  // A variable for the computer's selection
  let computerSelection = getComputerChoice();
  // A variable for the player's selection
  let playerSelection = getPlayerChoice();
  // Player's initial score
  let playerScore = 0;
  // Computer's initial score
  let computerScore = 0;

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
  console.log((playRound('rock', getComputerChoice())));
});
btnPaper.addEventListener('click', function () {
  console.log((playRound('paper', getComputerChoice())));
});
btnScissors.addEventListener('click', function () {
  console.log((playRound('scissors', getComputerChoice())));
});
