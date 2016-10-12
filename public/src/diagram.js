function Diagram() {

}

// INFORMATION RECEIVED AS JSON OBJECT
var UserSelection = {language: "1", framework: "1", orm: "1", db: "1", tableName: "user", columnName: "name"};
var label = UserSelection.tableName;
var property = UserSelection.columnName;


// MAKING A RECTANGLE
var rectangle1 = new Rectangle(new Point(50,50), new Point(400,500));
var cornersize = new Size(10, 10);
var path = new Path.RoundRectangle(rectangle1, cornersize);

// MAKING THE LINE UNDERNEATH MODEL NAME
var header = new Path();
var hp1 = new Point(50, 120);
var hp2 = new Point(400, 120);
header.add(hp1);
header.add(hp2);

// MAKING MODEL NAME
var text = new PointText(new Point(220, 100));
text.justification = "center";
text.fillColor = "black";
text.fontSize = 25;
text.content = label;

// MAKING COLUMN NAME
var column = new PointText(new Point(80, 160))
column.justification = "left";
column.fillColor = "black";
column.fontSize = 15;
column.content = property + ":";

var model1 = new Group ({

  children: [path, header, text, column],

  strokeColor: 'black',

  position: view.center

});

Diagram.prototype = {
  
  makeBox: function() {
    var rectangle1 = new Rectangle(new Point(50,50), new Point(400,500));
    var cornersize = new Size(10, 10);
    var path = new Path.RoundRectangle(rectangle1, cornersize);
    path.fillColor = "#EAF1F4";
    path.strokeColor = "#E06C72";
    path.strokeWidth = 4;
    var header = new Path();
    var hp1 = new Point(50, 120);
    var hp2 = new Point(400, 120);
    header.add(hp1);
    header.add(hp2);
    line.strokeColor = "#E06C72";
    line.strokeWidth = 4;
  },

  makeLine: function(){
    var path = new Path();
    var point1 = new Point(400, 250);
    var point2 = new Point(700, 250);
    path.strokeColor = 'green';
    path.add(point1);
    path.add(point2);
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


$(document).ready(function(){

  var diagram = new Diagram();

  $('#create-diagram').click(function(){
    // diagram.makeBox();
    // diagram.labelBox(label);
    // diagram.makeColumn(column);
    model
  });

  $('#create-line').click(function(){
    diagram.makeLine();
  });

});
