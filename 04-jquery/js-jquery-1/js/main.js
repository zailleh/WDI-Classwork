// Create an array of every link on the page using document.querySelectorAll(cssSelector)
//
// Iterate through the array. In each iteration of the loop:
//
// Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)
// Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the DOM Review here

let anchors = document.querySelectorAll( 'a' );


// Iterate through the array. In each iteration of the loop:
for( let anchor of anchors ) {
  // Find the current href using element.getAttribute(name), and store into a variable
  const videoUrl = anchor.getAttribute( 'href' );

  // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
  const thumbUrl = youtube.generateThumbnailUrl( videoUrl );

  // Create an IMG element using document.createElement(tagName)
  const thumb = document.createElement( 'img' );

  // Set the "src" of the IMG element using element.setAttribute(name, value)
  thumb.setAttribute( 'src', thumbUrl );

  // Append the IMG to the link using element.appendChild(element)
  anchor.appendChild( thumb );
}
