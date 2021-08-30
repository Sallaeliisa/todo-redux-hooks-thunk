import * as actionTypes from "../actions/actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;
    case actionTypes.ADD_TODO:
      return [...state, action.data];
    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find((n) => n.id === action.id);
      const changeNote = {
        ...noteToChange,
        completed: !noteToChange.completed,
      };
      return state.map((note) => (note.id !== action.id ? note : changeNote));

    default:
      return state;
  }
};

// const initialState = {
//   notes: [
//     {
//       id: 1,
//       text: "something",
//       completed: false,
//     },
//   ],
//   TextDecoderStream: [
//     {
//       id: 2,
//       text: "something else",
//       completed: false,
//     },
//   ],
// };

export default reducer;
