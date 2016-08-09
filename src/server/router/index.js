/**
 * @description 首页路由
 */

 'use strict';

function indexRouter(router){
	router.get('/', function *(next){
		yield this.render('index/tmpl/index', {
			layout: false,
			title: '唯品会-FE首页',
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