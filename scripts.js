
function computerPlay(){
    let choiceNum = Math.floor(Math.random()*3);
    switch(choiceNum){
        case 0: 
            compChoice = "rock"
            break;
        case 1:
            compChoice = "paper"
            break;
        case 2:
            compChoice = "scissors"
            break;
    }
    return compChoice;
}

function playerPlay(){
    let playerChoice = prompt("Choose rock, paper or scissors."); //yeh wala bhi prompt aa rha i think

    if (playerChoice.toLowerCase() == "rock"||"paper"||"scissors"){
       return playerChoiceFinal = playerChoice.toLowerCase();
    }
}

let playerWin = 0;
let computerWin = 0;
let draw = 0;

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        draw++;
        return 'It\'s a draw';
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "paper"){
            computerWin++;
            return 'Computer Wins!';
        }else{
            playerWin++;
            return 'Player Wins!';
        }
    } 
    else if(playerSelection == "paper"){
        if(computerSelection == "scissors"){
            computerWin++;
            return 'Computer Wins!';
        }else{
            playerWin++;
            return 'Player Wins!';
        }
    }
    else /*if(playerSelection == "scissors")*/{
        if(computerSelection == "rock"){
            computerWin++;
            return 'Computer Wins!';
        }else{
            playerWin++;
            return 'Player Wins!';
        }
    }
}




function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        continue;
    }
    if (playerWin==computerWin){
        return "It's a tie!";
    }else if (playerWin>computerWin){
        return "You win!";
    }else {
        return "You lose!";
    }
}

console.log(game());
// console.log("Rounds won by you " + playerWin);
// console.log("Rounds won by pc " + computerWin);
// console.log("Rounds drawn " + draw);