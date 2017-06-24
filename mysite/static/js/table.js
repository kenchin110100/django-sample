
var clients = [
    {'client_nm': 'aaa', 'high': '●', 'middle': '', 'low': ''},
    {'client_nm': 'bbb', 'high': '', 'middle': '●', 'low': ''},
    {'client_nm': 'ccc', 'high': '', 'middle': '', 'low': '●'},
]

var selected = [];

$(document).ready(function() {
    plot_table(clients);
    $('.buttons .btn').on('click', function(){
        var val = $(this).children("input").val();
        selected = get_select_array(val, selected);
        plot_table(get_filtered_json(clients, selected));
    });
});


function plot_table(json){
  var columns = [
    {id: "client_nm", name: "会社名", field: "client_nm", width: 200, editor: Slick.Editors.Text},
    {id: "high", name: "高い", field: "high", width: 200, editor: Slick.Editors.Text},
    {id: "middle", name: "真ん中", field: "middle", width: 200, editor: Slick.Editors.Text},
    {id: "low", name: "安い", field: "low", width: 200, editor: Slick.Editors.Text},
  ];

  var data = json;

  var options = {
    editable: true
  };

  var grid = new Slick.Grid("#myGrid", data, columns, options);
};

function get_select_array(val, array){
    var index = $.inArray(val, array);
    if (index != -1){
        array.splice(index, 1)
    } else {
        array.push(val);
    };
    return array
};


function filter_json(json, index){
    filtered_json = [];
    for (var row of json){
        if (row[index] == '●'){
            filtered_json.push(row);
        };
    };
    return filtered_json
};

function get_filtered_json(json, array){
    for (var index of array) {
        json = filter_json(json, index)
    };
    return json
};