const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Invalid input, please select rock paper or scissors')
  }
};

const getComputerChoice = compInput => {
  compInput = Math.floor(Math.random()*3);
  switch(compInput) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    break;
  }
}

const determineWinner = (userChoice , computerChoice) => {

if (userChoice === computerChoice) {
  return'The game is a tie!';
} 

if (userChoice === 'rock'){
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You Won!'
  }
}

if (userChoice === 'paper'){
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!'
  }
}

if (userChoice === 'scissors'){
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!'
  }
}


if (userChoice === 'bomb'){
  return 'You Won, you dirty cheater!'
}
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('the computer threw ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();