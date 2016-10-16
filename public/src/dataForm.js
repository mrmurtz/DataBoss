$(document).ready(function(){

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
      $.each(raw_data.native_database_types, function(key, value) {
        $("#dataType").append($('<option></option>').attr("value", key).append(value));
      });
      $.each(raw_data.native_database_types, function(key, value) {
        $("#dataType2").append($('<option></option>').attr("value", key).append(value));
      });
      $.each(raw_data.native_database_types, function(key, value) {
        $("#dataType3").append($('<option></option>').attr("value", key).append(value));
      });
      $.each(raw_data.native_database_types, function(key, value) {
        $("#dataType4").append($('<option></option>').attr("value", key).append(value));
      });
      $('select').trigger('contentChanged');
  });

  $('select').on('contentChanged', function() {
    $(this).material_select();
  });

  $("#form-slide-in").click(function(event){
    event.preventDefault();
    $("#form").toggleClass("form-show col s3");
    $("#diagram").toggleClass("s11");
    $("#form-content").toggle('show');
  });

  $("#form-slide-in2").click(function(event){
    event.preventDefault();
    $("#form").toggleClass("form-show col s3");
    $("#diagram").toggleClass("s11");
    $("#form-content").toggle('show');
  });

});
