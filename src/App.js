import React, { useState } from 'react';
import './App.css';
import ToDo from './component/ToDo'

function App() {

  const [task, setTask] = useState("")
  const handelText = (event) => {
    setTask(event.target.value)
  }
  const [tasks, setTasks] = useState([])
  const handelSubmit = () => {
    // setTasks(tasks.push(task))//data manipulation
    setTasks([...tasks, task])
  }
  const toDoList = tasks.map((eachTask) => <ToDo value={eachTask} />)
  return (
    <div>
      <h1>ToDO List</h1>
      <label for="task">your text</label>
      <input type="text" id="task" onChange={handelText} value={task} />
      <button onClick={handelSubmit}> Click me! </button>
      <div >
        {toDoList}
      </div>
    </div>
  );
}

export default App;
