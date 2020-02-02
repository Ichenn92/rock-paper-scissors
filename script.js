let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('computer-score');
const resultMessage_p = document.querySelector(".result-message");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice(){
    const choice = ["r","p","s"];
    return choice[Math.floor(Math.random()*3)]
}

function charToName(choice){
    switch (choice){
        case "r": return "Rock"; break;
        case "p": return "Paper"; break;
        case "s": return "Scissors"; break;
    }
}

function win(userChoice, computerChoice){
   userScore++; 
   userScore_span.innerHTML = userScore;
   const smallUserWord = "user".fontsize(3).sub();
   const smallCompWord = "comp".fontsize(3).sub();
   resultMessage_p.innerHTML = `${charToName(userChoice)}${smallUserWord} win over ${charToName(computerChoice)}${smallCompWord} 🔥`;
   document.getElementById(userChoice).classList.add('disabled');
   setTimeout( function() {document.getElementById(userChoice).classList.remove('disabled')}, 300);
   document.getElementById(userChoice).classList.add('green-glow');
   setTimeout( function() {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
}
function draw(userChoice, computerChoice){
    resultMessage_p.innerHTML = "DRAW!"
    document.getElementById(userChoice).classList.add('disabled');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('disabled')}, 300);
 }
 function lose(userChoice, computerChoice){
    compScore++; 
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    resultMessage_p.innerHTML = `${charToName(userChoice)}${smallUserWord} loose over ${charToName(computerChoice)}${smallCompWord} 💩`;
    document.getElementById(userChoice).classList.add('disabled');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('disabled')}, 300);
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
 }

function game(userChoice){
    let computerChoice = getComputerChoice();

    switch(userChoice+computerChoice){
        case "rs":
        case "sp":
        case "pr": win(userChoice, computerChoice); break;
        case "rr":
        case "pp":
        case "ss": draw(userChoice, computerChoice); break;
        case "rp":
        case "ps":
        case "sr": lose(userChoice, computerChoice); break;
    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();