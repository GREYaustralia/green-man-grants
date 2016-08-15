$(document).ready(function(){
  $('.entries-box').find('.box').on('mouseover', function(){
      $(this).addClass('active-entries')
      $(this).find('.icon').hide()
      $(this).find('.btn-box').toggle().show()
  }).on('mouseout', function(){
      $(this).removeClass('active-entries')
      $('.entries-box').find('.btn-box').hide();
      $('.icon').show()
  })
})


