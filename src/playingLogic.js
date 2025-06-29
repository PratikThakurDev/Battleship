import { GameBoard, shipPlacement } from './gameSetup';

const receiveAttack = (coordinates, board) => {
  let hit = 0;
  const [row, column] = coordinates.split(',').map(Number);
  if (row < 0 || row >= 10 || column < 0 || column >= 10) {
    return null;
  }
  const bucket = board[row];
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === column) {
      if (bucket[i][1] === 'X') {
        bucket[i][1] = 'H';
        hit++;
        return 'hit';
      } else if (bucket[i][1] === ' ') {
        bucket[i][1] = 'M';
        return 'miss';
      } else {
        return 'you already played';
      }
    }
  }
  return null;
};

const changePlayerTurn = () => {
  if (activePlayer === 'player1') {
    activePlayer = 'player2';
  } else if (activePlayer === 'player2') {
    activePlayer = 'player1';
  }
  return activePlayer;
};

export { receiveAttack ,changePlayerTurn};
