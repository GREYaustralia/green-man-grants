$(document).ready(function(){
    $('.entries-box').find('.btn-box').hide();
    $('.entries-box').find('.box').on('mouseover', function(){
        $(this).find('.icon').hide()
        $(this).find('.btn-box').toggle().show()
        $(this).css('background-color', '#35e1a2')
        $(this).find('h1').css('color', '#000')
        $(this).find('span').css('color', '#000')
        $(this).find('.greenoverlay').css('background-color', '#45ffb7')
    }).on('mouseout', function(){
        $('.entries-box').find('.btn-box').hide();
        $('.entries-box').find('.box').css('background-color', '#000')
        $('.box h1').css('color', '#35e1a2')
        $('.box span').css('color', '#35e1a2')
        $(this).find('p').css('margin-top', '30vh')
        $('.icon').show()
    })
})




