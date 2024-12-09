function playgame() {
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        let choices = ["Rock", "Paper", "Scissors"];
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to get human's choice
    function getHumanChoice() {
        let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); // Capitalize first letter
    }

    // Function to play one round of Rock, Paper, Scissors
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++; // Increment human score if human wins
            return "You win! " + humanChoice + " beats " + computerChoice;
        } else {
            computerScore++; // Increment computer score if computer wins
            return "You lose! " + computerChoice + " beats " + humanChoice;
        }
    }

    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        console.log("Round " + (i + 1) + ":");
        console.log(playRound(humanChoice, computerChoice)); // Log result of the round
        console.log("Current Score: You - " + humanScore + ", Computer - " + computerScore); // Log score after each round
    }

    // Display final score after all rounds
    console.log("\nFinal Score:");
    console.log("You: " + humanScore + ", Computer: " + computerScore);

    // Display the winner based on the final score
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie game!");
    }
}

playgame();
function playgame() {
    let humanScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        let choices = ["Rock", "Paper", "Scissors"];
        let randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to get human's choice
    function getHumanChoice() {
        let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1); // Capitalize first letter
    }

    // Function to play one round of Rock, Paper, Scissors
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            humanScore++; // Increment human score if human wins
            return "You win! " + humanChoice + " beats " + computerChoice;
        } else {
            computerScore++; // Increment computer score if computer wins
            return "You lose! " + computerChoice + " beats " + humanChoice;
        }
    }

    // Play 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        
        console.log("Round " + (i + 1) + ":");
        console.log(playRound(humanChoice, computerChoice)); // Log result of the round
        console.log("Current Score: You - " + humanScore + ", Computer - " + computerScore); // Log score after each round
    }

    // Display final score after all rounds
    console.log("\nFinal Score:");
    console.log("You: " + humanScore + ", Computer: " + computerScore);

    // Display the winner based on the final score
    if (humanScore > computerScore) {
        console.log("You are the winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie game!");
    }
}

playgame();
