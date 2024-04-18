function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = 
        prompt("Enter your choice(rock, paper, or scissors):").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log("Round", i + 1);
        console.log("Player selected:", playerSelection);
        console.log("Computer selected:", computerSelection);
        
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!")
    {computerScore++;}
  }
}

console.log("Final scores:");
console.log()
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
 }
 const computerSelection = getComputerChoice();
const playerSelection = "rock"

function playRound(playerSelection, computerSelection){
    console.log("Player selected:", playerSelection)
    console.log("Computer selected:", computerSelection);
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && 
    computerSelection === "scissors") || 
    (playerSelection === "paper" && 
computerSelection === "rock") ||
(playerSelection === "scissors" && 
computerSelection === "paper")
    ){
        return "You win!";
    } else {
        return "You lose!";
    }
}