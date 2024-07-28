import './CreateNote.css'

function CreateNote(){
    return(
        <div className="createNote">
            <div className='createNote-info'>
                <input className="tittleInput" placeholder="titulo"></input>
            </div>
            <p className='tittle-description'>Ingresa la descripcion de la nota</p>
            <textarea className='descriptionInput'
            placeholder=''></textarea>
            <p>Paleta de colores</p>
            <div className='buttons-contaner'>
                <button className='button createNote-cancel'>Cancelar</button>
                <button className='button createNote-save'>Guardar</button>
            </div>    
        </div>
    )
}
export {CreateNote}