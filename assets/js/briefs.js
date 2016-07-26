$(document).ready(function(){
  $('#brief .box').on('mouseover', function(){
    console.log('hover')
    $(this).find('.overlay').removeClass('dotoverlay');
    $(this).css('border','2px solid #35e1a2')
  }).on('mouseout', function(){
    console.log($(this))
    $(this).find('.overlay').addClass('dotoverlay')
    $(this).css('border','0px solid #35e1a2')
  })

})