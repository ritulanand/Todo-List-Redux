import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
    todos: [{
        text : 'meeting at 9', completed : true,
    }, {
        text : 'lunch at 2', completed : false,
    }],
    };


   export  function todoReducer(state = initialState, action){
        switch(action.type){
            case ADD_TODO :
                 return {
                    ...state,
                    todos : [
                        ...state.todos,
                        {
                            text : action.text,
                            completed : false,
                        }
                    ]
                 }
            case TOGGLE_TODO: 
              return {
                ...state,
                todos : state.todos.map((todo, index) => {
                    if(index == action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
              }
            default:
                return state;
        }
    }