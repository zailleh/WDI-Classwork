// PAIRWISE
// Given an array [arr], find element pairs whose sum equal the second argument
// [arg] and return the sum of their indices.
// If multiple pairs possible return the smallest sum of indices. 
// Once an element has been used, it cannot be reused to pair with another.
const pairwise = function( arr, sum ) {
  const pairs = [];
  
  // go through each element in the array
  arr.forEach( (e, i) => {
    // proceed if we haven't used this index
    if (!pairs.includes( i ))
    {
      // subtract element from sum (eg 20 - 9 = 11)
      const r = sum - e;

      // find first unused pair index (eg arr[i] === 11)
      let pair;
      for( let j = i; j < arr.length; j++ ){
        if ( arr[j] === r && !pairs.includes( j )) {
          pair = j;
          break; // stop looping when found a pair
        }
      }
      //if pair was found add to our pairs array
      if ( pair !== undefined ) {
        pairs.push( i );
        pairs.push( pair );
      }
    }
  });

  // return the sum of the indices
  return pairs.reduce( (t,e) => t + e );
}