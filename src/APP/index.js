import './App.css';
import { Title } from '../Components/Title';
import {NotesGrid} from '../Components/NotesGrid'
import {Note} from '../Components/Note'
import { AddNoteButton } from '../Components/AddNoteButton';


function App() {
  return (
    <div className="App">
        <Title/>
        <NotesGrid>
          <Note/>
          <Note/>
          <Note/>
        </NotesGrid>
        <AddNoteButton/>
    </div>
  );
}

export {App};
