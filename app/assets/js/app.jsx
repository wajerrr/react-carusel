var
	React = require('react'),
	Carousel = require('./components/carousel.jsx'),
	data = require('../../data/carousel.js');
var App = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<Carousel data={data} imageHeight='480' />
					</div>
				</div>
			</div>
		)
	}
});

React.render(
	<App />,
	document.body
);
