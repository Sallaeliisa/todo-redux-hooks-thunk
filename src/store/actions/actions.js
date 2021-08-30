import { getAll, createNew } from "../../services/notes";

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const INIT_NOTES = "INIT_NOTES";

export const initializeNotes = () => {
    return async (dispatch) => {
        const notes = await getAll();
        dispatch({
            type: INIT_NOTES,
            data: notes,
        });
    };
};

export const createNote = (text) => {
    return async (dispatch) => {
        const newNote = await createNew(text);
        dispatch({
            type: ADD_TODO,
            data: newNote,
        });
    };
};