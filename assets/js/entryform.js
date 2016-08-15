$(document).ready(function(){
  console.log('ready')
  $('#brief-question').change(function(){
    console.log('change')
    if ($(this).find(':selected').val() === '1'){
      $('#question').empty();
      $('#question').text('How would you get your peers to understand the importance of buying a safe affordable car?');
    } else if($(this).find(':selected').val() === '2'){
      $('#question').empty();
      $('#question').text('The human body has not evolved as fast as cars have, therefore we are very vulnerable when on the roads. How would you highlight this to your peers to help reduce risk taking behaviour?');
    } else if($(this).find(':selected').val() === '3'){
      $('#question').empty();
      $('#question').text('How would you convince your peers to believe that zero deaths and serious injuries on our roads could become a reality?');
    }else{
      $('#question').empty();
    }
  })
  $('#upload').change(function(){
    if ($(this).find(':selected').val() === '1'){
      $('#upload-field').empty();
      $('#upload-field').append('<textarea class="large-12 columns" id="text-submission" name="text-submission" placeholder="IDEA DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)" aria-label="Text Entry Field - Max 1000 Characters" required></textarea>')
    } else if($(this).find(':selected').val() === '3'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Video Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="video_description" class="form-description" name="description" placeholder="VIDEO DESCRIPTION (MAX 140 CHARACTERS LINKS OK)" aria-label="Video Description - Max 140 Characters" required></textarea>')
    }else if($(this).find(':selected').val() === '2'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Audio Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="audio_description" class="form-description" name="description" placeholder="AUDIO DESCRIPTION (MAX 140 CHARACTERS LINKS OK)" aria-label="Audio Description - Max 140 Characters" required></textarea>')
    }else if($(this).find(':selected').val() === '4'){
      $(function() {
        $(document).scrollTop( $("#form-upload").offset().top + (-75) );
      });
      $('#upload-field').empty();
      $('#upload-field').append('<input name="file" type="file" aria-label="Photo Upload" required/>');
      $('#upload-field').append('<textarea class="large-12 columns" id="image-description" class="form-description" name="description" placeholder="PHOTO DESCRIPTION (MAX 1000 CHARACTERS LINKS OK)" aria-label="Photo Description - Max 1000 Characters" required></textarea>')
    }else{
      $('#upload-field').empty();
      $(document).scrollTop();
    }
  });
});




