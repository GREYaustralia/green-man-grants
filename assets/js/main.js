$(document).ready(function(){
  var height = $(window).height();
  var width = $(window).width();
  var vid = document.getElementById("bgvid");
  // var pauseButton = document.querySelector("#polina button");
  $('.entries-box').find('.btn-box').hide();
    if ($(window).width() < 800) {
    carosel();
    $('.mobile-brief').show();
  }else{
    $('.mobile-brief').hide();
  }

  $(window).on('resize', carosel);


// BRIEFS HOVER (INDEX)
  $('#brief .box').on('mouseover', function(){
    $(this).find('.overlay').removeClass('dotoverlay');
    $(this).css('border','2px solid #35e1a2')
  }).on('mouseout', function(){
    $(this).find('.overlay').addClass('dotoverlay')
    $(this).css('border','0px solid #35e1a2')
  })

// ENTER HOVER (INDEX)
  $('.enter-icons').on('mouseover',function(){
    // $(this).addClass('.')
    if($(this).is('#image')){
      console.log($(this))
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
    // $(this).removeClass('hover')
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
})
