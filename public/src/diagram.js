function Diagram() {

}

Diagram.prototype = {

  makeBox: function() {
    var rectangle1 = new Rectangle(new Point(50,50), new Point(400,500));
    var cornersize = new Size(10, 10);
    var path = new Path.RoundRectangle(rectangle1, cornersize);
    path.fillColor = "#EAF1F4";
    path.strokeColor = "#E06C72";
    path.strokeWidth = 4;
    var from = new Point(50, 120);
    var to = new Point(400, 120);
    var line = new Path.Line(from, to);
    line.strokeColor = "#E06C72";
    line.strokeWidth = 4;
  },

  makeLine: function(){
    var from = new Point(400, 250);
    var to = new Point(700, 250);
    var line = new Path.Line(from, to);
    line.strokeColor = "#E06C72";
    line.strokeWidth = 4;
  },

  labelBox: function(value){
    var text = new PointText(new Point(220, 100));
    text.justification = "center";
    text.fillColor = "black";
    text.fontSize = 25;
    text.content = value;
  },

  makeColumn: function(value) {
    var text = new PointText(new Point(80, 160))
    text.justification = "left";
    text.fillColor = "black";
    text.fontSize = 15;
    text.content = value + ":";
  }
};

var UserSelection = {language: "1", framework: "1", orm: "1", db: "1", tableName: "user", columnName: "name"};
var label = UserSelection.tableName;
var column = UserSelection.columnName;


$(document).ready(function(){

  var diagram = new Diagram();

  $('#create-diagram').click(function(){
    diagram.makeBox();
    diagram.labelBox(label);
    diagram.makeColumn(column);
  });

  $('#create-line').click(function(){
    diagram.makeLine();
  });

});
