var main = function() {
  
    $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    var currentMenu = $('.active-menu');
    var nextMenu = currentMenu.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
      nextMenu = $('.slide-menu').first();
    }
    
    currentSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

    currentMenu.removeClass('active-menu');
    nextMenu.addClass('active-menu');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    var currentMenu = $('.active-menu');
    var prevMenu = currentMenu.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
      prevMenu = $('.slide-menu').last();
    }
    
    currentSlide.removeClass('active-slide');
    prevSlide.addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');

    currentMenu.removeClass('active-menu');
    prevMenu.addClass('active-menu');
  });

  $('.js-scrollTo').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });


  $(".fancybox").fancybox();
}

$(document).ready(main);