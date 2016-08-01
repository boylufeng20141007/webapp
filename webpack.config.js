/**
 * @desc webpack配置文件
 */
'use strict';
var path = require('path');
var fs = require('fs');

var debug = process.env.NODE_ENV !== 'prod'? true : false;

 var config = {
 	entry: {
 		index: './src/page/index/js/index.js'
 	},
 	output: {
 		path: path.resolve(__dirname, 'assets'),
 		//filename: '[name].[hash:8].js'
 		filename: '[name].js'
 	},
 	module: {
 		loaders: [
 			{
 				test: /\.css$/, loader: 'style!css'
 			}
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
 	}
 };

//获取页面列表
function getPages() {
    var pages = fs.readdirSync(__dirname + '/src/page/'),
        ret = [];
    pages.forEach(function(file) {
        ret.push(file);
    });
    console.log('***页面列表文件名***');
    console.log(ret);
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