$(document).ready(function(){
  var height = $(window).height();
  var width = $(window).width();
  var vid = document.getElementById("bgvid");
  var start = 0;
  var change = $('#top-bar')
  var offset = change.offset();
  // var pauseButton = document.querySelector("#polina button");
  $('.entries-box').find('.btn-box').hide();
  $('input').change(validate);
  navbar();




// BRIEFS HOVER (INDEX)
  $('#brief .box').on('mouseover', function(){
    $(this).find('.overlay').removeClass('dotoverlay');
    $(this).css('border','2px solid #35e1a2')
  }).on('mouseout', function(){
    $(this).find('.overlay').addClass('dotoverlay')
    $(this).css('border','0px solid #35e1a2')
  })

// ENTER HOVER (INDEX)
  $('#enter').find('.box').on('mouseover',function(){
    $(this).addClass('hover')
    if($(this).is('#image')){
      $(this).find('img').attr('src','assets/images/image-green.png')
    }else if($(this).is('#audio')){
      $(this).find('img').attr('src','assets/images/audio-green.png')
    }else if($(this).is('#video')){
      $(this).find('img').attr('src','assets/images/video-green.png')
    }else{
      $(this).find('img').attr('src','assets/images/text-green.png')
    }
  }).on('mouseout', function(){
    $(this).removeClass('hover')
    if($(this).is('#image')){
      $(this).find('img').attr('src','assets/images/image-black.png')
    }else if($(this).is('#audio')){
      $(this).find('img').attr('src','assets/images/audio-black.png')
    }else if($(this).is('#video')){
      $(this).find('img').attr('src','assets/images/video-black.png')
    }else{
      $(this).find('img').attr('src','assets/images/text-black.png')
    }
  })


// ENTRIES HOVER (INDEX)
  $('.entries-box').find('.box').on('mouseover', function(){
      $(this).addClass('active-entries')
      $(this).find('.icon').hide()
      $(this).find('.btn-box').toggle().show()
  }).on('mouseout', function(){
      $(this).removeClass('active-entries')
      $('.entries-box').find('.btn-box').hide();
      $('.icon').show()
  })




  // VIDEO HEADER (INDEX)
    function vidFade() {
    vid.classList.add("stopfade");
  }
    // vid.addEventListener('ended', function(){
  //   vid.pause();
  //   vidFade();
  // });

  // pauseButton.addEventListener("click", function() {
  //   vid.classList.toggle("stopfade");
  //   if (vid.paused) {
  //     vid.play();
  //     pauseButton.innerHTML = "Pause";
  //   } else {
  //     vid.pause();
  //     pauseButton.innerHTML = "Paused";
  //   }
  // })

// CAROSEL (INDEX)

  if ($(window).width() < 800) {
    carosel();
    $('.mobile-brief').show();
  }else{
    $('.mobile-brief').hide();
  }
  $(window).on('resize', carosel);
    function carosel(){
      if ($(window).width() < 800 ) {
      console.log('FIRE')
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
      console.log('large')
      $('.mobile-brief').hide();
      $('#briefs-box').show();
    }
  }


// QUESTION SELECT (ENTRY)
  $('#brief-question').change(function(){
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


  // UPLOAD TYPE (ENTRY)
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
      $('#upload-field').append('<textarea class="large-12 columns form-description" id="video_description" name="description" placeholder="VIDEO DESCRIPTION (MAX 140 CHARACTERS LINKS OK)" aria-label="Video Description - Max 140 Characters" required></textarea>')
    }else if($(this).find(':selected').val() === '2'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Audio Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns form-description" id="audio_description" name="description" placeholder="AUDIO DESCRIPTION (MAX 140 CHARACTERS LINKS OK)" aria-label="Audio Description - Max 140 Characters" required></textarea>')
    }else if($(this).find(':selected').val() === '4'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Photo Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns form-description" id="image-description" name="description" placeholder="PHOTO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)" aria-label="Photo Description - Max 1000 Characters" required></textarea>')
    }else{
      $('#upload-field').empty();
      $(document).scrollTop();
    }
  });


// FORM VALIDATION (GLOBAL)
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

// NAV BAR (GLOBAL)
function navbar(){
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
    };
  });
};

})
