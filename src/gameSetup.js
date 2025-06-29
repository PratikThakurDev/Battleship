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



export { shipPlacement, player1Board };
