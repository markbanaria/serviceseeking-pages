var React = require('react');

var ArticlePanel = React.createClass({

	render: function() {
		return (
			<div className="ArticlePanel">
				<div className="large-12 columns">
					<div className="row">
						<hr className="compress break-end" />
						<div className="large-4 columns">
							<div className="profile-pic large-10 small-12 columns" style={this.props.bgurl} />
						</div>
						<div className="large-7 columns end">
							<h4 className="compress">{this.props.title}</h4>
							<h5>{this.props.details}</h5>
							<p className="break-end">{this.props.description}</p>
						</div>
					</div>
				</div>	
			</div>
		);
	}

});

module.exports = ArticlePanel;