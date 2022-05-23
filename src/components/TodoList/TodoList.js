import React, { Component } from "react";
import TodoForm from "../TodeForm/TodoForm";
import "./TodoList.css";
import Items from "../Items/Items";

class TodoList extends Component {
  state = {
    todos: [],
    newTodo: "",
  };
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    let todosLength = this.state.todos.length;
    if (this.state.newTodo === "") {
      return;
    }
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
          {
          id: (todosLength += 1),
          title: this.state.newTodo,
          isCompleted: false,
        },
      ],
    });
  };
   tog=(event,index)=>{
    const todoComplet=this.state.todos.filter(todo=>{
      if(todo.id===index+1){
        todo.isCompleted =event.target.checked
      }
      return todo
    })
    this.setState({todos: todoComplet})
  }
  removeTode=(index) =>{
    const {todos}=this.state
    todos.splice(index,1)
    this.setState({
      todos,
    });
  }
  render() {
    return (
      <div className="todo-list container d-flex-column w-50  pb-3">
        <TodoForm
          newTodo={this.state.newTodo}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Items  todos={this.state.todos} 
        handleOnChange={this.tog} 
        handleRemove={this.removeTode}
        />
      </div>
    );
  }
}
export default TodoList;
