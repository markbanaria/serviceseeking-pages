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
						<Link className="logo" to="home">Summary</Link>
						<Link to="addproj">Additional Projects</Link>
						<Link to="cats">Category List</Link>
						<Link to="subcats">Category Page</Link>
						<Link to="search">Search Results</Link>
					</div>
				</div>
				<div className="sub section">
					<div className="row">
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Navbar;