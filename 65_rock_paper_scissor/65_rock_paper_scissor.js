const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(player){
    const computer = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(player === computer) result = "IT'S A TIE!🫱🏼‍🫲🏼"
    else{
        switch(player){
            case "rock":
                result = (computer === "paper") ? "YOU LOSE!👎🏼" : "YOU WIN!👍🏼";
                break;
            case "paper":
                if(computer === "scissor") result = "YOU LOSE!👎🏼"
                else result = "YOU WIN!👍🏼"
                break;
            case "scissor":
                if(computer === "rock") result = "YOU LOSE!👎🏼"
                else result = "YOU WIN!👍🏼"
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${player.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computer.toUpperCase()}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!👍🏼":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        
        case "YOU LOSE!👎🏼":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore
            break;
    }
    
}
