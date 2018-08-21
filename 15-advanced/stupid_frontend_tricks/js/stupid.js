$(document).ready(() => {

  // Cache some DOM elements
  const $bill = $('.bill-js');
  const $body = $(document.body);



  // Parallax on window.scroll
  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop * 0.4);
    $body.css('background-position-y', scrollTop / 1.5);
  });

  // Bubbles
  $(window).on('mousemove', (e) => {
    const {pageX: x, pageY: y} = e; //destructuring
    
    console.log(x,y,10*y);
    
    const $bubble = $('<div class="bubble" />')
                      .css({top: y, left: x})
                      .appendTo($body)
                      .animate({top: '-100'}, 2*y, () => {
                        $bubble.remove()
                      });
    
  });
});