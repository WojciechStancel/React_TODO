// ListItem.js


import { useState } from "react";
import "./ListItem.css";

const ListItem = ({ taskList, handleRemoveNote }) => {
  return (
    <ul className="notes-list">
      {taskList.map((note) => (
        <NoteItem key={note.id} note={note} handleRemoveNote={handleRemoveNote} />
      ))}
    </ul>
  );
};

const NoteItem = ({ note, handleRemoveNote }) => {
  const [isDone, setIsDone] = useState(false);

  const handleDoneNote = () => {
    setIsDone(!isDone);
  };

  return (
    <li className={`notes-container `}>
      {isDone ? (
        <p className="notes-item notes-item-is-done">
          {note.body} <br />
          Dodana: {note.added.toLocaleDateString()}
        </p>
      ) : (
        <p className="notes-item">
          {note.body} <br />
          Dodana: {note.added.toLocaleDateString()}
        </p>
      )}

      <div>
        <button className="notes-list-btn" onClick={handleDoneNote}>
          Zrobione
        </button>
        <button className="notes-list-btn" onClick={() => handleRemoveNote(note.id)}>
          Usuń
        </button>
      </div>
    </li>
  );
};

export default ListItem;
