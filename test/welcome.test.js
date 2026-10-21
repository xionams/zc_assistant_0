const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT = path.resolve(__dirname, '..');

function read(name) {
  return fs.readFileSync(path.join(ROOT, name), 'utf8');
}

const html = read('index.html');
const css = read('style.css');
const js = read('app.js');

console.log('Running welcome page tests...');

// Test 1: index.html exists and has required structure
assert.ok(html.includes('<h1>Welcome to zc_assistant_0</h1>'), 'h1 title should be present');
assert.ok(html.includes('id="greetBtn"'), 'greet button should be present');
assert.ok(html.includes('src="app.js"'), 'app.js script should be linked');
assert.ok(html.includes('href="style.css"'), 'style.css stylesheet should be linked');

// Test 2: CSS file exists and has styles
assert.ok(css.includes('body'), 'CSS should style body');
assert.ok(css.includes('button'), 'CSS should style button');

// Test 3: JS file exists and has interaction
assert.ok(js.includes('addEventListener'), 'JS should add event listener');
assert.ok(js.includes('greetBtn'), 'JS should reference greet button');

console.log('All tests passed ✓');