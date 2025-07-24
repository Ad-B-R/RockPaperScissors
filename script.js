const MAX_ROUND = 5;
let getComputerChoice = function getRandInt(a,b){
    return Math.floor(Math.random()*3);
};

const choiceMap = {0:"Rock",1:"Paper",2:"Scissors"};
let playerChoice;
let computerChoice;
let currentRound = 1;

let computerWins = 0;
let playerWins = 0;
function displayOptions(player,computer){
    let playerChoiceText = document.getElementById("playersChoice");
    let computerChoiceText = document.getElementById("computersChoice");
    playerChoiceText.textContent = choiceMap[player];
    computerChoiceText.textContent = choiceMap[computer];
}

function displayScore(PlayerChoice,ComputerChoice){
    displayWinnerScore = document.getElementById("roundWinner");
    if(ComputerChoice===PlayerChoice){
        computerWins++;
        playerWins++;
        displayWinnerScore.textContent=`Draw, Round:${currentRound} \n
            Total Score of Computer = ${computerWins}, Total Score of Player = ${playerWins}`
    }
    else{
        if((ComputerChoice-PlayerChoice===1)||(ComputerChoice==0&&PlayerChoice==2)){
            computerWins++;
            displayWinnerScore.textContent=`Computer Wins Round ${currentRound} \n
            Total Score of Computer = ${computerWins}, Total Score of Player = ${playerWins}`
        }
        else if((ComputerChoice-PlayerChoice===-1)||(ComputerChoice==2&&PlayerChoice==0)){
            playerWins++;
            displayWinnerScore.textContent=`Player Wins Round ${currentRound} \n
            Total Score of Computer = ${computerWins}, Total Score of Player = ${playerWins}`
        }
    }
}

function Game() {
    const options = document.getElementById("optionsList");
    options.addEventListener('click',function(event){
    if(currentRound<=MAX_ROUND){
        // Player Choice
        const clickedOption = event.target.closest('.Options');
        const numericValue = clickedOption.dataset.val;
        playerChoice = parseInt(numericValue,10);

        computerChoice = getComputerChoice();
        
        displayOptions(playerChoice,computerChoice);
        displayScore(playerChoice,computerChoice)
        currentRound++;
    }
    else{
        gameMenu = document.getElementById("game");
        winnerMenu = document.getElementById("winnerPage");
        winnerMenu.classList.remove('notvisible');
        winnerMenu.classList.add('visible');
        gameMenu.classList.remove('visible');
        gameMenu.classList.add('notvisible');

        whichPlayerWon = document.getElementById("winnerPageDisplay");
        if(playerWins==computerWins) whichPlayerWon.textContent = "Draw";
        else whichPlayerWon.textContent = (playerWins>computerWins)?"Player Wins":"Computer Wins";
    }
    })
}
Game();
