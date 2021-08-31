import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, updateNotes } from "../store/actions/actions";

const NoteList = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleTodo(note.id))}
            className={note.completed ? "strike" : "todo"}
          >
            {note.text}
            <button onClick={() => dispatch(updateNotes(note.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
