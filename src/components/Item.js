import React, { Component } from 'react';

class Item extends Component{
  getStyle = () => {
  	return {color: this.props.completed? 'red' : 'black'}
  }
  render(){
  	const id = this.props.id;
  	const item = this.props.item;
  	const completed = this.props.completed;

	return (
		<div>
			<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
				<span style={this.getStyle()}>{item}</span> 
			   
		</div>
	)
  }
}


export default Item;
//38