$(document).ready(function(){
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
  $('input').change(validate);
  // Nav
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
  // Entries
  $('.entries-box').find('.box').on('mouseover', function(){
      $(this).addClass('active-entries')
      $(this).find('.icon').hide()
      $(this).find('.btn-box').toggle().show()
  }).on('mouseout', function(){
      $(this).removeClass('active-entries')
      $('.entries-box').find('.btn-box').hide();
      $('.icon').show()
  })




  function validate(){
    var invalid_fields = $('.form').has('[data-invalid]');
    console.log(invalid_fields)
    if(invalid_fields.length === 0){
      console.log('herro')
      $("input[type=submit]").prop("disabled", false);
    }else{
      console.log('nopes')
      $("input[type=submit]").prop("disabled", true);
    }
  }

});
