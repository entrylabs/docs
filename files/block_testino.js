class Testino {
    constructor() {
        this.id = 'FF.FF';
        this.url = 'http://www.my-company.org/';
        this.name = 'Testino';
        this.imageName = 'testino.png'; //thumbnail
        this.title = {
            ko: '테스트이노',
            en: 'testino',
        };

        // 작성한 블록의 이름을 추가합니다.
        this.blockMenuBlocks = ['testino_on_digital_value', 'testino_off_digital_value'];
    }

    setZero() {
        // 엔트리 실행이 정지되었을때 보낼 신호 (reset 명령을 보냄)
        // 2번부터 13번 포트를 0으로 초기화 할 것입니다.
        for (let i = 2; i < 14; i++) {
            Entry.hw.sendQueue[i] = 0;
        }

        Entry.hw.update(); // 하드웨어에 정보를 보냄
    }

    setLanguage() {
        return {
            ko: {
                template: {
                    testino_on_digital_value: '디지털 핀 %1 번을 켜기',
                    testino_off_digital_value: '디지털 핀 %1 번을 끄기',
                },
            },
            en: {
                template: {
                    testino_on_digital_value: 'turn on digital pin %1',
                    testino_off_digital_value: 'turn off digital pin %1',
                },
            },
        };
    }
}

Entry.Testino = new Testino();
module.exports = Entry.Testino;
