import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

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
  
  render(){
    return (
      <div>
        <Todos items = {this.state.items} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
