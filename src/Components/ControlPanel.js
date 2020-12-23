import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import ControlTab from './ControlTab.js'


function ControlPanel() {
    const dispatch = useDispatch()
    const  [elements] = useState([{
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

    

    return (
        <div className="ControlPanel">
            {elements.map((value,index) => {
                return <ControlTab key={index} title={value.title} svg={value.svg} onClick={() => dispatch({type: `CHANGE_TO_${value.title.toUpperCase()}`})} />
            })}
        </div>
    )

    }

export default ControlPanel
