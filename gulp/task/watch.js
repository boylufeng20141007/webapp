/**
 * @description 监听文件修改后，自动执行一些每次都要重复执行的任务
 * @author lux.lu
 */
 'use strict';
var gulp = require('gulp');

var watcher = gulp.watch('../../assets/app/page/vendors/css/vendors.css', ['updateUrl']);
watcher.on('change', function(event){
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});