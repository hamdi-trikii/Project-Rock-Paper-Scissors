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

    for (let i = 0; i < 5; i++) {
        const playerSelection = 'Rock'; 
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i + 1}: ${result}`);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (playerScore < computerScore) {
        console.log('You lose the game.');
    } else {
        console.log('It\'s a tie!');
    }
}

// Example usage:
game();
