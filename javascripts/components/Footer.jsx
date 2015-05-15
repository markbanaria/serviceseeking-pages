var React = require('react');

var Footer = React.createClass({

	render: function() {
		return (
			<div className="Footer">
				<ol className="page-links">
					<li><a>Blog</a></li>
				</ol>
				<div className="download-links">
					<a id="android"><img src="" /></a>
					<a id="ios"><img src="" /></a>
				</div>
				<ol>
					<li><a><i></i></a></li>
					<li><a><i></i></a></li>
					<li><a><i></i></a></li>
				</ol>
				<h5>(c) Abc</h5>
			</div>
		);
	}

});

module.exports = Footer;