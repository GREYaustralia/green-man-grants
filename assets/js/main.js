$(document).ready(function(){
  var height = $(window).height();
  var width = $(window).width();

  $('.mobile-brief').hide();
  $('.entries-box').find('.btn-box').hide();


  $('#brief .box').on('mouseover', function(){
    // console.log('hover')
    $(this).find('.overlay').removeClass('dotoverlay');
    $(this).css('border','2px solid #35e1a2')
  }).on('mouseout', function(){
    // console.log($(this))
    $(this).find('.overlay').addClass('dotoverlay')
    $(this).css('border','0px solid #35e1a2')
  })


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


  $('.entries-box').find('.box').on('mouseover', function(){
      $(this).addClass('active-entries')
      $(this).find('.icon').hide()
      $(this).find('.btn-box').toggle().show()
  }).on('mouseout', function(){
      $(this).removeClass('active-entries')
      $('.entries-box').find('.btn-box').hide();
      $('.icon').show()
  })

  console.log(height)
  console.log(width)
  $(window).resize(function(){

  })






})
$(document).ready(carosel);
$(window).on('resize', carosel);


    function carosel(){
      if ($(window).width() < 800) {
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