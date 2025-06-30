
import {
  GameBoard,
  shipPlacement
} from './gameSetup';

const receiveAttack = (coordinates, board) => {
  const [row, column] = coordinates
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

const changePlayerTurn = (activePlayer) => {
  if (activePlayer === 'player1') {
    activePlayer = 'player2';
  } else if (activePlayer === 'player2') {
    activePlayer = 'player1';
  }
  return activePlayer;
};




export { receiveAttack, changePlayerTurn, checkWin};
