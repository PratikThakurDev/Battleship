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

export { visualBoard };
