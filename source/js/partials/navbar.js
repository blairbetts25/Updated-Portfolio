/*----------- Navbar -----------*/

// Triggers the second style of the navbar if the user scrolls down
$(window).on('scroll', function() {
  var navbar = $('.navbar');
  if (navbar.offset().top > 75) {
    navbar.addClass('scrolled');
  } else {
    navbar.removeClass('scrolled');
  }
});
