import React from "react"
import { useLocalStorage } from '../Hooks/LocalStorage/useLocalStorage';


const AppContext = React.createContext()

function AppContextProvider({children}){
    //APLICATION LOGIC
    const {
        item:notes,
        saveItem:saveNotes
      } = useLocalStorage("notes")
      
      const changeState = (id)=>{
        let newNotes = [...notes]
        newNotes.forEach(note => {
          if(note.id === id){
            if(note.isCompleted){
              note.isCompleted = false
            }else{
              note.isCompleted = true
            }
          }
        })
        saveNotes(newNotes)
      }
    
    
      const deleteNotes = (id)=>{
        let newNotes = [...notes]
        const index = newNotes.findIndex(note => note.id === id)
        newNotes.splice(index,1)
        saveNotes(newNotes)
      }

    return (
        <AppContext.Provider value={{
            notes,
            changeState,
            deleteNotes
        }}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext,AppContextProvider}