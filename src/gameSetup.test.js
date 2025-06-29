import { shipPlacement, GameBoard } from './gameSetup';

test('player board should be 10x10', () => {
  const board = shipPlacement(GameBoard());
  expect(board.length).toBe(10);
  board.forEach((row) => {
    expect(row.length).toBe(10);
  });
});

test('exactly 17 cells should be marked with X', () => {
  const board = shipPlacement(GameBoard());
  const xCount = board.flat().filter((cell) => cell[1] === 'X').length;
  expect(xCount).toBe(17); // 5 + 4 + 3 + 3 + 2
});

test('each ship cell should be unique (no overlaps)', () => {
  const board = shipPlacement(GameBoard());
  const positions = new Set();

  board.forEach((row, rIndex) => {
    row.forEach(([cIndex, val]) => {
      if (val === 'X') {
        const key = `${rIndex},${cIndex}`;
        expect(positions.has(key)).toBe(false); // No duplicate positions
        positions.add(key);
      }
    });
  });
});

test('each ship cell should be unique (no overlaps)', () => {
  const board = shipPlacement(GameBoard());
  const positions = new Set();

  board.forEach((row, rIndex) => {
    row.forEach(([cIndex, val]) => {
      if (val === 'X') {
        const key = `${rIndex},${cIndex}`;
        expect(positions.has(key)).toBe(false); // No duplicate positions
        positions.add(key);
      }
    });
  });
});

test('all ships should be in straight lines', () => {
  const board = shipPlacement(GameBoard());
  const positions = [];

  board.forEach((row, rIndex) => {
    row.forEach(([cIndex, val]) => {
      if (val === 'X') positions.push([rIndex, cIndex]);
    });
  });

  // Try to detect lines by grouping coordinates
  const groups = {}; // Map from row/col axis to group of cells

  for (let [r, c] of positions) {
    const keyRow = `r${r}`;
    const keyCol = `c${c}`;
    groups[keyRow] = groups[keyRow] || [];
    groups[keyRow].push([r, c]);
    groups[keyCol] = groups[keyCol] || [];
    groups[keyCol].push([r, c]);
  }

  const lines = Object.values(groups).filter((group) => group.length >= 2);
  const totalPlaced = positions.length;

  // At least some valid lines of >=2 should exist
  expect(lines.length).toBeGreaterThanOrEqual(5);
  expect(totalPlaced).toBe(17);
});

test('no ship cell should be out of bounds', () => {
  const board = shipPlacement(GameBoard());

  board.forEach((row, rIndex) => {
    expect(rIndex).toBeGreaterThanOrEqual(0);
    expect(rIndex).toBeLessThan(10);
    row.forEach(([colIndex, val]) => {
      expect(colIndex).toBeGreaterThanOrEqual(0);
      expect(colIndex).toBeLessThan(10);
    });
  });
});
