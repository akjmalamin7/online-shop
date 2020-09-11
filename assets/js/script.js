jQuery(document).ready(function(){

    // start hover menu
    $('ul.custom-hover li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
      });
    // start hover menu




    //start slick slider
      
        $('.home-slick-slider').slick({
            slidesToShow: 1,
            dots: true,
            infinite: true,
            speed: 700,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true
        });
   
     

    
    // zoom
    $("#exzoom").exzoom({
        autoplay:false
      });
      //zoom
      $("#zoom").elevateZoom({
        zoomType: "inner",
        debug: true,
        cursor: "crosshair"
    });

      
});

//sticky header
$(window).scroll(function(){
    if ($(window).scrollTop() >=10) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});