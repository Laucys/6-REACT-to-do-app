import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
        <div 
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            {todo.text}
        <div>

            <button className="btn" onClick={() => completeTodo(index)}>
                {!todo.isCompleted ? (<div>Complete</div>):(<div>Undo</div>)}
            </button>

            <button className="btn delete" onClick={() => removeTodo(index)}>X</button>

        </div>
        </div>
    )};

export default Todo;