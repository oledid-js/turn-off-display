# turn-off-display

Turns off the computer monitor/display/screen.


## Supported operating systems

This package only supports Windows and OS X >= 10.9 for now.
If you want to add support for another operating system, please submit a pull-request.


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
* [turn-off-display-cli](https://github.com/oledid/turn-off-display-cli) - CLI for this module


## License

[MIT](LICENSE.md)
