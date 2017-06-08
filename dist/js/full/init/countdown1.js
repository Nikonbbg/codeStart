$(document).ready(function() {

  /*
  			http://hilios.github.io/jQuery.countdown/documentation.html
   */
  var countFix;
  countFix = function(count) {
    if (count >= 10) {
      return count;
    } else {
      return "0" + count;
    }
  };
  $('.timer').each(function(i, timer) {
    var time;
    time = $(timer).data('time-to');
    if (time) {
      $(timer).countdown(time, function(event) {
        var mask, result;
        mask = $(timer).data('time-mask');
        result = mask.toString().replace(/D/g, countFix(event.offset.totalDays)).replace(/d/g, countFix(event.offset.days)).replace(/H/g, countFix(event.offset.totalHours)).replace(/h/g, countFix(event.offset.hours)).replace(/M/g, countFix(event.offset.totalMinutes)).replace(/m/g, countFix(event.offset.minutes)).replace(/S/g, countFix(event.offset.totalSeconds)).replace(/s/g, countFix(event.offset.seconds));
        $(this).text(result);
      });
    }
  });
});
