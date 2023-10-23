import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  let [taskName,nameUpdater] = React.useState("");
  let[taskArr,arrUpdater] = React.useState([]);

  function myInputChange(e) {
    nameUpdater(e.target.value);
  }
  function addItem() {
    let newTask = {
id:taskName +Math.random,
title:taskName,
status:false,
    };
    let newArr =[...taskArr,newTask];
    arrUpadater(newArr);
  }
  function Del(taskId) {
    let myNewList = taskArr.filter((task) => taskId != task.id);
    arrUpdator(myNewList);
  }
  return (
    <>
      <div>
        <h3>Input your task</h3>
        <input
        type="text"
        id="myInput"
        placeholder="Add task Name"
        onChange={myInputChange}
        value={taskName}
    />
    <button onClick={addItem}>Add task</button>
    </div>
    <div>
      <h2>The task list</h2>
      {taskArr.map((task) => (
        <div style={{ display: "flex", gap: "15px"}}>
          <h4>{task.title}</h4>
          <p>{task.status ? "Done" : "Not Done"}</p>
          <button onClick={() => Del(task.id)}>Delete</button>
    </div>

))}
</div>
</>
);
      }
      export default App;