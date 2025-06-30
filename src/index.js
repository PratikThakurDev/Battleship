import { shipPlacement, GameBoard } from './gameSetup';
import './style.css';
import { visualBoard, toShowShips, toShowHits, toShowMiss } from './DOMstuff';
import { checkWin, receiveAttack } from './playingLogic';

let compHitStack = [];

const playerBoard = document.querySelector('#player-board');
const enemyBoard = document.querySelector('#enemy-board');
const restartBtn = document.querySelector('#restart-btn');
const reshuffleBtn = document.querySelector('#reshuffle-btn');
const statusBox = document.querySelector('#status');

let hitByPlayer1 = 0;
let hitByPlayer2 = 0;
let playerBoards = [];

const setupGame = () => {
  hitByPlayer1 = 0;
  hitByPlayer2 = 0;
  statusBox.textContent = '';

  playerBoard.innerHTML = '';
  enemyBoard.innerHTML = '';

  playerBoards = [shipPlacement(GameBoard()), shipPlacement(GameBoard())];

  visualBoard(playerBoard);
  visualBoard(enemyBoard);
  toShowShips(playerBoards[0]);

  const enemyCells = enemyBoard.querySelectorAll('.cell');
  enemyCells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
  });
}

const compMoves = () => {
  
  while (compHitStack.length > 0) {
    const [row, col] = compHitStack.pop();

    if (row >= 0 && row < 10 && col >= 0 && col < 10) {
      const cell = playerBoards[0][row][col];
      const status = cell[1];

      if (status !== 'H' && status !== 'M') {
        return [row, col];
      }
    }
  }

  let row, col, status;
  do {
    row = Math.floor(Math.random() * 10);
    col = Math.floor(Math.random() * 10);
    status = playerBoards[0][row][col][1];
  } while (status === 'H' || status === 'M');

  return [row, col];
}

const handleClick = (event) => {
  const clickedCell = event.target;
  const row = Number(clickedCell.dataset.row);
  const column = Number(clickedCell.dataset.column);
  const coordinates = [row, column];

  if (
    clickedCell.classList.contains('hit') ||
    clickedCell.classList.contains('miss')
  )
    return;

  const attack1 = receiveAttack(coordinates, playerBoards[1]);
  if (attack1 === 'hit') {
    toShowHits(playerBoards[1], enemyBoard);
    hitByPlayer1++;
  } else if (attack1 === 'miss') {
    toShowMiss(playerBoards[1], enemyBoard);
  }

  if (checkWin(hitByPlayer1, hitByPlayer2)) {
    statusBox.textContent = '🎉 Player Wins!';
    disableBoard();
    return;
  }

  const compMove = compMoves();
  const attack2 = receiveAttack(compMove, playerBoards[0]);
  if (attack2 === 'hit') {
    toShowHits(playerBoards[0], playerBoard);
    hitByPlayer2++;
    const [r, c] = compMove;
    compHitStack.push([r - 1, c]); // up
    compHitStack.push([r + 1, c]); // down
    compHitStack.push([r, c - 1]); // left
    compHitStack.push([r, c + 1]); // right
  } else if (attack2 === 'miss') {
    toShowMiss(playerBoards[0], playerBoard);
  }

  if (checkWin(hitByPlayer1, hitByPlayer2)) {
    statusBox.textContent = '💻 Computer Wins!';
    disableBoard();
    return;
  }
}

const disableBoard = () =>  {
  const enemyCells = enemyBoard.querySelectorAll('.cell');
  enemyCells.forEach((cell) => {
    cell.replaceWith(cell.cloneNode(true)); // remove all event listeners
  });
}

// Button handlers
restartBtn.addEventListener('click', setupGame);
reshuffleBtn.addEventListener('click', setupGame);

// Start the game on load
setupGame();
