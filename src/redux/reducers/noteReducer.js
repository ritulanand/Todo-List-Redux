import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   notes : [ 
    {text : "ldefwenfewf", createdOn : new Date()},
        {text : "asdsadasdasd", createdOn : new Date()},
   ]
}

    // creating reducer using redux-tookit

const noteSlice = createSlice({
    name : 'note',
    initialState : initialState,
    reducers : {

        // this is add action
        add : (state, action) => {
            state.notes.push({
                text : action.payload,
                createdOn : new Date()
            })
        }, 
        delete : (state, action) => {
            state.notes = state.notes.filter((note, i) => (
                i !== action.payload
                
            )
        )
        }
        // delete : (state, action) => {
       // state.notes.splice(action.payload, 1);
        // )
        // }
    }
})


export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
//selector
export const noteSelector = (state) => state.noteReducer.notes;



  //reducer using redux

// export const noteReducer = (state = initialState, action) => {
// switch(action.type){
//     case ADD_NOTE:
//         return {
//             ...state,
//             notes : [
//                 ...state.notes,
//                 {
//                     text : action.text,
//                     createdOn : new Date(),
//                 }
//             ]
//         }

//     case DELETE_NOTE:
//     //    state.notes.splice(action.index, 1);
//        console.log("state.notes", state.notes);
//         return {
//             ...state,
//             notes : state.notes.filter((note, index) => {
//                 return index != action.index;
//             })
//         }
//     default:
//         return state;
// }
// }
