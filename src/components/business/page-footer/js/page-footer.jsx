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
				<div className="title">页脚</div>
			</div>
		);
	}
});

module.exports = pageFooter;