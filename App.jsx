import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./style.css"


export default function App(){
  const [newWork , setNewWork] = useState("")
  const [lists, setLists] = useState([])
  function hideclear(e){
    document.getElementById('clear-item').style.visibility = 'hidden'
  }
  function showclear(e){
    document.getElementById('clear-item').style.visibility = 'visible'
  }

  function addItems(e){
    e.preventDefault()

    setLists(currentLists =>{
      return[

        ...currentLists,
      {id: crypto.randomUUID(), title: newWork, completed: false},
      

      ]
    })

    setNewWork("")
  }

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
  function deleteitems(id){
    setLists(currentLists => {
      return currentLists.filter(list => list.id !== id)
    })
  }
  function clearitems(id){
    setLists(currentLists => {
      return currentLists.filter(list => list.id == id)
    })
  }
  return(
    <>
      <form onSubmit={addItems}  className='new-item-form'>
        <div className="form-row">
          <label htmlFor="item" className='heading'>Add Items</label>
          <input 
          value = {newWork}
          onChange={e => setNewWork(e.target.value)}
          type="text" 
          id='item' />
        </div>
        <button className="btn">Add To List</button>
      </form>
      <strong className='header'>Thing to do:</strong>
      
      <ul className="list">
       {lists.length == 0 && "No Work To be Done!"}
       {lists.length > 0 && showclear()}
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
       <button onClick={() =>clearitems()} className="btn btn-dangers" id='clear-item'>Clear Items</button>
        
      </ul>
    </>  
  )
}
