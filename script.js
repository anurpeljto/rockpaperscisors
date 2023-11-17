console.log("Hello world!");

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "Rock";
        
        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let playerSelectionCaps = playerSelection.toUpperCase();
    let final = "";
    switch(playerSelectionCaps){
        case "ROCK":
            if(computerSelection == "Paper"){
                final = "You lose!";
            }
            else if(computerSelection == "Scissors"){
                final = "You win!";
            }
            else if (computerSelection == "Rock"){
                final = "It's a tie!";
            }

        
        case "PAPER":
            if (computerSelection == "Rock"){
                final = "You win!";
            }
            else if(computerSelection == "Scissors"){
                final = "You lose!";
            }

            else if(computerSelection == "Paper"){
                final = "It's a tie!";
            }
        
        case "SCISSORS":
            if (computerSelection == "Rock"){
                final = "You lose!";
            }
            else if(computerSelection == "Paper"){
                final = "You win!";
            }
            else if(computerSelection == "Scissors"){
                final = "It's a tie!";
            }
    }
    return final;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/*
function game(){
    console.log("Playing 5 rounds");
    let winCounterPlayer = 0;
    let winCounterComputer = 0;
    let pChoice = "";
    for (let i = 0; i <5; i++){
        pChoice = prompt("Rock, paper or scissors?");
        let tempCounter = playRound(pChoice, getComputerChoice());
        if (tempCounter == "You win!"){
            winCounterPlayer++;
        }
        else if(tempCounter == "You lose!"){
            winCounterComputer++;
        }
    }
    if (winCounterPlayer > winCounterComputer){
        console.log( "You won " + winCounterPlayer + " games out of 5! Congratulations");
    }
    else if(winCounterComputer > winCounterPlayer){
        console.log( "You lost " + winCounterComputer + " games out of 5!");
    }

    else{
        console.log("You tied!");
    }
}
*/ 

let rb = document.querySelector("#rock");
let pb = document.querySelector("#paper")
let sb = document.querySelector("#scissors");
rb.textContent = "Rock";

let spanRes = document.querySelector("#resultbox");
spanRes.setAttribute('style', 'flex: 1;');
function checkScore(){
    if (totalRounds == 5){
        if (playerLost > playerWins){
            alert("You won out of 5 rounds!");
            totalRounds = 0;
        }
        else if(playerWins > playerLost){
            alert("You lost out of 5 rounds");
            totalRounds = 0;
        }

        else if (playerLost == playerWins){
            alert("It was a tie in the end!");
            totalRounds = 0;
        }
    }
}

let totalRounds = 0;
let playerWins = 0;
let playerLost = 0;

rb.addEventListener("click", () => {
    spanRes.textContent = playRound(rb.textContent,getComputerChoice());
    totalRounds++;
    if (spanRes.textContent == "You win!"){
        playerWins++;
    }
    else if(spanRes.textContent == "You lose!"){
        playerLost++;
    }
    checkScore();
});
pb.addEventListener("click", () => {
    spanRes.textContent = playRound(pb.textContent,getComputerChoice());
    totalRounds++;
    if (spanRes.textContent == "You win!"){
        playerWins++;
    }
    else if(spanRes.textContent == "You lose!"){
        playerLost++;
    }
    checkScore();
});
sb.addEventListener("click", () => {
    spanRes.textContent = playRound(sb.textContent,getComputerChoice());
    totalRounds++;
    if (spanRes.textContent == "You win!"){
        playerWins++;
    }
    else if(spanRes.textContent == "You lose!"){
        playerLost++;
    }
    checkScore();
});



