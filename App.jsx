import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./style.css"


export default function App(){
  const [newWork , setNewWork] = useState("")
  const [lists, setLists] = useState([])
  const [alllists, setAllLists] = useState([])
  const [newlistname, setNewListName] = useState("")

  function addnewlist(e){
    if(lists.length == 0)return;
    
    setAllLists((prevLists) => [...prevLists, lists]);
    setLists([]);
    setNewWork('');
  };
  function namelist(e){
    e.preventDefault()


    setNewListName(currentName =>
      {return[
        ...currentName,
        {
          id: crypto.randomUUID(),
          title: newlistname,
          completed: false
        }
      ]
  })
    setNewListName("")
    e.preventDefault()
  }
  function namelistcompleted(e){
    e.preventDefault()
    


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
    e.preventDefault()
    required
   
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
  function clearitems(){
    setLists([]);
  }
  return(
    <>
      <form onSubmit={addItems}  className='new-item-form'>
        <div className="form-row">
          <label htmlFor="item" className='heading'>To Do List</label>
          <input 
          value = {newWork}
          onChange={e => setNewWork(e.target.value)}
          type="text" 
          id='item'

          onKeyDownCapture={e => e.key === 'Enter' && addItems(e)}
          
          required
          />
        </div>
        <button className="btn"  type="submit">Add To List</button>
      </form>
      <br></br>
      <center><button className='btn' onClick={() => addnewlist}>Add New List</button></center>
      <br></br>
      <input className='header' onChange={namelist} id='item'></input>
      
      <ul className="list">

       {lists.length == 0 && "Nothing to do"+ " in " + ""}
      
       {lists.map(list =>{
        return(
          <li key={list.id}>
          <label>
            <input type="checkbox" checked = {list.completed} onChange={e =>checkbox(list.id, e.target.checked)}/>{list.title}
          </label>
          <button onClick = {() =>deleteitems(list.id)} className="btn btn-danger"><img src="data:imagepng;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJdJREFUSEvtlbENgCAQRR+Fm1jpCo7hEA5h7wjGHZzBAew1cRYLDYmRqMEjBqyg5ee/498BisBLBfbHBVABraUQvde9FSkBCmAAEovJCmjNaIPcAZunyE7f3wGeDmBsbD34GtXDLwLuPYsRiVMcI4oRmQSCv0UTkImJXwUzkItX+xCUQAOkjpAFqIHeFeDoK8ukP1l2EBQ77EwZGTyUyKgAAAAASUVORK5CYII="/></button>
          
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
