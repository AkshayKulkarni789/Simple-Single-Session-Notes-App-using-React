import React,{ Component } from 'react';
import Todos from "./todos"
import AddItem from "./AddItem"

class App extends Component{
  state = {
    todos: [
      {id: 1, content: 'Type Below to Add and Item'},
      {id: 2, content: 'Click on an item to delete it'}
    ]
  }
  deleteItem = (id) => {
    const del = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({ todos: del});
  }
  addItem = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }
  render(){
    return (
      <div className="App container">
        <h1 className="center blue-text">To-do List</h1>
        <Todos todos={this.state.todos} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
