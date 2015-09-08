var React = require('react');

var Carousel = React.createClass({
	getInitialState: function(){
		return {
			count: 0
		}
	},
	myCustomMethod: function(e){
		var count = this.state.count;
		count++;
		this.setState({
			count: count
		});

		e.preventDefault();
	},
	onPrevArrowClick: function(event) {
		var count = this.state.count;
		if (count=== 0 ) return;
  	else
		{
			count--
		}
		this.setState({
			count: count
		});
		event.preventDefault();
	},
	onNextArrowClick: function(event) {
		var count = this.state.count;
		if (count >= this.props.data.items.length-1 ) return
			count++
		this.setState({
			count: count
		});
		event.preventDefault();
	},
	onDotClick: function(index ,event){
		this.setState({
			count: index
		});
	},

	render: function() {
		return (
			<div className="carousel">


				<div style={{height:this.props.imageHeight+'px'}} className='carusel-container'>
					<div className='slides-container'style={{left:-this.state.count*100+'%'}} >
					{
						this.props.data.items.map(function(item, index) {
							return <div style={{position:'absolute',left:index*100 + '%'}} key={index}>
								<p className='caption'>{item.caption}</p>
								<img  src={item.img}></img>

						</div>
			 			})
					}
				</div>
				<div  onClick={this.onPrevArrowClick} className='arrow prev'>
					<span  className="icon glyphicon glyphicon-menu-left"></span>
				</div>
				<div  onClick={this.onNextArrowClick} className='arrow next'>
					<span  className="icon glyphicon glyphicon-menu-right"></span>
				</div>

			</div>
							<ul className='dots-container'>
					{
						this.props.data.items.map(function(item, index) {
							var active = {
								'backgroundColor': '#000'
							};
							if (this.state.count === index) {active.backgroundColor = '#999'};
							return <li style={active} onClick={this.onDotClick.bind(this, index)} key={index} className='dots'></li>
						}.bind(this))
					}
				</ul>
			</div>
		)
	}

});

module.exports = Carousel;
