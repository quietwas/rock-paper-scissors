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
                console.log("You lost that round")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else if (computerSelection === "scissors"){
                humanScore++;
                console.log("You won that round")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else{
                console.log("It was a tie")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            break
        case "paper":
            if (computerSelection === "scissors"){
                computerScore++;
                console.log("You lost that round")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else if (computerSelection === "rock"){
                humanScore++;
                console.log("You won that round")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else{
                console.log("It was a tie")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            break
        case "scissors":
            if (computerSelection === "rock"){
                computerScore++;
                console.log("You lost that round")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else if (computerSelection === "paper"){
                humanScore++;
                console.log("You won that round")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            else{
                console.log("It was a tie")
                console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`)
            }
            break
    }
}

// Function to play an entire game
function playGame(){
    let count = 0
    while (count < 5){
        playRound()
        let go = prompt("Type y to play the next round")
        while (go != "y"){
            go = prompt("Type y to play the next round")
        }
        count++
    }
    if (humanScore > computerScore){
        humanScore = 0
        computerScore = 0
        return console.log("Congrats you won")
    }
    if (computerScore > humanScore){
        humanScore = 0
        computerScore = 0
        return console.log("You lost RIP")
    }

    humanScore = 0
    computerScore = 0
    return console.log("Lame it was a tie")
}

playGame()
