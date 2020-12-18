import React, {useState} from 'react'
import ControlTab from './ControlTab.js'


function ControlPanel() {

    const  [elements, setElements] = useState([{
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
        title: 'Trash',
        svg: 'Trash'
    }])

    // console.log(elements[0].title)
    return (
        <div className="ControlPanel">
            {elements.map((value,index) => {
                return <ControlTab key={index} title={value.title} svg={value.svg} />
            })}
        </div>
    )

    }

export default ControlPanel
