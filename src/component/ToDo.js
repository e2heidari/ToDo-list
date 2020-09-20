import React from "react";

const ToDo = ({ value, deleteTask }) => {
    return (

        <div id="lineThrough">
            <input type="checkbox" id="routine" value="text" />
            <label htmlFor="routine">{`your ToDo: ${value}`}</label>
            <button onClick={() => deleteTask(value)}>Delete</button>
        </div>
    )
}
export default ToDo;