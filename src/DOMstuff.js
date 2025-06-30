import { shipPlacement, GameBoard } from './gameSetup';

const visualBoard = (board) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = i;
      cell.dataset.column = j;
      board.appendChild(cell);
    }
  }
  return board;
};

const toShowShips = (board) => {
  const buckets = board;
  const playerBoard = document.querySelector('#player-board');
  const cells = playerBoard.querySelectorAll('.cell');
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[i][j][1] === 'X') {
        cells.forEach((cell) => {
          if (cell.dataset.row == i && cell.dataset.column == j) {
            cell.classList.add('ship');
          }
        });
      }
    }
  }
};

const toShowHits = (board, activePlayerBoard) => {
  const buckets = board;

  const cells = activePlayerBoard.querySelectorAll('.cell');
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[i][j][1] === 'H') {
        cells.forEach((cell) => {
          if (cell.dataset.row == i && cell.dataset.column == j) {
            cell.classList.add('hit');
          }
        });
      }
    }
  }
};

const toShowMiss = (board, activePlayerBoard) => {
  const buckets = board;

  const cells = activePlayerBoard.querySelectorAll('.cell');
  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets.length; j++) {
      if (buckets[i][j][1] === 'M') {
        cells.forEach((cell) => {
          if (cell.dataset.row == i && cell.dataset.column == j) {
            cell.classList.add('miss');
          }
        });
      }
    }
  }
};

export { visualBoard, toShowShips, toShowHits, toShowMiss };
