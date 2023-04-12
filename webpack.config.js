const path = require('path');

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const bootstrap = require('bootstrap');
// const $ = require('jquery');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    main: './ts/index.ts',
  },
  output: {
    filename: './js/[name].js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/i,
        use: [miniCss.loader, 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: [miniCss.loader, 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
			{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
	resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
    static: {
      directory: './dist',
      watch: true,
    },
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jquery: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jquery': 'jquery',
    //   'window.jQuery': 'jquery',
    // }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/audio'), to: path.resolve(__dirname, 'dist/assets/audio') },
        { from: path.resolve(__dirname, 'src/assets/images'), to: path.resolve(__dirname, 'dist/assets/images') },
        // { from: path.resolve(__dirname, 'src/fonts'), to: path.resolve(__dirname, 'dist/fonts') },
        
        { from: 'index.html' },
      ],
    }),
    new miniCss({ filename: 'css/style.css' }),
    // new ExtractTextPlugin('style.css'),
  ],
};
