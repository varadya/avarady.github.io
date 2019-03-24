// Everything OK?
console.log('OK');


// Your Awesome Scripts



$( document ).ready(function() {
    // Main variables
      var $aboutTitle = $('.about-myself .content h2');
      var $developmentWrapper = $('.development-wrapper');
      var developmentIsVisible = false;
  
  
    // hero 
  
    $('.hero .content .header').delay(500).animate({
      'opacity':'1',
      'top': '50%'
    },1000);
  
  
    $(window).scroll( function(){
  
      var bottom_of_window = $(window).scrollTop() + $(window).height();
  
      // ABOUT MYSELF SECTION 
      if( bottom_of_window > ($aboutTitle.offset().top + $aboutTitle.outerHeight())){
        $('.about-myself .content h2').addClass('aboutTitleVisible');
      } 
    
    }); // End window scroll 
  });





