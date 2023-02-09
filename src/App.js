import { useRef } from "react";
import './App.css';
import { useNotes } from "./reducers/useNotes";

function App() {
  const {notes,
    addNote,
    removeNoteById,
    toggleImportanceById
  } = useNotes();
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
           <input 
           onChange={()=>{toggleImportanceById(note.id)}} 
           type="checkbox" 
           checked={note.important}
           />
         <button onClick={()=>{removeNoteById(note.id)}}>Delete</button>
         </li>) 
         }
       </ol>
      </header>
    </div>
  );
}
export default App;
