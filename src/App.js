import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Header from './components/Header'

function App() {

  const [todos, setTodos] = useState ([
    { 
      text: "Learn about React Hooks",
      isCompleted: false
    },
    { 
      text: "Toggle complete button",
      isCompleted: false
    },
    { 
      text: "Add and Delete tasks",
      isCompleted: false
    }   
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    if (newTodos[index].isCompleted === false) {
      newTodos[index].isCompleted = true;
      setTodos(newTodos);
    } else if (newTodos[index].isCompleted === true) {
      newTodos[index].isCompleted = false;
      setTodos(newTodos);
    }
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <div>
    <Header />
    </div>
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

