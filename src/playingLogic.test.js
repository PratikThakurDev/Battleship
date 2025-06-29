import { receiveAttack,changePlayerTurn } from "./playingLogic";
import { GameBoard,shipPlacement } from "./gameSetup";

test('receiveAttack returns "hit" and updates cell to H', () => {
  const board = GameBoard();
  board[2][3][1] = 'X'; // place ship manually
  const result = receiveAttack('2,3', board);
  expect(result).toBe('hit');
  expect(board[2][3][1]).toBe('H');
});

test('receiveAttack returns "miss" and updates cell to M', () => {
  const board = GameBoard();
  board[4][5][1] = ' '; // no ship
  const result = receiveAttack('4,5', board);
  expect(result).toBe('miss');
  expect(board[4][5][1]).toBe('M');
});

test('receiveAttack returns "you already played" on second attempt', () => {
  const board = GameBoard();
  board[1][1][1] = 'X';
  receiveAttack('1,1', board); // first attack — should be "hit"
  const result = receiveAttack('1,1', board); // second attack
  expect(result).toBe('you already played');
});

test('receiveAttack returns null if coordinates are invalid', () => {
  const board = GameBoard();
  const result = receiveAttack('15,2', board); // out-of-bounds row
  expect(result).toBe(null);
});

test('changePlayerTurn toggles between players', () => {
  activePlayer = 'player1';
  expect(changePlayerTurn()).toBe('player2');
  expect(changePlayerTurn()).toBe('player1');
});
