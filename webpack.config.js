/**
 * @desc webpack配置文件
 */
 'use strict';
 var path = require('path');

 var config = {
 	entry: {
 		index: './src/page/index/js/index.js'
 	},
 	output: {
 		path: path.resolve(__dirname, 'assets'),
 		filename: '[name].[hash:8].js'
 	},
 	module: {
 		loaders: [
 			{
 				test: /\.css$/, loader: 'style!css'
 			}
 		]
 	},
 	resolve: {
 		root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
 		alias: {},
 		extensions: ['', '.js', '.css', '.jsx', '.scss', '.ejs', '.png', '.jpg']
 	}
 };
 module.exports = config;