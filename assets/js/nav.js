$(document).ready(function(){
  console.log('loadded')
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
  $(document).scroll(function(){
    start = $(this).scrollTop();
    if(start > offset.top){
      $('#top-bar').css('background-color', 'black');
    } else {
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

  console.log('THING')
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
});



