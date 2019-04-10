/*----------- Globals -----------*/

// Scrolling animation if the user clicks on a Hash link that has 'data-scroll' attribute
$(document).on('click', 'a[data-scroll][href^="#"]', function(e) {
  var navbarHeight = $('.navbar').innerHeight();
  var id = $(this).attr('href');
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }
  e.preventDefault();
  $('body, html').animate({
    scrollTop: $id.offset().top - navbarHeight
  }, 600);
});
