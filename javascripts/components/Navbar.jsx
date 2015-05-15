var React = require('react');
var MenuButton = require('./common/MenuButton.jsx');
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({

	render: function() {
		return (
			<div className="Navbar">
				<div className="main section">
					<div className="row">
						<Link className="logo" to="home"><img src="/assets/logo-full.png" /></Link>
						<Link to="addproj">Additional Projects</Link>
						<Link to="cats">Categories</Link>
						<Link to="subcats">Subcategories</Link>
					</div>
				</div>
				<div className="sub section">
					<div className="row">
						<a>Leads</a>
						<a>Quotes</a>
						<a>Invoices</a>
						<a>Feedback</a>
						<a>Training</a>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Navbar;