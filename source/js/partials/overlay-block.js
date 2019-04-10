/*----------- Overlay block -----------*/

$('.navbar .navbar-btn').animatedModal({
  animatedIn: 'fadeIn',
  animatedOut: 'fadeOut',
  animationDuration: '.15s',
  beforeOpen: function() {
      function getNavbarBtnPos() {
        var navbarBtnPos = {
          top: parseInt($('.navbar').css('marginTop'), 10) + $('.navbar .navbar-btn').position().top,
          left: $('.navbar .navbar-btn').position().left
        };
        return navbarBtnPos;
      }
      $('.overlay-block .overlay-close').css(getNavbarBtnPos());
      $(window).on('resize', function() {
        $('.overlay-block .overlay-close').css(getNavbarBtnPos());
      });
  }
});

function closeOverlayBlock() {
  $('.overlay-block .overlay-close').trigger('click');
}

$(document).on('keydown', function(e) {
  if (e.keyCode === 27 && $('.overlay-block').hasClass('overlay-block-on')) {
    closeOverlayBlock();
  }
});

$('.overlay-block .overlay-menu .nav-link').on('click', function() {
  closeOverlayBlock();
});

$('body').scrollspy({
  target: '.overlay-menu',
  offset: $('.navbar').innerHeight() + 5
});
