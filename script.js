const GAME_CHOICES = ["paper", "rock", "scissors"];


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    return GAME_CHOICES[randomChoice];
}

function getPlayerChoice() {
    let playerChoice = prompt("Type in your choice! eg. rock, paper, or scissors");
    if (!isNaN(playerChoice) || GAME_CHOICES.indexOf(playerChoice) === -1) {
        alert("Invalid response, try again!")
        return getPlayerChoice()
    }

    playerChoice.toLowerCase()

    return playerChoice;
}

function determineWinner(playerChoice, computerChoice) {

        if (playerChoice === computerChoice) {
            return "It's a tie!"
        } else if ((playerChoice === "scissors" && computerChoice === "paper") || !(playerChoice === "paper" && computerChoice === "scissors") && (GAME_CHOICES.indexOf(playerChoice) < GAME_CHOICES.indexOf(computerChoice) ))  {
            return "You win! The computer lost!"
        } 

         return "You lose! The computer won!"
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose ${playerChoice}, computer chose ${computerChoice}`)

    console.log(determineWinner(playerChoice, computerChoice))
}