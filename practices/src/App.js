import React, {useState} from 'react';
import './App.css';

function App() {
const [task, setTask]= useState('');
     
const handleChange = (e) => {
  setTask(e. target.value);
  
}
const AddTask = () =>{
  console.log(task)
}
  return (
    <div className="App">
      <h2>Hello Todo-List</h2> 
      <input type='text' name='text' id='text' placeholder='Add-to-here' onChange={(e) => handleChange(e)}/>
      <button onClick={AddTask}>Add</button>


       </div>  
  );    
}

export default App;
  