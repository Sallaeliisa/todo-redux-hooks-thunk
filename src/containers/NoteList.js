import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../store/actions/actions";

const NoteList = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleToDo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id,
  });

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => dispatch(toggleToDo(note.id))}
            className={note.completed ? "strike" : "todo"}
          >
            {note.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
