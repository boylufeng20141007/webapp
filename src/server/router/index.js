/**
 * 首页路由
 */

 'use strict';

function indexRouter(router){
	router.get('/', function *(next){
		yield this.render('index/tmpl/index', {
			layout: false,
			title: '首页',
			pageHeader: {
				title: '首页'
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