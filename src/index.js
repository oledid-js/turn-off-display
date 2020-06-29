"use strict";

const os = require("os");
const path = require("path");

function main() {
	const platform = os.platform();
	switch (platform) {
		case "win32": {
			win32();
			break;
		}

		case "darwin": {
			darwin();
			break;
		}

		default: {
			throw Error("Platform " + platform + " is not supported yet. Pull requests are welcome.");
		}
	}
}

function win32() {
	const execFile = require("child_process").execFile;
	execFile("powershell", [path.join(__dirname, "turn-off-display-win32.ps1")], (error, stdout, stderr) => {
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

