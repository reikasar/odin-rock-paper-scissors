let humanScore = 0;
let computerScore = 0;

const playerResultScore = document.querySelector(".player-result-score");
const computerResultScore = document.querySelector(".computer-result-score");
const roundResult = document.querySelector(".roundResult");
const finalResult = document.querySelector(".finalResult");

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

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();  
    if (humanChoice === "rock" && computerChoice === "paper") {
      roundResult.textContent = "You lose! Paper beats rock!";
      ++computerScore;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      roundResult.textContent = "You win! Rock beats scissors!";
      ++humanScore;
    }  else if (humanChoice === "paper" && computerChoice === "rock") {
      roundResult.textContent = "You win! Paper beats rock!";
      ++humanScore;
    }  else if (humanChoice === "paper" && computerChoice === "scissors") {
      roundResult.textContent = "You lose! Scissors beat paper!";
      ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      roundResult.textContent = "You lose! Rock beats scissors!";
      ++computerScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      roundResult.textContent = "You win! Scissors beats paper!";
      ++humanScore;
    } else if ((humanChoice === "scissors" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper")) {
      roundResult.textContent = "It is a tie!";
    }
    // update displayed scores
    playerResultScore.textContent = humanScore;
    computerResultScore.textContent = computerScore;
  
    // check if human or computer score has reached 5 points
    if (computerScore === 5) {
      finalResult.textContent = "Sadly you lost but let's play again!";
      setTimeout(resetGame, 3000);
    } else if (humanScore === 5) {
      finalResult.textContent = "Gongratulations! You are the Victor!";
      setTimeout(resetGame, 3000);
    }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundResult.textContent = "";
  playerResultScore.textContent = humanScore;
  computerResultScore.textContent = computerScore;
  finalResult.textContent = "";
};
  