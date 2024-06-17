import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, dispatch }) => {
  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TodoList;
