import React, { Component } from 'react';

class Item extends Component{
   getStyle = () => {
  	return {
  		color: this.props.completed? 'red' : 'black',
  		background: '#f4f4f4',
  		borderBottom: '1px #ccc dotted',


  	}
  }
  render(){
    const id = this.props.id;
  	const item = this.props.item;
  	const completed = this.props.completed;

	return (
		<div style={this.getStyle()}>
			<p>
				<input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
					{item} 
				<button onClick={this.props.deleteItem.bind(this, id)} style={btnStyle} >x</button>   
			</p>
		</div>
	)
  }
}
const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px 9px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
}

export default Item;
