/*
 * TOC
 * 
 *
 * Copyright (c) 2014 Karl Groves
 * Licensed under the MIT license.
 */

(function ($) {

  $.fn.toc = function (els) {
    var addTo = $(this),
        tocContainer = $('<ul></ul>'),
        bCount = 0;

    els.each(function(bcount){
      var self = $(this),
          text = self.text();

      bCount++;

      $('<a name="toc' + bcount + '"></a>').insertBefore(self);
      $('<li><a href="#toc'+ bcount +'">' + text + '</a></li>').appendTo(tocContainer);

    });

    tocContainer.appendTo(addTo);
  };

}(jQuery));