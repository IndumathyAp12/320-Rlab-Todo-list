import React, { useReducer, useState } from 'react';
import { initialState, todoReducer } from './reducer';
import  './App.css'; 
import TodoItem from './Todo-item';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', title: newTodo });
      setNewTodo('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {state.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}

export default App;
