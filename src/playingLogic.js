import {
  GameBoard,
  shipPlacement,
  player1Board,
  player2Board,
} from './gameSetup';

const receiveAttack = (coordinates, board) => {
  const [row, column] = coordinates.split(',').map(Number);
  if (row < 0 || row >= 10 || column < 0 || column >= 10) {
    return null;
  }

  const bucket = board[row];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === column) {
      if (bucket[i][1] === 'X') {
        bucket[i][1] = 'H';

        return 'hit';
      } else if (bucket[i][1] === ' ') {
        bucket[i][1] = 'M';
        return 'miss';
      } else {
        return 'you already played';
      }
    }
  }
};

const checkWin = (hitByPlayer1, hitByPlayer2) => {
  if (hitByPlayer1 === 17 || hitByPlayer2 === 17) {
    return true;
  } else return false;
};

const changePlayerTurn = () => {
  if (activePlayer === 'player1') {
    activePlayer = 'player2';
  } else if (activePlayer === 'player2') {
    activePlayer = 'player1';
  }
  return activePlayer;
};

const gameSequence = (player1Board, player2Board) => {
  let hitByPlayer1 = 0;
  let hitByPlayer2 = 0;
  let activePlayer = 'player1';
  while (!checkWin(hitByPlayer1, hitByPlayer2)) {
    if (activePlayer === 'player1') {
      const attack = receiveAttack('2,4', player2Board);
      if (attack === 'you already played') return;
      if (attack === 'hit') hitByPlayer1++;
      if (checkWin(hitByPlayer1, hitByPlayer2)) {
        //disable clicks
      }
      changePlayerTurn();
    } else if (activePlayer === 'player2') {
      const attack = receiveAttack('2,4', player1Board); //will make input coordinates by player after html and css
      if (attack === 'you already played') return;
      if (attack === 'hit') hitByPlayer2++;
      if (checkWin(hitByPlayer1, hitByPlayer2)) {
        return `${activePlayer} wins!`;
        //disable clicks
      }
      changePlayerTurn();
    }
  }
};

export { receiveAttack, changePlayerTurn, checkWin, gameSequence };
