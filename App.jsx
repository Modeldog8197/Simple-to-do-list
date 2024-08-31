import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./style.css"


export default function App(){
  const [newWork , setNewWork] = useState("")
  const [lists, setLists] = useState([])
  const [alllists, setAllLists] = useState([])
  function addnewlist(e){
    if(lists.length == 0)return;
    
    setAllLists((prevLists) => [...prevLists, lists]);
    setLists([]);
    setNewWork('');
  };



  function addItems(e){
    e.preventDefault()

    setLists(currentLists =>{
      return[

        ...currentLists,
      {id: crypto.randomUUID(), title: newWork, completed: false},
      

      ]
    })

    setNewWork("")
    e.preventDefault()
  };

  function checkbox(id, completed){
    setLists(currentLists =>{
      return currentLists.map(list =>{
        if(list.id == id){
          return { ...list, completed}
        }
        return  list
      })
    })
  }
  function error(e){
    e.preventDefault(e)
    {newWork.length == 0 &&
      setNewWork("Please enter something to do")      
      
    }
  }
  function deleteitems(id){
    setLists(currentLists => {
      return currentLists.filter(list => list.id !== id)
    })
  }
  function clearitems(){
    setLists([]);
  }
  return(
    <>
      <form onSubmit={newWork.length>1 && addItems}  className='new-item-form'>
        <div className="form-row">
          <label htmlFor="item" className='heading'>To Do List</label>
          <input 
          value = {newWork}
          onChange={e => setNewWork(e.target.value)}
          type="text" 
          id='item'
          placeholder='Add Item' />
        </div>
        <button className="btn" onClick={newWork.length==0 && error} type="submit">Add To List</button>
      </form>
      <button id='add-new-list' onClick={() => addnewlist}>Add New List</button>
      <br></br>
      <strong className='header'>Thing to do:</strong>
      
      <ul className="list">
       {lists.length == 0 && "Nothing to do!"}
      
       {lists.map(list =>{
        return(
          <li key={list.id}>
          <label>
            <input type="checkbox" checked = {list.completed} onChange={e =>checkbox(list.id, e.target.checked)}/>{list.title}
          </label>
          <button onClick = {() =>deleteitems(list.id)} className="btn btn-danger">Delete Item</button>
          
        </li>

        )
       })}
       {lists.length > 0 && ( 
          <button onClick={() => clearitems()} className="btn btn-danger" id='clear-item'>
            Clear Items
          </button>
        )}
        
      </ul>
    </>  
  )
}
