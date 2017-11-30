var io      = require('socket.io')();
var d6t     = require('d6t').d6t;
var ref     = require('ref');

// creating devh pointer used by d6t library
var d6t_devh = new d6t.d6t_devh_t();

// opening d6t device
d6t.d6t_open_js(d6t_devh, 0);

// socket server connection callback
io.on('connection', function (socket) {
//    socket.emit('InitData', [ temperatureData, altitudeData, humidityData ]);
});

// reading data from sensor every 250ms and sending to clients
setInterval(function() {

    // performing read, getting pointer to data from d6t device handle
    var data = d6t.d6t_read_js(d6t_devh);

    io.emit('AddData', data);

}, 250);

module.exports = io;
