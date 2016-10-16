$(document).ready(function(){


  $('#form-submit-btn').click(function(){
    var diagramTitle = $('#app-name').val();
    var table1 = $('input[name=table1]').val();
    var col1 = $('input[name=columnName1]').val();
    var col1type = $('select[name=dataType1] option:selected').text();
    var col2 = $('input[name=columnName2]').val();
    var col2type = $('select[name=dataType2] option:selected').text();
    var table2 = $('input[name=table2]').val();
    var col3 = $('input[name=columnName3]').val();
    var col3type = $('select[name=dataType3] option:selected').text();
    var col4 = $('input[name=columnName4]').val();
    var col4type = $('select[name=dataType4] option:selected').text();

    console.log(col1type);
    console.log(col2type);
    console.log(col3type);
    console.log(col4type);

    var data = {
      operators: {
        operator1: {
          top: 40,
          left: 50,
          properties: {
            title: table1,
            inputs: {
              input_1: {
                label: 'ID:'
              },
              input_2: {
                label: col1 + ": ",
              },
              input_3: {
                label: col2 + ": ",
              }
            },
            outputs: {
              output_1: {
                label: 'Serial',
              },
              output_2: {
                label: col1type,
              },
              output_3: {
                label: col2type,
              }
            }
          }
        },
        operator2: {
          top: 40,
          left: 400,
          properties: {
            title: table2,
            inputs: {
              input_1: {
                label: 'ID:',
              },
              input_2: {
                label: col3 + ': ',
              },
              input_3: {
                label: col4 + ': ',
              }
            },
            outputs: {
              output_1: {
                label: 'Serial',
              },
              output_2: {
                label: col3type,
              },
              output_3: {
                label: col4type,
              }
            }
          }
        },
      },
      links: {
        link_1: {
          fromOperator: 'operator1',
          fromConnector: 'output_1',
          toOperator: 'operator2',
          toConnector: 'input_1',
        },
      }
    };
  $('#diagram-title').html(diagramTitle);
  $('#diagram-canvas').flowchart({
      data: data
    });
  });

});
