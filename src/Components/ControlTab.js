import React from 'react'
import Icon from './Icon.js'



function ControlTab(props) {


    


    return (
        <div className="tabContainer" onClick={props.onClick}>
            <div className="controlIcon">
                <Icon tag={props.svg} />
            </div>
            <p>
                {props.title}
            </p>
           
        </div>
    )
}

export default ControlTab
