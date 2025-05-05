import {useState} from "react";
import "./TodoForm.css";
import {useDispatch, useSelector} from "react-redux";
// import { addTodo } from "../../redux/actions/todoActions";
import { actions, addTodoAsync } from "../../redux/reducers/todoReducer";
import { notificationSelector, resetNotification } from "../../redux/reducers/notificationReducer";

function TodoForm(){
    const [todoText, setTodoText] = useState("");
    const dispatch = useDispatch();
    const message = useSelector(notificationSelector);
    if(message){
        setTimeout(() => {
            dispatch(resetNotification())
        }, 3000)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("[LOG] :Todo add action dispacthed");
        dispatch(addTodoAsync(todoText));
        setTodoText("");
    }
    return  (
        <div className="container">
            {message && (
                <div class="alert alert-success" role="alert">
                    {message}
          </div> 
            )}
             
            <form onSubmit={handleSubmit}>
                <input type="text" value={todoText } onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit">create todo</button>
            </form>
        </div>
    )
}

export default TodoForm;