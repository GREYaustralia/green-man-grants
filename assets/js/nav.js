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
    $('.nav').toggle('display')
  })
});



