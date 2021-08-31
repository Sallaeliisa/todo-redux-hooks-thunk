
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, updateNotes } from "../store/actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const NoteList = () => {
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            className={note.completed ? "strike" : "todo"}
          >
            <label onClick={() => dispatch(toggleTodo(note.id))}>{note.text}</label>
            <button className='remove-btn' onClick={() => dispatch(updateNotes(note.id))}><FontAwesomeIcon icon={faTrash} /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
