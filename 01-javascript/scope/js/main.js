// console.log('hello world');

/*
JavaScript ES6 offers three keywords for identifying or naming data:

  const   block scope
  let     block scope
  var     function scope

These things diffe in scope, which determines which identifiers are accesible
at different points in your program.

As a general rule, try to declare your identifiers with const first.

If you need to reassign: change the const to a let.

If you need to acces the identifier outside of a block: change the let to a var


*/

////////////////////////////////////////////////////////////////////////////////
//  var examples
////////////////////////////////////////////////////////////////////////////////
var message = "hello";
const showMessage = function () {
  console.log( message ); // a vart in a global scope is accessible within functions.
};

showMessage();

// var within a function
////////////////////////////////////////////////////////////////////////////////
const showLocalMessage = function () {
  // local message variable
  var message = "good morning"; // this shadows the global message vart
  console.log( message );
};

showLocalMessage();


// var inside a block
////////////////////////////////////////////////////////////////////////////////

const answer = 42;
if ( answer === 42 ) {
  var favouriteFood = 'Sashimi'; // favouriteFood will be visible outside the block
}

console.log( favouriteFood ); // expect to see 'Sashimi';
//console.log( someOtherVar ); // is not defined; "hoisting"

////////////////////////////////////////////////////////////////////////////////
//  let examples
////////////////////////////////////////////////////////////////////////////////
const password = 'swordfish';
if ( password === 'swordfish' ) {
  let quote = 'The human minds has chords'; // quote exists only inside this if block
  console.log( quote ); // 'the human mind has cords' output in console
}

// console.log( quote ); // quote is inaccesible here.

////////////////////////////////////////////////////////////////////////////////
// const examples
////////////////////////////////////////////////////////////////////////////////
/*
  A const follows the same rules as a let: block scope
  Except that you cannot reassign to it.
*/

const list = ['shoes','toothpaste'];
list.push('cumin')

// list = []; // this will error as it can't be reassigned

/////////
const daysPerWeek = 7;
if (daysPerWeek === 7 ) {
  const insperationalQuote = 'Something very inspriational';
  console.log( insperationalQuote );
}

// console.log( insperationalQuote ); // insperationalQuote is inaccesible
