
const getAllergies = function (num) {
  // create allergies lookup table
  let allergies = {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  };

  
  // set default values
  let hasAllergies = false;
  let allergiesKeys = Object.keys(allergies);

  // get all valid numbers
  let validNumbers = [];
  // build all possible sums with each other
  allergiesKeys.forEach((s) => {
    validNumbers.push(+s);
    sum = +s
    
    for( let i = 0; i < validNumbers.length; i++ ) {
      s2 = +allergiesKeys[i];
      if (+s == +s2) {
        break;
      }
      validNumbers.push(+s + +s2);
      sum += + s2;
    }
  });
  
  
  if (validNumbers.includes( num )) {
    let allAllergies = [];
    hasAllergies = true;
    allergiesKeys.reverse().forEach( ( s, n ) => {
      let remainder = num - +s;
      if (remainder >= 0) {
        allAllergies.push( allergies[+s] );
        num -= +s;
      }
    })

    return `You have allergies to: ${allAllergies.join(", ")}`
  }
  else {
    hasAllergies = false;
    return `${num} is not a valid allergy number`;
    
  }
};

const testAllAllergies = function () {
  for (let i = 0; i < 256; i++) {
    console.log( "Testing:", i );
    console.log( getAllergies( i ));
  }
}

