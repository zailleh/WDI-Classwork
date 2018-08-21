var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Exercises
console.log( 'Iterate through numbers and log each number to the console');
_(numbers).each( (n) => {
  console.log(n);
});

console.log( "Iterate through numbers and multiply each one of them by 5\r\n",
  _(numbers).map( (n) => {
    return n * 5;
  })
);

console.log( "Iterate through numbers and reduce it by adding them together\r\n",
  _(numbers).reduce( (acc, n) => {
    return acc + n;
  })
);

////////////////////////////////////////////////////////////////////////////////
var people = [
  { id: 1, username: "A", active: true, age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true, age: 65 },
  { id: 5, username: "E", active: true, age: 80 },
  { id: 6, username: "E", active: true, age: 95 },
];

console.log( "Get an array of all of the people in people that have the username \"E\"\r\n",
  _(people).where( {username: 'E' } )
);

console.log( "Find the first object in people that has the id of 3\r\n",
  _(people).findWhere( { id: 3 } )
);

console.log( "Find the first person who has an age of less than 50\r\n",
  _(people).find( (person) => {
    return person.age < 50;
  })
);

console.log( "Get an array of all of the people with an age of over 60\r\n",
  _(people).filter( (person) => {
    return person.age > 60;
  })
);

console.log( "Remove all of the people with an age less than 40\r\n",
  _(people).reject( (person) => {
    return person.age < 40;
  })
);




var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var people = [
  { id: 1, username: "A", active: true, age: 20, uid: 1412 },
  { id: 2, username: "B", active: false, age: 35, uid: 1352 },
  { id: 3, username: "C", active: false, age: 50, uid: 5418 },
  { id: 4, username: "D", active: true, age: 65, uid: 216 },
  { id: 5, username: "E", active: true, age: 80, uid: 18 },
  { id: 6, username: "E", active: true, age: 95, uid: 1000 },
];

var words = [
  "attoparsec", "batch", "Cinderalla Book", "Dr. Fred Mbogo", "eat flaming death", "fandango on core", "Foonly", "goat file", "Halloween Documents", "I see no X here", "Imminent Death Of The Net Predicted!", "jibble", "kilogoogle", "larval stage", "maximum Maytag mode", "nybble", "octal forty", "pico-", "quantum bogodynamics", "rubber-hose cryptanalysis", "sigmonster", "tail recursion", "unswizzle", "VAXen", "webmaster", "XEROX PARC", "yak shaving", "Zero-One-Infinity Rule"
]; 

// Random words from here... http://www.catb.org/jargon/html/go01.html
// Exercises
// Sort the people by 'uid'
sortedPeeps = _(people).sortBy('uid')
console.log(sortedPeeps);

// Group the random words by the lower case version of their first letter
grouped = _(words).groupBy( (word) => {
  return word[0].toLowerCase()
});
console.log( grouped );

// Check to see if all the words have more than 3 characters
words3 = _(words).every( (w) => { return w.length > 3});
console.log( words3 );
// Check if some words are over twenty characters long
over20 = _(words).any( (w) => { return w.length > 20});
console.log( over20 );

// Get an array of all of the uids in people
uids = _(people).pluck( 'uid' );
console.log( uids );

// Find the person with the highest uid
maxUid = _.max(uids)
console.log( maxUid );

// Return an object that says how many even numbers and how many odd numbers there are in numbers
oddsAndEvens = _(numbers).groupBy((n) => {return n % 2 === 0 ? 'evens' : 'odds' });
console.log( oddsAndEvens );

// Get three random numbers out of numbers
rand3 = _(numbers).sample(3);
console.log(rand3);
