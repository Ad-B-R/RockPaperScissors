console.log("Hello World");

let getComputerChoice = function getRandInt(a,b){
    return Math.floor(Math.random()*3);
};
let getPlayerChoice = function() {
    let x = prompt("Enter 0 for Rock, 1 for Paper, 2 for Scissors");
    return x;
}

let ComputerWins = 0;
let PlayerWins = 0;
function playGame(){
    for(let i = 0;i<5;i++){
        let ComputerChoice = getComputerChoice(0,2);
        let PlayerChoice = getPlayerChoice();
        if(ComputerChoice===PlayerChoice) console.log("Draw");
        else{
            if(ComputerChoice-PlayerChoice===1){
                console.log("Player loses");
                ComputerWins++;
            }
            else if(ComputerChoice-PlayerChoice===-1){
                console.log("Computer loses");
                PlayerWins++;
            }
            else if(ComputerChoice==0&&PlayerChoice==2){ 
                console.log("Player lose");
                ComputerWins++;
            }
            else if(ComputerChoice==2&&PlayerChoice==0){ 
                console.log("Computer lose");
                PlayerWins++;
            }
        }
    }
    let message = function(){(PlayerWins>ComputerWins)?alert("Player wins"):
        (ComputerWins>PlayerWins)?alert("Computer Wins"):alert("Draw")}
    message();
}

playGame();
