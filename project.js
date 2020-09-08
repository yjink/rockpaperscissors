function computerPlay() {
  let hand = Math.random(); 
  
  if (hand > 0.33 && hand < 0.66) {
    return 'rock';
  } else if (hand > 0.66 && hand < 0.99) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
  
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  let comp = computerSelection.toLowerCase();
  
  if (player === comp) {
    return `Tie! No one wins!`
  } else if (player === 'rock' && comp === 'scissors' || player === 'paper' && comp === 'rock' || player === 'scissors' === comp === 'paper') {
    return `You win! ${player} beats ${comp}!`;
  } else {
    return `You lose! ${comp} beats ${player}!`;
  }
}
  
function game() {
  let round = 0;
  let win = 0;
  let lose = 0;
  while (round < 5) {
    round++;
    let playerSelection = prompt("Please enter a move: ", "Rock, paper, scissors");
  
      
  
    let computerSelection = computerPlay();
    
    let result = playRound(playerSelection, computerSelection);

    if (result.includes('You win')) {
      win++;
    } else if (result.includes('You lose')) {
      lose++;  
    }    

      // Print result
    console.log(result);
    
  }
  console.log(`The score is ${win} wins and ${lose} losses.`)
}

game()