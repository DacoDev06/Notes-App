import { Title } from '../Components/Title';
import {NotesGrid} from '../Components/NotesGrid'
import {Note} from '../Components/Note'
import { AddNoteButton } from '../Components/AddNoteButton';


function AppUI({notes,changeState,deleteNotes}){
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