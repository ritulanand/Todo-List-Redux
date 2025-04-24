// import * as redux from 'redux';
// import { combineReducers } from 'redux';


import {todoReducer} from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducer';
import { configureStore } from '@reduxjs/toolkit';
import { notificationReducer } from './reducers/notificationReducer';
import { loggerMiddleware } from './middlewares/loggerMiddleware';
 

// const result = combineReducers({
//     todoReducer: todoReducer,
//     noteReducer : noteReducer,
// });
// export const store = redux.createStore(result);

//slice helps create actions, action creators
export const store =  configureStore({
    reducer : {
        todoReducer : todoReducer,
        noteReducer : noteReducer,
        notificationReducer : notificationReducer
    },
    middleware : (getDefaultMiddlware) =>  getDefaultMiddlware().concat(loggerMiddleware)
});
