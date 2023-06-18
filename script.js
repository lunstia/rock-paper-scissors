const GAME_CHOICES = ["paper", "rock", "scissors"];

let pointsToWin = 5;
let announcer = document.querySelector(".textAnnouncement");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    return GAME_CHOICES[randomChoice];
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

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    return determineWinner(playerChoice, computerChoice);
}

function log(announcement) {
    announcer.innerText = announcement;
}




let playerPoints = 0;
let computerPoints = 0;
let roundCounter = 0;

let btns = document.querySelectorAll("img");

btns.forEach(item => {
    item.addEventListener('click', e => {
        if (playerPoints >= 5 || computerPoints >= 5) return;

        let winner = playRound(e.target.id);
        if (winner === "player") {
            playerPoints++;
            log(`You win! The computer lost!`);
        }else if (winner === "computer"){
            computerPoints++;
            log(`You lose! The computer won!`);
        }

        playerScore.innerHTML = playerPoints + "<p>YOU</p>";
        computerScore.innerHTML = computerPoints + "<p>COMPUTER</p>";

        if (playerPoints === 5) {
            log("You beat the computer first to 5!");
        }else if (computerPoints === 5) {
            log("The computer beat you first to 5!");
        }
        
    });
})


    



