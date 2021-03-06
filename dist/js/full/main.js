$(document).ready(function() {
  var setFooter, teleport, waitForFinalEvent;
  waitForFinalEvent = (function() {
    var timers;
    timers = {};
    return function(callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = 'Don\'t call this 2twice without a uniqueId';
      }
      if (timers[uniqueId]) {
        clearTimeout(timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();
  (teleport = function() {
    $('[data-tablet]').each(function(i, elem) {
      var parent;
      if (windowWidth() <= 991) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
    $('[data-mobile]').each(function(i, elem) {
      var parent;
      if (windowWidth() <= 639) {
        $(elem).appendTo($($(elem).data('mobile')));
      } else if (windowWidth() <= 991 && $(elem).data('tablet')) {
        $(elem).appendTo($($(elem).data('tablet')));
      } else {
        parent = $($(elem).data('desktop'));
        $(elem).appendTo(parent);
      }
    });
  })();
  $('.f').on('click', function() {
    $(this).toggleClass('fadeInRightBig active');
  });
  $('.f2').on('click', function() {
    $(this).toggleClass('fadeInLeftBig active');
  });
  $('.f3').on('click', function() {
    $(this).toggleClass('fadeInRightBig active');
  });
  $('.f4').on('click', function() {
    $(this).toggleClass('fadeInLeftBig active');
  });
  $('.f5').on('click', function() {
    $(this).toggleClass('fadeInRightBig active');
  });
  $('.f6').on('click', function() {
    $(this).toggleClass('fadeInLeftBig active');
  });
  $('.f7').on('click', function() {
    $(this).toggleClass('fadeInRightBig active');
  });
  (setFooter = function() {
    var height;
    height = $('.main-footer').outerHeight();
    $('main').css('padding-bottom', height + 'px');
    $('.main-footer').css('margin-top', -height + 'px');
  })();
  $(window).resize(function() {
    waitForFinalEvent((function() {
      setFooter();
      teleport();
    }), 200, '');
  });
});
