let humanScore = 0
let computerScore = 0

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


function computerVictory () {
    const gameLog = document.querySelector("#gameLog")
    const content = document.createElement("div")
    content.classList.add("gameLog")
    content.textContent = "The machine has reached 5 points, thus winning, you lost!"
    gameLog.appendChild(content)
}

function humanVictory () {
    const gameLog = document.querySelector("#gameLog")
    const content = document.createElement("div")
    content.classList.add("gameLog")
    content.textContent = "You have reached 5 points, thus winning, the Machine has lost, CONGRATULATIONS!"
    gameLog.appendChild(content)
}

function humanWin () {
    const divScore = document.querySelector("#score")
    humanScore +=1

    const content = document.createElement('div')
    content.classList.add("divScore")
    const returnText  = "Human: "+humanScore+" Computer: "+computerScore
    content.textContent=returnText
    divScore.appendChild(content)

    const gameLog = document.querySelector("#gameLog")
    const content1 = document.createElement("div")
    content.classList.add("gameLog")
    const returntext = "you won!"
    content1.textContent = returntext
    gameLog.appendChild(content1)
    console.log("human Score",humanScore,"computer Score",computerScore)
    if (humanScore === 5)
        return humanVictory()
    return
}

function computerWin () {
    const divScore = document.querySelector("#score")
    computerScore +=1

    const content = document.createElement('div')
    content.classList.add("divScore")
    const returnText  = "Human: "+humanScore+" Computer: "+computerScore
    content.textContent=returnText
    divScore.appendChild(content)

    const gameLog = document.querySelector("#gameLog")
    const content1 = document.createElement("div")
    content.classList.add("gameLog")
    const returntext = "you lost!"
    content1.textContent = returntext
    gameLog.appendChild(content1)
    console.log("human Score",humanScore,"computer Score",computerScore)
    if (computerScore === 5)
        return computerVictory()
    return
}


function playRound (humanChoice) {
    human = capitalize(humanChoice)
    computer = getComputerChoice()
    const gameLog = document.querySelector("#gameLog")
    const content = document.createElement("div")
    content.classList.add("gameLog")
    const returntext = "The machine has choosen "+computer
    content.textContent = returntext
    gameLog.appendChild(content)
    console.log('human choice',human,'computer choice',computer)
    

    if (computer === "Rock" && human === "Scissors") {
        return computerWin()
        
    }
    else if (human === "Rock" && computer === "Scissors") {
        return humanWin()
        
    }
    else if (human === "Paper" && computer === "Scissors") {
        return computerWin()
        
    }
    else if (computer === "Paper" && human === "Scissors") {
        return computerWin()
    }
    else if (computer === "Paper" && human === "Rock") {
        return computerWin()
        
    }
    else if (human === "Paper" && computer === "Rock") {  
        return humanWin()
    }
    else if (human === computer) {
        return console.log("We have a draw")
    }
}



let rockBtn = document.querySelector("#rock")
function handleRockClick () {
    playRound("Rock")
}
rockBtn.addEventListener('click',handleRockClick)


let paperBtn = document.querySelector("#paper")
function handlePaperClick () {
    playRound("Paper")
}
paperBtn.addEventListener('click',handlePaperClick)


let scissorsBtn = document.querySelector("#scissors")
function handleScissorsClick () {
    playRound("Scissors")
}
scissorsBtn.addEventListener('click',handleScissorsClick)



// function playRound (human) {
    
//     computer = getComputerChoice()
//     console.log ("The machine has choosen",computer)
//     console.log("You choose", capitalize(human))
    

//     if (computer === "Rock" && human === "Scissors") {
//         computerScore +=1
//         return console.log("Rock beats scissors, you lost!")
//     }
//     else if (human === "Rock" && computer === "Scissors") {
//         humanScore +=1
//         return console.log("Rock beats scissors, you won!")
//     }
//     else if (human === "Paper" && computer === "Scissors") {
//         computerScore +=1
//         return console.log("Scissors beats paper, you lost!")
//     }
//     else if (computer === "Paper" && human === "Scissors") {
//         humanScore +=1
//         return console.log("Scissors beats paper, you won!")
//     }
//     else if (computer === "Paper" && human === "Rock") {
//         computerScore +=1
//         return console.log("Paper beats rock, you lost!")
//     }
//     else if (human === "Paper" && computer === "Rock") {
//         humanScore +=1
//         return console.log("Paper beats rock, you won!")
//     }
//     else if (human === computer) {
//         return console.log("We have a draw")
//     }
// }

// function getHumanChoice () {
//       choice = prompt("Please enter your choice: Rock, paper, scissors")
    
//      return capitalize(choice)
// }





// function playGame() {
//     let humanScore = 0
//     let computerScore = 0
//     console.log("Welcome to Rock, Paper, Scissors. We will be playing 5 rounds. Let's start the game!")
    
//     for (let i=0; i < 5; i++) {
//         playRound()
//         console.log("current score: Machine",computerScore,"Human:",humanScore)
//     }
//     console.log("End of game, the Machine won", computerScore, "rounds, and you won ", humanScore, "rounds")
//     if (humanScore > computerScore) {
//         return console.log ("You won!")
//     }
//     else if (humanScore < computerScore) {
//         return console.log ("You lost!")
//     }
//     else {
//         return console.log ("Wow, it was a draw!")
//     }