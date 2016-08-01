/**
 * @desc webpack配置文件
 */
'use strict';
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var debug = process.env.NODE_ENV !== 'prod'? true : false;
console.log('***当前开发环境: '+debug?'开发环境':'生产环境'+'***');
var config = {
 	entry: {
 		//index: './src/page/index/js/index.js'
 	},
 	output: {
 		path: path.resolve(__dirname, 'assets', 'app'),
 		//filename: '[name].[hash:8].js'
 		filename: 'page/[name]/js/[name].js'
 	},
 	module: {
 		loaders: [
 			{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", ["css-loader"])}
 		]
 	},
 	resolve: {
 		//root: [process.cwd() + '/src', process.cwd() + '/node_modules'],
 		alias: {
 			base : __dirname + '/src/base',
            components : __dirname + '/src/components',
            core : __dirname + '/src/core',
            lib : __dirname + '/src/lib',
            page : __dirname + '/src/page',
            utils : __dirname + '/src/base/js/utils',
            zepto : __dirname + '/src/lib/zepto.js',
            api : __dirname + '/src/base/js/api',
            modules : __dirname + '/src/base/js/modules'
 		},
 		extensions: ['', '.js', '.css', '.jsx', '.scss', '.ejs', '.png', '.jpg']
 	},
 	plugins: [
        new ExtractTextPlugin('page/[name]/css/[name].css')
    ]
};

//获取页面列表
function getPages() {
    var pages = fs.readdirSync(__dirname + '/src/page/'),
        ret = [];
    pages.forEach(function(file) {
        ret.push(file);
    });
    return ret;
}
//设置webpack配置对象
function setConfig() {
	var pages = getPages();
	pages.forEach( function(filename, index) {
		if (fs.existsSync(__dirname + '/src/page/' + filename + '/js/' + filename + '.js')) {
            config.entry[filename] = './src/page/' + filename + '/js/' + filename + '.js';
        }
	});
	//提取公共模块
    /*var chunks = Object.keys(config.entry);
    config.plugins.push(new CommonsChunkPlugin({
        name: 'vendors',
        chunks: chunks,
        minChunks: chunks.length // 提取所有chunks共同依赖的模块
    }));*/
}
//删除webpack上一次打包的文件
function deleteBundleFile(path) {
	if (debug) {
        return;
    }
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteBundleFile(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}
deleteBundleFile(path.resolve(__dirname, 'assets'));
setConfig();

 module.exports = config;