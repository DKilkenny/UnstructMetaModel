
// // To test this code, open the included index.html file in a browser window


var data = [ {
    z: [[10, 10.625, 12.5, 15.625, 20],
[5.625, 6.25, 8.125, 11.25, 15.625],
[2.5, 3.125, 5.0, 8.125, 12.5],
[0.625, 1.25, 3.125, 6.25, 10.625],
[0, 0.625, 2.5, 5.625, 10]],
    type: 'contour'
}
];

var layout = {
    title: 'Basic Contour Plot',
    xaxis: {
        title: {
            text: 'Mach'
        }
    },
    yaxis: {
        title: {
            text: 'Altitude kft'
        }
    },
}

Plotly.newPlot('myDiv', data, layout);


