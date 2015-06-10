var Code = require('code');
var lab = exports.lab = require('lab').script();
var JSONBigInt = require('../index');

var bigIntJson = '{ "small": 111111111, "big": 99999999999999999999999 }';

lab.test('parsing of integers', function(done) {
  var parsed = JSONBigInt.parse(bigIntJson);

  Code.expect(parsed.small).to.equal(111111111);
  Code.expect(typeof parsed.small).to.equal('number');

  Code.expect(parsed.big).to.equal('99999999999999999999999');
  Code.expect(typeof parsed.big).to.equal('string');

  done();
});
