console.log( _.VERSION )

// EACH ////////////////////////////////////////////////////////////////////////
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// JS ES2016 forEach
// nums.forEach( (n, i, a) => { 
//   console.log(i,n,a);
// });

// Underscore _.each
// _.each( nums, (n, i, a) => {
//   console.log(i,n,a);
// });

// Underscore _().each
_(nums).each( (n, i, a) => {
  console.log(i, n, a);
});

const obj = {
  4: 'four',
  5: 'five',
  6: 'six'
};

// _(obj).each for objects
_(obj).each( ( value, key, entireObj ) => {
  console.log(`The key ${ key } has the value of ${ value }`);
});

const groucho = {
  name: 'Groucho Marx',
  instrument: 'Guitar',
  vice: 'Cigars'
};

_(groucho).each( (v,k,o) => {
  console.log(`${k} is ${v}`);
});

// .map() //////////////////////////////////////////////////////////////////////

// const byFives = [];
// _(nums).each( (n) => {
//   byFives.push(n*5)
// });
let byFives = nums.map( (n) => {
  return n * 5;
});
console.log('ES2016', byFives)


byFives = _(nums).map( (n) => {
  return n*5;
});
console.log('Underscore',byFives);

// map also works with objects
const grouchoInfo = _(groucho).map( ( v, k ) => {
  return `${k}: ${v}`.toUpperCase();
});

console.log( grouchoInfo );


// .reduce() ///////////////////////////////////////////////////////////////////

const sum = _(nums).reduce( (acc, n) => {
  console.log('accumulator',acc);
  console.log('next num:', n);
  
  return acc + n;
});

console.log(sum);

// .find() /////////////////////////////////////////////////////////////////////
const firstMultipleofFour = _(nums).find( (n) => {
  return n % 4 === 0;
});

// .find() also works with objects but isn't very useful
const firstMatch = _(groucho).find( ( v, k ) => {
  return v === 'insomnia';
});

// .filter() ///////////////////////////////////////////////////////////////////
const isEven = function (n) {
  return n % 2 === 0;
}

const evens = _(nums).filter(isEven);
console.log( evens );

// .reject() ///////////////////////////////////////////////////////////////////
const odds = _(nums).reject(isEven);
console.log( odds );


console.log( nums.includes(1) );

// .pluck() ////////////////////////////////////////////////////////////////////
const bros = [
  { name: 'Groucho', instrument: 'Guitar', vice: 'Cigars' },
  { name: 'Harpo',   instrument: 'Harp',   vice: 'Mutism' },
  { name: 'Chico',   instrument: 'Piano',  vice: 'Infidelity' }
]

console.log( _(bros).pluck('name') );

// .max & .min /////////////////////////////////////////////////////////////////

console.log( "min", _(nums).min() );
console.log( "max", _(nums).max() );


// .sortBy() /////////////////////////////////////////////////////////////////

console.log( _(bros).sortBy('name') );
console.log( _(nums).shuffle() );
console.log( _(nums).sample(4) );
