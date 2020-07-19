import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Todos extends Component{
  render(){
	return this.props.items.map((item) => (
		
		<Item key={item.id} id={item.id} item={item.text} 
		completed={item.completed} 
		markComplete={this.props.markComplete} 
		deleteItem={this.props.deleteItem} />		
		
	));
  }
}

Todos.propTypes ={
	items: PropTypes.array.isRequired	
}

export default Todos;
