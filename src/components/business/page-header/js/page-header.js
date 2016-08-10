/**
 * @desc 页面头部
 */
 'use strict';
 require('../css/page-header.css');

var React = require('react');

var pageHeader = React.createClass({
	render: function () {
		return (
			<header className="page-header clearfix">
				<div className="back f-left icon-menu" id="J-back"></div>
				<div className="title">FEVIP</div>
				<div className="J-search f-right icon-search" id="search"></div>
			</header>
		);
	}
});

 module.exports = pageHeader;