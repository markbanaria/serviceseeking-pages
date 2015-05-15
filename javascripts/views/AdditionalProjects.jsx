var React = require('react');
var ProjectConfirmation = require('../components/ProjectConfirmation.jsx');

var AdditionalProjects = React.createClass({

	render: function() {
		return (
			<div className="AdditionalProjects">
				<ProjectConfirmation />
				<div className="section">
					<div className="row">
						<h3 className="page-title">Have other projects in mind?</h3>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = AdditionalProjects;