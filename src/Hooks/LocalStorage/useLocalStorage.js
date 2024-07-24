import React from "react"


function useLocalStorage(itemName){
    const [item,setItem] = React.useState([])
    React.useEffect(()=>{
        let parseItems = localStorage.getItem(itemName)
        if(parseItems){
            setItem((JSON.parse(parseItems)))
        }else{
            localStorage.setItem(itemName,'[]')
        }
    // eslint-disable-next-line
    },[])
    

    const saveItem = (newNotes)=>{
        setItem(newNotes)
        localStorage.setItem(itemName,JSON.stringify(newNotes))
      }
    
      return{
        item,
        saveItem
      }
}

export {useLocalStorage}