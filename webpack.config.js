let path = require('path');

module.exports = {
    mode: "development",
    entry : { main: path.resolve(__dirname + "/src/js/app.js") },
    output : {
	path : path.resolve(__dirname, "dist"),
	filename : "bundle.js"
    },
    module : {
	rules : [
	    {
		test : /\.css$/,
		use : [
		    'style-loader',
		    'css-loader'
		]
	    },
	    {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		use : [ 'url-loader']
            },
	]
    }
};

