$(document).ready(function(){
  var raw_data;
  $.getJSON("/data/raw_data.json", function(json){
      raw_data = json;
      $.each(raw_data.language, function(key, value) {
        $("#language").append($('<option></option>').attr("value", key).append(value));
      });
      $.each(raw_data.framework, function(key, value) {
        $("#framework").append($('<option></option>').attr("value", key).append(value));
      });
      $.each(raw_data.ORM, function(key, value) {
        $("#ORM").append($('<option></option>').attr("value", key).append(value));
      });
      $.each(raw_data.Database, function(key, value) {
        $("#Database").append($('<option></option>').attr("value", key).append(value));
      });
  });
  $('#language').trigger('contentChanged');

});

$('select').on('contentChanged', function() {
  alert("hello");
  $(this).material_select();
});
