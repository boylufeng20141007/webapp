/**
 * @description 首页路由
 */

 'use strict';

 var dao = require('../database_CRUD/mysql');

function indexRouter(router){
	router.get('/', function *(next){
		//var rows = yield dao.getArticleById('test', 1);
		//console.log(rows);
		//console.log(this.cookies);
		/*this.response.header = {
			'Content-Security-Policy': 'default-src *; *.mtest.vip.com'
		};*/
		const NONCE_STR = 'vip';
		const RESPONSE_HEADER = {
			'Content-Security-Policy': "default-src *; script-src mtest.vip.com:5000 'nonce-vip'; style-src mtest.vip.com:5000",
			'X-Content-Security-Policy': 'default-src *; script-src mtest.vip.com:5000; style-src mtest.vip.com:5000',
			'X-Webkit-CSP': 'default-src *; script-src mtest.vip.com:5000; style-src mtest.vip.com:5000'
		};
		this.set(RESPONSE_HEADER);
		yield this.render('index/tmpl/index', {
			layout: false,
			title: '唯品会-FE首页',
			script_nonce_str: NONCE_STR,
			pageHeader: {
				title: 'FEVIP'
			}
		});
	});
	router.get('/login', function *(next){
		yield this.render('sign-in', {
			layout: false,
			title: '登录'
		});
	});
}
module.exports = indexRouter;