
const isHappyNum = function (num, happyNums) {
  numsTested = [];

  while (num != 1) {
    numar = num.toString().split("") // get digits
    num = numar.reduce((t, n) => t + ((+n) ** 2), 0); // sum square of digits

    // if already tested this num, i'll be an infinte loop, so give up now.
    if (numsTested.includes(num)) { 
      break;
    }
    // if the num is already in the happy nums, it'll end in success, so end now, don't bother testing the rest
    else if (happyNums.includes(num)) { 
      num = 1;
      break;
    } else { // more testing to do, keep track of this number we've tested
      numsTested.push(num);
    }
  }

  return {
    isHappyNum: num === 1 ? true : false,
    numsTested: numsTested
  }
}

const getHappyNums = function (limit) {
  const happyNums = [];
  let i = 0

  while (happyNums.length < limit) {
    i++

    if (happyNums.includes(i)) {
      console.log(i);
    } else {
      testResult = isHappyNum(i, happyNums);
      
      if (testResult.isHappyNum) {
        console.log(i);
        happyNums.push([i, ...testResul.numsTested]);
      };
    }
  }

  return happyNums;
};