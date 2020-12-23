import React from 'react'
import {useSelector,useDispatch} from 'react-redux'


function PageHeader(props) {
    // const Project = useSelector(state => state.Projects[props.actual.project_id || 0])
    const todos = useSelector(state => state.Todos)
    const dispatch = useDispatch()
    const change = ()=> {
        let label = document.querySelector("#changeLabel").value;
        dispatch({type:'CHANGE_LABEL', newLabel: label, todos: todos, self_id:props.actual.self_id})
        props.changeLabel2();
    }


    return (
        <div className="PageHeader">
            <h4> {props.actual.project_name} </h4>
            <h1> {props.actual.description} </h1>
            <div className="minInfo">
                {props.label === 'standart' ? <p> {props.actual.category} </p> : <select id="changeLabel" style={{fontSize:10}} onChange={change}>
                        <option  value=''>Please Choose a Category</option>
                        <option value='Today'>Today</option>
                        <option value='Upcoming'>Upcoming</option>
                    </select>}
                
                <p> {props.actual.date} </p>
            </div>
        </div>
    )
}

export default PageHeader
