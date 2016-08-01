$(document).ready(function(){
  $('#brief-question').change(function(){
    if ($(this).find(':selected').val() === 'vehiclesafety'){
      $('#question').empty();
      $('#question').text('How would you get your peers to understand the importance of buying a safe affordable car?');
    } else if($(this).find(':selected').val() === 'vulnerability'){
      $('#question').empty();
      $('#question').text('The human body has not evolved as fast as cars have, therefore we are very vulnerable when on the roads. How would you highlight this to your peers to help reduce risk taking behaviour?');
    } else if($(this).find(':selected').val() === 'sharedresponibility'){
      $('#question').empty();
      $('#question').text('How would you convince your peers to believe that zero deaths and serious injuries on our roads could become a reality?');
    }else{
      $('#question').empty();
    }
  })



  $('#upload').change(function(){
    if ($(this).find(':selected').val() === 'text'){
      $('#upload-field').empty();
      $('#upload-field').append('<textarea class="large-12 columns" id="text-submission" name="text-submission" placeholder="IDEA DESCRIPTION (MAX 140 CHARACTERS LINKS OK)"></textarea>')
    } else if($(this).find(':selected').val() === 'video'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file"/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="description" name="description" placeholder="VIDEO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)"></textarea>')
    }else if($(this).find(':selected').val() === 'audio'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file"/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="description" name="description" placeholder="AUDIO DESCRIPTION (MAX 140 CHARACTERS LINKS OK)"></textarea>')
    }else if($(this).find(':selected').val() === 'photo'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file"/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="description" name="description" placeholder="PHOTO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)"></textarea>')
    }else{
      $('#upload-field').empty();
      $(document).scrollTop();
    }
  });
});




