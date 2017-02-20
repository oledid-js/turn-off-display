const os = require("os");
const exec = require("child_process").exec;

if (os.platform() === "win32") {
	try {
		if (!isInstalled("ffi")) {
			install("ffi");
		}
	}
	catch (err) {
		console.error("src/install.js: Could not install dependencies.");
		process.exit(1);
	}
}

function isInstalled(moduleName) {
	try {
		require.resolve(moduleName);
	} catch (e) {
		return false;
	}
	return true;
}

function install(moduleName) {
	console.log("Installing dependency: " + moduleName);
	exec(`npm install ${moduleName}`, (error, stdout, stderr) => {
		if (stderr) {
			console.error(stderr);
		}
		if (stdout) {
			console.log(stdout);
		}
		if (error) {
			throw Error(error);
		}
	});
}
