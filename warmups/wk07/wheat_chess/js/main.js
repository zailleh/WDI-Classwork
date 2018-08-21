console.log('hello world!');

// The wheat and chessboard problem
// There is a legend about the invention of chess in which a man presents his game to an Indian prince.Impressed by the game, the prince offers the wise man a reward of his choosing.

// The man states:

// "I wish for a grain of wheat and a chess board. On the first square of the board, give me one grain of wheat -- for every square on the chessboard, give me the double the number of grains as the square before. Do this for all 64 squares on the board."

// On first hearing this sum, the prince considered it trivial sum and agreed, thinking the man a fool-- until his advisors actually calculated the total he would actually owe.

// He later has the man executed for trying to bankrupt the kingdom. I love a happy ending.

//   Task
// Write a program that can calculate the total number of wheat grains that would be owed to the man by the end of the board.

//   Tips:
// Math.pow(), try use underscore(especially range and reduce).

// Bonus trivia:
// This is a really old story, first mentioned in 1256, however chess was invented somewhere around 600 AD(still in India).

const board = new Array(64);
board[0] = 1;

const wheat = _(board).reduce((wht, n, i) => {
  wht += wht*2
  if (wht > Number.MAX_SAFE_INTEGER) {
    console.log("wht is now higher than max save integer in js");
  }
  console.log(wht);
  return wht
})

console.log("Total grains of wheat for the chess board:", wheat );

