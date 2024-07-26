import React from 'react';
import { Title } from '../Components/Title';
import {NotesGrid} from '../Components/NotesGrid'
import {Note} from '../Components/Note'
import { AddNoteButton } from '../Components/AddNoteButton';
import {AppContext} from '../Context'


function AppUI(){
    const {notes,
        changeState,
        deleteNotes} = React.useContext(AppContext)
    return(
        <div className="App">
            <Title/>
            <NotesGrid>
            {notes.map(note=>
                <Note
                key={note.id}
                title={note.title}
                description={note.desciption}
                changeState={()=>changeState(note.id)}
                deleteNotes={()=>deleteNotes(note.id)}
                color={note.color}
                isCompleted={note.isCompleted}
                />
            )}
            </NotesGrid>
            <AddNoteButton/>
        </div>
    )
}

export {AppUI}