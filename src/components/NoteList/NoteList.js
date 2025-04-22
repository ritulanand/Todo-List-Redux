
import "./NoteList.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

function NoteList() {
    const notes= useSelector((state) => state.noteReducer.notes);
    const dispatch = useDispatch();
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <p>  {note.createdOn.toLocaleDateString()}  </p>
            <p className="note-content"> &nbsp;{note.text}</p>
            <button className="btn btn-danger" onClick={() => dispatch(deleteNote(index))}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
