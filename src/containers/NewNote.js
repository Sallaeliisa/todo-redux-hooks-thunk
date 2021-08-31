import React from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../store/actions/actions";

const NewNote = () => {
  const dispatch = useDispatch();

  const addToDo = async (e) => {
    e.preventDefault();
    const text = e.target.noteInput.value;
    dispatch(createNote(text));
    e.target.noteInput.value = "";
  };

  return (
    <div>
      <header>
        <h1>To Do</h1>
      </header>
      <form onSubmit={addToDo}>
        <input type="text" name="noteInput" />
        <input type="submit" value="Add note" className="submitBtn" />
      </form>
    </div>
  );
};

export default NewNote;
