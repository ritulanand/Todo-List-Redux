import {useState} from "react";
import "./TodoForm.css";
import {useDispatch} from "react-redux";
// import { addTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";

function TodoForm({oncreateTodo}){
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actions.add(todoText));
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