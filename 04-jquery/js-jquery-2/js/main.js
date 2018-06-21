//
// const $anchors = $('a')
//
// for( let anchor of $anchors ) {
//   $anchor = $( anchor );
//
//   // Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
//   const thumbUrl = youtube.generateThumbnailUrl( $anchor.attr('href') );
//
//   // Create an IMG element using document.createElement(tagName)
//   const $thumb = $( '<img>' ).attr( 'src',thumbUrl );
//
//   // Append the IMG to the link using element.appendChild(element)
//   $anchor.append( $thumb );
// }

// simplified above into two lines!
$('a').each(function () {
  $( this ).append( $('<img>').attr( 'src', youtube.generateThumbnailUrl( $( this ).attr( 'href' ) ) ) );
});
