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
const player = document.getElementById('player')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const score = document.getElementById('score')


// letplayer1Choice
let result 
let player1score = 0
let player2score = 0
let turn = 1

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    player1Choice = e.target.id
    player1ChoiceDisplay.innerHTML = player1Choice
    // player1ChoiceDisplay.innerHTML = ` <div id="${player1Choice}"></div>`
    generatecomputerChoice()
    getResults()
 }))

//  possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
//     player2Choice = e.target.id
//     player2ChoiceDisplay.innerHTML = player2Choice
//     generatecomputerChoice()
//     getResults()
//  }))

function generatecomputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1 

    if (randomNumber === 1){
        computerChoice = 'rock'
        // computerChoiceDisplay.innerHTML =   ` <div id="rock"></div>`
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
        // computerChoiceDisplay.innerHTML =   ` <div id="paper"></div>`
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
        // computerChoiceDisplay.innerHTML =   ` <div id="scissors"></div>`
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults(){
    if (computerChoice === player1Choice){
        result = "It's a TIE!"
    }
    if (computerChoice === 'rock'&& player1Choice === 'paper'){
        if(turn === 1){
            result = 'player1 wins'
            player1score += 1 
        } else if( turn === 2){
            result = 'player2 wins'
            player2score +=1
        }
    }
    if (computerChoice === 'rock' && player1Choice === 'scissors'){
        result = 'computer wins'
    }
    if (computerChoice === 'paper' && player1Choice === 'scissors'){
        if(turn === 1){
            result = 'player1 wins'
            player1score += 1 
        } else if( turn === 2){
            result = 'player2 wins'
            player2score +=1
        }
    }
    if (computerChoice === 'paper' && player1Choice === 'rock'){
        result = 'computer wins'
    }
    if (computerChoice === 'scissors' && player1Choice === 'rock'){
        if(turn === 1){
            result = 'player1 wins'
            player1score += 1 
        } else if( turn === 2){
            result = 'player2 wins'
            player2score +=1
        } 
    }
    if (computerChoice === 'scissors' && player1Choice === 'paper'){
        result = 'computer wins'
    }
    if(turn === 1){
        turn = 2 
    } else if( turn === 2){
        turn = 1 
    }

    resultDisplay.innerHTML = result
    score.innerHTML = player1score + ':' + player2score
    
}

















 
