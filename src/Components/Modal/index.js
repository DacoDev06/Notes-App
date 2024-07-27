import './Modal.css'
import ReactDOM from 'react-dom'

const modalCreateNote = document.getElementById("modal-create-note")


function ModalCreateNote({children}){
    return ReactDOM.createPortal(
        <div className='modal-Note'>
            {children}
        </div>,modalCreateNote
    )
}
export {ModalCreateNote};