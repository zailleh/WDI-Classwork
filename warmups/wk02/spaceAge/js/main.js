const whatsMySpaceAge = function ( age, planet ) {
  const self = arguments.callee // get a reference to this current function object

  // convert seonds to earth years
  const earthYears = age / self.secondsInYear;
  console.log( `You are ${ earthYears.toFixed(2) } Earth years old!` );

  //if planet undefined or isn't a valid planet, print result for all planets
  if ( planet === undefined || !Object.keys( self.planets ).includes( planet.toLowerCase() )) {
    for ( let p in self.planets ) { // loop through planet keys
      let pAge = earthYears / self.planets[ p ]; //calculate relative age
      console.log( `You are ${ pAge.toFixed(2) } ${ p } years old!`);
    }
    // else print just the inputed planet
  } else {
    let pAge = earthYears / self.planets[ planet.toLowerCase() ]; //calculate relative age
    console.log( `You are ${ pAge.toFixed(2) } ${ planet } years old!`);
  }
}

whatsMySpaceAge.planets = {
  //earth: 1, //years multiplier
  mercury: 0.2408467, //times earth
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}

whatsMySpaceAge.secondsInYear = 31557600;
