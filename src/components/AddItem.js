import React, { Component } from 'react';

class AddItem extends Component{
  state = {
  	title: '',
  	id: '',
  	completed: false
  }

  handleCheckbox = (e) => this.setState({ completed: !this.state.completed }); 	
  handleId       = (e) => this.setState({ id: e.target.value });
  handleTitle    = (e) => this.setState({ title: e.target.value });
  onSubmit       = (e) => {
  	e.preventDefault();
  	console.log(this.state.title);
  	console.log(this.state.id);
  	console.log(this.state.completed);
  	this.props.addItem(this.state.title,this.state.id,this.state.completed);
  	//this.state.title='';
  }
  
  render(){
	return (
		<form style={{display: 'flex'}} onSubmit={this.onSubmit}>

			<input type='text' name='title' value={this.title} onChange={this.handleTitle} />
			<input type='text' name='id'  value={this.id} onChange={this.handleId} />
			<input type='checkbox' name='completed'  onChange={this.handleCheckbox}/>
			<input type='submit' value='Add' />
		
		</form>
		);
  }
}


export default AddItem;
