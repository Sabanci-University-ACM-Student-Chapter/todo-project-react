import React, {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import ControlTab from './ControlTab.js'


function ControlPanel(props) {
    const  [elements,setElements] = useState([])
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(props.device === 'Desktop'){ // takes device information from its parent and determine how control panel looks
            setElements([{
                title: 'Inbox',
                svg: 'Inbox'
            },
            {
                title: 'Today',
                svg: 'Exclamation'
            },
            {
                title: 'Upcoming',
                svg: 'Upcoming'
            },
            {
                title: 'Completed',
                svg: 'Completed'
            },
            {
                title: 'Projects',
                svg: 'Project'
            }
            ])
        }
        else {
            setElements([{
                title: 'Inbox',
                svg: 'Inbox'
            },
            {
                title: 'Today',
                svg: 'Exclamation'
            },
            {
                title: 'Upcoming',
                svg: 'Upcoming'
            },
            {
                title: 'Completed',
                svg: 'Completed'
            },
            {
                title: 'Projects',
                svg: 'Project'
            },
            {
                title: 'Add Todo',
                svg: 'AddButton'
            }
            ])
        }
    },[setElements,props.device])

    

    return (
        <div className="controlTab">
            {elements.map((value,index) => { // all control tabs, each tab has a function to change actual so change the page.
                return <ControlTab device={props.device} key={index} title={value.title} svg={value.svg} onClick={() => dispatch({type: `CHANGE_TO_${value.title.toUpperCase()}`})} />
            })}
        </div>
    )

    }

export default ControlPanel
