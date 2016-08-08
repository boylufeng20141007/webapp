/**
 * @desc 页脚
 */
'use strict';

require('../css/page-footer.css');

var React = require('react');
var pageFooter = React.createClass({
	testClick: function () {
		alert('xxx');
	},
	render: function(){
		return (
			<div className="page-footer">
				<div className="title" onClick={this.testClick}>页脚</div>
			</div>
		);
	}
});

module.exports = pageFooter;