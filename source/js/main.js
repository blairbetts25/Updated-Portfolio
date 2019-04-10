/*----------- Table of Contents -----------*/

/**
 * Globals
 * Navbar
 * Overlay block
 * Home
 * Portfolio
 * Testimonials
 * Contact
 * Preloader
 */

(function($) {
  'use strict';
  $(document).ready(function() {
    /* injectRaw:partials/globals.js */
    /* endinjectRaw */
    /* injectRaw:partials/navbar.js */
    /* endinjectRaw */
    /* injectRaw:partials/overlay-block.js */
    /* endinjectRaw */
    /* injectRaw:partials/home.js */
    /* endinjectRaw */
    /* injectRaw:partials/portfolio.js */
    /* endinjectRaw */
    /* injectRaw:partials/testimonials.js */
    /* endinjectRaw */
    /* injectRaw:partials/contact.js */
    /* endinjectRaw */
    $(window).trigger('scroll');
  });
  $(window).on('load', function() {
    /* injectRaw:partials/preloader.js */
    /* endinjectRaw */
  });
}(jQuery));
