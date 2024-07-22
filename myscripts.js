console.log('hello world')
let humanScore = 0;
let computerScore = 0;
let rounds = 1;
playGame();

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
    if(humanChoice == computerChoice){
        console.log('It\'s a tie');
        return;
    }
    if(humanChoice == 'Rock'){
        if(computerChoice == 'Paper'){
            console.log('Paper beats rock, you lose this round!');
            computerScore++;
        }else{
            console.log('Rock beats scissor, you win this round!');
            humanScore++;
        }
    }else if(humanChoice == 'Paper'){
        if(computerChoice == 'Rock'){
            console.log('Paper beats rock, you win this round!');
            humanScore++;
        }else{
            console.log('Scissor beats paper, you lose this round!');
            computerScore++;
        }
    }else{
        if(computerChoice == 'Rock'){
            console.log('Rock beats scissor, you lose this round!');
            computerScore++;
        }else{
            console.log('Scissor beats paper, you win this round!');
            humanScore++;
        }
    }
}

function playGame(){
    while(rounds <= 5){
        playRound(getHumanChoice(), getComputerChoice());
        rounds++;
    }
    if(humanScore == computerScore){
        console.log('It\'s a tie!');
    }else if(humanScore < computerScore){
        console.log(`The computer has won by ${computerScore-humanScore} points`);
    }else{
        console.log(`You have won by ${humanScore-computerScore} points`);
    }
}


