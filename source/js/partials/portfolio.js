/*----------- Portfolio -----------*/

/* Portfolio filter setup */

var Shuffle = window.Shuffle;

var shufflejs = function(element) {
  this.element = element;

  this.shuffle = new Shuffle(element, {
    itemSelector: '.portfolio-area .shufflejs .single-item',
    sizer: element.querySelector('.portfolio-area .shufflejs .sizer-element'),
  });

  this._activeFilters = [];

  this.addFilterButtons();
};

shufflejs.prototype.addFilterButtons = function() {
  var options = document.querySelector('.portfolio-area .filter-control');

  if (!options) {
    return;
  }

  var filterButtons = Array.from(options.children);

  filterButtons.forEach(function(button) {
    button.addEventListener('click', this._handleFilterClick.bind(this), false);
  }, this);
};

shufflejs.prototype._handleFilterClick = function(evt) {
  var btn = evt.currentTarget;
  var btnGroup = btn.getAttribute('data-group');
  this.shuffle.filter(btnGroup);
};


window.shufflejs = new shufflejs(document.getElementById('shufflejs'));

// Filter nav
$('.portfolio-area .filter-control>li').on('click', function() {
  $(this).addClass('tab-active').siblings().removeClass('tab-active');
});

$('.portfolio-area .shufflejs .portfolio-item').each(function() {
  var element = $(this);
  var target = element.attr('href');
  $(element).animatedModal({
  animatedIn: 'fadeIn',
  animatedOut: 'fadeOut',
  animationDuration: '.15s',
  beforeOpen: function() {
      $(target + '.lightbox-wrapper .lightbox-gallery').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        smartSpeed: 400
      });
  },
  afterClose: function() {
    $(target + '.lightbox-wrapper .lightbox-gallery').trigger('destroy.owl.carousel');
  }
});
});
