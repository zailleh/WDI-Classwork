// console.log('hello world');

//
// Scrabble Score Write a program that, given a word, computes the scrabble score for that word.
//
// scrabble("cabbage") => 14

const values = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
}


const scrabble = function ( word ) {
  word = word.toUpperCase().split("");
  let totalScore = 0;

  // loop through each letter
  for ( let i = 0; i < word.length; i++ ) {

    // check each letter against the scores
    for ( let score in values ) {

      // add score to total if contains letter
      if (values[ score ].includes( word[ i ]) ) {
        totalScore += Number(score);
        break; // stop checking when found
      }
    }
  }

  return totalScore;
}

console.log( "cabbage", scrabble("cabbage") );
console.log( "hello", scrabble("hello") );
console.log( "WebDevelopmentImmersive",  scrabble("WebDevelopmentImmersive") );
console.log( "General",  scrabble("General") );
console.log( "Assembly", scrabble("Assembly") );
