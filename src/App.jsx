import React, { Component, useState } from "react";
import "./App.css";
import Overview from "./Comp/Overview";

const App = () => {
  const [tasks,setTasks]= useState([]);
  
  const handClk = () => {
    const value = document.getElementById("taskInput").value;
    let mid ={
      id: 1,
      content: value,
      done: false,
    }
    setTasks(tasks.concat([mid]));
  }


  const handleTaskToggle = (id) => {
    const updatedTasks = tasks.map((value, index)=>{
      if(id == index+value.content){
        value.done = !value.done;
      }
      return value;

    })

    setTasks(updatedTasks);
  }






    return (
      <main className="container text-center">
        <h1>React Hooks</h1>
        <hr/>
        <section>
          <h3>Add a task:</h3>
          <input type="text" id="taskInput" placeholder="To do..."/>
          <button onClick={handClk}>Add</button>
        </section>
        <hr/>
        <Overview tasks={tasks} handleToggle={handleTaskToggle} />
      </main>
    );

};

export default App;
