/*
 * textnodes
 * 
 *
 * Copyright (c) 2014 Mark Florian
 * Licensed under the MIT license.
 */

(function($) {

  var rNonWhiteSpace = /\S/;

  function getChildTextNodes($el, list, includeWhiteSpace) {
    $el.contents().each(function () {
      console.log("called");
      if (this.nodeType === 3) {
        if (
            includeWhiteSpace &&
            rNonWhiteSpace.test(this.textContent || this.innerText)
           ) {
          list.push(this);
        }
      } else if (this.nodeType === 1) {
        getChildTextNodes($(this), list);
      }
    });
  }

  $.fn.textNodes = function (includeWhiteSpace) {
    var textNodes = [];
    getChildTextNodes(this, textNodes, includeWhiteSpace);
    return $(textNodes);
  };

}(jQuery));
