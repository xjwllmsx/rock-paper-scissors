// Pseudocode for getComputerChoice
// PROGRAM getComputerChoice
//     Generate random number between 1 and 3
//         IF 1 is selected THEN computerChoice = rock
//         IF 2 is selected THEN computerChoice = paper
//         IF 3 is selected THEN computerChoice = scissors
// END

// Generates the Computer's choice
const getComputerChoice = function() {
    // Randomly generate a number between 0 & 2 and assign it to the variable computerChoice
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    // console.log(computerChoice) // Used to test the above expression
    if(computerChoice === 1) {
        computerChoice = 'rock';
    } else if(computerChoice === 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    };
    return computerChoice
};
// console.log(getComputerChoice()) // Used to test if function works


// Pseudocode for Player's Choice
// PROGRAM playerChoice()
//     When player inputs their selection into prompt:
//         if player inputs rock THEN playerChoice = rock
//         if player inputs paper THEN playerChoice = paper
//         if player inputs scissors THEN playerChoice = scissors
// END

const getPlayerChoice = function() {
    // A prompt captures the player's choice and converts it to all lowercase letters
    let playerChoice = prompt('What would you like to throw this round?').toLowerCase();
    return playerChoice
}
// console.log(getPlayerChoice()) // Used to test if function works
