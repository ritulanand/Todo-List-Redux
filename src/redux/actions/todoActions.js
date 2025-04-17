// Action constants
export const ADD_TODO = 'Add Todo';
export const TOGGLE_TODO = 'Toggle Todo';


//action creators
export const addTodo = (text) => ({text, type: ADD_TODO});
export const toggleTodo = (index) => ({index, type: TOGGLE_TODO});