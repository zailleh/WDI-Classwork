console.log( "***** Exercises: Objects *****");
// Exercises: Objects *******************
// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
console.log( "\r\n***** Favourite Recipes *****");
const favouriteRecipe = {
  title: 'Sourdough',
  serves: 2,
  ingredients: [
    'Plain Flour',
    'Water',
    'Starter',
    'Salt'
  ]
};

console.log( `${ favouriteRecipe.title }` );
console.log( `Serves: ${ favouriteRecipe.serves }` );
console.log( 'Ingredients' );

const favIngredients = favouriteRecipe.ingredients;
for (let i = 0; i < favIngredients.length; i++ ) {
  console.log( ` - ${ favIngredients[i] }`);
}

// alternatively, could print ingredients with string.join
// eg: console.log( favouriteRecipe.ingredients.join( '\r\n' ) );


// The Reading List *******************
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
console.log( "\r\n***** The Reading List *****\r\n");

// make reading list array of objects to hold our books.
const readingList = [
  {
    title: "Lord Of the Rings",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  {
    title: "Speaking in Bones",
    author: "Kathy Reichs",
    alreadyRead: true
  }
];


// print out note about each book.
for (let i = 0; i < readingList.length; i++) {
  let msg;
  const book = readingList[i];
  if ( book.alreadyRead ) {
    msg = 'You have already read ';
  } else {
    msg = 'You still need to read ';
  }

  msg += `"${ book.title }" by ${ book.author }.`;

  console.log( msg );
}


// The Movie Database *******************
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
console.log( "\r\n***** The Movie Database *****\r\n");

const myImdb = {
  title: 'Terminator 2: Judgement Day',
  duration: 156,
  stars: [
    'Arnold Schwarzenegger',
    'Edward Furlong',
    'Linda Hamilton',
    'Robert Patrick',
    'Joe Morton'
  ]
};


const printMovieInfo = function ( movie ) {
  let msg = `${ movie.title } lasts for ${ movie.duration } minutes. Stars: ${ movie.stars.join(', ') }.`

  return msg;
}

console.log( printMovieInfo( myImdb ) );
