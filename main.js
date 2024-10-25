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
  let humanChoice = prompt("Please enter you choice, good Sir!")
  humanChoice = humanChoice.toLowerCase()
  return humanChoice
}

console.log(getHumanChoice())

//store score in seperate variable for human and computer.
let humanScore = 0 

let computerScore = 0

//func 
function playRound(humanChoice, computerChoice) {
  switch 
}
