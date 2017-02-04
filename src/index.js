"use strict";

const os = require("os");
const path = require("path");

function main() {
	const platform = os.platform();
	switch (platform) {
		case "win32": {
			this.win32();
			break;
		}

		case "darwin": {
			this.darwin();
			break;
		}

		default: {
			throw Error("Platform " + platform + " is not supported yet. Pull requests are welcome.");
			break;
		}
	}
}

function win32() {
	let edge = require("edge");

	const runWithDotNet = edge.func(path.join(__dirname, "TurnOffDisplayViaWinAPI.cs"));
	runWithDotNet({}, error => {
		if (error) {
			throw error;
		}
	});
}

function darwin() {
	if (os.release() >= "13.0.0") {
		const execFile = require("child_process").execFile;
		execFile("pmset", ["displaysleepnow"], (error, stdout, stderr) => {
			if (error) {
				throw error;
			}
		});
	}
	else {
		throw new Error("OS X < 10.9 is not supported.");
	}
}

module.exports = main;
