$(document).ready(function () {
    
    $(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInDown');
      }
    });
  });

  $(window).scroll(function() {
    $('.mov1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+900) {
        $(this).addClass('fadeInUp');
      }
    });
  });
    
    $(window).scroll(function() {
    $('.mov2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+1000000) {
        $(this).addClass('fadeInLeft');
      }
    });
  });
 
    
});




		
