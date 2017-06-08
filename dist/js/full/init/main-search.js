$(function() {
  $('.main-header input').focus(function() {
    $(this).siblings('.search-results').addClass('active');
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.main-header input, .main-header .search-results').length < 1) {
      $('.main-header .search-results').removeClass('active');
    }
  });
});
