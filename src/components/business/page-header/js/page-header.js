/**
 * @desc 页面头部
 */
 'use strict';
 require('../css/page-header.css');

//var $ = require('zepto');
 var pageHeader = {
 	//初始化
 	init: function (){
 		var _this = this;
 		_this.bindEvent();
 	},
 	//绑定事件
 	bindEvent: function (){
 		/*$('#J-back').click(function (){
 			alert('xxx');
 		});*/
 	}
 };
 module.exports = pageHeader;