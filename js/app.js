$(".slider1> div:gt(0)").hide();

setInterval(function() {
  $('.slider1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.slider1');
},  3000);
