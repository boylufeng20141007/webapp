/**
 * app启动文件
 * @author lux.lu
 * @date 2016-07-31
 */
 'use strict';

var http = require('http');
var path = require('path');
var koa = require('koa');
var app = koa();
var router = require('koa-router')();
var static_server = require('koa-static');
var port = 5000;
//var render = require('koa-views');
//var render = require('koa-render');
var render = require('koa-ejs');

app
	//所有请求都要经过该中间件
	/*.use(function *(next){
		this.body = 'hello world';
		yield next;
	})*/
	//静态文件服务中间件
	.use(static_server(path.resolve(__dirname, 'src', 'page')))
	//koa-views渲染
	/*.use(render(path.resolve(__dirname, 'src', 'page'),{
		extension: 'html',
		map: {
			html:  'ejs'
		}
	}))*/
	//koa-render渲染
	/*.use(render(path.resolve(__dirname, 'src', 'page'),{
		html:  'ejs'
	}))*/
	//koa-ejs
	//路由
	.use(router.routes())
	.use(router.allowedMethods());

render(app, {
	root: path.resolve(__dirname, 'src', 'page'),
	layout: '__layout',
	viewExt: 'html',
	cache: false,
	debug: true
});
var indexRouter = require('./src/router/index.js');
indexRouter(router);

/*
app.use('error', function(err, cxt){
	console.log('*****server error ******');
	console.log(err);
	console.log('*****server error ******');
});
*/

//app.listen(port);
http.createServer(app.callback()).listen(port);
