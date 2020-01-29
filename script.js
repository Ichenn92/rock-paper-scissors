const enumChoice = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}
let playerPoint;
let computerPoint;
let newTrial = true;

//----------------------------------------------------------------------------
function playRound(playerSelection, computerSelection) {
    let draw = `DRAW! ${playerSelection} against ${computerSelection}`;
    let win = `YOU ROCK! ${playerSelection} win against ${computerSelection}`;
    let lose = `LOSER! ${playerSelection} lose against ${computerSelection}`;

    if (playerSelection == enumChoice.ROCK) {
        switch (computerSelection) {
            case enumChoice.ROCK: alert(draw); return "draw";
            case enumChoice.PAPER: alert(lose); return "lose";
            case enumChoice.SCISSORS: alert(win); return "win";
        }
    }
    else if (playerSelection == enumChoice.PAPER) {
        switch (computerSelection) {
            case enumChoice.ROCK: alert(win); return "win";
            case enumChoice.PAPER: alert(draw); return "draw";
            case enumChoice.SCISSORS: alert(lose); return "lose";
        }
    }
    else {
        switch (computerSelection) {
            case enumChoice.ROCK: alert(lose); return "lose";
            case enumChoice.PAPER: alert(win); return "win";
            case enumChoice.SCISSORS: alert(draw); return "draw";
        }
    }
}

//----------------------------------------------------------------------------
function playerSelection() {
    let selection;
    do {
        selection = prompt("what is your choice [rock, paper or scissors] ?");
        selection = selection.charAt(0).toLowerCase();
        console.log(selection);
    } while (!isValid(selection));

    return getChoice(selection);
}

//----------------------------------------------------------------------------
function isValid(input) {
    switch (input) {
        case 'r': return true;
        case 'p': return true;
        case 's': return true;
        default: alert('Your input is incorrect, Please try again'); return false;
    }
}

//----------------------------------------------------------------------------
function randomComputerSelection() {
    let selection = getChoice(Math.floor(Math.random() * 3));
    //console.log("AI choice is " + selection);
    return selection;
}

//----------------------------------------------------------------------------
function getChoice(selection) {
    switch (selection) {
        case 'r': selection = 0; break;
        case 'p': selection = 1; break;
        case 's': selection = 2; break; k
    }
    switch (selection) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

//----------------------------------------------------------------------------
function finalWinner(playerPoint, computerPoint) {
    if (playerPoint < computerPoint) {
        alert("DAMN... YOU SUCK AT THAT GAME, YOU LOSE : " + computerPoint + " to " + playerPoint)
    }
    else if (playerPoint > computerPoint) {
        alert("YOU WON MY FRIEND : " + playerPoint + " to " + computerPoint)
    }
    else {
        alert("THE MATCH IS EVEN : " + computerPoint + " to " + playerPoint)
    }
}

//----------------------------------------------------------------------------
function game() {
    let whoWin;
    let round = 0;
    let roundMax = 0;
    playerPoint = 0;
    computerPoint = 0;

    do {
        roundMax = prompt('How many rounds do you want to play? [from 1 to 10]');
    } while (!(roundMax >= 1 && roundMax <= 10));

    for (round = 0; round < roundMax; round++) {
        whoWin = playRound(playerSelection(), randomComputerSelection());
        switch (whoWin) {
            case "draw": break;
            case "lose": computerPoint++; break;
            case "win": playerPoint++; break;
        }
        alert(`Round ${round + 1} = [You ${playerPoint}-${computerPoint} Computer]`);
    }
}

//----------------------------------------------------------------------------
function tryAgain() {
    let input;
    do {
        input = prompt('Do you want to try again? [Y/n]');
        input = input.charAt(0).toLowerCase();
    } while (input !== 'y' && input !== 'n');

    if (input == 'y') {
        return true;
    }
    else {
        return false;
    }
}

//--------------- MAIN -----------------
while (newTrial) {
    game();
    finalWinner(playerPoint, computerPoint);
    newTrial = tryAgain();
}