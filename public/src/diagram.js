function Diagram() {

}

// INFORMATION RECEIVED AS JSON OBJECT
var UserSelection = {language: "1", framework: "1", orm: "1", db: "1", tableName1: "user", columnName: "name"};
var label = UserSelection.tableName1;
var property = UserSelection.columnName;


// CREATING A RECTANGLE
var rectangle1 = new Rectangle(new Point(50,50), new Point(400,500));
var cornersize1 = new Size(10, 10);
var path1 = new Path.RoundRectangle(rectangle1, cornersize1);

// CREATING THE LINE UNDERNEATH MODEL NAME
var header1 = new Path();
var hp1 = new Point(50, 120);
var hp2 = new Point(400, 120);
header1.add(hp1);
header1.add(hp2);

// CREATING MODEL NAME
var text1 = new PointText(new Point(220, 100));
text1.justification = "center";
text1.fillColor = "black";
text1.fontSize = 25;
text1.content = label;

// CREATING COLUMN NAME
var column1 = new PointText(new Point(80, 160))
column1.justification = "left";
column1.fillColor = "black";
column1.fontSize = 15;
column1.content = property + ":";

var model1 = new Group ({

  children: [path1, header1, text1, column1],

  strokeColor: 'black',

  position: view.left

});

var model2 = model1.clone();
model2.strokeColor = 'black';
model2.position = new Point(800, 275);




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
    // model
  });

  $('#create-line').click(function(){
    diagram.makeLine();
  });

});
