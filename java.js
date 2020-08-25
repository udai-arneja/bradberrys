(function ($)
  { "use strict"

      $(window).on('load', function () {
        $('#preloader-active').delay(300).fadeOut('slow');
        $('body').delay(300).css({
          'overflow': 'visible'
        });
      });

  })(jQuery);
