import './NotesGrid.css'

function NotesGrid({children}){
    return (
        <div className="notesContainer">
            {children}
        </div>
    )
}

export {NotesGrid}