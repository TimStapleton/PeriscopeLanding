$(window).scroll(function(){
    //How much User has scrolled from top of the page (in pixels)
    var pxScroll = $(this).scrollTop();
    //Screen Height
    var screenHeight = $(window).height();
    //console.log (screenHeight);
    
    //Scroll variables for different sections
    var scrollHeader = -pxScroll/10,
        scrollPeriscope = (screenHeight - pxScroll)/10,
        scrollForm = (screenHeight*2 - pxScroll)/10;

    //This is where magic happens (we change css properties of .blur-bg element)
    $('#scroll-bg').css({
        //Parallax Effect
        'transform' : 'translate(0px, '+  scrollHeader +'px) scale(1.3)'
    })
    //This is where magic happens (we change css properties of .blur-bg element)
    $('#periscope-bg').css({
        'transform' : 'translate(0px, '+  scrollPeriscope +'px) scale(1.3)'
    })
    $('#form-bg').css({
        'transform' : 'translate(0px, '+  scrollForm +'px) scale(1.3)'
    })

    //And some more parallax effect for intro text and logo

    $('.title').css({
        'transform' : 'translate(0px, '+  (pxScroll)/5 +'px)'
    })
    $('.intro').css({
        'transform' : 'translate(0px, '+  (pxScroll)/3 +'px)'
    })
    $('#iphone').css({
        'transform' : 'translate(0px, '+  (pxScroll)/10 +'px)'
    })
});
