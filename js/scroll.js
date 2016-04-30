$(window).scroll(function(){

  //How much User has scrolled from top of the page (in pixels)
  var pxScroll = $(this).scrollTop();

  //This is where magic happens (we change css properties of .blur-bg element)
  $('#scroll-bg').css({
      //Parallax Effect
      'transform' : 'translate(0px, '+  (pxScroll)/700 +'%) scale(1.3)',
  })
  //And some more parallax effect for intro text and logo
  $('.title').css({
      'transform' : 'translate(0px, '+  (pxScroll)/7 +'px)',
  })
  $('.intro').css({
      'transform' : 'translate(0px, '+  (pxScroll)/5 +'px)',
  })
});
