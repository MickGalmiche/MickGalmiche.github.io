var main = function() {
  
    $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentMenu = $('.active-menu');
    var nextMenu = currentMenu.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextMenu = $('.slide-menu').first();
    }
    
    currentSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');

    currentMenu.removeClass('active-menu');
    nextMenu.addClass('active-menu');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentMenu = $('.active-menu');
    var prevMenu = currentMenu.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevMenu = $('.slide-menu').last();
    }
    
    currentSlide.removeClass('active-slide');
    prevSlide.addClass('active-slide');

    currentMenu.removeClass('active-menu');
    prevMenu.addClass('active-menu');
  });

  $('.HR-arrow-next').click(function() {
    var currentSlide = $('.HR-active-slide');
    var nextSlide = currentSlide.next();

    var currentMenu = $('.HR-active-menu');
    var nextMenu = currentMenu.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.HR-slide').first();
      nextMenu = $('.HR-slide-menu').first();
    }
    
    currentSlide.removeClass('HR-active-slide');
    nextSlide.addClass('HR-active-slide');

    currentMenu.removeClass('HR-active-menu');
    nextMenu.addClass('HR-active-menu');
  });


  $('.HR-arrow-prev').click(function() {
    var currentSlide = $('.HR-active-slide');
    var prevSlide = currentSlide.prev();

    var currentMenu = $('.HR-active-menu');
    var prevMenu = currentMenu.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.HR-slide').last();
      prevMenu = $('.HR-slide-menu').last();
    }
    
    currentSlide.removeClass('HR-active-slide');
    prevSlide.addClass('HR-active-slide');

    currentMenu.removeClass('HR-active-menu');
    prevMenu.addClass('HR-active-menu');
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