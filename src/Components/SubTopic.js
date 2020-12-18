import React, { useState } from 'react'
import ControlTab from './ControlTab.js'

function SubTopic() {
    const [elements,setElements] = useState([{
        title: 'Element1',
        svg: 'Element'
    },
    {
        title: 'Element2',
        svg: 'Element2'
    },
    {
        title: 'Element3',
        svg: 'Element2'
    }])

    return (
        <div>
            <h5 className="projectName"> PROJECT NAME </h5>
            {elements.map((value,index) => {
                return <ControlTab key={index} title={value.title} svg={value.svg} />
            })}
            
        </div>
    )
}

export default SubTopic
