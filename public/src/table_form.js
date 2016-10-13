var regex = /^(.+?)(\d+)$/i;
var cloneIndex = $(".clonedInput").length;

function clone(){
    $('#one-entry').clone()
        .appendTo("#table")
        .attr("id", cloneIndex)
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
    $(this).parents("#table").remove();
}
$("button.clone").on("click", clone);

$("button.remove").on("click", remove);
