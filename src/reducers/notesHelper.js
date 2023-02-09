import { act, renderHook } from "@testing-library/react";
import { useNotes } from "./useNotes";

   export const getResultWithAddedNote=(note)=>{

      
      const {result} = renderHook(() => useNotes())
        

      act(()=>{
        result.current.addNote(note.title)
      })
        

      return result

   }
 
    export  const notes=[

      {

        title:"First Note",

      },
      {

        title:"Second Note",

      } 
    ]

