import React from "react";

const ToDo = ({ value, deleteTask, isDelete }) => {
    return (
        <div id="lineThrough">
            <input type="checkbox" id="routine" value="text" />
            <lable for="routine">{`your ToDo: ${value}`}</lable>
            <button onClick={() => deleteTask(value)}>Delete</button>
        </div>
    )
}
export default ToDo;