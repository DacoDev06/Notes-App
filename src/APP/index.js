import './App.css';
import { Title } from '../Components/Title';
import {NotesGrid} from '../Components/NotesGrid'
import {Note} from '../Components/Note'
import { AddNoteButton } from '../Components/AddNoteButton';
import React from 'react';

const notesList = [
  {id:1,title:"Nota 1",desciption:"texto cualquiera para la descripcion",color:"blue",isCompleted:false},
  {id:2,title:"Nota 2",desciption:"Algun que hacer en nuestra hija",color:"white",isCompleted:false},
  {id:3,title:"Nota 3",desciption:"texto cualquiera para la descripcion",color:"black",isCompleted:false},
  {id:4,title:"Nota 3",desciption:"texto cualquiera para la descripcion",color:"red",isCompleted:false},
]

function App() {
  const [notes,setNotes] = React.useState(notesList)
  // const [notes,setNotes] = React.useState(JSON.parse(localStorage.getItem('notes'))||[])

  const saveNotes = (newNotes)=>{
    setNotes(newNotes)
    localStorage.setItem('notes',JSON.stringify(newNotes))
  }


  const deleteNotes = (id)=>{
    let newNotes = [...notes]
    const index = newNotes.findIndex(note => note.id === id)
    newNotes.splice(index,1)
    saveNotes(newNotes)
  }


  return (
    <div className="App">
        <Title/>
        <NotesGrid>
          {notes.map(note=>
            <Note
              key={note.id}
              title={note.title}
              description={note.desciption}
              deleteNotes={()=>deleteNotes(note.id)}
              color={note.color}
            />
           )}
        </NotesGrid>
        <AddNoteButton/>
    </div>
  );
}

export {App};
