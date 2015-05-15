var React = require('react');

var ProjectConfirmation = React.createClass({

	render: function() {
		return (
			<div className="ProjectConfirmation">
				<div className="section">
					<div className="row">
						<div className="small-4 columns">
							<img />
						</div>
						<div className="small-7 end columns">
							<h1 className="page-title reverse">You have successfully posted a job!</h1>
							<h4 className="reverse">We will get back to you as soon a a provider quotes your project. You may browse below for other projects you might be interested in.</h4>
						</div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = ProjectConfirmation;