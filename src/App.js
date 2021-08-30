import React, { useEffect } from 'react';
import './index.css';
import NoteList from './containers/NoteList';
import NewNote from './containers/NewNote';
import { initializeNotes } from './store/actions/actions';
import { useDispatch } from 'react-redux';

const App = () => {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(initializeNotes());
}, [dispatch]);

  return (
    <div>
      <NewNote />
      <NoteList />
    </div>
  );
};

export default App;