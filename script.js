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
function playRound() {
    const  humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    switch (humanSelection) {
        case "rock":
            if (computerSelection === "paper"){
                computerScore++;
                alert("Computer chose paper so you lost that round")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else if (computerSelection === "scissors"){
                humanScore++;
                alert("Computer chose scissors so you won that round")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else{
                alert("Computer chose rock so it was a tie")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            break
        case "paper":
            if (computerSelection === "scissors"){
                computerScore++;
                alert("Computer chose scissors so you lost that round")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else if (computerSelection === "rock"){
                humanScore++;
                alert("Computer chose rock so you won that round")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else{
                alert("Computer chose paper so it was a tie")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            break
        case "scissors":
            if (computerSelection === "rock"){
                computerScore++;
                alert("Computer chose rock so you lost that round")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else if (computerSelection === "paper"){
                humanScore++;
                alert("Computer chose paper so you won that round")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else{
                alert("Computer chose scissors so it was a tie")
                alert(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            break
    }
}

// Function to play an entire game
function playGame(){
    let count = 0
    while (count < 5){
        playRound()
        count++
    }
    if (humanScore > computerScore){
        humanScore = 0
        computerScore = 0
        alert("Congrats you won")
        return
    }
    if (computerScore > humanScore){
        humanScore = 0
        computerScore = 0
        alert("You lost RIP")
        return
    }

    humanScore = 0
    computerScore = 0
    alert("Lame it was a tie")
}

playGame()
