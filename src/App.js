import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddItem from './components/AddItem';

class App extends Component {
  state = {
    items : [{
      id:1,
      text: "text 1",
      completed: false
    },
    {

      id:2,
      text: "text 2",
      completed: false
    },
    {
      id:3,
      text: "text 3",
      completed: false

    }]
  }
  markComplete = (id) => {
    this.setState({ items: this.state.items.map(item => {
      if(item.id === id){
        item.completed =  !item.completed;  
      }
    
    return item;
    })});
  }

  deleteItem = (id) => {
    this.setState({ items: [...this.state.items.filter(item=>item.id !==id)]});
  }
  addItem = (item, id, completed) => {
    const newItem = {
      id: id,
      text: item,
      completed: completed
    }
    this.setState({items: [...this.state.items, newItem]})
  }

  render(){
    return (
      <div>
        <Header></Header>

        <AddItem addItem={this.addItem} />
        
        <Todos items = {this.state.items} 
        markComplete={this.markComplete}
        deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
