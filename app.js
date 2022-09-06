// ROCK PAPER SCISSORS//

// Wireframe:  player 1 vs computer//
// input : rock, paper , scissors//
// if player 1 inputs : rock beats scissors && scissors beats paper && paper beats rocks//
// if computer inputs : rock beats scissors && scissors beats paper && paper beats rocks//
// if player 1 or computer inputs : same then it will be a tie//
// the best out of 3 wins then the loser will vs player 2 //
// player 2 will vs player 1 or computer//
// best out of that game will be the overall winner//


// start button to start playing the game//
// reset button to reset the game//
// player 1 on the left side//
// computer on the right side//
// player 2 on the loser side after player 1 & computer game is over//
// player 2 will vs winner//
// overall winner will be determined after that round//
// each round will be best out of 3//


// Story : When playing Rock, Paper & Scissors the objective of the game is to pick between the 3 choices that will beat the other person's choice. For example, if you pick rock you will hope your opponent picks scissors because then you win! However, if you both pick rock then it will be a tie then you will go again. You can play this game for how many rounds you want, but for my game it will be best out of 3 for both rounds. The first round is player 1 vs computer whomever wins will verus player 2. The second round will determine the winner of the entire game. Then you can start the game all over again. There will be a reset button that will be available to press during the duration of either round if the game needs to be resetted.//



const computerChoiceDisplay = document.getElementById('computer-choice')
const player1ChoiceDisplay = document.getElementById('player1-choice')
const player2ChoiceDisplay = document.getElementById('player2-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

// letplayer1Choice
let result 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    player1Choice = e.target.id
    player1ChoiceDisplay.innerHTML = player1Choice
    generatecomputerChoice()
    getResults()
 }))

 possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    player2Choice = e.target.id
    player2ChoiceDisplay.innerHTML = player2Choice
    generatecomputerChoice()
    getResults()
 }))





function generatecomputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1 

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults(){
    if (computerChoice === player1Choice){
        result = "It's a TIE!"
    }
    if (computerChoice === 'rock'&& player1Choice === 'paper'){
        result = 'player1 wins'
    }
    if (computerChoice === 'rock' && player1Choice === 'scissors'){
        result = 'computer wins'
    }
    if (computerChoice === 'paper' && player1Choice === 'scissors'){
        result = 'player1 wins'
    }
    if (computerChoice === 'paper' && player1Choice === 'rock'){
        result = 'computer wins'
    }
    if (computerChoice === 'scissors' && player1Choice === 'rock'){
        result = 'player1 wins'
    }
    if (computerChoice === 'scissors' && player1Choice === 'paper'){
        result = 'computer wins'
    }
    resultDisplay.innerHTML = result
}
function getResults(){
    if (player2Choice === player1Choice){
        result = "It's a TIE!"
    }
    if (player2Choice === 'rock'&& player1Choice === 'paper'){
        result = 'player1 wins'
    }
    if (player2Choice === 'rock' && player1Choice === 'scissors'){
        result = 'computer wins'
    }
    if (player2Choice === 'paper' && player1Choice === 'scissors'){
        result = 'player1 wins'
    }
    if (player2Choice === 'paper' && player1Choice === 'rock'){
        result = 'computer wins'
    }
    if (player2Choice === 'scissors' && player1Choice === 'rock'){
        result = 'player1 wins'
    }
    if (player2Choice === 'scissors' && player1Choice === 'paper'){
        result = 'computer wins'
    }
    resultDisplay.innerHTML = result
}

















 