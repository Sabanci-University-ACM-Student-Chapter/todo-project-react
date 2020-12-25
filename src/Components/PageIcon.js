import React, {useState, useEffect} from 'react'

import Done from './IconComponents/Done.js'
import Cancel from './IconComponents/Cancel.js'
import Edit from './IconComponents/Edit.js'
import Label from './IconComponents/Label.js'
import Remove from './IconComponents/Remove.js'




// Component is used to form buttons in detail page.
// takes their background color by parents.
// Like Icon component, also this component is a dynamic component.

function PageIcon(props) {
    useEffect(() => { 
        document.querySelector(`#${props.tag}`).style.backgroundColor = props.color
        document.querySelector(`#${props.tag}`).parentElement.style.backgroundColor = props.color
      });

    const [components] = useState({
        Done: Done,
        Cancel: Cancel,
        Edit: Edit,
        Label: Label,
        Remove: Remove
    })
    const TagName = components[props.tag || 'Done'];

    return (
        <div className="mainIconControl" onClick={props.customClickEvent}>
            <div className="PageIcon" id={props.tag}>
                <TagName className="icon" />
            </div>
            <p> {props.tag} </p>
        </div>
    )
}

export default PageIcon
