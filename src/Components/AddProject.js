import React from 'react'

function AddProject(props) {
    return (
        <div className="AddProject" onClick={props.onClick}>
            <div className="addButton"><p> + </p></div>
        </div>
    )
}

export default AddProject
