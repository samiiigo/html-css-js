const choices = ['rock', 'paper', 'scissors'];

updateScore();

function resetScore() {
    localStorage.removeItem("scores");
    updateScore();
    document.querySelector(".round-results").innerHTML = "";
    document.querySelector(".round-choices").innerHTML = "";
}
function updateScore(result) {
    let score = JSON.parse(localStorage.getItem("scores"))||{wins:0,losses:0,ties:0};
    switch (result) {
        case "win":
            score.wins++;
            break;
        case "lose":
            score.losses++;
            break;
        case "tie":
            score.ties++;
            break;
        default:
            break;
    }
    localStorage.setItem("scores", JSON.stringify(score));
    document.querySelector('.player-score-text').innerHTML = 'Wins: '+score.wins+', Losses: '+score.losses+', Ties:'+score.ties;
}
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
function playRound(player_choice) {
    let computer_choice = getComputerChoice();
    let result;

    if (player_choice === "rock") {
        if (computer_choice === "rock") {
            result = 'tie';
        }
        else if (computer_choice === "paper") {
            result = 'lose';
        }
        else if (computer_choice === "scissors") {
            result = 'win';
        }
    }
    else if (player_choice === "paper") {
        if (computer_choice === "rock") {
            result = 'win';
        }
        else if (computer_choice === "paper") {
            result = 'tie';
        }
        else if (computer_choice === "scissors") {
            result = 'lose';
        }
    }
    else if (player_choice === "scissors") {
        if (computer_choice === "rock") {
            result = 'lose';
        }
        else if (computer_choice === "paper") {
            result = 'win';
        }
        else if (computer_choice === "scissors") {
            result = 'tie';
        }
    }

    if (result === "win") {
        score = updateScore("win");
        document.querySelector('.round-results').innerHTML = 'You Win!';
        document.querySelector('.round-choices').innerHTML = 'You <img class="emoji-result-1" src="./images/'+player_choice+'-emoji.png"> <img class="emoji-result-2" src="./images/'+computer_choice+'-emoji.png"> Computer'; 
    } else if (result === "lose") {
        score = updateScore("lose");
        document.querySelector('.round-results').innerHTML = 'You Lose!';
        document.querySelector('.round-choices').innerHTML = 'You <br><img class="emoji-result-1" src="./images/'+player_choice+'-emoji.png"> <img class="emoji-result-2" src="./images/'+computer_choice+'-emoji.png"> Computer'; 
    } else if (result === "tie") {
        score = updateScore("tie");
        document.querySelector('.round-results').innerHTML = 'It\'s a Tie!';
        document.querySelector('.round-choices').innerHTML = 'You <img class="emoji-result-1" src="./images/'+player_choice+'-emoji.png"> <img class="emoji-result-2" src="./images/'+computer_choice+'-emoji.png"> Computer'; 
    }
}

document.querySelector('.button-rock').addEventListener('click',function(){playRound('rock')},false);
document.querySelector('.button-paper').addEventListener('click',function(){playRound('paper')},false);
document.querySelector('.button-scissors').addEventListener('click',function(){playRound('scissors')},false);
document.querySelector('.reset-button').addEventListener('click',resetScore,false);