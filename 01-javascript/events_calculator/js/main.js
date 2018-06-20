console.log( 'hello world' );

const setSolution = function ( string ) {
  if (isNaN(string)) {
    document.getElementById( 'solution' ).innerHTML = "Supply the numbers first!";
  } else {
    document.getElementById( 'solution' ).innerHTML = string;
  }
}

// calculate the area of a circle
const calcArea = function ()
{
  const radius = parseFloat(document.getElementById( 'area-input' ).value);
  const area = Math.PI * Math.pow(radius,2);
  setSolution(area);
};


// half number
const halfNumber = function () {
  const a = parseFloat(document.getElementById( 'half-input' ).value);
  setSolution( a / 2 );
}

// square a number
const squareNum = function () {
  const a = parseFloat(document.getElementById( 'square-input' ).value);
  setSolution( a * a );
}

// get percentages
const getPercent = function () {
  const fraction = parseFloat(document.getElementById( 'percent1-input' ).value);
  const whole = parseFloat(document.getElementById( 'percent2-input' ).value);
  setSolution( parseFloat(fraction / whole * 100).toFixed(2) );
}

document.getElementById( 'square-button' ).addEventListener( 'click', squareNum );
document.getElementById( 'half-button' ).addEventListener( 'click', halfNumber );
document.getElementById( 'percent-button' ).addEventListener( 'click', getPercent );
document.getElementById( 'area-button' ).addEventListener( 'click', calcArea );
