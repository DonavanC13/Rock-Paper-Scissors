// this first function set the basis for the games scoreboard and playability.
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    //for (let i = 0; i < 5; i++) {
    //    const playerSelection = 
    //    prompt("Enter your choice(rock, paper, or scissors):").toLowerCase();
    //    const computerSelection = getComputerChoice();
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


console.log("Final scores:");
console.log("Player score:", 
playerScore);
console.log("Computer score:",
computerScore);

if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
} else if (playerScore < computerScore){
    console.log("Sorry, you lose the game.");
} else {
    console.log(" ")
}}
// this function allows us to gather the computers choice at random.
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
 }
 const computerSelection = getComputerChoice();
const playerSelection = "rock"
// this function set the basis for game rules and allows rounds to be played.
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