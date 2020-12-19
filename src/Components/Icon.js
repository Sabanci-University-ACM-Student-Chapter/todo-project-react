import React, {useState} from 'react'
import Exclamation from './IconComponents/Exclamation.js'
import Upcoming from './IconComponents/Upcoming.js'
import Inbox from './IconComponents/Inbox.js'
import Completed from './IconComponents/Completed.js'
import Trash from './IconComponents/Trash.js'
import Element from './IconComponents/Element.js'
import Element2 from './IconComponents/Element2.js'
import Detail from './IconComponents/Detail.js'



function Icon(props) {

    const [components] = useState({
        Exclamation: Exclamation,
        Upcoming: Upcoming,
        Inbox: Inbox,
        Completed: Completed,
        Trash: Trash,
        Element: Element,
        Element2: Element2,
        Detail: Detail
    })
    const TagName = components[props.tag || 'Exclamation'];

    return (
       <TagName onClick={props.onClick} className="icon" />
    )
}
export default Icon;




