var breadCrumbsOptions, fullpageAnchors, fullpageOptions, setCanvasRect;

fullpageAnchors = [];

$('.fullpage-menu a').each(function(i, a) {
  fullpageAnchors.push($(a).attr('href').replace(/\#/gim, ''));
});

setCanvasRect = function(canvas) {
  var rect;
  rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
};

fullpageOptions = {
  easing: 'easeInOutQuint',
  scrollingSpeed: 500,
  menu: '.fullpage-menu',
  anchors: fullpageAnchors,
  paddingTop: '0',
  paddingBottom: '0',
  autoScrolling: true,
  sectionSelector: '.section',
  slideSelector: '.slide',
  normalScrollElements: '.main-aside, .city-selector * ',
  resize: false,
  responsiveWidth: 1025,
  afterLoad: function(anchorLink, index) {
    if (index + 1 < $('.fullpage-menu li').length) {
      $('.fullpage-menu li').removeClass('actived').eq(index - 1).addClass('actived');
    }
    if (index - 1 === 0) {
      return $('.fullpage-menu').removeClass('active');
    } else {
      return $('.fullpage-menu').addClass('active');
    }
  },
  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
    $('[data-slide-to*="' + index + ',"]').removeClass('actived');
    $('[data-slide-to*="' + index + ',' + slideIndex + '"]').addClass('actived');
    $('.section').eq(index - 1).find('.slider, .logos-slider').each(function(i, slider) {
      var li;
      li = $(slider).find('li');
      li.removeClass('active').eq(slideIndex).addClass('active');
      if ($(slider).parents('.breadcrumbs').length !== 0) {
        return $(slider).css('width', ($(slider).find('li.active').outerWidth(true) + 15) + 'px');
      }
    });
    return;
  },
  afterRender: function() {
    return $('.section-1 .slide').each(function(i, slide) {
      var canvas, ctx, text;
      text = $(slide).find('.title').text().substr(0, 2).toLowerCase();
      canvas = $(slide).find('canvas')[0];
      ctx = canvas.getContext("2d");
      setCanvasRect(canvas);
      ctx.font = "900 " + (windowWidth() / 3) + "px Arial";
      ctx.textAlign = "left";
      ctx.textBaseline = 'hanging';
      ctx.fillText(text, 0, 0);
    });
  }
};

breadCrumbsOptions = {
  navigation: false,
  slideSpeed: 400,
  singleItem: true,
  dragBeforeAnimFinish: false,
  mouseDrag: false,
  touchDrag: false
};

$(document).ready(function() {
  var fullpage, init, section, slide;
  fullpage = $('#fullpage').fullpage(fullpageOptions);
  init = {
    hash: location.hash.replace(/\#/gim, '')
  };
  section = init.hash.split('/')[0];
  slide = init.hash.split('/')[1];
  if (init.hash !== '' && init.hash !== fullpageAnchors[0]) {
    $.fn.fullpage.moveTo(section, slide);
  }
  $('[data-slide-to]').click(function(e) {
    e.preventDefault();
    section = $(this).data('slide-to').split(',')[0];
    slide = $(this).data('slide-to').split(',')[1];
    return $.fn.fullpage.moveTo(section, slide);
  });
});
