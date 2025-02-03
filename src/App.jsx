import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'

function App() {
const[todo,setTodo]=useState([]);
const[input,setInput]=useState("");

function handleChange(event) {
    setInput(event.target.value);
  }

function addtoList(Event){
Event.preventDefault();
if(input ===""){
    return
}
setTodo([...todo,input]);
setInput("");
}
function restlist(Event){
    Event.preventDefault();
    setTodo([]);
}
function remove(array, index) {
    const newArray = array.filter((_, i) => i !== index);
    setTodo(newArray);
}


return(<div className='to-do-list'>
<h1>To Do List</h1>
<div className='Form'>
    <form>
        <input type='text' onChange={handleChange} value={input}/>
        <div className='button-container'>
        <button className="add" type='submit' onClick={addtoList}>Add</button>
        <button className="reset" type='submit' onClick={restlist}>Reset</button>
        </div>
    </form>
</div>
<ul> 
    {todo.map((item,index)=>
        <div>
        <li key={index}>{item}</li>
        </div>
        )}
</ul>
</div>);
}
export default App