$(document).ready(function(){
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
  $(document).foundation();
  if ($('#votePopup').is(':visible')) {
    $(document).foundation('abide', 'reflow');
  }

  $(window).bind('click focus', function() {
    navClose();
  });

  $('#header').on('focus', function(){
    navClose();
  });

  var clicks = 0;
  $('#menu').bind('click',function(e){
    if(clicks == 0){
      $('#menu').focus()
      e.stopPropagation();
      navOpen();
      clicks++;
    }else{
      navClose();
      clicks--;
    }
    console.log(clicks);
  });

  $('#menu').on('focus', function(e){
      e.stopPropagation();
      navOpen();
  })

  $('input').change(validate);
  if ($('main').hasClass('index')){
    $('#logo').hide();
    }else{
      $('#logo').show();
      $('#top-bar').addClass('black-top')
    }
  $('main').scroll(function(){
    if ($('#menu').hasClass('active')){
      $('#logo').show();
      $('#top-bar').addClass('black-top')
    }else if ($('main').scrollTop()>50){
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

 $('.entries-box').find('.box').bind('mouseover focus', function(){
      $(this).addClass('active-entries')
      $(this).find('.icon').hide()
      $(this).find('.btn-box').toggle().show()
  }).on('mouseout', function(){
      $(this).removeClass('active-entries')
      $(this).find('.btn-box').hide();
      $(this).find('.icon').show()
  });

  $('#dob').fdatepicker({
    closeButton: true
  });

  function navOpen(){
    $('.nav').show()
    $('#menu').removeClass('menu')
    $('#menu').addClass('active exit');
    $('#top-bar').addClass('black-top')
    $('#logo').show();
  };
  function navClose(){
    $('.nav').hide()
    $('#menu').removeClass('exit active')
    $('#menu').addClass('menu');
    if ($('main').scrollTop()<50 && $('main').hasClass('index') ){
      $('#logo').hide();
      $('#top-bar').removeClass('black-top')
    }
  };
  function validate(){
    var invalid_fields = $('.form').has('[data-invalid]');
    if(invalid_fields.length === 0){
      $("input[type=submit]").prop("disabled", false);
    }else{
      $("input[type=submit]").prop("disabled", true);
    }
  };
// });

// $(document).ready(function(){
  var height = $(window).height();
  var width = $(window).width();
  var vid = document.getElementById("bgvid");
  $('.entries-box').find('.btn-box').hide();
    if ($(window).width() < 800) {
    carosel();
    $('.mobile-brief').show();
  }else{
    $('.mobile-brief').hide();
  }

  $(window).on('resize', carosel);

  $('#brief .box').on('mouseover', function(){
    $(this).find('.overlay').removeClass('dotoverlay');
    $(this).css('border','2px solid #35e1a2')
  }).on('mouseout', function(){
    $(this).find('.overlay').addClass('dotoverlay')
    $(this).css('border','0px solid #35e1a2')
  })

  $('.enter-icons').on('mouseover',function(){
    if($(this).is('#image')){
      $('#image').removeClass('image-black')
      $('#image').addClass('image-hover')
    }else if($(this).is('#audio')){
      $('#audio').removeClass('audio-black')
      $('#audio').addClass('audio-hover')
    }else if($(this).is('#video')){
      $('#video').removeClass('video-black')
      $('#video').addClass('video-hover')
    }else{
      $(this).removeClass('text-black')
      $(this).addClass('text-hover')
    }
  }).on('mouseout', function(){
    if($(this).is('#image')){
      $('#image').removeClass('image-hover')
      $('#image').addClass('image-black')
    }else if($(this).is('#audio')){
       $(this).removeClass('audio-hover')
      $(this).addClass('audio-black')
    }else if($(this).is('#video')){
       $(this).removeClass('video-hover')
      $(this).addClass('video-black')
    }else{
       $(this).removeClass('text-hover')
      $(this).addClass('text-black')
    }
  })

  function vidFade() {
    vid.classList.add("stopfade");
  }

  function carosel(){
    if ($(window).width() < 800 ) {
    $('#briefs-box').hide();
    $('.mobile-brief').show();
      $('.single-item').slick({
        dots: true,
        infinite: true,
        draggable: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }else{
      $('.mobile-brief').hide();
      $('#briefs-box').show();
    }
  };
    carosel();

    $('#brief-question').change(function(){
    console.log('change')
    if ($(this).find(':selected').val() === '1'){
      $('#question').empty();
      $('#question').text('How would you get your peers to understand the importance of buying a safe affordable car?');
    } else if($(this).find(':selected').val() === '2'){
      $('#question').empty();
      $('#question').text('The human body has not evolved as fast as cars have, therefore we are very vulnerable when on the roads. How would you highlight this to your peers to help reduce risk taking behaviour?');
    } else if($(this).find(':selected').val() === '3'){
      $('#question').empty();
      $('#question').text('How would you convince your peers to believe that zero deaths and serious injuries on our roads could become a reality?');
    }else{
      $('#question').empty();
    }
  })
  $('#upload').change(function(){
    if ($(this).find(':selected').val() === '1'){
      $('#upload-field').empty();
      $('#upload-field').append('<textarea class="large-12 columns" id="text-submission" name="text-submission" placeholder="IDEA DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)" aria-label="Text Entry Field - Max 1000 Characters" required></textarea>')
    } else if($(this).find(':selected').val() === '3'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Video Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="video_description" class="form-description" name="description" placeholder="VIDEO DESCRIPTION (MAX 140 CHARACTERS LINKS OK)" aria-label="Video Description - Max 140 Characters" required></textarea>')
    }else if($(this).find(':selected').val() === '2'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Audio Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="audio_description" class="form-description" name="description" placeholder="AUDIO DESCRIPTION (MAX 140 CHARACTERS LINKS OK)" aria-label="Audio Description - Max 140 Characters" required></textarea>')
    }else if($(this).find(':selected').val() === '4'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Photo Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="image-description" class="form-description" name="description" placeholder="PHOTO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)" aria-label="Photo Description - Max 1000 Characters" required></textarea>')
    }else{
      $('#upload-field').empty();
      $(document).scrollTop();
    }
  });
});





