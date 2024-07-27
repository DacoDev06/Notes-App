import React from 'react';
import './AddNoteButton.css'
import {AppContext} from '../../Context'

function AddNoteButton(){
    const {setModalCreateNote} = React.useContext(AppContext)
    return(
        <button 
            className="addNoteButton"
            onClick={()=>setModalCreateNote(state => !state)}
        >
            +
        </button>
    )
}
export {AddNoteButton};