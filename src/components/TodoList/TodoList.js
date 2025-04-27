import { useSelector } from "react-redux";
import "./TodoList.css";
import { useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import { actions } from "../../redux/reducers/todoReducer";
import {todoSelector} from "../../redux/reducers/todoReducer";
import { useEffect } from "react";
import axios from "axios";

function TodoList() {

    const todos = useSelector(todoSelector);
    console.log("todos", todos);
    const dispatch = useDispatch();
    useEffect(() => {
        // fetch("http://localhost:4100/api/todos")
        // .then((res) =>  res.json())
        // .then((data) => {
        //       console.log("data", data);
        // })
        axios.get("http://localhost:4100/api/todos")
        .then(res=> {
            console.log("res", res);
            dispatch(actions.setInitalState(res.data));
        });
        
    },[])
    // const todos = store.getState().todos; 
    //note: store.getState() is not recommended to use in functional components as it will not re-render the component when the state changes.
    // console.log("todos>", todos);
  return (
    <div className="container">
        <ul>
            {todos.map((todo, index) =>  (
                <li key={index}>
                    <span className="content">{todo.text}</span>
                    <span className={todo.completed ? "completed" : "pending"}>{todo.completed ? "completed" : "pending"}</span>
                    <button onClick={() =>  {
                        // console.log("[LOG] :Todo Toggle action dispacthed");
                        dispatch(actions.toggle(index))
                    }}>Toggle</button>
                </li>
            ))}
        </ul> 
    </div>
  )
}

export default TodoList
