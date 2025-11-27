// Script for handling all game logic

// Function to return a random number in range(3)
function returnRandomInt(max) {
    return Math.floor(Math.random() * max)
}

// Switch between values to return either rock, paper, or scissors
function getComputerChoice(){
    let num = returnRandomInt(3)
    switch (num) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

// Prompt user for input and return it
function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors?")
    switch (choice.toLowerCase()) {
        case "rock":
            return choice.toLowerCase()
        case "paper":
            return choice.toLowerCase()
        case "scissors":
            return choice.toLocaleLowerCase()
        default:
            getHumanChoice()
    }
}

// Score Tracker
let humanScore = 0
let computerScore = 0

// Logic to play a round
function playRound(humanSelection) {
    computerSelection = getComputerChoice()
    switch (humanSelection) {
        case "rock":
            if (computerSelection === "paper"){
                computerScore++;
                roundDescription.textContent = "Computer chose paper so you lost that round"
            }
            else if (computerSelection === "scissors"){
                humanScore++;
                roundDescription.textContent = "Computer chose scissors so you won that round"
            }
            else{
                roundDescription.textContent = "Computer chose rock so it was a tie"
            }
            break
        case "paper":
            if (computerSelection === "scissors"){
                computerScore++;
                roundDescription.textContent = "Computer chose scissors so you lost that round"
            }
            else if (computerSelection === "rock"){
                humanScore++;
                roundDescription.textContent = "Computer chose rock so you won that round"
            }
            else{
                roundDescription.textContent = "Computer chose paper so it was a tie"
            }
            break
        case "scissors":
            if (computerSelection === "rock"){
                computerScore++;
                roundDescription.textContent = "Computer chose rock so you lost that round"
            }
            else if (computerSelection === "paper"){
                humanScore++;
                roundDescription.textContent = "Computer chose paper so you won that round"
            }
            else{
                roundDescription.textContent = "Computer chose scissors so it was a tie"
            }
            break
    }
}

// DOM Manipulation
const container = document.querySelector("#container")

const score = document.createElement('h2')
container.append(score)

const roundDescription = document.createElement('p')
container.append(roundDescription)

function updateScore(){
    score.textContent = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`
}

function gameState(){
    if (humanScore === 5) {
        score.textContent = "YOU WON!"
        humanScore = 0
        computerScore = 0
    }
    else if (computerScore === 5) {
        score.textContent = "You lost :("
        humanScore = 0
        computerScore = 0
    }
    else {
        updateScore()
    }
}

gameState()

const rock = document.createElement("button")
rock.textContent = "Rock"
const paper = document.createElement("button")
paper.textContent = "Paper"
const scissors = document.createElement("button")
scissors.textContent = "Scissors"

container.append(rock, paper, scissors)

rock.addEventListener("click", () => {
    playRound("rock")
    gameState()
})
paper.addEventListener("click", () => {
    playRound("paper")
    gameState()
})
scissors.addEventListener("click", () => {
    playRound("scissors")
    gameState()
})