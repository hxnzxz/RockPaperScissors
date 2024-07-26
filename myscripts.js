console.log('hello world')
let humanScore = 0;
let computerScore = 0;
let rounds = 1;
//playGame();

const body = document.querySelector('body');
const buttons = document.querySelectorAll('button');
const score = document.querySelector('#score');
const round = document.querySelector('#round');
const gameStatus = document.querySelector('#gameStatus');
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.gap = "20px";
body.style.textAlign = 'center';

buttons.forEach((button) => {
    button.addEventListener("click", (e)=> {
        playRound(e.target.textContent, getComputerChoice());
    });
})
function updateScore(){
    score.textContent = `Your score : ${humanScore} vs AI score: ${computerScore}`;
}


function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if(choice == 1){
        return "Paper";
    }else if(choice == 2){
        return "Rock";
    }else{
        return "Scissor";
    }
}

function getHumanChoice(){
    let choice = window.prompt("Enter your choice: Rock | Paper | Scissor");
    choice = choice.toLowerCase();
    if(choice== 'rock'){
        return "Rock";
    }else if(choice == 'paper'){
        return "Paper";
    }else if(choice == 'scissor'){
        return "Scissor";
    }else {
        console.log("Invalid choice");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    let result = "";
    if(humanChoice == computerChoice){
        result = `${humanChoice} is the same as ${computerChoice}. It\'s a tie`;
    }else {
        if(humanChoice == 'Rock'){
            if(computerChoice == 'Paper'){
                result = 'Paper beats rock, you lose this round!';
                computerScore++;
            }else{
                result = 'Rock beats scissor, you win this round!';
                humanScore++;
            }
        }else if(humanChoice == 'Paper'){
            if(computerChoice == 'Rock'){
                result = 'Paper beats rock, you win this round!';
                humanScore++;
            }else{
                result = 'Scissor beats paper, you lose this round!';
                computerScore++;
            }
        }else{
            if(computerChoice == 'Rock'){
                result = 'Rock beats scissor, you lose this round!';
                computerScore++;
            }else{
                result = 'Scissor beats paper, you win this round!';
                humanScore++;
            }
        }
    }
    round.textContent = result;
    updateScore();
    if(humanScore === 5 || computerScore ===5){
        let gameOver = "Game Over! \n";
        if(humanScore == computerScore){
            gameOver += 'It\'s a tie! No one wins.';
        }else if(humanScore < computerScore){
            gameOver += `The computer has won by ${computerScore-humanScore} points`;
        }else{
            gameOver += `You have won by ${humanScore-computerScore} points`;
        }
        gameStatus.textContent = gameOver;
    }
}
updateScore();


