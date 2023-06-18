const GAME_CHOICES = ["rock", "paper", "scissors"];


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
    switch(playerChoice, computerChoice) {
        case playerChoice === computerChoice:
            return "It's a tie!"
        case playerChoice === "rock" && computerChoice === "scissors":
            return "You win!"
        case playerChoice > computerChoice:
            return "You win!"

        default:
            return "You lose!"
    }
}