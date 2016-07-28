$(document).ready(function(){
  $('#upload').change(function(){
    if ($(this).find(':selected').val() === 'text'){
      $('#entry-form').css('height', '155vh');
      $('.dotoverlay').css('height', '155vh');
      // $(function() {
      //   $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      // });
      $('#upload-field').empty();
      $('#upload-field').append('<textarea class="large-12 columns" id="text-submission" name="text-submission" placeholder="IDEA DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)"></textarea>')
    } else if($(this).find(':selected').val() === 'video'){
      $('#entry-form').css('height', '155vh');
      $('.dotoverlay').css('height', '155vh');
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file"/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="description" name="description" placeholder="VIDEO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)"></textarea>')

      // $('#upload-field').append('<progress></progress>')

    }else if($(this).find(':selected').val() === 'audio'){
      $('#entry-form').css('height', '155vh');
      $('.dotoverlay').css('height', '155vh');
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file"/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="description" name="description" placeholder="AUDIO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)"></textarea>')
    }else if($(this).find(':selected').val() === 'photo'){
      $('#entry-form').css('height', '155vh');
      $('.dotoverlay').css('height', '155vh');
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file"/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="description" name="description" placeholder="PHOTO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)"></textarea>')
    }else{
      $('#upload-field').empty();
      $('#entry-form').css('height', '100vh');
      $('.dotoverlay').css('height', '100vh');
      $(document).scrollTop();
    }
  });
});
  // console.log(thing)

  // thing.on('click', function(){
  //   console.log('hue hue hue')
  // })




