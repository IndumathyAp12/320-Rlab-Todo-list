import React, { useState } from 'react';
import { ACTIONS } from '../todoReducer';

const TodoForm = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;
