$(document).ready(function(){
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
    if ($('main').hasClass('index')){
      $('#logo').hide();
      }else{
        $('#logo').show();
        $('#top-bar').addClass('black-top')
      }

    $('main').scroll(function(){
      if ($('main').scrollTop()>50){
        $('#logo').show();
        $('#top-bar').addClass('black-top')
      }else if (!$('main').hasClass('index')){
        $('#logo').show();
        $('#top-bar').addClass('black-top')
      }else{
        $('#logo').hide();
        $('#top-bar').removeClass('black-top')
      }
    });
  $('#menu').on('click',function(e){
    // console.log('click')
    $('#top-bar').toggleClass('active');
    $('#top-bar').addClass('black-top')
    $('.nav').fadeToggle('display')


    if ($('#top-bar').hasClass('active')){
      $('#logo').show();
      $(this).find('img').attr('src','assets/images/exit.png')
    }else{
      if ($('main').scrollTop()<50 && $('main').hasClass('index')){
        $('#logo').hide();
        $('#top-bar').removeClass('black-top')
      }
      $(this).find('img').attr('src','assets/images/menu.png')
    }
  })
});