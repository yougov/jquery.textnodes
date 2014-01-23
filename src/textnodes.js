/*
 * jquery.textnodes
 *
 *
 * Copyright (c) 2014 Mark Florian
 * Licensed under the MIT license.
 */

(function($) {

  var rNonWhiteSpace = /\S/;

  function getChildTextNodes($el, list, includeWhiteSpace) {
    $el.contents().each(function () {
      var isNonWhiteSpace;
      if (this.nodeType === 3) {
        isNonWhiteSpace = rNonWhiteSpace.test(this.nodeValue);
        if (isNonWhiteSpace || includeWhiteSpace) {
          list.push(this);
        }
      } else if (this.nodeType === 1) {
        getChildTextNodes($(this), list, includeWhiteSpace);
      }
      return list;
    });
  }

  $.fn.textNodes = function (includeWhiteSpace) {
    var textNodes = [];
    getChildTextNodes(this, textNodes, includeWhiteSpace);
    return $(textNodes);
  };

}(jQuery));
