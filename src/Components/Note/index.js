import './Note.css'


function Note(){
    return(
        <div className='note'>
            <div className='note-info'>
                <p className='note-info-title'>
                    Soy el titulo ASDASDASDASDASD
                </p>
                <span>
                    J
                </span>
            </div>
            <div className="note-description">
                SOY LA DESCRIPCION DE LA NOTA
            </div>
            <span className='note-delete'>
                X
            </span>
        </div>
    )
}

export {Note}