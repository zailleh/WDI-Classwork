// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

const anagramDetector = {
  wordList: [],
  checkForAnagrams: function (word) {
    let matchingWords = [];

    for (let i = 0; i < this.wordList.length; i++) {
      let anagram = this.wordList[i];
      let count = 0;
      for (let j = 0; j < word.length; j++) {
        if (anagram.toLowerCase().includes( word[j].toLowerCase() ) ) {
          count++;
        }
      }
      if (count === anagram.length ) {
        matchingWords.push( anagram );
      }
    }

    if ( matchingWords.length > 0 )  {
      return matchingWords;
    } else {
      return "No Anagrams Found";
    }
  },
  // END Check For Anagrams Function
  addWords: function () {
    for (let i = 0; i < arguments.length; i++ ) {
      if (!this.wordList.includes( arguments[i].toLowerCase() ) ) {
        this.wordList.push( arguments[i].toLowerCase() );
      }
    }
  }
  // END addWords function
}
