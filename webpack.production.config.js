var bourbon = require('node-bourbon').includePaths;

module.exports = {
	entry: path.resolve(__dirname, './javascripts/entry.jsx'),
	output: {
		path: path.resolve(__dirname),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon },
			{test: /\.jsx$/, loader: "jsx" },
			{test: /\.otf$/, loader: "url-loader?limit=8192" },
			{ test: /\.png$/, loader: "url-loader?mimetype=image/png" }
		]
	}
};