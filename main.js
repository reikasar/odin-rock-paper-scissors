console.log("Hey, Friend! Let's play a game of 'Rock-Paper-Scissors'\!")

function getComputerChoice() {
  let genNumberOneToThree = Math.floor(Math.random()*3 + 1)
/*  console.log(genNumberOneToThree) */
  if (genNumberOneToThree === 1) {
    return "rock";
  } else if (genNumberOneToThree === 2) {
    return "paper"
  } else if (genNumberOneToThree === 3) {
    return "scissors"
  }
}

/* console.log(getComputerChoice()) */

function getHumanChoice() {
  let choice = prompt("Please enter you choice, good Sir!")
  lowerCaseChoice = choice.toLowerCase()
  return lowerCaseChoice
}

/* console.log(getHumanChoice()) */

function playRound(humanChoice, computerChoice) {
  // your code here!
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats rock!");
    computerScore = ++computerScore;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats scissors!")
    humanScore = ++humanScore;
  }  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!")
    humanScore = ++humanScore;
  }  else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beat paper!")
    computerScore = ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats scissors!")
    computerScore = ++computerScore;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! Scissors beats paper!")
    humanScore = ++humanScore;
  } else if ((humanChoice === "scissors" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper")) {
    console.log("It is a tie!")
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(playRound()) {
  let humanScore = 0;
  let computerScore = 0;
  
}



