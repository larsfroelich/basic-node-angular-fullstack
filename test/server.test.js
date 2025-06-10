const { spawn } = require('child_process');
const http = require('http');
const assert = require('node:assert');
const test = require('node:test');
const fs = require('fs');
const path = require('path');

function waitForServer(proc) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error('server did not start'));
    }, 5000);
    proc.stdout.on('data', (data) => {
      if (data.toString().includes('Server listening')) {
        clearTimeout(timeout);
        resolve();
      }
    });
    proc.stderr.on('data', (data) => {
      console.error(data.toString());
    });
  });
}

test('server responds to root route', async () => {
  const port = 8123;
  const servicesDir = path.join(__dirname, '../public/js/services');
  let created = false;
  if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
    created = true;
  }
  const proc = spawn('node', ['server.js'], {
    env: { ...process.env, PORT: port },
    stdio: ['ignore', 'pipe', 'pipe']
  });

  await waitForServer(proc);

  const res = await new Promise((resolve, reject) => {
    http.get(`http://localhost:${port}/`, (response) => {
      let body = '';
      response.on('data', (chunk) => {
        body += chunk;
      });
      response.on('end', () => {
        resolve({ statusCode: response.statusCode, body });
      });
    }).on('error', reject);
  });

  assert.strictEqual(res.statusCode, 200);
  assert.ok(/<!DOCTYPE html>/i.test(res.body));

  proc.kill();
  if (created) {
    fs.rmSync(servicesDir, { recursive: true, force: true });
  }
});
