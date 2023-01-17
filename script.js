const buttons = document.querySelectorAll('.btn')
const result = document.getElementById('result')
const score = document.getElementById('score')
const winner = document.getElementById('winner')

for (const button of buttons) {
  button.addEventListener('click', () => {
    playRound(button.dataset.selection, getComputerChoice())
  })
}

let playerScore = 0
let compScore = 0

function getComputerChoice() {
  const forms = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * 3) + 1
  return forms[randomNumber - 1]
}

function playRound(playerSelection, computerSelection) {
  if (playerScore == 5 || compScore == 5) {
    return
  }

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
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
  } else if (playerWon == 0) {
    result.textContent = `It's a tie!`
  } else {
    compScore += 1
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
  }

  score.textContent = `P = ${playerScore}, C = ${compScore}`

  if (playerScore == 5) {
    winner.textContent = 'The winner is player'
  } else if (compScore == 5) {
    winner.textContent = 'The winner is computer'
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
