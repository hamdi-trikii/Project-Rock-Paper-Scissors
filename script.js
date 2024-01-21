function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    const choices = ['rock', 'paper', 'scissors'];

    if (!choices.includes(playerChoice)) {
        return "Invalid input. Please choose 'Rock', 'Paper', or 'Scissors'.";
    }

    if (playerChoice === computerSelection) {
        return "It's a tie! Replay the round.";
    } else if (
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
}




function game() {
    let playerScore = 0;
    let computerScore = 0;
    let i=0;
    const btn_container=document.querySelector('#btn-container')
    const results_div=document.querySelector('#results')
    
    btn_container.addEventListener('click',function(e){
        if (e.target.classList.contains("btn")) {
            i++;
            const computerSelection = getComputerChoice();
            let result = playRound(e.target.value, computerSelection)
            if (result.includes('Win')) {
                playerScore++;
            } else if (result.includes('Lose')) {
                computerScore++;
            }
            results_div.insertAdjacentHTML('beforeend', `<br>Round ${i}: ${result}`);

            if(playerScore==5||computerScore==5){
                results_div.insertAdjacentHTML('beforeend', `<br>Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
                if (playerScore > computerScore) {
                    results_div.insertAdjacentHTML('beforeend', `<br>You win the game!`);
                } else if (playerScore < computerScore) {
                    results_div.insertAdjacentHTML('beforeend', `<br>You lose the game!`);
                } else {
                    results_div.insertAdjacentHTML('beforeend', `<br>It\'s a tie!!`);   
                }
                playerScore = 0;
                computerScore = 0;
                i=0;
                
            }
            
        }
    })
}

game();

