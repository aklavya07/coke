function _0x11cd70(_0x3e6123, _0x9492ca) {
    return _0x3045(_0x9492ca - -0x120, _0x3e6123);
}
(function (_0x1a70e2, _0x1d6afc) {
    function _0x14cbc5(_0x14cb40, _0x1d7f1d) {
        return _0x3045(_0x14cb40 - 0x200, _0x1d7f1d);
    }
    const _0x4e5aea = _0x1a70e2();
    while (!![]) {
        try {
            const _0x5dd4d7 = parseInt(_0x14cbc5(0x202, 0x1fe)) / 0x1 + -parseInt(_0x14cbc5(0x21d, 0x1ff)) / 0x2 * (parseInt(_0x14cbc5(0x231, 0x22d)) / 0x3) + -parseInt(_0x14cbc5(0x204, 0x21c)) / 0x4 + parseInt(_0x14cbc5(0x21e, 0x20c)) / 0x5 * (parseInt(_0x14cbc5(0x208, 0x213)) / 0x6) + -parseInt(_0x14cbc5(0x20e, 0x21c)) / 0x7 * (-parseInt(_0x14cbc5(0x220, 0x20e)) / 0x8) + -parseInt(_0x14cbc5(0x216, 0x203)) / 0x9 * (-parseInt(_0x14cbc5(0x211, 0x1f5)) / 0xa) + parseInt(_0x14cbc5(0x22f, 0x21f)) / 0xb * (-parseInt(_0x14cbc5(0x236, 0x22d)) / 0xc);
            if (_0x5dd4d7 === _0x1d6afc) {
                break;
            } else {
                _0x4e5aea['push'](_0x4e5aea['shift']());
            }
        } catch (_0x44c387) {
            _0x4e5aea['push'](_0x4e5aea['shift']());
        }
    }
}(_0x5d1e, 0x2eb63));
function _0x5d1e() {
    const _0x37ab0b = [
        '72CfUHjA',
        'Error:',
        'content',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'Failed\x20to\x20paste:',
        'target',
        'querySelector',
        'HTTP\x20error!\x20Status:\x20',
        'innerText',
        'Text\x20not\x20found',
        'POST',
        'keydown',
        'candidates',
        'then',
        'log',
        '88SxCXGu',
        'status',
        '76437exeFfB',
        'error',
        'application/json',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c\x20Language\x20format',
        'Extracted\x20Text:',
        '904308KcKUsH',
        'black',
        'replace',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'key',
        'clipboard',
        'AIzaSyBWAVaOhFgP3jZjg4AOWZAHnxdrmcDNh2c',
        '[aria-labelledby=\x22instruction-card\x22]',
        '\x20using\x20',
        '82988altQyw',
        'trim',
        '506036AvPYms',
        'Cleaned\x20Text:',
        'writeText',
        'readText',
        '66vSMzdb',
        'activeElement',
        'Target\x20element\x20not\x20found',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'observe',
        'style',
        '240478BIhjma',
        'input',
        'addEventListener',
        '28370BfbeeH',
        'color',
        'message',
        'Error\x20copying\x20to\x20clipboard:',
        'parts',
        '1071GKYWUp',
        'disconnect',
        'closest',
        'Formatted\x20Clipboard\x20Text:',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'text',
        'dispatchEvent',
        '2UXhCin',
        '98370OYOvzV',
        'catch'
    ];
    _0x5d1e = function () {
        return _0x37ab0b;
    };
    return _0x5d1e();
}
async function copyTextToClipboard(_0x3aa75a) {
    function _0x24014e(_0x4a0473, _0x4d368c) {
        return _0x3045(_0x4a0473 - 0x382, _0x4d368c);
    }
    try {
        if (!_0x3aa75a) {
            throw new Error(_0x24014e(0x3ab, 0x3bb));
        }
        await navigator[_0x24014e(0x3bd, 0x3d6)][_0x24014e(0x388, 0x378)](_0x3aa75a);
    } catch (_0x27e8fd) {
        console[_0x24014e(0x3b4, 0x3ad)](_0x24014e(0x396, 0x392), _0x27e8fd);
        throw _0x27e8fd;
    }
}
async function sendToOpenAI(_0x3e2652) {
    const _0x5dd5cd = _0x5b006e(-0x100, -0xfd);
    const _0xb403cb = _0x5b006e(-0x120, -0x12e) + _0x5dd5cd;
    const _0x187b51 = {
        'method': _0x5b006e(-0xf4, -0x10f),
        'headers': { 'Content-Type': _0x5b006e(-0xfd, -0x106) },
        'body': JSON['stringify']({ 'contents': [{ 'parts': [{ 'text': _0x3e2652 }] }] })
    };
    function _0x5b006e(_0xc1c8e9, _0x48b644) {
        return _0x3045(_0x48b644 - -0x139, _0xc1c8e9);
    }
    try {
        const _0x42de8d = await fetch(_0xb403cb, _0x187b51);
        if (!_0x42de8d['ok']) {
            throw new Error(_0x5b006e(-0x120, -0x112) + _0x42de8d[_0x5b006e(-0xfe, -0x109)]);
        }
        const _0x174ef8 = await _0x42de8d['json']();
        const _0x1931f5 = _0x174ef8[_0x5b006e(-0x106, -0x10d)];
        const _0x2596a8 = _0x1931f5[0x0][_0x5b006e(-0x12e, -0x117)][_0x5b006e(-0x11a, -0x124)][0x0][_0x5b006e(-0x132, -0x11e)];
        console[_0x5b006e(-0x117, -0x10b)](_0x5b006e(-0x11a, -0x104), _0x2596a8);
        await copyTextToClipboard(_0x2596a8);
        return _0x2596a8;
    } catch (_0x496978) {
        console[_0x5b006e(-0x111, -0x107)](_0x5b006e(-0x10a, -0x118), _0x496978[_0x5b006e(-0x119, -0x126)]);
        throw _0x496978;
    }
}
async function handleDoubleClick(_0xd92a7e) {
    function _0xe9d40e(_0x244e32, _0x327b12) {
        return _0x3045(_0x327b12 - 0x10, _0x244e32);
    }
    try {
        const _0x16d83e = _0xd92a7e[_0xe9d40e(0x27, 0x35)][_0xe9d40e(0x2a, 0x28)](_0xe9d40e(0x39, 0x33));
        if (!_0x16d83e)
            throw new Error(_0xe9d40e(0x15, 0x1a));
        const _0x45d4b0 = _0x16d83e[_0xe9d40e(0x20, 0x38)][_0xe9d40e(0x5d, 0x48)](/\n{3,}/g, '\x0a')[_0xe9d40e(-0x5, 0x13)]();
        console['log'](_0xe9d40e(0x24, 0x15), _0x45d4b0);
        const _0xab817c = document[_0xe9d40e(0x55, 0x36)](_0xe9d40e(-0x7, 0x10));
        let _0x343a4f = '';
        if (!_0xab817c) {
            _0x343a4f = _0x45d4b0 + _0xe9d40e(0x51, 0x44);
        } else {
            _0x343a4f = _0x45d4b0 + _0xe9d40e(0x1b, 0x11) + _0xab817c[_0xe9d40e(0x28, 0x38)] + _0xe9d40e(0x28, 0x2a);
        }
        console[_0xe9d40e(0x21, 0x3e)](_0xe9d40e(0x10, 0x29), _0x343a4f);
        await copyTextToClipboard(_0x343a4f);
        _0x343a4f = await navigator[_0xe9d40e(0x41, 0x4b)][_0xe9d40e(0x2d, 0x17)]();
        await sendToOpenAI(_0x343a4f);
        const _0x4dbcd8 = document['querySelector'](_0xe9d40e(0x2f, 0x49));
        if (_0x4dbcd8) {
            _0x4dbcd8[_0xe9d40e(0x2b, 0x1d)]['color'] = 'grey';
            setTimeout(() => {
                function _0x38d149(_0x13131c, _0x2912c0) {
                    return _0xe9d40e(_0x2912c0, _0x13131c - 0x271);
                }
                _0x4dbcd8['style'][_0x38d149(0x293, 0x2a2)] = _0x38d149(0x2b8, 0x2d1);
            }, 0xbb8);
        }
    } catch (_0x598c61) {
        console[_0xe9d40e(0x2c, 0x42)](_0xe9d40e(0x1a, 0x31), _0x598c61[_0xe9d40e(0x1c, 0x23)]);
    }
}
function Hack() {
    const _0x5a3c90 = new MutationObserver((_0x3ad47f, _0x61a590) => {
        function _0x768ca8(_0x1d4bb3, _0x12fc2e) {
            return _0x3045(_0x12fc2e - -0x20e, _0x1d4bb3);
        }
        if (document[_0x768ca8(-0x1f1, -0x1e8)](_0x768ca8(-0x1db, -0x1eb))) {
            _0x61a590[_0x768ca8(-0x212, -0x1f7)]();
        }
    });
    function _0x31d0ae(_0x4746de, _0xc01495) {
        return _0x3045(_0xc01495 - 0x397, _0x4746de);
    }
    _0x5a3c90[_0x31d0ae(0x3b4, 0x3a3)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document[_0x31d0ae(0x3a0, 0x3a7)]('dblclick', handleDoubleClick);
}
function _0x3045(_0x2bb6ac, _0x5d1e90) {
    const _0x3045cc = _0x5d1e();
    _0x3045 = function (_0x165e83, _0x593c00) {
        _0x165e83 = _0x165e83 - 0x0;
        let _0x397d4d = _0x3045cc[_0x165e83];
        return _0x397d4d;
    };
    return _0x3045(_0x2bb6ac, _0x5d1e90);
}
document['addEventListener'](_0x11cd70(-0xdf, -0xf5), _0x49c052 => {
    function _0x1fde76(_0x335e9b, _0x52ca2d) {
        return _0x11cd70(_0x52ca2d, _0x335e9b - 0x146);
    }
    if (_0x49c052['ctrlKey'] && _0x49c052[_0x1fde76(0x60, 0x46)] === 'y' || _0x49c052['altKey'] && _0x49c052[_0x1fde76(0x60, 0x5b)] === 'y') {
        navigator['clipboard']['readText']()[_0x1fde76(0x53, 0x46)](_0x6c78bf => {
            function _0x37b9b8(_0x5b475f, _0x154287) {
                return _0x1fde76(_0x154287 - -0x331, _0x5b475f);
            }
            if (document[_0x37b9b8(-0x319, -0x302)] instanceof HTMLInputElement || document['activeElement'] instanceof HTMLTextAreaElement) {
                document[_0x37b9b8(-0x30d, -0x302)]['value'] = _0x6c78bf;
                document[_0x37b9b8(-0x2fb, -0x302)][_0x37b9b8(-0x2f0, -0x2ef)](new Event(_0x37b9b8(-0x317, -0x2fc), { 'bubbles': !![] }));
            }
        })[_0x1fde76(0x45, 0x3f)](_0xd9abe => {
            function _0x426ca8(_0x20c888, _0x3c6da9) {
                return _0x1fde76(_0x3c6da9 - -0x3c8, _0x20c888);
            }
            console['error'](_0x426ca8(-0x385, -0x37e), _0xd9abe);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
