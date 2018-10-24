let path = require('path');

module.exports = {
    mode: "development",
    entry : path.resolve(__dirname + "/src/js/app.js"),
    output : {
	path : path.resolve(__dirname + "/dist"),
	filename : "bundle.js"
    }
};

