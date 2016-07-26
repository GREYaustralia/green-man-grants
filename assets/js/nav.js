$(document).ready(function(){
  console.log('loadded')
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
  $(document).scroll(function(){
    start = $(this).scrollTop();
    if(start > offset.top){
      $('#logo').show();
      $('#top-bar').css('background-color', 'black');
    } else {
      $('#logo').hide();
      $('#top-bar').css('background-color', 'transparent');
    }
    // animation to add!
  });

  $('#menu').on('click',function(e){
    $('#top-bar').toggleClass('active');
    if ($('#top-bar').hasClass('active')){
      $(this).find('img').attr('src','assets/images/exit.png')
    }else{
      $(this).find('img').attr('src','assets/images/menu.png')
    }
    $('.nav').fadeToggle('display')
  })

  // console.log('THING')
  if ($(window).width()< 800){
    console.log('activated')
    $('.single-item').slick({
      dots: true,
      infinite: true,
      draggable: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


 // $(window).resize(function () {
 //            var height = $(window).height();
 //            var width = $(window).width();
 //            if (height > width || $(window).width() < 800) {
 //                $('.single-item').slick({
 //                  dots: true,
 //                  infinite: true,
 //                  draggable: true,
 //                  speed: 500,
 //                  slidesToShow: 1,
 //                  slidesToScroll: 1
 //                });
 //            }
 //        });

