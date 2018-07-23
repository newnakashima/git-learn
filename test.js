const {spawn} = require('child_process');
const assert = require('assert');

function test_print_text()
{
    const child = spawn('node', ['./app.js']);
    child.stdout.on('data', function (chunk) {
        const actual = String.fromCharCode.apply(null, new Uint16Array(chunk));
        assert.strictEqual(actual, 'hogehoge\n');
        console.log('test OK');
    });
}

test_print_text();
