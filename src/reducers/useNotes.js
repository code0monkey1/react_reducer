import { useReducer } from "react"

export const useNotes=()=>{

  const ACTIONS={
    ADD_NOTE:'add_note',
    REMOVE_NOTE:'remove_note',
    UPDATE_NOTE:'update_note',
    GET_NOTE:'get_note'
  }

  const notesReducer=(state=[],action)=>{
    
     console.log("state",state)
     console.log(JSON.stringify(action,null,2))
     
      switch (action.type) {

        case ACTIONS.ADD_NOTE:
          return state.concat(
            {...action.payload})
        
        case ACTIONS.REMOVE_NOTE:
        
          return state.filter(
            note =>action.payload.id !==note.id
            )

        default:
          console.log("default")
          return state

      }
   
  }

  const [notes,dispatch] = useReducer(notesReducer, [])

  const addNote = (text)=>{

      dispatch({
        type: ACTIONS.ADD_NOTE,
        payload:{
          title:text,
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
  
  return {
    notes,
    addNote,
    removeNoteById,
    // updateNoteById,
    // getNoteById,
  }
 
}

