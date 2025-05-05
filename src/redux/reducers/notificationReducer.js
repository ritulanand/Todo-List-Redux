import { createSlice } from "@reduxjs/toolkit"
import { actions, addTodoAsync, toggleTodo } from "./todoReducer"
// import { toggle } from "../../../../backend/todoController"

const initialState = {
    message : ""
}

const notificationSlice = createSlice({
    name : 'notification',
    initialState : initialState,
    reducers : {
        reset : (state, action) => {
            state.message = ""
        },
    },
    // extraReducers  : {
    //     "todo/add" : (state,action) => {
    //         state.message = "Tdodo is created"
    //     }
    // }
    //deprecated
    //alert
    extraReducers : (builder) => {
        builder.addCase(addTodoAsync.fulfilled, (state, action) => {
            console.log("extra")
            state.message = "Todo is created";
        })
        .addCase(toggleTodo.fulfilled, (state, action) => {
            console.log("extra toggle")
            state.message = "Todo is toggled";
        }
    )
    }
    // extraReducers : {
    //     //map objects : [key] : value. 
    //     [actions.add] : (state, action) => {
    //         state.message = "Todo is created !";
    //     }
    // }
})

export const notificationReducer = notificationSlice.reducer;
export const resetNotification = notificationSlice.actions.reset;
export const notificationSelector = (state) =>  state.notificationReducer.message;
