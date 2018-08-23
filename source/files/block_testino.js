'use strict';

Entry.Testino = {
    name: 'Testino',
    url: 'http://www.my-company.org/',
    imageName: 'testino.png', //thumbnail
    title: {
        "ko": '테스트이노',
        "en": 'testino'
    },
    setZero: function() {
        // 엔트리 실행이 정지되었을때 보낼 신호 (reset 명령을 보냄)
        // 2번부터 13번 포트를 0으로 초기화 할 것입니다.
        for(let i = 2 ; i < 14 ; i++) {
            Entry.hw.sendQueue[i] = 0;
        }
        
        Entry.hw.update(); // 하드웨어에 정보를 보냄
    },
};

Entry.Testino.setLanguage = () => {
	return {
		ko: {
			template: {
				testino_on_digital_value: '디지털 핀 %1 번을 켜기',
				testino_off_digital_value: '디지털 핀 %1 번을 끄기'
			}
		},
		en: {
			template: {
				testino_on_digital_value: 'turn on digital pin %1',
                testino_off_digital_value: 'turn off digital pin %1'
			}
		}
	}
}

Entry.Testino.getBlocks = () => {
    return {
        testino_on_digital_value: { // 블록 이름
            color: '#00979D', // 블록색상
            skeleton: 'basic', // 블록 모양 템플릿. 자세한 목록은 docs 를 참고해주세요
            statements: [],
            params: [ //입력될 파라미터들의 속성을 정의 
                {
                    type: 'Block',
                    accept: 'string', //숫자만 들어가도 string 입니다. 엔트리엔 이를 구분하지 않습니다.
                },
            ],
            def: {
                params: [ //파라미터에 들어갈 기본 값.
                    {
                        type: 'number',
                        params: [2],
                    },
                ],
                type: 'testino_on_digital_value', // 블록 상속과 관련된 값입니다. 블록명과 동일하게 해주면 됩니다.
            },
            paramsKeyMap: { // 실제 블록의 로직인 func 에서 해당 인덱스의 파라미터를 가져올때 쓸 key 값
                PORT: 0,
            },
            events: {},
            class: 'TestinoBlock', // 블록을 묶어서 보여줄 단위값. 이 값이 바뀌면 사이에 가로줄이 생깁니다.
            isNotFor: ['Testino'], // 하드웨어가 연결되었을 경우만 블록을 보여주겠다는 판단값입니다.
            func: (sprite, script) => {
                // paramsKeyMap 에서 PORT 는 파라미터의 0번 인덱스 값이었습니다.
                const portNumber = script.getNumberValue('PORT');
                Entry.hw.sendQueue[portNumber] = 1
                // 값을 반환해야하는 경우는 return 할 수 있습니다.
            },
            syntax: { // 파이썬 문법 변환에 사용되고 있습니다.
                js: [],
                py: [
                    {
                        syntax: 'Testino.turnOnDigitalPort(%1)',
                        blockType: 'param',
                        textParams: [
                            {
                                type: 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            }, 
        },
        testino_off_digital_value: { // 블록 이름
            color: '#00979D', // 블록색상
            skeleton: 'basic', // 블록 모양 템플릿. 자세한 목록은 docs 를 참고해주세요
            statements: [],
            params: [ //입력될 파라미터들의 속성을 정의 
                {
                    type: 'Block',
                    accept: 'string', //숫자만 들어가도 string 입니다. 엔트리엔 이를 구분하지 않습니다.
                },
            ],
            def: {
                params: [ //파라미터에 들어갈 기본 값.
                    {
                        type: 'number',
                        params: [2],
                    },
                ],
                type: 'testino_off_digital_value', // 블록 상속과 관련된 값입니다. 블록명과 동일하게 해주면 됩니다.
            },
            paramsKeyMap: { // 실제 블록의 로직인 func 에서 해당 인덱스의 파라미터를 가져올때 쓸 key 값
                PORT: 0,
            },
            events: {},
            class: 'TestinoBlock', // 블록을 묶어서 보여줄 단위값. 이 값이 바뀌면 사이에 가로줄이 생깁니다.
            isNotFor: ['Testino'], // 하드웨어가 연결되었을 경우만 블록을 보여주겠다는 판단값입니다.
            func: (sprite, script) => {
                // paramsKeyMap 에서 PORT 는 파라미터의 0번 인덱스 값이었습니다.
                const portNumber = script.getNumberValue('PORT');
                Entry.hw.sendQueue[portNumber] = 0
                // 값을 반환해야하는 경우는 return 할 수 있습니다.
            },
            syntax: { // 파이썬 문법 변환에 사용되고 있습니다.
                js: [],
                py: [
                    {
                        syntax: 'Testino.turnOffDigitalPort(%1)',
                        blockType: 'param',
                        textParams: [
                            {
                                type: 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            }, 
        },
    }
}