const abcRange = function ( startLetter = 'a', endLetter = 'z', upCase = false ) {
  // debugger;
  // create alphabet string
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'

  if (upCase) {
    // make upper case 
    alphabet = alphabet.toUpperCase().split('')
    startLetter = startLetter.toUpperCase()
    endLetter = endLetter.toUpperCase()
  }
  else {
    // make lower case
    alphabet = alphabet.split('')
    startLetter = startLetter.toLowerCase()
    endLetter = endLetter.toLowerCase()
  }

  // return the requested range
  return alphabet.slice(
    alphabet.indexOf(startLetter),
    1 + alphabet.indexOf(endLetter)
  )
}

const atbashCodec = function ( str ) {
  // create an alphabet and a reverse alphabet array.
  const alphabet = abcRange();
  const reverseAlphabet = abcRange().reverse();

  // initialize a new empty string
  let newStr = '';

  // loop through letters in the input string
  for(let i = 0; i < str.length; i++ ) {
    // get the reverse letter by finding the index of the letter in the alphabet
    let letterIndex = alphabet.indexOf(str[i].toLowerCase())
    let letter = reverseAlphabet[letterIndex];

    // add new letter to string unless it's undefined, in which case add the original
    if (letter !== undefined) {
      // add the letter preserving the original case
      newStr += str[i].toUpperCase() === str[i] ? letter.toUpperCase() : letter;
    } else {
      newStr += str[i];
    }
  }

  // return our encoded/decoded string
  return newStr;
}


console.log( 'test encodes to:', atbashCodec('test') );
console.log( 'gvhg decodes to:', atbashCodec('gvhg') );
console.log( '"This String" encodes to:', atbashCodec('This String') );