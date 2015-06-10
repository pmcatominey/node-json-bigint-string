var Code = require('code');
var lab = exports.lab = require('lab').script();
var JSONBigInt = require('../index');

var normalJSON = JSON.stringify({
  number: 123,
  float: 1.23,
  string: "Hello World!",
  bool: true,
  notBool: false,
  nothing: null,
  array: [
    123,
    1.23,
    "Hello World!",
    null
  ],
  nested: {
    number: 123
  }
});

lab.test('parsing of normal json', function(done) {
  var parsed = JSON.parse(normalJSON);
  var bigIntParsed = JSONBigInt.parse(normalJSON);

  Code.expect(parsed).to.deep.equal(bigIntParsed);

  done();
});
