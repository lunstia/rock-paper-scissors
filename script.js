const GAME_CHOICES = ["paper", "rock", "scissors"];

let pointsToWin = 5;

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

    playerChoice.toLowerCase();

    return playerChoice;
}

function determineWinner(playerChoice, computerChoice) {

        if (playerChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        } else if ((playerChoice === "scissors" && computerChoice === "paper") || !(playerChoice === "paper" && computerChoice === "scissors") && (GAME_CHOICES.indexOf(playerChoice) < GAME_CHOICES.indexOf(computerChoice) ))  {
            return "player";
        } 

         return "computer";
}

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log(`You chose ${playerChoice}, computer chose ${computerChoice}`);

    return determineWinner(playerChoice, computerChoice);
}

function playMatch() {
    let playerPoints = 0;
    let computerPoints = 0;
    let roundCounter = 0;
    
    while (playerPoints < pointsToWin && computerPoints < pointsToWin) {
        console.log("%c", "<hr>");
        console.log(`ROUND: ${++roundCounter}`);
        let winner = playRound();
        if (winner === "player") {
            playerPoints++;
            console.log(`You(${playerPoints}) win! The computer(${computerPoints}) lost!`);
        }else if (winner === "computer"){
            computerPoints++;
            console.log(`You(${playerPoints}) lose! The computer(${computerPoints}) won!`);
        }
    }

    if (playerPoints === 5) {
        console.log("You beat the computer first to 5!");
    }else {
        console.log("The computer beat you first to 5!");
    }
    
}