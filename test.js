var test = require('tape');
var unique = require('./');

test('unique array', function(t) {
  var result = unique([1, 2, 3]);

  t.ok(result);
  t.end();
});

test('unique array different types', function(t) {
  var result = unique([1, 2, '3']);

  t.ok(result);
  t.end();
});

test('non-unique array', function(t) {
  var result = unique([1, 2, 2]);

  t.notOk(result);
  t.end();
});

test('non-unique array different types', function(t) {
  var result = unique([1, 2, '2']);

  t.notOk(result);
  t.end();
});
