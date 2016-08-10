'use strict';
var gulp = require('gulp');

var generateIconfontCss = require('./gulp/task/generate-iconfont-css');//根据svg生产字体图标
var replaceIconfontUrl  = require('./gulp/task/replace-iconfont-path');//更新字体样式图标路径
require('./gulp/task/watch');//gulp watch 监听vendors.css改动,自动执行updateUrl任务

gulp.task('default', ['iconfont', 'updateUrl']);