'use strict';
var gulp = require('gulp'),
	iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css');


gulp.task('iconfont', function(){
	gulp.src('src/base/svg/*.svg')
		.pipe(iconfontCss({
			fontName: 'icomoon',
			path: 'src/base/template/_font.scss',
			targetPath: '../../scss/mod/_font.scss',
			fontPath: '../../css/font/'
		}))
		.pipe(iconfont({
			fontName: 'icomoon',
			fontHeight: 1024,
			formats: ['ttf', 'eot', 'woff', 'svg']
		}))
		.pipe(gulp.dest('src/base/css/font/'));
});

//run default taks of gulp
gulp.task('default', ['iconfont']); 