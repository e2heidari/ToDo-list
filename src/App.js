import React, { useState } from 'react';
import './App.css';
import ToDo from './component/ToDo'

function App() {

  const [task, setTask] = useState("")
  const handelText = (event) => {
    setTask(event.target.value)
  }
  const [tasks, setTasks] = useState(["task1", "task2"])
  const handelSubmit = () => {
    // setTasks(tasks.push(task))//data manipulation
    setTasks([task, ...tasks])
  }
  // setTasks({ ...tasks })
  const handelDelete = (item) => {
    console.log(item)
    console.log(tasks.filter(eachTask => eachTask !== item))
    setTasks(tasks.filter(eachTask => eachTask !== item))
  }
  const toDoList = tasks.map((eachTask, index) => <ToDo key={eachTask} value={eachTask} deleteTask={handelDelete} />)
  return (
    <div>
      <h1>ToDO List</h1>
      <label htmlFor="task">your text</label>
      <input type="text" id="task" onChange={handelText} value={task} />
      <button onClick={handelSubmit}> Click me! </button>
      <div >
        {toDoList}
      </div>
    </div>
  );
}

export default App;
