//DISPLAY message that the game has started
console.log("Hey, Friend! Let's play a game of 'Rock-Paper-Scissors'\!")

//create func that generates a random number between 1-3 and assigns a value of rock', 'paper', 'scissors' to each. 
function getComputerChoice() {
  if (Math.floor(Math.random()*3 + 1) == 1) {
    return "rock";
  } else if (Math.floor(Math.random()*3 + 1) == 2) {
    return "paper"
  }  else if (Math.floor(Math.random()*3 + 1) == 3) {
    return 'scissors'
  } else {
    return "Please enter one of the following values: rock, paper or scissors"
  }
}

console.log(getComputerChoice())

//GET user input as prompt and store the value as getHumanChoice.
function getHumanChoice() {
  let input = prompt("Please enter you choice, good Sir!")
  input = input.toLowerCase()
  return input
}

console.log(getHumanChoice())

//store score in seperate variable for human and computer.
let humanScore = 0 

let computerScore = 0

function playRound(humanChoice, computerChoice) {
  // your code here!
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock!")
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!")
  }  else if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("It is a tie!")
  }  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!")
  }  else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat paper!")
  }  else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("It is a tie!")
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors!")
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!")
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("It is a tie!")
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

