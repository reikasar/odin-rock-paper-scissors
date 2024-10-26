console.log("Hey, Friend! Let's play a game of 'Rock-Paper-Scissors'\!")

function getComputerChoice() {
  let genNumberOneToThree = Math.floor(Math.random()*3 + 1)
  if (genNumberOneToThree === 1) {
    return "rock";
  } else if (genNumberOneToThree === 2) {
    return "paper"
  } else if (genNumberOneToThree === 3) {
    return "scissors"
  }
}

function getHumanChoice() {
  let choice = prompt("Please enter you choice, good Sir!")
  lowerCaseChoice = choice.toLowerCase()
  return lowerCaseChoice
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats rock!");
      computerScore = ++computerScore;
      return computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats scissors!")
      humanScore = ++humanScore;
      return humanScore;
    }  else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock!")
      humanScore = ++humanScore;
      return humanScore;
    }  else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beat paper!")
      computerScore = ++computerScore;
      return computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats scissors!")
      computerScore = ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats paper!")
      humanScore = ++humanScore;
      return computerScore;
    } else if ((humanChoice === "scissors" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper")) {
      console.log("It is a tie!")
    }
  }
  function playGameUntil() {
  if (humanScore < 5 || computerScore < 5) {
    playRound(humanChoice, computerChoice);
  }  else if (computerScore == 5) {
    console.log("Sadly you lost but let's play again!", humanScore, computerScore)
  } else {
    console.log("Gongratulations! You are the Victor!",humanScore, computerScore)
  }
}
  playGameUntil();
}

playGame();

