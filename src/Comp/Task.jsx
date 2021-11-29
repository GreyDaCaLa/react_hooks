const Task = ({index, value,handleToggle})=> {
    console.log("task read out of value", value)
    return(
        <div>
            <h6>{value.content}</h6>
            <input type="checkbox" name="done" id={index+value.content} check={value.done.toString()} onChange={(event) => handleToggle(event.target.id)}/>
        </div>
    );
};

export default Task