import React from 'react';
import './App.css';
import {AppUI} from './AppUI'
import { AppContextProvider } from '../Context';

// eslint-disable-next-line
const notesList = [
  {id:1,title:"Nota 1",desciption:"texto cualquiera para la descripcion",color:"blue",isCompleted:false},
  {id:2,title:"Nota 2",desciption:"Algun que hacer en nuestra hija",color:"white",isCompleted:false},
  {id:3,title:"Nota 3",desciption:"texto cualquiera para la descripcion",color:"black",isCompleted:true},
  {id:4,title:"Nota 3",desciption:"texto cualquiera para la descripcion",color:"red",isCompleted:false},
]

function App() {
  


  return (
    <AppContextProvider>
      <AppUI/>
    </AppContextProvider>
  );
}

export {App};
