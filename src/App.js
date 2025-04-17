

import {useState} from "react";
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

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
        <TodoForm oncreateTodo = {createTodo} />
        <TodoList todos = {todos} onToggle={toggleTodo} />
    </div>
  );
}

export default App;
