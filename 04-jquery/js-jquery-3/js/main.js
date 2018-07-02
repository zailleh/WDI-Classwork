// simplified above into two lines!
const thumbnailify = function() {
  $( this )
    .append( $( '<img>' ).attr( 'src', youtube.generateThumbnailUrl( $( this ).attr( 'href' ))))
    .click( function ( ev ) {
      ev.preventDefault() // disable default behaviour on anchor.
      $( '#videoplayer' ).hide().html( $( '<iframe width="560" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' ).attr('src', youtube.generateEmbedUrl( $( this ).attr('href')) + "?autoplay=1")).fadeIn(2000);
    });



    /* YT Embed Format:
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TddFnTB_7IM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    */
}

$('a').each( thumbnailify )
