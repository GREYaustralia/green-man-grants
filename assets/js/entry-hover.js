$(document).ready(function(){
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
})
