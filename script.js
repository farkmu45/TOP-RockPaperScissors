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

  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
  computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)

  if (playerWon == 1) {
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else if (playerWon == 0) {
    return `It's a tie!`
  } else {
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
}

game()
