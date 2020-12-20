import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Icon from './Icon'


function TodoTab(props) {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.Todos)
    const isCompleted = useSelector(state => state.Todos[props.self_id].isCompleted)
    const [checkedClass,setcheckedClass] = useState("TodoContainer")
    

    const Completed = () => {
        if(isCompleted === true){
            dispatch({type:'CHANGE_COMPLETED',self_id:props.self_id})
            setcheckedClass("TodoContainer")
        }
        else{
            dispatch({type:'CHANGE_COMPLETED',self_id:props.self_id})
            setcheckedClass("TodoContainer checked")
        }
    }

   useEffect(() => {
       function initialClass(){
        if(isCompleted === true){
            setcheckedClass("TodoContainer checked")
        }
        else{
            setcheckedClass("TodoContainer")
        }    
       }
       initialClass()
   })

    return (
        <div className={checkedClass}>
            {isCompleted ? <input type="checkbox" className="custimizedCheckBox" onClick={Completed} defaultChecked/> : <input type="checkbox" className="custimizedCheckBox" onClick={Completed} />}
            
            <label>
                {props.description}
            </label>
            <div className="Detail">
                <p> {props.date} </p>
                <Icon class="icon" tag="Detail" onClick={() => dispatch({type:'CHANGE_ACTUAL', self_id: props.self_id, todos: todos})} />
            </div>
           
        </div>
    )
}

export default TodoTab
