const GAME_CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    return GAME_CHOICES[randomChoice];
}

console.log(getComputerChoice());
