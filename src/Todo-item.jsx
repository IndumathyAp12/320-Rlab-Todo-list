import React, { useState } from 'react';

function TodoItem({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSave = () => {
    dispatch({ type: 'EDIT_TODO', id: todo.id, title: editedTitle });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </span>
      )}
      {isEditing ? (
        <button className="save-btn" onClick={handleSave}>Save</button>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
          />
          <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
          <button
            className="delete-btn"
            onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
            disabled={!todo.completed}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
