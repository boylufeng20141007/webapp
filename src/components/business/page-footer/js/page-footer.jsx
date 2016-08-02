/**
 * @desc 页脚
 */
'use strict';

require('../css/page-footer.css');

var React = require('react');
var pageFooter = React.createClass({
	render: function(){
		return (
			<div className="page-footer">
				<i className="icon-menu" id="J-icon-menu"></i>
				<div>页脚</div>
			</div>
		);
	}
});

module.exports = pageFooter;