
  $('section').height($(window).height());

  $('section').first().addClass('active');

  $(document).on('mousewheel DOMMouseScroll', function (event){
    event.preventDefault();

    var active = $('section.active');

    var direction = event.originalEvent.detail < 0 || event.originalEvent.wheelData > 0 ? 1 : -1;

    if (direction < 0){
      next = active.next();

      if (next.length){
        console.log('im here')
        var timer = setTimeout(function(){
          $('body, html').animate({
            scrollTop:next.offset().top}, 'slow');
          next.addClass('active').siblings().removeClass('active');
          clearTimeout(timer);
          }, 800);
        } else {
          previous = active.prev()
          if(previous.length){
            var timer = setTimeout(function(){
              $('body, html').animate({
                scrollTop: previous.offset().top}, 'slow');
              previous.addClass('active').siblings().removeClass('active');
              clearTimeout(timer);
            }, 800);
          }
        }
    }
  });