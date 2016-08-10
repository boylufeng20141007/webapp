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
var ProvidePlugin = webpack.ProvidePlugin;
var debug = (process.env.NODE_ENV == 'prod' || process.env.NODE_ENV == 'development')? true : false;
console.log(debug?'***当前环境:开发环境':'***当前环境:生产环境'+'***');
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
 		noParse: ['zepto'],
 		loaders: [
 			{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", ["css-loader", "autoprefixer-loader"])},
            {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader!jsx-loader'},
            {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader!jsx-loader'},
            //{test: /\.(eot|woff)$/, loader: "file-loader" },
            //test: /\.(png|jpg|gif)$/,loader: 'file?name=[name].[ext]?[hash]'}
            {test: /\.(png|jpg|gif)$/, loader: 'url-looder?limit=1024&name=' + (debug?'base/img/[hash:8].[name].[ext]':'static/base/img/[hash:8].[name].[ext]')},
            {test: /\.(eot|svg|ttf|woff)$/, loader: 'url-loader?limit=1024&name=' + (debug?'base/css/font/[name].[ext]':'static/base/css/font/[hash:8].[name].[ext]')},
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
        extensions: ['', '.coffee', '.js', '.jsx', '.png', '.jpg', '.gif', '.css', '.scss', '.ejs', '.tpl']
 	},
 	plugins: [
        new ExtractTextPlugin('page/[name]/css/[name].css'),
        //new ExtractTextPlugin(debug? '/base/css/[name].css' : 'static/page/[name]/css/[name].[chunkhash:8].css'),
        /*new ProvidePlugin({
            //$: 'zepto',
            //jQuery: 'jquery',
            //'window.jQuery': 'jquery'
        })*/
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
    var chunks = Object.keys(config.entry);
    config.plugins.push(new CommonsChunkPlugin({
        name: 'vendors',
        chunks: chunks,
        minChunks: chunks.length // 提取所有chunks共同依赖的模块
    }));
}
//删除webpack上一次打包的文件
function deleteBundleFile(path) {
	if (!debug) {
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
//TODO 修改路径
function updateIconfontUrl(path){
    if(!fs.existsSync(path)) return;
}
deleteBundleFile(path.resolve(__dirname, 'assets', 'app'));
//deleteBundleFile(path.resolve(__dirname, 'assets', 'app', 'css', 'font'));
//updateIconfontUrl(path.resolve(__dirname, 'src', 'css', 'common.css'));
setConfig();

 module.exports = config;