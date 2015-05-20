//react
var React = require('react');

//Route dependencies
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

//views
var Index = require('../Index.jsx');
var Home = require('../views/Home.jsx');
var AdditionalProjects = require('../views/AdditionalProjects.jsx');
var Categories = require('../views/Categories.jsx');
var SubCategories = require('../views/SubCategories.jsx');
var Search = require('../views/Search.jsx');

var routes = (
	<Route path="/" handler={Index}>
		<DefaultRoute handler={Home}/>
		<Route name="home" path="home" handler={Home}/>
		<Route name="addproj" path="addproj" handler={AdditionalProjects}/>
		<Route name="cats" path="cats" handler={Categories}/>
		<Route name="subcats" path="subcats" handler={SubCategories}/>
		<Route name="search" path="search" handler={Search}/>
	</Route>
);

module.exports = routes;