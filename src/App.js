import { useRef } from "react";
import './App.css';
import { useNotes } from "./reducers/useNotes";

function App() {
  const {notes,addNote,removeNoteById} = useNotes();
  const text = useRef()
  console.log(notes)
  return (
    <div style={{height:"100vh"}}>
    <label>Note : </label>  
    <input ref={text} type="text"/>
    <button onClick={()=>{addNote(text.current.value)}}>
      Add Note
      </button>
      <header className="App-header">
        <ol>
       {notes.map( note =>
         <li key={note.title}><span>{note.title}</span>
         <button onClick={()=>{removeNoteById(note.id)}}>Delete</button>
         </li>) 
         }
       </ol>
      </header>
    </div>
  );
}
export default App;
