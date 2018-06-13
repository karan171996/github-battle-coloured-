import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
var styles ={
	content:{
		textAlign:'center',
		fontSize:'35px'
	}
};

export default class Loading extends React.Component {
	constructor(props){
		super(props);

		this.state ={
			text:props.text
		}; 
	}
	componentDidMount() {
		var stopper = this.props.text + '...';
		this.interval = window.setInterval(function(){
          if(this.state.text === stopper){
          	this.setState(function(){
          		return{
          			text:this.props.text
          		}
          	})
          }
          else{
          	this.setState(function (prevState) {
          		return {
                  text: prevState.text + '.'
          		}
          	});
          }
		}.bind(this),this.props.speed)
	}
	componentWillUnmount() {
		window.clearInterval(this.interval);
	}
	render(){
		return(
			<glamorous.Div backgroundColor = "#343434" width = "1440" height = "750">
			<p style ={styles.content}>
			{this.state.text}
			</p>
			</glamorous.Div>
			)
	}
}
Loading.propTypes ={
	text:PropTypes.string.isRequired,
	speed : PropTypes.number.isRequired,
};
Loading.defaultProps ={
	text:'Loading',
	speed: 300
};