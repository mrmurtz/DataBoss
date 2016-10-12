function Diagram() {

}

// INFORMATION RECEIVED AS JSON OBJECT
var UserSelection = {language: "1", framework: "1", orm: "1", db: "1", tableName1: "user", tableName2: "photo", columnName: "name", columnName2: "image"};
var label = UserSelection.tableName1;
var property = UserSelection.columnName;
var label2 = UserSelection.tableName2;
var property2 = UserSelection.columnName2;

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
model2.children[2].content = label2;
model2.children[3].content = property2;
model2.strokeColor = 'black';
model2.position = new Point(800, 275);
