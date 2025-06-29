const GameBoard = () => {
  const capacity = 10;
  const buckets = Array.from({ length: capacity }, () => []);

  for (let i = 0; i < capacity; i++) {
    const bucket = buckets[i];
    for (let j = 0; j < 10; j++) {
      bucket.push([j, 'O']);
    }
  }

  return buckets;
};

function hash(key) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < key.length; i++) {
    hashCode = primeNumber * hashCode + key.toUpperCase().charCodeAt(i);
  }

  return hashCode % 10;
}

const player1Board = GameBoard();
const player2Board = GameBoard();

const shipPlacement = (buckets) => {
  const placed = new Set();

  const placeShip = (length) => {
    let success = false;

    while (!success) {
      const direction = Math.floor(Math.random() * 2); // 0: vertical, 1: horizontal
      const proposed = [];

      if (direction === 0) {
        const column = Math.floor(Math.random() * 10);
        const startRow = Math.floor(Math.random() * (10 - length + 1));

        for (let i = 0; i < length; i++) {
          const row = startRow + i;
          const key = `${row},${column}`;
          if (placed.has(key)) break;
          proposed.push(key);
        }

        if (proposed.length === length) {
          proposed.forEach((key) => {
            placed.add(key);
            const [row, column] = key.split(',').map(Number);
            const bucket = buckets[row];
            for (let j = 0; j < bucket.length; j++) {
              if (bucket[j][0] === column) bucket[j][1] = 'X';
            }
          });
          success = true;
        }
      } else {
        const row = Math.floor(Math.random() * 10);
        const startColumn = Math.floor(Math.random() * (10 - length + 1));
        const bucket = buckets[row];

        for (let i = 0; i < length; i++) {
          const column = startColumn + i;
          const key = `${row},${column}`;
          if (placed.has(key)) break;
          proposed.push(key);
        }

        if (proposed.length === length) {
          proposed.forEach((key) => {
            placed.add(key);
            const [row, column] = key.split(',').map(Number);
            for (let j = 0; j < bucket.length; j++) {
              if (bucket[j][0] === column) bucket[j][1] = 'X';
            }
          });
          success = true;
        }
      }
    }
  };

  placeShip(5);
  placeShip(4);
  placeShip(3);
  placeShip(3);
  placeShip(2);

  return buckets;
};

export { shipPlacement, player1Board };
