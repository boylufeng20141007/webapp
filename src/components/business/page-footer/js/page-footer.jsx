/**
 * @desc 页脚
 */
'use strict';

require('../css/page-footer.css');

var React = require('react');
var pageFooter = React.createClass({
	render: function(){
		return (
			<div className="page-footer">页脚</div>
		);
	}
});

module.exports = pageFooter;