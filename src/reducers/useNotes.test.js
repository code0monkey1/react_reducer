import { act, renderHook } from "@testing-library/react";
import { getResultWithAddedNote, notes as storedNotes } from "./notesHelper";
import { useNotes } from "./useNotes";
describe("useNotes", () => {
  
  it("has addNote,toggleImportanceById,removeNoteById and notes to be defined", () => {
      
      const {result:
        {current:
          {addNote,notes,toggleImportanceById,removeNoteById} 
        }
      } = renderHook(() => useNotes())
      
      expect(addNote).toBeInstanceOf(Function)
      expect(removeNoteById).toBeInstanceOf(Function)
      expect(toggleImportanceById).toBeInstanceOf(Function)
      expect(notes).toBeInstanceOf(Array)

  })

  it("will add a new note", () => {

    const result=getResultWithAddedNote(storedNotes[0])
    
    expect(result.current.notes).toHaveLength(1)
    expect(result.current.notes[0].title).toEqual(storedNotes[0].title)
    
  })

  it("will delete note by id",() => {
   
    const result=getResultWithAddedNote(storedNotes[0])

    expect(result.current.notes).toHaveLength(1)
    expect(result.current.notes[0].title).toEqual(storedNotes[0].title)
      
      const id= result.current.notes[0].id

      act(()=>{
        result.current.removeNoteById(id)
      })
      expect(result.current.notes).toHaveLength(0)
  
  })

  it('will toggle the importance of the note , when given the id of the note',() => {
   
     const result=getResultWithAddedNote(storedNotes[0])

      expect(result.current.notes[0].important).toBe(false)

      act(()=>{

        result.current.toggleImportanceById(result.current.notes[0].id)
      })

      expect(result.current.notes[0].important).toBe(true)

  })
})