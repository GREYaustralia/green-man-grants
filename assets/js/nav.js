$(document).ready(function(){
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
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
});