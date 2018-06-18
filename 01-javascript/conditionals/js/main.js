console.log('JS Active');
//
// What number's bigger?
// Write a function named greaterNum that:
//
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

const greaterNum = function ( num1, num2 ) {
  if(num1 > num2) {
    return num1;
  } else if (num1 === num2){
    console.log("You can't trick me, they're the same, bucko!")
    return num1;
  } else {
    return num2;
  }
};



// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

const helloWorld = function ( lang ) {
  if (lang === 'en') {
    return "Hello World!";
  } else if (lang === 'jp' ) {
    return "konnichiha sekai";
  } else if (lang === 'cn' ) {
    return "nǐ hǎo, shìjiè";
  } else {
    return "Hello World!";
  }
};

// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

const assignGrade = function ( score ) {
  if ( score >= 90 ) {
    return "A";
  } else if ( score >= 80 ) {
    return "B";
  } else if ( score >= 70 ) {
    return "C";
  } else if ( score >= 60 ) {
    return "D";
  } else if ( score >= 50 ) {
    return "E";
  } else {
    return "F";
  }
};


// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

const pluralize = function ( noun, number ) {
  let newNoun;

  if ( number === 1 ) { // not a plural
    newNoun = noun;
  } else {
    // is a plural
    if ( noun.toLowerCase() === 'goose' ) {
      newNoun = 'Geese';
    } else if ( noun.toLowerCase() === 'sheep' || noun.toLowerCase() === 'fish' ) { // nouns that don't change with plurals
      newNoun = noun;
    } else if ( noun.toLowerCase() === 'princess' ) { // nouns that end in ES when plural
      newNoun = noun+'es';
    } else {
      newNoun = noun+'s';
    }
  }

  return `${number} ${newNoun}`;
};
