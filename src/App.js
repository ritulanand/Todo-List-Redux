

import {useState} from "react";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
       <h1>Todo App</h1>
       <Provider store={store}> 
        <TodoForm oncreateTodo = {createTodo} />
        <TodoList  onToggle={toggleTodo} />
        </Provider>
    </div>
  );
}

export default App;
