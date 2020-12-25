import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import ControlTab from './ControlTab.js'

// If device is a desktop, the SideBar component calls that components per projects.
// It creates a qucik projects list.

function SubTopic(props) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.Todos)
    const projectTodos = todos.filter(todo => todo.project_name === props.title)

    
    if(projectTodos.length === 0){
        return ''
    }
    else {
        return (
            <div>
                <h5 className="projectName"> {props.title} </h5>
                {projectTodos.map((value,index) => {
                    return <ControlTab device={props.device} key={index} self_id={value.self_id} title={value.description} svg={value.svg} onClick={() => dispatch({type:'CHANGE_ACTUAL', self_id: value.self_id, todos:todos})}  />
                })}
                
            </div>
        )}
}

export default SubTopic
