/**
 * @description 处理vendors.css里面的iconfont路径问题
 */
 'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
function replaceUrl() {
	var fileUrl = path.resolve(__dirname, '..', 'assets', 'app', 'page', 'vendors', 'css', 'vendors.css');
	if(!fs.existsSync(fileUrl)){
		console.log('****iconfont 路径更新没有执行****');
		return;
	}
	var fileText = fs.readFileSync(fileUrl, 'utf8').replace(/url\(base\/css\/font\/icomoon\.*/img, 'url(../../../base/css/font/icomoon.');
	fs.writeFileSync(fileUrl, fileText, 'utf8');
	console.log('****更新iconfont url 成功****');
}
gulp.task('updateUrl', function () {
	replaceUrl();
});