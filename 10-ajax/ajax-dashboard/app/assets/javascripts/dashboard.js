// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

const updateInfo = function (info) { 
  $('#time').text(info.time);
  $('#uptime').text(info.uptime);
  $('#brother').text(info.brother);
};

$(document).ready( () => {

  setInterval( () => {
    // $.get('/time').done( updateTime )
    // $.get('/brother').done((bro) => { $('#brother').text(bro)})
    // $.get('/uptime').done((ut) => { $('#uptime').text(ut)})

    // $('#time').load('/time')
    // $('#brother').load('/brother')
    // $('#uptime').load('/uptime')

    $.getJSON('/info').done( updateInfo );
  }, 1000);
});