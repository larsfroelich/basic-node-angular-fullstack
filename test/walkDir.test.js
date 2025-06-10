const fs = require('fs');
const os = require('os');
const path = require('path');
const assert = require('node:assert');
const test = require('node:test');

const walkDirectory = require('../server/walkDir');

test('walkDirectory lists files recursively', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'walk-test-'));
  const sub = path.join(tmp, 'sub');
  fs.mkdirSync(sub);
  fs.writeFileSync(path.join(tmp, 'a.txt'), 'a');
  fs.writeFileSync(path.join(sub, 'b.txt'), 'b');

  const files = walkDirectory(tmp, '');
  assert.deepStrictEqual(files.sort(), ['/a.txt', '/sub/b.txt']);

  fs.rmSync(tmp, { recursive: true, force: true });
});
