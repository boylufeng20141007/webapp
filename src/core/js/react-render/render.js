/**
 * @desc 封装react-dom渲染组件到页面
 */
'use strict';

var getNodeById = document.getElementById;

var React = require('react');
var Render = require('react-dom').render;

var RenderComponent = function(componentName, id){
	//Render(<componentName />, document.getElementById('J-page-footer'))
	Render(componentName, document.getElementById(id));
};
module.exports = RenderComponent;