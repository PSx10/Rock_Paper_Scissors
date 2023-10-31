const playerPointsDiv = document.querySelector('.player-points');
const compPointsDiv = document.querySelector('.comp-points');
const optionsButtons = document.querySelectorAll('.options button');
const playerChoicesDiv = document.querySelector('.player-choice');
const anLoad = document.querySelector('.dots');
const compChoicesDiv = document.querySelector('.comp-choice');
const resultText = document.querySelector('.result-text')
const resetGameButton = document.querySelector('.reset-game');
var compElement = document.getElementById("compElement");
var hiding = document.getElementById("hiding");


let playerPoints = 0;
let compPoints = 0;
let playerChoice = '';
let compChoice = '';



function setGame(){
    playerPointsDiv.innerHTML = playerPoints;
    compPointsDiv.innerHTML = compPoints;
    resultText.innerHTML = "Result";
}


window.onload = setGame();


function playerSelect(event){
    optionsButtons.forEach((button) => button.classList.remove('active'));
    playerChoice = event.target.dataset.option;
    event.target.classList.add('active');
    console.log(playerChoice);    
    compSelect();
    compElement.classList.add("loading");
    hiding.classList.add("choices_dis");

    setTimeout(function() {
        compElement.classList.remove("loading");
        hiding.classList.remove("choices_dis");
        optionsButtons.forEach((button) => button.classList.remove('active'));
    }, 3000); 
}






const compSelection = ["Rock", "Paper", "Scissors"];

function compSelect(){
    console.log('comp is selecting');
    const randomIndex = Math.floor(Math.random() * compSelection.length);
    compChoice = compSelection[randomIndex];
    console.log(compChoice);
    checkResult();
}





function checkResult(){
    let winner = '';
    if (playerChoice === 'Rock' && compChoice === 'Scissors' || playerChoice === 'Scissors' && compChoice ==='Paper'
    || playerChoice === 'Paper' && compChoice === 'Rock')
    {
        playerPoints++;
        winner = 'You have won!';

    }
    else if (playerChoice === compChoice)
    {
        winner = 'Draw';
    }
    else{
        compPoints++;
        winner = 'You have lost!';
    }

    resultText.innerHTML = winner;
    playerChoicesDiv.innerHTML = playerChoice;
    compChoicesDiv.innerHTML = compChoice;
    console.log(winner);

    setTimeout(function() {
        compPointsDiv.innerHTML = compPoints;
        playerPointsDiv.innerHTML = playerPoints;
    }, 3000); 
}



optionsButtons.forEach(button => 
    button.addEventListener('click', playerSelect)
);


var Button = document.getElementById('switch');
var body = document.body;

Button.addEventListener('click', function() {
  body.style.backgroundImage = 'none';
  var randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  resetGameButton.addEventListener('click', function(){
    compPoints = 0;
    playerPoints = 0;
    compPointsDiv.innerHTML = compPoints;
    playerPointsDiv.innerHTML = playerPoints;
  });
    



