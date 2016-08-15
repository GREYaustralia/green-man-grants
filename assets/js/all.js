$(document).ready(function(){
  var height = $(window).height();
  var width = $(window).width();
  var vid = document.getElementById("bgvid");
  // var pauseButton = document.querySelector("#polina button");
  $('.entries-box').find('.btn-box').hide();




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
})
