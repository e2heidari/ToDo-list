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
    setTasks([task, ...tasks])
  }
  const handelDelete = (item) => {
    setTasks(toDoList.filter(eachTask => item === eachTask))
  }
  const toDoList = tasks.map((eachTask) => <ToDo value={eachTask} deleteTask={handelDelete} />)

  return (
    <div>
      <h1>ToDO List</h1>
      <label for="task">your text</label>
      <input type="text" id="task" onfocus="this.value=''" onChange={handelText} value={task} />
      <button onClick={handelSubmit}> Click me! </button>
      <div >
        {toDoList}
      </div>
    </div>
  );
}

export default App;
