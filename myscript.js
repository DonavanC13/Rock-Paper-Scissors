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