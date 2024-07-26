import React from 'react';
import './App.css';
import {AppUI} from './AppUI'


import { useLocalStorage } from '../Hooks/LocalStorage/useLocalStorage';

// eslint-disable-next-line
const notesList = [
  {id:1,title:"Nota 1",desciption:"texto cualquiera para la descripcion",color:"blue",isCompleted:false},
  {id:2,title:"Nota 2",desciption:"Algun que hacer en nuestra hija",color:"white",isCompleted:false},
  {id:3,title:"Nota 3",desciption:"texto cualquiera para la descripcion",color:"black",isCompleted:true},
  {id:4,title:"Nota 3",desciption:"texto cualquiera para la descripcion",color:"red",isCompleted:false},
]

function App() {
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
    <AppUI
    notes={notes}
    changeState={changeState}
    deleteNotes={deleteNotes}
    />
  );
}

export {App};
