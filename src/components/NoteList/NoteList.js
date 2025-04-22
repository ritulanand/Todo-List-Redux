
import "./NoteList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { deleteNote } from "../../redux/actions/noteActions";
import { actions } from "../../redux/reducers/noteReducer";
import {noteSelector} from "../../redux/reducers/noteReducer";


function NoteList() {
    const notes= useSelector(noteSelector);
    const dispatch = useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>  {note.createdOn.toLocaleDateString()}  </p>
            <p className="note-content"> &nbsp;{note.text}</p>
            <button className="btn btn-danger" onClick={() => dispatch(actions.delete(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
