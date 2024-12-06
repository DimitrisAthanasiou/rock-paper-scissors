let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); // Capitalize first letter to match computer choices
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
        
    ) {
        return "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        return "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
}
console.log(playRound());