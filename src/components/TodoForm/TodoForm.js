import {useState} from "react";
import "./TodoForm.css";

function TodoForm({oncreateTodo}){
    const [todoText, setTodoText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        oncreateTodo(todoText);
        setTodoText("");
    }
    return  (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoText } onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit">create todo</button>
            </form>
        </div>
    )
}

export default TodoForm;