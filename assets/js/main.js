$(document).ready(function(){
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
});




