  // $(document).ready(function(){
  //     //We will be using an unique index number for each new instance of the cloned form
  //     var table_form_index=0;
  //     //When the button is clicked (or Enter is pressed while it's selected)
  //     $("#add_table").click(function(){
  //         //Increment the unique index cause we are creating a new instance of the form
  //         table_form_index++;
  //         //Clone the form and place it just before the button's <p>. Also give its id a unique index
  //         $(this).parent().before($("#table_form").clone().attr("id","table_form" + table_form_index));
  //         //Make the clone visible by changing CSS
  //         $("#table_form" + table_form_index).css("display","inline");
  //         //For each input fields contained in the cloned form...
  //         $("#table_form" + table_form_index + " :input").each(function(){
  //             //Modify the name attribute by adding the index number at the end of it
  //             $(this).attr("name",$(this).attr("name") + table_form_index);
  //             //Modify the id attribute by adding the index number at the end of it
  //             $(this).attr("id",$(this).attr("id") + table_form_index);
  //         });
  //         // //When the Remove button is clicked (or Enter is pressed while it's selected)
  //         // $("#remove_table" + table_form_index).click(function(){
  //         //     //Remove the whole cloned div
  //         //     $(this).closest("div").remove();
  //         // });
  //     });
  // });

$(document).ready(function(){
  var regex = /^(.+?)(\d+)$/i;
  var cloneIndex = $(".clonedInput").length;

  function clone(){
      $(this).parents(".clonedInput").clone()
          .appendTo(".happy")
          .attr("id", "clonedInput" +  cloneIndex)
          .find("*")
          .each(function() {
              var id = this.id || "";
              var match = id.match(regex) || [];
              if (match.length == 3) {
                  this.id = match[1] + (cloneIndex);
              }
          })
          .on('click', 'button.clone', clone)
          .on('click', 'button.remove', remove);
      cloneIndex++;
  }
  function remove(){
      $(this).parents(".clonedInput").remove();
  }
  $("button.clone").on("click", clone);

  $("button.remove").on("click", remove);
});
