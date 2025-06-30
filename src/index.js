import { shipPlacement, GameBoard } from './gameSetup';
import './style.css';
import { visualBoard, toShowShips, toShowHits, toShowMiss } from './DOMstuff';
import { checkWin, receiveAttack, compMoves } from './playingLogic';

const playerBoard = document.querySelector('#player-board');
const enemyBoard = document.querySelector('#enemy-board');

const boardGenerator = () => {
  const player1Board = shipPlacement(GameBoard());
  const player2Board = shipPlacement(GameBoard());
  return [player1Board, player2Board];
};

const restartBtn = document.querySelector('#restart-btn');
const reshuffleBtn = document.querySelector('#reshuffle-btn');

const playerBoards = boardGenerator();
visualBoard(playerBoard);
toShowShips(playerBoards[0]);
visualBoard(enemyBoard);

let hitByPlayer1 = 0;
let hitByPlayer2 = 0;
const handleClick = (event) => {
  const clickedCell = event.target;
  const row = clickedCell.dataset.row;
  const column = clickedCell.dataset.column;
  const coordinates = [row, column];
  if (
    clickedCell.classList.contains('hit') ||
    clickedCell.classList.contains('miss')
  )
    return;
  const attack1 = receiveAttack(coordinates.map(Number), playerBoards[1]);
  if (attack1 === 'hit') {
    toShowHits(playerBoards[1], enemyBoard);
    hitByPlayer1++;
  }
  if (attack1 === 'miss') toShowMiss(playerBoards[1], enemyBoard);

  if (checkWin(hitByPlayer1, hitByPlayer2)) {
    document.querySelector('#status').textContent = 'Player Wins!';
    return;
  }

  const compMove = compMoves();
  const attack2 = receiveAttack(compMove, playerBoards[0]);
  if (attack2 === 'hit') {
    toShowHits(playerBoards[0], playerBoard);
    hitByPlayer2++;
  }
  if (attack2 === 'miss') toShowMiss(playerBoards[0], playerBoard);

  if (checkWin(hitByPlayer1, hitByPlayer2)) {
    document.querySelector('#status').textContent = 'Computer Wins!';
    return;
  }
};

const enemyCells = enemyBoard.querySelectorAll('.cell');
enemyCells.forEach((cell) => {
  cell.addEventListener('click', handleClick);
});
