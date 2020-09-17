import React from "react";

const ToDo = ({ value }) => {
    return (
        <div id="lineThrough">
            <input type="checkbox" id="routine" value="text" />
            <lable for="routine">{`your ToDo: ${value}`}</lable>
        </div>
    )
}
export default ToDo;