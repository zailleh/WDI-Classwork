// WDI28 - Day 4 Warmup
const raindrops = function ( number ) {
  let drops = '';

  if ( number % 3 === 0 )
    drops += 'Pling';

  if ( number % 5 === 0 )
    drops += 'Plang';

  if ( number % 7 === 0 )
    drops += 'Plong';

  if (drops)
    console.log(drops);
  else
    console.log(number);
};


// WDI28 - Day 5 Warmup
// Create a function that takes an input and returns Serge's response.
const heySerge = function ( msg ) {
  // He says 'Fine. Be that way!' if you address him without actually saying anything.
  if ( msg === undefined ) {
     console.log( 'Fine. Be that way!' );

  // He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
  } else if ( msg.toUpperCase() === msg ) {
    console.log( 'Woah, chill out!' );

  // Serge answers 'Sure.' if you ask him a question.
  } else if ( msg[msg.length - 1 ] === '?' ) {
    console.log( 'Sure.') ;

  // He answers 'Whatever.' to anything else.
  } else {
    console.log( 'Whatever.' );
  }
};
