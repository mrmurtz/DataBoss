$(document).ready(function(){
  $('.nest-clone').cloneya({
      preserveChildCount: true
  });

  $('.clone').click(function() {
    $('select').trigger('contentChanged');
  });

  $('select').on('contentChanged', function() {
    $(this).material_select();
  });

});
