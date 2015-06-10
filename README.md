## json-bigint-string

Drop in replacement for JSON.parse which converts integers long enough to lose
precision in Javascript into strings.

Based on [json-bigint](https://github.com/sidorares/json-bigint) by [sidorares](https://github.com/sidorares).

## Usage

```javascript
var JSONBigInt = require('json-bigint-string');

// console.log(JSON.parse(someJson));
console.log(JSONBigInt.parse(someJson));
```

## License

Released into the public domain with [Unlicense](http://unlicense.org/).

Contains a modified copy of `json_parse.js` from [JSON-js](https://github.com/douglascrockford/JSON-js), also in the public domain.
