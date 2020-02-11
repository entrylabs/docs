const BaseModule = require('./baseModule');

class Module extends BaseModule {
    constructor() {
        super();
        this.sp = null;
        this.digitalPin = [];
        this.sendBuffers = [];
    }

    init(handler, config) {
        // 엔트리 브라우저와 연결되었을때 호출됨
    }

    setSerialPort(sp) {
        // 최초 연결시도(handshake) 성공 후에 호출됨
        this.sp = sp;
    }

    requestInitialData() {
        // 최초 연결시도시 디바이스에 보낼 데이터
        return null;
    }

    checkInitialData(data, config) {
        // 최초 연결시도에서 디바이스의 데이터를 받아, 원하는 데이터가 맞는지 판단하는 로직
        return true;
    }

    // deprecated
    afterConnect(connector, cb) {
        // handshake 종료 후 정상 연결상태로 진입전에 호출됨. connector 와 UI state 를 강제변경할 수 있으나 비추천
        connector.connected = true;
        if (cb) {
            cb('connected'); // 해당 string state 로 UI state 를 강제변경하나 문제를 일으킬 수 있습니다.
        }
    }

    validateLocalData(data) {
        // 해당 함수가 존재하면, 디바이스에서 데이터를 받아온 후 validate 를 거친다. 없으면 그대로 처리로직으로 진행한다.
        return true;
    }

    requestRemoteData(handler) {
        // 엔트리 브라우저에서 온 데이터를 처리한다. handler.read 로 브라우저의 데이터를 읽어올 수 있다.
    };

    handleRemoteData(handler) {
        // 디바이스에서 데이터를 받아온 후, 브라우저로 데이터를 보내기 위해 호출되는 로직. handler 를 세팅하는 것으로 값을 보낼 수 있다.
        let buffer = new Buffer([]);
        const digitalPin = this.digitalPin;

        for (let i = 0 ; i < 14 ; i++) {
            digitalPin[i] = handler.read(i);

            buffer = Buffer.concat([
                buffer,
                this.makeOutputBuffer(1, i, digitalPin[i] === 1 ? 255 : 0),
            ]);
        }

        if (buffer.length) {
            this.sendBuffers.push(buffer);
        }
    }

    requestLocalData() {
        // 디바이스로 데이터를 보내는 로직. control: slave 인 경우 duration 주기에 맞춰 디바이스에 데이터를 보낸다.
        // return 값으로 버퍼를 반환하면 디바이스로 데이터를 보내나, 아두이노의 경우 레거시 코드를 따르고 있다.

        if (this.sendBuffers.length > 0) {
            this.sp.write(this.sendBuffers.shift(), () => {
                if (this.sp) {
                    this.sp.drain(() => {
                        this.isDraing = false;
                    });
                }
            });
        }

        return null;
    }

    handleLocalData(data) {
        // 디바이스에서 온 데이터를 처리하는 로직. 여기서는 처리할 데이터가 없어 스킵하였음.
    }

    disconnect(connector) {
        // 커넥터가 연결해제될 때 호출되는 로직, 스캔 정지 혹은 디바이스 연결 해제시 호출된다.
        connector.close();
        if (this.sp) {
            delete this.sp;
        }
    };

    reset() {
        // 엔트리 브라우저와의 소켓 연결이 끊어졌을 때 발생하는 로직.
    }

    // 이 아래로는 자유롭게 선언하여 사용한 함수입니다.
    makeOutputBuffer(device, port, data) {
        let buffer;
        const value = new Buffer(2);
        const dummy = new Buffer([10]);

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

    getDataByBuffer(buffer) {
        const datas = [];
        let lastIndex = 0;
        buffer.forEach((value, idx) => {
            if (value == 13 && buffer[idx + 1] == 10) {
                datas.push(buffer.subarray(lastIndex, idx));
                lastIndex = idx + 2;
            }
        });

        return datas;
    };
}

module.exports = new Module();
