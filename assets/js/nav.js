$(document).ready(function(){
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
    if ($('main').hasClass('index')){
      $('#logo').hide();
      }else{
        $('#logo').show();
        $('#top-bar').addClass('active')

      }
    $('main').scroll(function(){
      if ($('main').scrollTop()>50){
        $('#logo').show();
        $('#top-bar').addClass('active')
      }else if (!$('main').hasClass('index')){
        $('#logo').show();
        $('#top-bar').addClass('active')
      }else{
        $('#logo').hide();
        $('#top-bar').removeClass('active')
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