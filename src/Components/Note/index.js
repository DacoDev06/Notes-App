import './Note.css'


function Note({title,description,deleteNotes , color}){
    return(
        <div className='note' style={{backgroundColor:color,boxShadow:`1px 1px 12px ${color}`}}>
            <div className='note-info'>
                <p className='note-info-title'>
                    {title}
                </p>
                <span className='note-edit'>
                    J
                </span>
            </div>
            <div className="note-description">
                {description}
            </div>
            <span 
            className='note-delete'
            onClick={deleteNotes}>
                X
            </span>
        </div>
    )
}

export {Note}