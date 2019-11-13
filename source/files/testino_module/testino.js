function Module() {
    this.sp = null;
    this.digitalPin = [];
    this.sendBuffers = [];
}

Module.prototype.init = function(handler, config) {};

Module.prototype.setSerialPort = function(sp) {
    var self = this;
    this.sp = sp;
};

Module.prototype.requestInitialData = function() { return null; };

Module.prototype.checkInitialData = function(data, config) { return true; };

Module.prototype.afterConnect = function(that, cb) {
    that.connected = true;
    if (cb) {
        cb('connected');
    }
};

Module.prototype.validateLocalData = function(data) { return true; };

Module.prototype.requestRemoteData = function(handler) { };

Module.prototype.handleRemoteData = function(handler) {
    var self = this;
    var buffer = new Buffer([]);
    var digitalPin = this.digitalPin;

    for ( var i = 0 ; i < 14 ; i++ ) {
        digitalPin[i] = handler.read(i);

        buffer = Buffer.concat([
            buffer,
            self.makeOutputBuffer( 1, i, digitalPin[i] == 1 ? 255 : 0),
        ]);
    }

    if (buffer.length) {
        this.sendBuffers.push(buffer);
    }
};

Module.prototype.requestLocalData = function() {
    var self = this;

    if (this.sendBuffers.length > 0) {
        this.sp.write(this.sendBuffers.shift(), function() {
            if (self.sp) {
                self.sp.drain(function() {
                    self.isDraing = false;
                });
            }
        });
    }

    return null;
};

/*
ff 55 idx size data a
*/
Module.prototype.handleLocalData = function(data) {

};

//0xff 0x55 0x6 0x0 0x1 0xa 0x9 0x0 0x0 0xa
Module.prototype.makeOutputBuffer = function(device, port, data) {
    var buffer;
    var value = new Buffer(2);
    var dummy = new Buffer([10]);

    value.writeInt16LE(data);
    buffer = new Buffer([
        255,
        85,
        6,
        0, // sensorIdx
        2,
        device,
        port,
    ]);
    buffer = Buffer.concat([buffer, value, dummy]);

    return buffer;
};

Module.prototype.getDataByBuffer = function(buffer) {
    var datas = [];
    var lastIndex = 0;
    buffer.forEach(function(value, idx) {
        if (value == 13 && buffer[idx + 1] == 10) {
            datas.push(buffer.subarray(lastIndex, idx));
            lastIndex = idx + 2;
        }
    });

    return datas;
};

Module.prototype.disconnect = function(connect) {
    var self = this;
    connect.close();
    if (self.sp) {
        delete self.sp;
    }
};

Module.prototype.reset = function() { };

module.exports = new Module();
