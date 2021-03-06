const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'src'),
	output: {
		path: path.resolve(__dirname, 'webpack-dist')
	},
	module: {
		rules: [{ test: /\.ts/, use: 'ts-loader', exclude: /node_modules/ }]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	}
}
