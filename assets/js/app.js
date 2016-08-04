$(document).foundation()
var height = $(window).height();
var width = $(window).width();
if (height > width || $(window).width() < 800) {
    $('.single-item').slick({
      dots: true,
      infinite: true,
      draggable: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
};