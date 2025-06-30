import { shipPlacement,GameBoard } from "./gameSetup";
import './style.css'; 
import { visualBoard } from "./DOMstuff";


const playerBoard = document.querySelector("#player-board");
const enemyBoard = document.querySelector("#enemy-board");

visualBoard(playerBoard)
visualBoard(enemyBoard)

