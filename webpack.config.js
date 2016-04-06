module.exports = {
	entry: {
		main: "src/app.js"
	},
	output: {
		path: "./public",
		file: "bundle.js"
	},
	devtools: "sourcemap",
	module: {
		loaders: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: "babel"
			}
		]
	}
}
