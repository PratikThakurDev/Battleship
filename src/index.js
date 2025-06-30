import { shipPlacement,GameBoard } from "./gameSetup";
import './style.css'; 
import { visualBoard,toShowShips } from "./DOMstuff";


const playerBoard = document.querySelector("#player-board");
const enemyBoard = document.querySelector("#enemy-board");
const player1Board = shipPlacement(GameBoard())
visualBoard(playerBoard)
toShowShips(player1Board)
visualBoard(enemyBoard)

