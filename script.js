const array = ["Rock", "Paper", "Scissors"]
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

//user and computer score to update
const playerScore1 = document.querySelector('#player-score');
const computerScore1 = document.querySelector('#computer-score');

//user buttons to add event listeners
const rockBtn = document.querySelector('#rock3');
const paperBtn = document.querySelector('#paper3');
const scissorBtn = document.querySelector('#scissors3');

//results to display who won and what they chose
const winner = document.querySelector('#winner');

//restart button
const restartBtn = document.querySelector("#restart");

//getting random computer choice
function getComputerChoice(){
    return array[Math.floor(Math.random()* array.length)]
}

function playGame(playerChoice, computerChoice){
    let result = "";
    let pSc = "";
    let cSc = "";
    computerChoice = getComputerChoice().toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice == "rock" && computerChoice == "scissors"){
        result = winner.textContent = "You Win, Rock beats Scissors!";
        playerScore+=1;
        pSc = playerScore1.textContent = playerScore;
        console.log(computerChoice);
        console.log(playerScore);
        console.log(computerScore);
    }else if(playerChoice == "rock" && computerChoice == "paper"){
        result = winner.textContent = "You Lose, Paper beats Rock!";
        computerScore+=1;
        cSc = computerScore1.textContent = computerScore;
        console.log(computerChoice);
    }else if(playerChoice == "scissors" && computerChoice == "rock"){
        result = winner.textContent =  "You Lose, Rock beats Scissors!";
        computerScore+=1;
        cSc = computerScore1.textContent = computerScore;
        console.log(computerChoice);
    }else if(playerChoice == "scissors" && computerChoice == "paper"){
        result = winner.textContent =  "You Win, Scissors beats Paper!";
        playerScore+=1;
        pSc = playerScore1.textContent = playerScore;
        console.log(computerChoice);
    }else if(playerChoice == "paper" && computerChoice == "scissors"){
        result = winner.textContent =  "You Lose, Scissors beats Paper!";
        computerScore+=1;
        cSc = computerScore1.textContent = computerScore;
        console.log(computerChoice);
    }else if(playerChoice == "paper" && computerChoice == "rock"){
        result = winner.textContent =  "You Win, Paper beats Rock!"; 
        playerScore+=1;
        pSc = playerScore1.textContent = playerScore;
        console.log(computerChoice);
    }else{
        result = winner.textContent =  "It's a Tie!";
        console.log(computerChoice);
    }

    //return result;
}

function gameTime(){
    

    if(playerScore == 5 && computerScore < 5){
        result = winner.textContent = "You Win! CONGRATULATIONS"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled =true;
        
    }else if(computerScore == 5 && playerScore < 5){
        result = winner.textContent = "You Lose! Better Luck Next!"
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled =true;
    
    }
}



rockBtn.addEventListener('click', () =>{
    playerChoice = "rock";

    computerChoice = getComputerChoice();

    playGame(playerChoice, computerChoice);

    gameTime();
});

paperBtn.addEventListener('click', () =>{
    playerChoice = 'paper';

    computerChoice = getComputerChoice();

    playGame(playerChoice, computerChoice);
    
    gameTime();
});

scissorBtn.addEventListener('click', () =>{
    playerChoice = "scissors";

    computerChoice = getComputerChoice();

    playGame(playerChoice, computerChoice);

    gameTime();
});

restartBtn.addEventListener('click',() =>{
    playerScore = 0;
    computerScore = 0;
    winner.textContent = "";
    playerScore1.textContent = 0;
    computerScore1.textContent = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled =false;

    
});



