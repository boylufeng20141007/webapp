/**
 * @desc 首页
 */
 'use strict';

 var React = require('react');
 var Render = require('react-dom').render;

require('base/css/common.css');
require('page/index/css/index.css');

var pageHeader = require('components/business/page-header/js/page-header');//页头组件
var PageFooter = require('components/business/page-footer/js/page-footer');//页脚组件


//var Render = require('core/js/react-render/render');
function loaderReactComponent(){
	//React.render(<PageFooter />, document.getElementById('J-page-footer'));
	Render(<PageFooter />, document.getElementById('J-page-footer'));//渲染页脚组件
	//Render(PageFooter, 'J-page-footer');
}
loaderReactComponent();