const selectSwatch = function (e) {
  $(this)
}



$(document).ready( () => {
  $('#add-color').on('click', () => {
    const color = $('#color').val()
    const $swatch = $('<div />')
                      .addClass('swatch')
                      .css('background-color', color);

    $swatch.appendTo('.pallet');
  });

  $('.pallet').on('click', (e) => {
    $('.swatch').removeClass('active')

    $swatch = $(e.target);
    $swatch.addClass('active')
  })

  $(".canvas").on('mousedown', function(e) {
    console.log(this)
    $(this).addClass('drawing');
    console.log('now drawing');
  });

  $('.canvas').on('mousemove', function(e) {
    if ($(this).hasClass('drawing')) {
      console.log('draw')
      color = $(".swatch.active").css("background-color");
      $pixel = $(e.target)
      $pixel.css('background-color', color);
    }
  })

  $(".canvas").on('mouseup', function(e) {
    $(this).removeClass('drawing');
    console.log("stop drawing");
  });
});