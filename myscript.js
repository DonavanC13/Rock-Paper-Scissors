function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
 }
 const computerSelection = getComputerChoice();
 console.log("Computer selected:", 
computerSelection)
const playerSelection = "rock"
console.log("Player selected:", playerSelection)

function playRound(playerSelection, computerSelection){

}