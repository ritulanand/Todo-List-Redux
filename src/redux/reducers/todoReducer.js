import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    todos: [],
    };

    //getInitalStateAsync is a function but is not pure function

    export const getInitalStateAsync = createAsyncThunk("todo/getInitialState", 
        // async (_, thunkAPI) => {
        // //async calls
        // await axios.get("http://localhost:4100/api/todos")
        // .then(res=> {
        //     console.log(">>", res);
        //     // dispatch(actions.setInitalState(res.data));
        //     thunkAPI.dispatch(actions.setInitalState(res.data));
        // });
         () => {
            console.log("res get", axios.get("http://localhost:4100/api/todos"));
            return axios.get("http://localhost:4100/api/todos");
        }
    )

    export const addTodoAsync = createAsyncThunk("todo/addTodo", async (payload) => {
        const response = await fetch("http://localhost:4100/api/todos" , {
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                text : payload,
                completed : false
            })
        })

        if (!response.ok) {
            throw new Error("Failed to add todo");
        }
        // console.log("res", response.json());

        return response.json(); // json parses data
    })



    // creating reducer using redux-tookit
const todoSlice = createSlice({
    name : "todo",
    initialState : initialState,
    //pure functions
    reducers : {
        // setInitalState: (state, action) => {
        //     console.log("action payload", action.payload);
        //     state.todos = [...action.payload];
        //     // The spread operator creates a new array with the same elements as action.payload. This ensures that state.todos is a separate array, maintaining the principle of immutability in Redux. Redux relies on immutability to detect state changes efficiently.
        //     // If you directly assign state.todos = action.payload, both state.todos and action.payload will reference the same array in memory. Any changes made to one will affect the other, which can lead to bugs and make debugging difficult.

        // },

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
    },
    //this will listen to axios.get api call aftet it fulfils it execute

    extraReducers : (builder) => {
        builder.addCase(getInitalStateAsync.fulfilled, (state, action) => {
            console.log("getinitial state fufilled");
            console.log("action payload>", action.payload);
            state.todos = [...action.payload.data];
        })
        .addCase(addTodoAsync.fulfilled, (state, action) => {
            console.log("action add", action.payload);
            state.todos.push(action.payload);
        })
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