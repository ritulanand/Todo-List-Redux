import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    todos: [],
    };

    //getInitalStateAsync is a function but is not pure function

    export const getInitalStateAsync = createAsyncThunk("todo/getInitialState", (arg, thunkAPI) => {
        axios.get("http://localhost:4100/api/todos")
        .then(res=> {
            console.log(">>", res);
            // dispatch(actions.setInitalState(res.data));
            thunkAPI.dispatch(actions.setInitalState(res.data));
        });
    })



    // creating reducer using redux-tookit
const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    //pure functions
    reducers : {
        setInitalState: (state, action) => {
            console.log("action payload", action.payload);
            state.todos = [...action.payload];
            // The spread operator creates a new array with the same elements as action.payload. This ensures that state.todos is a separate array, maintaining the principle of immutability in Redux. Redux relies on immutability to detect state changes efficiently.
            // If you directly assign state.todos = action.payload, both state.todos and action.payload will reference the same array in memory. Any changes made to one will affect the other, which can lead to bugs and make debugging difficult.

        },

        add : (state, action )=> {
            state.todos.push({
                text : action.payload,
                completed : false
            })
        },
        toggle : (state, action) => {
            state.todos.map((todo, i) => {
                if(i === action.payload){
                   todo.completed = !todo.completed
                }
                return todo;
            })
        }
    }
})


export const todoReducer = todoSlice.reducer; 
export const actions =  todoSlice.actions;

//selector
export const todoSelector = (state) => state.todoReducer.todos;



    //reducer using redux
//    export  function todoReducer(state = initialState, action){
//         switch(action.type){
//             case ADD_TODO :
//                  return {
//                     ...state,
//                     todos : [
//                         ...state.todos,
//                         {
//                             text : action.text,
//                             completed : false,
//                         }
//                     ]
//                  }
//             case TOGGLE_TODO: 
//               return {
//                 ...state,
//                 todos : state.todos.map((todo, index) => {
//                     if(index == action.index){
//                         todo.completed = !todo.completed;
//                     }
//                     return todo;
//                 })
//               }
//             default:
//                 return state;
//         }
//     }