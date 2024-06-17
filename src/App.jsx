import React, { useReducer } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { todoReducer, initialState, ACTIONS } from './todoReducer';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList
        todos={todos}
        dispatch={dispatch}
      />
    </div>
  );
};

export default App;
