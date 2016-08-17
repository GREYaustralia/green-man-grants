$(document).ready(function(){
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();

  $(window).bind('click focus', function() {
    navClose();
  });

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
  $('#menu').bind('click',function(e){
    console.log('click')
    e.stopPropagation();
    $('#menu').toggleClass('active');
    $('#top-bar').addClass('black-top')
    $('.nav').fadeToggle('display')
    if ($('#menu').hasClass('active')){
      if($('main').scrollTop()<50 && $('main').hasClass('index') && $('#menu').hasClass('active')){
        $('#logo').show();
      }

      // $(this).find('img').attr('src','assets/images/exit.png')
    }
    else if ($('main').scrollTop()<50 && $('main').hasClass('index')){

        $('#logo').hide();
        $('#top-bar').removeClass('black-top')
      }
    //   $(this).find('img').attr('src','assets/images/menu.png')
    // }
  })
  // Entries
 $('.entries-box').find('.box').bind('mouseover focus', function(){
      $(this).addClass('active-entries')
      $(this).find('.icon').hide()
      $(this).find('.btn-box').toggle().show()
  }).on('mouseout', function(){
      $(this).removeClass('active-entries')
      $(this).find('.btn-box').hide();
      $(this).find('.icon').show()
  })


  function navClose(){
    $('.nav').hide()
    $('#menu').removeClass('active');
    if ($('main').scrollTop()<50 && $('main').hasClass('index')){
      $('#logo').hide();
      $('#top-bar').removeClass('black-top')
    }
  }

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
