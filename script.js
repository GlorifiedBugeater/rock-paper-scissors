console.log("Hi there!")

function getComputerChoice (){
    let choiceNum = Math.random()
    if (choiceNum < 0.34) {
        return "Rock"
    }
    else if (choiceNum > 0.33 && choiceNum < 0.66) {
        return "Paper"
    }
    else if (choiceNum > 0.65) {
        return "Scissors"
    }
}

function capitalize (string) {
    let firstLetter = string.charAt(0).toUpperCase()
    let remainder = string.slice(1).toLowerCase()
    let newstring = firstLetter+remainder
    return newstring
}


function getHumanChoice () {
      choice = prompt("Please enter your choice: Rock, paper, scissors")
    
     return capitalize(choice)
}





function playGame() {
    let humanScore = 0
    let computerScore = 0
    console.log("Welcome to Rock, Paper, Scissors. We will be playing 5 rounds. Let's start the game!")
    
    for (let i=0; i < 5; i++) {
        playRound()
        console.log("current score: Machine",computerScore,"Human:",humanScore)
    }
    console.log("End of game, the Machine won", computerScore, "rounds, and you won ", humanScore, "rounds")
    if (humanScore > computerScore) {
        return console.log ("You won!")
    }
    else if (humanScore < computerScore) {
        return console.log ("You lost!")
    }
    else {
        return console.log ("Wow, it was a draw!")
    }

function playRound () {
    human = getHumanChoice()
    computer = getComputerChoice()
    console.log ("The machine has choosen",computer)
    console.log("You choose", capitalize(human))
    

    if (computer === "Rock" && human === "Scissors") {
        computerScore +=1
        return console.log("Rock beats scissors, you lost!")
    }
    else if (human === "Rock" && computer === "Scissors") {
        humanScore +=1
        return console.log("Rock beats scissors, you won!")
    }
    else if (human === "Paper" && computer === "Scissors") {
        computerScore +=1
        return console.log("Scissors beats paper, you lost!")
    }
    else if (computer === "Paper" && human === "Scissors") {
        humanScore +=1
        return console.log("Scissors beats paper, you won!")
    }
    else if (computer === "Paper" && human === "Rock") {
        computerScore +=1
        return console.log("Paper beats rock, you lost!")
    }
    else if (human === "Paper" && computer === "Rock") {
        humanScore +=1
        return console.log("Paper beats rock, you won!")
    }
    else if (human === computer) {
        return console.log("We have a draw")
    }
}

}
playGame()

