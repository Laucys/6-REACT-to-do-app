import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Header from './components/Header'

function App() {

  const [todos, setTodos] = useState ([
    { 
      text: "Create CV",
      isCompleted: false
    },
    { 
      text: "Prepare Github profile",
      isCompleted: false
    },
    { 
      text: "Apply for a job",
      isCompleted: false
    }   
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];
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

