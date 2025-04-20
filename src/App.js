

import {useState} from "react";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Fragment } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import NoteForm from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";
import Home from "./components/Home/Home";


function App() {
  const [todos, setTodos] = useState([]);
  const createTodo  = (text) => {
    setTodos([...todos, {id : todos.length + 1, text, completed : false}]);
    console.log("todos", todos);
  }
  

  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed = !list[index].completed;
    setTodos(list);
  }

  return (
    <div>
       <Provider store={store}>
        <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}>
            
          </Route>
          <Route path="todo"
          element={
            <Fragment>
              <NavBar />
             <h1>To Dos</h1>
              <TodoForm  />
              <TodoList />
            </Fragment>
          }>

          </Route>
          <Route path="notes"
          element={
            <Fragment>
               <NavBar />
               <h1>Notes</h1>
              <NoteForm  />
              <NoteList />
            </Fragment>
          }>
            
            </Route>
        </Routes>
       
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
