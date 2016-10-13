var regex = /^(.+?)(\d+)$/i;
var tableIndex = $(".clonedInput").length;

function clone(){
    $('#one-entry').clone()
        .appendTo("#table")
        .attr("id", tableIndex)
        .find("*")
        .each(function() {
            var id = this.id || "";
            var match = id.match(regex) || [];
            if (match.length == 3) {
                this.id = match[1] + (tableIndex);
            }
        })
        .on('click', 'button.clone', clone)
        .on('click', 'button.remove', remove);
    tableIndex++;
}
function remove(){
    $("#0").remove();
}
$("button.clone").on("click", clone);

$("button.remove").on("click", remove);


var columnIndex = $(".clonedInput").length;

function addColumn(){
    $('#column-entry').clone()
        .appendTo("#column")
        .attr("id", columnIndex)
        .find("*")
        .each(function() {
            var id = this.id || "";
            var match = id.match(regex) || [];
            if (match.length == 3) {
                this.id = match[1] + (columnIndex);
            }
        })
        .on('click', 'button.addColumn', addColumn)
        .on('click', 'button.removeColumn', removeColumn);
    columnIndex++;
}
function removeColumn(){
    $("#0").remove();
}
$("button.addColumn").on("click", addColumn);

$("button.removeColumn").on("click", removeColumn);
