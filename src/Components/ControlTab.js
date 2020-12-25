import React,{useState,useEffect} from 'react'
import Icon from './Icon.js'
import { useSelector } from 'react-redux'


// The component is used to form the Control Panel and todos in Side Bar.
function ControlTab(props) {
    const [isActual,setisActual] = useState('tabContainer')
    
    const actual = useSelector(state => state.Actual)
    useEffect(() => { // This condition checks whether this is showing.
        if(actual === props.title.toUpperCase() || (actual.self_id === props.self_id && actual.self_id !== undefined)){
            setisActual('tabContainer actualContainer')
        }
        else {
            setisActual('tabContainer')
        }
    },[actual,props.title,props])
    


    return (
        <div className={isActual} onClick={props.onClick}> {/* that onClick function comes from its parents and changes from parent to parent.*/}
            <div className="controlIcon">
                <Icon tag={props.svg} />
            </div>
            {props.device === 'Desktop' ? <p>{props.title}</p> : null}
            
           
        </div>
    )
}

export default ControlTab
