import { useReducer } from "react"

export const useNotes=()=>{

  const ACTIONS={
    ADD_NOTE:'add_note',
    REMOVE_NOTE:'remove_note',
    TOGGLE_IMPORTANCE:'toggle_importance'
  }

  const notesReducer=(state,action)=>{
  
    switch (action.type) {

        case ACTIONS.ADD_NOTE:
          return state.concat(
            {...action.payload})
        
        case ACTIONS.REMOVE_NOTE:
          return state.filter(
            note =>action.payload.id !==note.id
            )

        case ACTIONS.TOGGLE_IMPORTANCE:
          return state.map(note =>
            action.payload.id === note.id?
            {...note,important:!note.important}:note
            )

        default:
          return state

      }
  }

  const [notes,dispatch] = useReducer(notesReducer, [])

  const addNote = (text)=>{

      dispatch({
        type: ACTIONS.ADD_NOTE,
        payload:{
          title:text,
          important:false,
          id:Math.floor(Math.random()*1000)+""
        }
      })
   
  }

  const removeNoteById = (id)=>{

    dispatch({
      type: ACTIONS.REMOVE_NOTE,
      payload:{id}
    })

  }


  const toggleImportanceById = (id)=>{
       
    dispatch({ 
      type: ACTIONS.TOGGLE_IMPORTANCE,
      payload:{id}
    })
  }

  return {
    notes,
    addNote,
    removeNoteById,
    toggleImportanceById
  }
 
}

