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
			break;
		}
	}
}

function win32() {
	// Credits: http://www.powershellmagazine.com/2013/07/18/pstip-how-to-switch-off-display-with-powershell/
	//
	//     Turn display off by calling WindowsAPI.
	//
	//     SendMessage(HWND_BROADCAST,WM_SYSCOMMAND, SC_MONITORPOWER, POWER_OFF)
	//     HWND_BROADCAST  0xffff
	//     WM_SYSCOMMAND   0x0112
	//     SC_MONITORPOWER 0xf170
	//     POWER_OFF       0x0002

	const ffi = require("ffi");

	const user32 = ffi.Library("user32", {
		SendMessage: ["int", ["ulong", "uint", "long"]]
	});

	const HWND_BROADCAST = 0xffff;
	const WM_SYSCOMMAND = 0x0112;
	const SC_MONITORPOWER = 0xf170;
	const POWER_OFF = 0x0002;

	user32.SendMessage(HWND_BROADCAST, WM_SYSCOMMAND, SC_MONITORPOWER, POWER_OFF);
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
