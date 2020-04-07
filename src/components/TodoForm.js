import React, { useState } from 'react';

function TodoForm ({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
        console.log(value);
      };

    const handleInput = e => {
        let input = e.target.value;
        setValue(input);
        console.log(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="input"
            placeholder="Enter new task"
            value={value}
            onChange={handleInput}
            />
        </form>
    );
}

export default TodoForm;