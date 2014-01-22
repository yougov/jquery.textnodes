/*
 * textnodes
 * 
 *
 * Copyright (c) 2014 Mark Florian
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.textnodes = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.textnodes = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.textnodes.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.textnodes.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].textnodes = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
