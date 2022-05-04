google.charts.load('current', {'packages':['sankey']});
newData = google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows([
        [ 'A', 'X', 5 ],
        [ 'A', 'Y', 7 ],
        [ 'A', 'Z', 6 ],
        [ 'B', 'X', 2 ],
        [ 'B', 'Y', 9 ],
        [ 'B', 'Z', 4 ]
    ]);

    newData = new google.visualization.DataTable();
    newData.addColumn('string', 'From');
    newData.addColumn('string', 'To');
    newData.addColumn('number', 'Weight');

    // Sets chart options.
    var options = {
        width: 600,
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(data, options);

    return newData;
}



function drawNewChart(newData){
    var options = {
        width: 600,
    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
    chart.draw(newData, options);
}

function addNode(newData, startNode, endNode, nodeWeight) {
    console.log(`Node added with ${startNode}, ${endNode}, ${nodeWeight}`)
    newData.addRow([startNode, endNode, nodeWeight])
    google.charts.setOnLoadCallback(drawNewChart(newData));
}

function delNodes(newData) {
    google.charts.setOnLoadCallback(drawChart);
}

function addData() {
    var input = document.getElementsByName('dataToAdd');
    addNode(newData, input[0].value, input[1].value, input[2].value);
}

