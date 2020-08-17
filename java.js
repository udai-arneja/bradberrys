(function ($)
  { "use strict"

      $(window).on('load', function () {
        $('#preloader-active').delay(1000).fadeOut('slow');
        $('body').delay(1000).css({
          'overflow': 'visible'
        });
      });

  })(jQuery);
