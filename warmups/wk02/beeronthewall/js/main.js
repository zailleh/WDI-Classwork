// console.log( "Hello World!" );


const singAlong = function ( bottles = 99, stopAt = 0) {

  for ( let i = bottles; i >= stopAt; i-- ) {
    let word1, word2, word3, sentence2 = 'Take one down, pass it around,';

    if ( i > 1) {
      word1 = i + ' bottles';
      word2 = word1;
      word3 = (i - 1) + ' bottles';
    } else if ( i === 1 ) {
      word1 = i + ' bottle';
      word2 = word1;
      word3 = 'no more bottles';
    } else if ( i === 0 ) {
      word1 = 'No more bottles';
      word2 = 'no more bottles';
      word3 = bottles + ' bottles';
      sentence2 = 'Go to the store and buy some more,'
    }

    console.log( `${ word1 } of beer on the wall, ${ word2 } of beer.`);
    console.log( `${ sentence2 } ${ word3 } bottles of beer on the wall...`);
  }
};
