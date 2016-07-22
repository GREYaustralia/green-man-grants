// var video = "<div class='box'style='background-image: url(assets/images/footer.jpg);'><div class='greenoverlay dotoverlay'></div><h1>Nullam libero tellus</h1><div class='icon'><img src='assets/images/video.png'></div><figure></figure></div>"
// var audio = "<div class='box'style='background-image: url(assets/images/footer.jpg);'><div class='greenoverlay dotoverlay'></div><h1>Nullam libero tellus</h1><div class='icon'><img src='assets/images/audio.png'></div><figure></figure></div>"
// var text = "<div class='box'style='background-image: url(assets/images/footer.jpg);'><div class='greenoverlay dotoverlay'></div><h1>Nullam libero tellus</h1><div class='icon'><img src='assets/images/text.png'></div><figure></figure></div>"
// var image = "<div class='box'style='background-image: url(assets/images/footer.jpg);'><div class='greenoverlay dotoverlay'></div><h1>Nullam libero tellus</h1><div class='icon'><img src='assets/images/image.png'></div><figure></figure></div>"

// $(document).on('ready', function(){
//   console.log('hello')
//   console.log(html)
//   $('#allEntries').append(html);
// })



// $(document).ready(function(){
//   $('.btn').hide();
//   $('.video').on('mouseover', function(){
//     // console.log($(this).find('.btn'))
//     $(this).find('.icon').hide()
//     $(this).find('.btn').toggle().show()
//     $(this).find('.box').css('border', '2px solid green')
//     $(this).find('.greenoverlay').css('background-color', '#45ffb7')
//     // $($('#top').children()[1]).whatever()
//   }).on('mouseout', function(){
//     $('.btn').hide();
//     $('.greenoverlay').css('background-color', '#14523a')
//     $('.icon').show()
//   })
// })
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
        // $($('#top').children()[1]).whatever()
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


