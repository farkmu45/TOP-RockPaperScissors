let playerScore = 0
let compScore = 0

function getComputerChoice() {
  const forms = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3) + 1
  return forms[randomNumber - 1]
}

function playRound(playerSelection, computerSelection) {
  let playerWon = null
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection == 'rock') {
    playerWon = compareAgainstRock(computerSelection)
  } else if (playerSelection == 'scissors') {
    playerWon = compareAgainstScissors(computerSelection)
  } else if (playerSelection == 'paper') {
    playerWon = compareAgainstPaper(computerSelection)
  }

  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
  computerSelection =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)

  if (playerWon == 1) {
    playerScore += 1
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else if (playerWon == 0) {
    return `It's a tie!`
  } else {
    compScore += 1
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}

// Functions to compare against each player move
function compareAgainstPaper(form) {
  if (form == 'rock') {
    return 1
  } else if (form == 'scissors') {
    return -1
  } else if (form == 'paper') {
    return 0
  }
}

function compareAgainstScissors(form) {
  if (form == 'rock') {
    return -1
  } else if (form == 'paper') {
    return 1
  } else if (form == 'scissors') {
    return 0
  }
}

function compareAgainstRock(form) {
  if (form == 'scissors') {
    return 1
  } else if (form == 'paper') {
    return -1
  } else if (form == 'rock') {
    return 0
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Your turn')
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
  }

  if (playerScore == compScore) {
    console.log("It's a tie!!")
  } else if (playerScore > compScore) {
    console.log('You WIN!')
  } else {
    console.log('You LOSE :(')
  }
}

game()
