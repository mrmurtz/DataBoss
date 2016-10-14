var UseThis = {
                	"language": "1",
                	"framework": "1",
                	"orm": "1",
                	"db": "1",
                	"table": {
                		"1": {
                			"tableName": "photo",
                			"columns": {
                				"1": {
                					"label": "ID Image",
                				},
                				"2": {
                					"label": "Caption",
                				}
                			}
                		},
                    "2": {
                      "tableName": "tag",
                      "columns": {
                        "1": {
                          "label": "ID",
                        },
                        "2": {
                          "label": "Genre",
                        }
                      }
                    }
                	}
                };

function outputGenerator(json, tableNumber, columnNumber) {
    for (var label in json.table[tableNumber].columns[columnNumber]) {
      var result = json.table[tableNumber].columns[columnNumber];
      return result;
  }
}

  function OperatorCreator(json){
    // HARD CODED
    var tableLength = 2;
    var operator = [];
    // HARD CODED
    for (var i = 1; i < tableLength+1; i++) {
      var currentTable = json.table[i];
      var top = 120;
      var left = i*200;
      var title = currentTable.tableName;
      var output = new Operator(top, left, title);
      // HARD CODED
      for (var x = 1; x < 3; x++) {
          var label = outputGenerator(json, i, x);
          output.operator.properties.outputs["output_" + x] = label;
      }
      operator.push(output);
    }
    return operator;
  }

// DATA SHELL

function Operator(top, left, title){
  this.operator = {
          top: top,
          left: left,
          properties: {
            title: title,
            inputs: {},
            outputs: {
            }
          }
        };
      }

// TABLE FUNCTIONS


function convertToData(array) {
  var data = {
    operators: {
    }
  };
  data.operators["operator1"] = array[0].operator;
  data.operators["operator2"] = array[1].operator;
  return data;
}


$(document).ready(function() {
  var array = OperatorCreator(UseThis);
  var newData = convertToData(array);
   // Apply the plugin on a standard, empty div...
   $('#diagram').flowchart({
     data: newData
   });
 });
