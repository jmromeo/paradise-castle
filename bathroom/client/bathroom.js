var socket = io(); ///< Client socket.

function addData(data)
{
    var pixel;
    var maxtmp = 31;
    var mintmp = 19;

    for (var i = 0; i < data.length; i++)
    {
        id    = "px" + i.toString(10);
        pixel = document.getElementById(id);

        var r = parseInt(((data[i] - mintmp) / (maxtmp - mintmp)) * 255);
        var g = 0;
        var b = 255 - r;

        var rgb = "rgb(" + r + "," + g + "," + b + ")";
        console.log("temp[%d]: %d, rgb: %s", i, data[i], rgb);


        pixel.style.backgroundColor = rgb;
    }
}

socket.on('connect', function(data) {
    socket.on('AddData', function(data) {
        console.log("receiving data");
        addData(data);
    });

    socket.on('InitData', function(data) {
    });
});

