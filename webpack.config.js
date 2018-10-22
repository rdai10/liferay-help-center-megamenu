const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: './src/js/index.js',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				test: /\.js$/
			}
		]
	},
	output: {
		filename: 'main.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node'
};