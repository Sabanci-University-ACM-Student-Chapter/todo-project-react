import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import InboxHeader from './InboxHeader'

function AddTodo() {

    const dispatch = useDispatch()
    const projects = useSelector(state => state.Projects)
    const [temporaryProject,setTemporaryProject] = useState('')

    const [mode,setMode] = useState('standart');

    const changeMode = (e) => {
        if(mode ==='newProject') {
            setMode('standart')
        }
        else if(e.target.value === 'New'){
            setMode('newProject')
        }
    }

    const projectSelect = function(){
        if(mode === 'standart'){
            <select  onChange={(e) => changeMode(e)} name="projects" id="projects">
                {projects.map((value,index) => {
                    return <option key={index} value={value.id}> {value.title} </option>
                })}
                <option value='New'> New Project</option>
            </select>
        }
        else {
            <div className="addProject">
                <input type="text" placeholder="For cancel, submit blank"/>
                <button> Submit </button>
            </div>
        }
    }

    return (
        <div>
            <InboxHeader title='Add Todo' />
            <form>
                {mode === 'standart' ? <select  onChange={(e) => changeMode(e)} name="projects" id="projects">
                {projects.map((value,index) => {
                    return <option key={index} value={value.id}> {value.title} </option>
                })}
                <option value='New'> New Project</option>
            </select> : <div className="addProject">
            <input type="text" placeholder="For cancel, submit blank"/>
            <button onClick={(e) => {
                e.preventDefault();
                dispatch({type:'ADD_PROJECT',Projects: projects, newProject: {id: projects.length, title: e.target.previousSibling.value}})
            }} > Submit </button>
        </div>
                }
            </form>
        </div>
    )
}

export default AddTodo
