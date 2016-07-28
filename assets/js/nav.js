$(document).ready(function(){
  console.log('loadded')
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
  // $(document).scroll(function(){
    if ($('body').hasClass('index')){
      $('#logo').hide();
      $('#top-bar').css('background-color', 'transparent');
      }else{
        $('#logo').show();
        $('#top-bar').css('background-color', 'black');
      }

    $(window).scroll(function(){
      if ($(this).scrollTop()>50){
        $('#logo').show();
        $('#top-bar').css('background-color', 'black');
      }else if (!$('body').hasClass('index')){
        $('#logo').show();
        $('#top-bar').css('background-color', 'black');
      }else{
        $('#logo').hide();
        $('#top-bar').css('background-color', 'transparent');
      }
    });
  // });

  $('#menu').on('click',function(e){
    console.log('click')
    $('#top-bar').toggleClass('active');
    $('.nav').fadeToggle('display')
    if ($('#top-bar').hasClass('active')){
      // $('#logo').show();
      $(this).find('img').attr('src','assets/images/exit.png')
    }else{
      // $('#logo').hide();
      $(this).find('img').attr('src','assets/images/menu.png')
    }



  })

  // console.log('THING')
  // if ($(window).width()< 800){
  //   console.log('activated')
  // }
  // $('a[href*="#"]:not([href="#"])').click(function() {
  //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000);
  //       return false;
  //     }
  //   }
  // });
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

