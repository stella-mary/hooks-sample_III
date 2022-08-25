import React from "react";
import { RiCloseCircleLine } from "react-icons/ri"
import { AiFillCheckCircle } from "react-icons/ai"


export default function ToDoItem(props)  {
    const { todo, removeTodo, completeTodo } = props
    return(
            <div className={todo.completed ? "props completed" : "props" }>
            {props.todo.text}
            <div className="propsCorrect">
            <RiCloseCircleLine style={{ marginRight:12}} onClick={() => removeTodo(todo.id)}/>
            <AiFillCheckCircle onClick={() => completeTodo(todo.id) }/>
            </div>
        </div>
    )
}


