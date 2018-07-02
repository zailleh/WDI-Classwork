$(document).ready( function() {
  $('#name').on('keyup', function() {
    $('header h1').html(`Welcome ${ $( this ).val() }`);
  });

  $('#name').on('blur', function() {
    $('header').removeClass('begin');
  })
  
  $('#name').on('focus', function() {
    $('header').addClass('begin');
  })

});
