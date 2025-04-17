import "./TodoList.css";


function TodoList({onToggle, todos}) {
    console.log("todos>", todos);
  return (
    <div className="container">
        <ul>
            {todos.map((todo, index) =>  (
                <li key={todo.id}>
                    <span className="content">{todo.text}</span>
                    <span className={todo.completed ? "completed" : "pending"}>{todo.completed ? "completed" : "pending"}</span>
                    <button onClick={() =>  onToggle(index)}>Toggle</button>
                </li>
            ))}
        </ul> 
    </div>
  )
}

export default TodoList
