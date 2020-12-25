import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import InboxHeader from './InboxHeader'

function AddTodo() {

    const dispatch = useDispatch() // Dispatch is used to change states on redux.
    const projects = useSelector(state => state.Projects) // Selector is used to take information from redux.
    const todos = useSelector(state => state.Todos) 

    const [mode,setMode] = useState('standart'); // State is used to store local information in components.

    useEffect(() => {
        document.title = `Todo-App | Add Todo` 
        if(projects.length === 0){
            setMode('newProject') // If there is no project, direct changes mode to create a new one.
        } 
    },[projects.length]
    )


    
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    
    today = yyyy +'-'+mm+'-'+dd



    const changeMode = (e) => { // mode changer between create todo and select todo
        if(mode ==='newProject') {
            setMode('standart')
        }
        else if(e.target.value === 'New'){
            setMode('newProject')
        }
    }

    return (
        <div >
            <InboxHeader title='Add Todo' />
            <form className="addTodoPage">
                <div className="ProjectSelect">
                
                {mode === 'standart' ? <div><label> Select Project </label><select id="newTodoProject"  onChange={(e) => changeMode(e)} name="projects">
                {projects.map((value,index) => {
                    return <option key={index} value={value.title}> {value.title} </option>
                })} {/* This code works to show all of current projects */}
                <option value='New'> New Project</option> {/* changes mode to NewProject to add new project */}
            </select> </div>: 
        
            <div className="addProject"><label> Write your Project's Name</label> {/* If mode is newProject, this part render New Project adding input*/}
            <input type="text" placeholder="For cancel, submit blank" maxlength="25"/>
            <button onClick={(e) => {
                e.preventDefault();
                if(e.target.previousSibling.value === '' && projects.length > 0){
                    changeMode() // If you do not want to add new project
                }
                else if(e.target.previousSibling.value !== ''){
                    dispatch({type:'ADD_PROJECT',Projects: projects, newProject: {id: projects.length, title: e.target.previousSibling.value}})
                    changeMode() // this part of condition, adds new projects and shifts mode to select project for your todo.
                }
            }} > Submit </button>
        </div>}
        </div>
                <div className="NameInput" >
                    <label> Todo Name </label>
                    <input type="text" id="newTodoDescription" maxlength="70" />
                </div>
                <div className="CategoryInput">
                <label> Todo Category </label>
                    <select id="newTodoCategory">
                        <option value="Today"> Today</option>
                        <option value="Upcoming"> Upcoming </option>
                    </select>
                </div>
                <div className="DateInput">
                    <label > Delivery Date </label>
                    <input id="newTodoDate" type="date" defaultValue={today} />
                </div>
                <input type="submit" value="Create Todo!" onClick={(e) => {
                    e.preventDefault()
                    if( document.querySelector("#newTodoProject") === null){ // Preventions to collapse.
                        window.alert('Please select a project!')
                    }
                    else if(document.querySelector("#newTodoDescription").value === ''){
                        window.alert('Please write a title!')
                    }
                    else if(document.querySelector("#newTodoDate") === ''){
                        window.alert('Please write a valid date!')
                    }
                    else if(document.querySelector("#newTodoDescription").value.length > 70){
                        window.alert('Please write less than 70 words!')
                    }
                    else {
                        dispatch({type:'ADD_TODO', todoList:todos, newTodo: { // takes all the information, and sends to reducer to create a todo.
                            project_name: document.querySelector("#newTodoProject").value,
                            self_id: todos.length,
                            description: document.querySelector("#newTodoDescription").value,
                            category: document.querySelector("#newTodoCategory").value,
                            date: document.querySelector("#newTodoDate").value,
                            svg: 'Element2',
                            actual: false,
                            isCompleted: false,
                            detail: ''
                        }})
                    }
                    
                    document.querySelector("#newTodoDescription").value = '' 
                }} />
            </form>
        </div>
    )
}

export default AddTodo
