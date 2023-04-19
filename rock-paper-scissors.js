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
    let computerChoice = Math.floor(Math.random() * 3);
    // console.log(computerChoice) // Used to test the above expression
    if(computerChoice === 0) {
        computerChoice = 'rock';
    } else if(computerChoice === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    };
    return computerChoice
};
// console.log(getComputerChoice()) // Used to test if function works
