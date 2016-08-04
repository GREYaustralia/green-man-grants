$(document).ready(function(){
  $('.entries-box').find('.btn').hide();
  $('.entries-box').find('.box').on('mouseover', function(){
    console.log('box found?')
    if($('.box').hasClass('video')){
        $(this).find('.icon').hide()
        $(this).find('.btn').toggle().show()
        $(this).find('.box').css('border', '2px solid green')
        $(this).find('.greenoverlay').css('background-color', '#45ffb7')
        $(this).find('p').css('margin-top', '10vh')
    }else if($('.box').hasClass('text')){
        $(this).find('.icon').hide()
        $(this).find('.btn').toggle().show()
        $(this).find('.box').css('border', '2px solid green')
        $(this).find('.greenoverlay').css('background-color', '#45ffb7')
    }else if($('.box').hasClass('audio')){
        $(this).find('.icon').hide()
        $(this).find('.btn').toggle().show()
        $(this).find('.box').css('border', '2px solid green')
        $(this).find('.greenoverlay').css('background-color', '#45ffb7')
    }else{
        $(this).find('.icon').hide()
        $(this).find('.btn').toggle().show()
        $(this).find('.box').css('border', '2px solid green')
        $(this).find('.greenoverlay').css('background-color', '#45ffb7')
    }
  }).on('mouseout', function(){
        $('.entries-box').find('.btn').hide();
        $('.greenoverlay').css('background-color', '#14523a')
        $(this).find('p').css('margin-top', '30vh')
        $('.icon').show()
  })
})


