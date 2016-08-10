/**
 * @desc 首页
 */
 'use strict';

require('base/css/common.css');
require('page/index/css/index.css');

var React = require('react');
var Render = require('react-dom').render;
//var $ = require('lib/zepto');

var PageHeader = require('components/business/page-header/js/page-header');//页头组件
var PageFooter = require('components/business/page-footer/js/page-footer');//页脚组件


//var Render = require('core/js/react-render/render');
function loaderReactComponent(){
	//React.render(<PageFooter />, document.getElementById('J-page-footer'));
	Render(<PageHeader />, document.getElementById('J-page-header'));//渲染页脚组件
	Render(<PageFooter />, document.getElementById('J-page-footer'));//渲染页头组件
	//Render(PageFooter, 'J-page-footer');

	//pageHeader.init();//初始化页头组件
}
//console.log($);
loaderReactComponent();