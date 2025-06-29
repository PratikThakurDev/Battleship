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
    const direction = Math.floor(Math.random() * 2); //0 => vertical, 1 => horizontal

    if (direction === 0) {
      const column = Math.floor(Math.random() * 10);
      const startrow = Math.floor(Math.random() * (10 - length + 1));
      let count = 0;

      while (count < length) {
        let row = startrow + count;
        const place = `${row},${column}`;
        if (placed.has(place)) return;
        count++;
        placed.add(place);
        const bucket = buckets[row];
        for (let j = 0; j < bucket.length; j++) {
          if (bucket[j][0] === column) {
            bucket[j][1] = 'X';
          }
        }
      }
    } else if (direction === 1) {
      const row = Math.floor(Math.random() * 10);
      const startcolumn = Math.floor(Math.random() * (10 - length + 1));
      const bucket = buckets[row];
      let count = 0;

      while (count < length) {
        let column = startcolumn + count;
        const place = `${row},${column}`;
        if (placed.has(place)) return;
        placed.add(place);
        count++;
        for (let j = 0; j < bucket.length; j++) {
          if (bucket[j][0] === column) {
            bucket[j][1] = 'X';
          }
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
