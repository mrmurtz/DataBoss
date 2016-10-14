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
                				},
                        "3": {
                          "label": "Alf",
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
                        },
                        "3": {
                          "label": "something",
                        }
                      }
                    },
                    "3": {
                      "tableName": "jill",
                      "columns": {
                        "1": {
                          "label": "reason",
                        },
                        "2": {
                          "label": "logic",
                        },
                        "3": {
                          "label": "love",
                        }
                      }
                    },
                    "4": {
                      "tableName": "user",
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
    tableLength = Object.keys(json.table).length;
    var operator = [];
    // HARD CODED
    for (var i = 1; i < tableLength + 1; i++) {
      var currentTable = json.table[i];
      var top = 120;
      var left = i*200;
      var title = currentTable.tableName;
      var output = new Operator(top, left, title);
      var columnLength = Object.keys(currentTable.columns).slice(-1)[0]
      // HARD CODED
      for (var x = 1; x < columnLength + 1; x++) {
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
  for (var i = 1; i < tableLength + 1; i++) {
    data.operators["operator"+i] = array[i-1].operator;
  }
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
