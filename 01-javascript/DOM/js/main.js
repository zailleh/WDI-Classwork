console.log("hello world");
//
//



const body = document.body;

// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
body.style.fontFamily = "Arial, sans-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById( 'nickname' ).textContent = "Merlin";
document.getElementById( 'favorites' ).textContent = "Chocoloate, lemonade";
document.getElementById( 'hometown' ).textContent = "Newcastle";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
const liTags = document.getElementsByTagName( 'li' );

for (let i = 0; i < liTags.length; i++ ){
  liTags[i].className = "listitem";
}


// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const img = document.createElement( 'img');
img.src = "http://fillmurray.com/256/256";

body.appendChild( img );
