import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [{
        text : 'meeting at 9', completed : true,
    }, {
        text : 'lunch at 2', completed : false,
    }],
    };


    // creating reducer using redux-tookit
const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    reducers : {
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