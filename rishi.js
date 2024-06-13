function _0x41d4() {
    const _0x1c965e = [
        'HTTP\x20error!\x20Status:\x20',
        'AIzaSyBrqUsiEPy_4K3k6JKLGFzLXuDuaJPqgtM',
        'status',
        'dispatchEvent',
        'replace',
        'keydown',
        'Target\x20element\x20not\x20found',
        'activeElement',
        'text',
        'parts',
        'Error:',
        '\x0a\x20print\x20in\x20proper\x20c\x20Language\x20\x20the\x20output\x20that\x20he/she\x20asked\x20for,\x20keeping\x20in\x20mind\x20this\x20thing.',
        'addEventListener',
        'Cleaned\x20Text:',
        'writeText',
        'stringify',
        '5ZJJKxz',
        '1086489lyTOsV',
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=',
        'trim',
        'disconnect',
        'Text\x20not\x20found',
        '.lg\x5c:t-mb-15.t-mb-10.t-text-black.t-text-big.lg\x5c:t-text-xl.t-font-bold',
        'Error\x20copying\x20to\x20clipboard:',
        'observe',
        'style',
        '318484kIQUyV',
        'message',
        'div[aria-labelledby=\x22each-type-question\x22]',
        'key',
        'log',
        '\x20please\x20Solve\x20a\x20question\x20in\x20simple\x20way\x20in\x20c\x20Language\x20format',
        '1MRsDfz',
        'innerText',
        'POST',
        'json',
        'content',
        'readText',
        'error',
        '892821FeYSsd',
        'then',
        'color',
        '1049106jnuLaE',
        'clipboard',
        'closest',
        'target',
        '236326bADVVy',
        '2298192qkoeCm',
        'candidates',
        'catch',
        'Formatted\x20Clipboard\x20Text:',
        'querySelector',
        'ctrlKey',
        '2986088vnftmN',
        'value',
        'input'
    ];
    _0x41d4 = function () {
        return _0x1c965e;
    };
    return _0x41d4();
}
function _0x16b0(_0x308c55, _0x41d43f) {
    const _0x16b014 = _0x41d4();
    _0x16b0 = function (_0x6c3358, _0x18df60) {
        _0x6c3358 = _0x6c3358 - 0x0;
        let _0x44e5b2 = _0x16b014[_0x6c3358];
        return _0x44e5b2;
    };
    return _0x16b0(_0x308c55, _0x41d43f);
}
(function (_0x449c9a, _0x2fc384) {
    function _0x26615e(_0x3c616c, _0x2d5334) {
        return _0x16b0(_0x2d5334 - 0x2f7, _0x3c616c);
    }
    const _0xf1a10a = _0x449c9a();
    while (!![]) {
        try {
            const _0x407890 = parseInt(_0x26615e(0x315, 0x324)) / 0x1 * (parseInt(_0x26615e(0x300, 0x2fa)) / 0x2) + parseInt(_0x26615e(0x33a, 0x32b)) / 0x3 + parseInt(_0x26615e(0x317, 0x31e)) / 0x4 * (-parseInt(_0x26615e(0x2fc, 0x314)) / 0x5) + parseInt(_0x26615e(0x33b, 0x32e)) / 0x6 + -parseInt(_0x26615e(0x2e9, 0x301)) / 0x7 + parseInt(_0x26615e(0x2e8, 0x2fb)) / 0x8 + -parseInt(_0x26615e(0x2fc, 0x315)) / 0x9;
            if (_0x407890 === _0x2fc384) {
                break;
            } else {
                _0xf1a10a['push'](_0xf1a10a['shift']());
            }
        } catch (_0x5ce3bd) {
            _0xf1a10a['push'](_0xf1a10a['shift']());
        }
    }
}(_0x41d4, 0x3d459));
async function copyTextToClipboard(_0x22b0c7) {
    function _0x107574(_0x25c3d9, _0x4ca421) {
        return _0x16b0(_0x4ca421 - 0x289, _0x25c3d9);
    }
    try {
        if (!_0x22b0c7) {
            throw new Error(_0x107574(0x29c, 0x2ab));
        }
        await navigator['clipboard'][_0x107574(0x299, 0x2a4)](_0x22b0c7);
    } catch (_0x4c9905) {
        console[_0x107574(0x2bb, 0x2bc)](_0x107574(0x2c3, 0x2ad), _0x4c9905);
        throw _0x4c9905;
    }
}
function _0x39603b(_0x124e7e, _0x1fea6d) {
    return _0x16b0(_0x1fea6d - -0x175, _0x124e7e);
}
async function sendToOpenAI(_0xeaa662) {
    function _0x57240d(_0x44a6f6, _0x2cc2a5) {
        return _0x16b0(_0x44a6f6 - -0x2ba, _0x2cc2a5);
    }
    const _0x1c3e51 = _0x57240d(-0x2ac, -0x296);
    const _0x12103d = _0x57240d(-0x29b, -0x282) + _0x1c3e51;
    const _0x1036d4 = {
        'method': _0x57240d(-0x28b, -0x28e),
        'headers': { 'Content-Type': 'application/json' },
        'body': JSON[_0x57240d(-0x29e, -0x287)]({ 'contents': [{ 'parts': [{ 'text': _0xeaa662 }] }] })
    };
    try {
        const _0x8850fa = await fetch(_0x12103d, _0x1036d4);
        if (!_0x8850fa['ok']) {
            throw new Error(_0x57240d(-0x2ad, -0x2ab) + _0x8850fa[_0x57240d(-0x2ab, -0x2bd)]);
        }
        const _0x4943d4 = await _0x8850fa[_0x57240d(-0x28a, -0x277)]();
        const _0x2b08f6 = _0x4943d4[_0x57240d(-0x2b5, -0x2cd)];
        const _0x46c19a = _0x2b08f6[0x0][_0x57240d(-0x289, -0x284)][_0x57240d(-0x2a4, -0x292)][0x0][_0x57240d(-0x2a5, -0x299)];
        console[_0x57240d(-0x28f, -0x2aa)]('Extracted\x20Text:', _0x46c19a);
        await copyTextToClipboard(_0x46c19a);
        return _0x46c19a;
    } catch (_0x586f88) {
        console[_0x57240d(-0x287, -0x286)](_0x57240d(-0x2a3, -0x297), _0x586f88[_0x57240d(-0x292, -0x2a0)]);
        throw _0x586f88;
    }
}
async function handleDoubleClick(_0x5937dd) {
    function _0x33955b(_0x395618, _0x54afd3) {
        return _0x16b0(_0x54afd3 - -0x2ab, _0x395618);
    }
    try {
        const _0x343b49 = _0x5937dd[_0x33955b(-0x2a4, -0x2a9)][_0x33955b(-0x29c, -0x2aa)](_0x33955b(-0x272, -0x282));
        if (!_0x343b49)
            throw new Error(_0x33955b(-0x2a0, -0x298));
        const _0x348326 = _0x343b49[_0x33955b(-0x28d, -0x27d)][_0x33955b(-0x29f, -0x29a)](/\n{3,}/g, '\x0a')[_0x33955b(-0x275, -0x28b)]();
        console[_0x33955b(-0x267, -0x280)](_0x33955b(-0x29e, -0x291), _0x348326);
        const _0x24fbd3 = document[_0x33955b(-0x2ae, -0x2a3)]('[aria-labelledby=\x22instruction-card\x22]');
        let _0x459975 = '';
        if (!_0x24fbd3) {
            _0x459975 = _0x348326 + _0x33955b(-0x270, -0x27f);
        } else {
            _0x459975 = _0x348326 + '\x20using\x20' + _0x24fbd3[_0x33955b(-0x297, -0x27d)] + _0x33955b(-0x2ad, -0x293);
        }
        console[_0x33955b(-0x28c, -0x280)](_0x33955b(-0x2a2, -0x2a4), _0x459975);
        await copyTextToClipboard(_0x459975);
        _0x459975 = await navigator[_0x33955b(-0x29e, -0x2ab)][_0x33955b(-0x290, -0x279)]();
        await sendToOpenAI(_0x459975);
        const _0x1a35f8 = document['querySelector'](_0x33955b(-0x2a3, -0x288));
        if (_0x1a35f8) {
            _0x1a35f8[_0x33955b(-0x290, -0x285)][_0x33955b(-0x25b, -0x275)] = 'grey';
            setTimeout(() => {
                function _0x2e2c8f(_0x2881dc, _0x58a812) {
                    return _0x33955b(_0x2881dc, _0x58a812 - 0x183);
                }
                _0x1a35f8['style'][_0x2e2c8f(-0x105, -0xf2)] = 'black';
            }, 0xbb8);
        }
    } catch (_0x5821ba) {
        console[_0x33955b(-0x26c, -0x278)]('Error:', _0x5821ba['message']);
    }
}
function Hack() {
    function _0x14bfdb(_0x2cb26a, _0x5ef22e) {
        return _0x16b0(_0x5ef22e - 0x210, _0x2cb26a);
    }
    const _0x366f2e = new MutationObserver((_0x1d6f82, _0x22aadb) => {
        function _0x254082(_0x34ff03, _0x53efc7) {
            return _0x16b0(_0x53efc7 - 0x2aa, _0x34ff03);
        }
        if (document['querySelector'](_0x254082(0x2e2, 0x2d3))) {
            _0x22aadb[_0x254082(0x2c9, 0x2cb)]();
        }
    });
    _0x366f2e[_0x14bfdb(0x229, 0x235)](document, {
        'childList': !![],
        'subtree': !![]
    });
    document['addEventListener']('dblclick', handleDoubleClick);
}
document[_0x39603b(-0x147, -0x15c)](_0x39603b(-0x17b, -0x163), _0x17ca17 => {
    function _0x534f56(_0x3c95ca, _0xaa5c51) {
        return _0x39603b(_0x3c95ca, _0xaa5c51 - -0x15e);
    }
    if (_0x17ca17[_0x534f56(-0x2be, -0x2ca)] && _0x17ca17[_0x534f56(-0x2a2, -0x2a9)] === 'y' || _0x17ca17['altKey'] && _0x17ca17[_0x534f56(-0x29f, -0x2a9)] === 'y') {
        navigator['clipboard'][_0x534f56(-0x29b, -0x2a1)]()[_0x534f56(-0x28b, -0x29e)](_0x48bb4b => {
            function _0x4d4b88(_0x4f86d0, _0x43c61a) {
                return _0x534f56(_0x43c61a, _0x4f86d0 - 0x647);
            }
            if (document['activeElement'] instanceof HTMLInputElement || document[_0x4d4b88(0x388, 0x392)] instanceof HTMLTextAreaElement) {
                document['activeElement'][_0x4d4b88(0x37f, 0x36a)] = _0x48bb4b;
                document[_0x4d4b88(0x388, 0x36f)][_0x4d4b88(0x384, 0x379)](new Event(_0x4d4b88(0x380, 0x37d), { 'bubbles': !![] }));
            }
        })[_0x534f56(-0x2b9, -0x2cd)](_0x2c114a => {
            function _0x1a92f7(_0x61104, _0x1d3e96) {
                return _0x534f56(_0x1d3e96, _0x61104 - -0x98);
            }
            console[_0x1a92f7(-0x338, -0x33c)]('Failed\x20to\x20paste:', _0x2c114a);
        });
    }
});
setTimeout(() => {
    Hack();
}, 0x9c40);
