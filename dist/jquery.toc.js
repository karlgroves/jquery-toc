/*! toc - v0.0.1 - 2015-11-18
* https://github.com/karlgroves/toc
* Copyright (c) 2015 Karl Groves; Licensed MIT */
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