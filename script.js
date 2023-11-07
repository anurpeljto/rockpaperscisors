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
    switch(playerSelectionCaps){
        case "ROCK":
            if(computerSelection == "Paper"){
                return "You lose!";
            }
            else if(computerSelection == "Scissors"){
                return "You win!";
            }
            else if (computerSelection == "Rock"){
                return "It's a tie!";
            }

        
        case "PAPER":
            if (computerSelection == "Rock"){
                return "You win!";
            }
            else if(computerSelection == "Scissors"){
                return "You lose!";
            }

            else if(computerSelection == "Paper"){
                return "It's a tie!";
            }
        
        case "SCISSORS":
            if (computerSelection == "Rock"){
                return "You lose!";
            }
            else if(computerSelection == "Paper"){
                return "You win!";
            }
            else if(computerSelection == "Scissors"){
                return "It's a tie!";
            }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

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

game();