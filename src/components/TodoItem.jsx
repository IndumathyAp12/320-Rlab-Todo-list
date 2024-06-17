import React, { useState } from 'react';
import { ACTIONS } from './todoReducer';

const TodoItem = ({ todo, dispatch }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleSave = () => {
    dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id, newTitle: editedText } });
    setEditing(false);
  };

  return (
    <div className="todo-item">
      {!editing ? (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: ACTIONS.TOGGLE_COMPLETE, payload: todo.id })}
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })} disabled={!todo.completed}>
            Delete
          </button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
