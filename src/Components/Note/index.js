import './Note.css'
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function Note({title,description,deleteNotes , color ,isCompleted,changeState}){
    return(
        <div className='note' style={{backgroundColor:color,boxShadow:`1px 1px 12px ${color}`}}>
            <div className='note-info'>
                <p className={`note-info-title ${isCompleted && "note-info-title--completed" }`}>
                    {title}
                </p>
                <div className='note-info-icons'>
                    <FaCheck className= {`note-icon note-complete ${isCompleted && "note-complete--completed"}`}
                    onClick={changeState}/>
                    <FaPencilAlt className='note-icon note-edit'/>
                </div>
            </div>
            <div 
                className={`note-description ${isCompleted && "note-description--completed"}`}
                >
                {description}
            </div>
            <ImCross
                className='note-icon note-delete'
                onClick={deleteNotes}      
            />
            <p className={`completedP ${isCompleted && "completedP--completed"}`}>Esta Completada!</p>
        </div>
    )
}

export {Note}