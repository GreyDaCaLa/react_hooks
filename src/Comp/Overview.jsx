import React from "react";
import Task from "./Task";

const Overview = ({tasks,handleToggle}) => {

    return(
        <section>
            <h3>Tasks</h3>
            {tasks.map((value,index)=>{ return <Task key={index+value.content} index={index} value={value} handleToggle={handleToggle}/>;})}
        </section>
    )
}

export default Overview;