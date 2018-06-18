const isLeapYear = function ( year ) {
  // leap year when: divisible by 4, but not when also divisible by 100, unless divisible by 400
  return ( year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0 ) );
}

// called whrn user submits year im html form
const checkIfLeapYear = function () {
  let year = document.getElementById( 'year' ).value;
  console.log( year );

  // set response text
  if ( isLeapYear( year ) ) {
    year += " is a leap year!"
  } else {
    year += " is not a leap year..."
  }

  console.log( year );
  document.getElementById( 'output' ).innerHTML = year;
}
