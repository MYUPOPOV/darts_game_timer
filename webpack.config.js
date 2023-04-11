const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
// const bootstrap = require('bootstrap');
// const $ = require('jquery');

module.exports = {
	context: path.resolve(__dirname, 'src'),

	entry: {
		main: './js/index.js',
	},
	output: {
		filename: './js/[name].js',
		path: path.join(__dirname, 'dist'),
	},
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true,
		},
	},
// 	module: {
// 		rules: [
// +       {
// +         test: /\.(scss|css)$/,
// +         use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
// +       },
// 		],
// 	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jquery: 'jquery',
			jQuery: 'jquery',
			'window.jquery': 'jquery',
			'window.jQuery': 'jquery',
		}),
		new CopyWebpackPlugin({
      patterns: [
				{ from: path.resolve(__dirname, 'src/audio'), to: path.resolve(__dirname, 'dist/audio') },
        { from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'dist/fonts') },
				{ from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist/images') },
				{ from: 'src/index.html', to: 'dist' },
      ]
    })
	],
};
