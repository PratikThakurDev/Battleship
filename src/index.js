import { shipPlacement,player1Board } from "./gameSetup";

const board = shipPlacement(player1Board);
if (!Array.isArray(board)) {
  console.error("shipPlacement() did not return a valid board.");
  process.exit(1);
}

const display = board
  .map((row, i) =>
    row
      .map((cell, j) => {
        if (!Array.isArray(cell) || typeof cell[1] !== 'string') {
          console.warn(`Invalid cell at [${i}, ${j}]`, cell);
          return '?';
        }
        return cell[1];
      })
      .join(' ')
  )
  .join('\n');

console.log(display);