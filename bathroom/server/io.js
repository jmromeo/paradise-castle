var io      = require('socket.io')();
var d6t     = require('d6t').d6t;
var ref     = require('ref');
var sleep   = require('sleep')

// creating devh pointer used by d6t library
var d6t_devh = new d6t.d6t_devh_t();

// opening d6t device
d6t.d6t_open(d6t_devh.ref(), 0);

// socket server connection callback
io.on('connection', function (socket) {
//    socket.emit('InitData', [ temperatureData, altitudeData, humidityData ]);
});


// mimicking future data when we will receive data over uart, parse, then send to client to display
setInterval(function() {

    // performing read, getting pointer to data from d6t device handle
    d6t.d6t_read(d6t_devh.ref());
    var dataptr = ref.reinterpret(d6t_devh.rdbuf, d6t_devh.bufsize, 0);

    // all remaining words are pixel temperatures
    var temp=[];
    for (var i = 2; i < d6t_devh.bufsize-1; i = i + 2)
    {
        temp.push(ref.get(dataptr, i, ref.types.uint16) / 10);
    }

    io.emit('AddData', temp);
}, 250);

module.exports = io;
