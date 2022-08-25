import './App.css';
import InputArea from "./Components/InputArea";
import React, { useState } from "react";
import ToDoItems from './Components/ToDoItems';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    let todo = {id: id, text: text, completed: false}
    let newTodos = [todo, ...todos]
    setTodos(newTodos)
  };

  const removeTodo = (id) =>{
    let updatedTodos = [...todos].filter((todo) => todo.id !==id)
    setTodos(updatedTodos);
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }
  

  return ( 
      <div className="container">
        <h1> Daily Work Sheet </h1>
        
    <InputArea addTodo={addTodo}/>
    <div>
        {todos.map((todo)=>{
            return(
            <ToDoItems removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
            )
        })}
    </div> 
    </div>
  );
  
}



export default App;
