import * as redux from 'redux';
import { combineReducers } from 'redux';

import {todoReducer} from './reducers/todoReducer';
import { noteReducer } from './reducers/noteReducer';
 

const result = combineReducers({
    todoReducer: todoReducer,
    noteReducer : noteReducer,
});
export const store = redux.createStore(result);