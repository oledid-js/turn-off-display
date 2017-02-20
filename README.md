# turn-off-display [![Build Status](https://travis-ci.org/oledid-js/turn-off-display.svg?branch=master)](https://travis-ci.org/oledid-js/turn-off-display) [![npm](https://img.shields.io/npm/dt/turn-off-display.svg)](https://www.npmjs.com/package/turn-off-display) [![npm](https://img.shields.io/npm/v/turn-off-display.svg)](https://www.npmjs.com/package/turn-off-display)

Turns off the computer monitor/display/screen.


## Supported operating systems

This package only supports Windows and OS X >= 10.9 for now.
If you want to add support for another operating system, please submit a pull-request.

Will install ffi on win32. No dependencies on darwin.


## How to install
```
npm install --save turn-off-display
```


## How to use
```js
var turnOffDisplay = require("turn-off-display");
try {
	turnOffDisplay();
}
catch (err) {
	// handle error
}
```


## Related
* [oledid-js/turn-off-display-cli](https://github.com/oledid-js/turn-off-display-cli) - CLI for this module


## License

[MIT](LICENSE)
