import React, {Component} from 'react'
import Exclamation from './IconComponents/Exclamation.js'
import Upcoming from './IconComponents/Upcoming.js'
import Inbox from './IconComponents/Inbox.js'
import Completed from './IconComponents/Completed.js'
import Trash from './IconComponents/Trash.js'
import Element from './IconComponents/Element.js'
import Element2 from './IconComponents/Element2.js'



class Icon extends Component {
    components = {
        Exclamation: Exclamation,
        Upcoming: Upcoming,
        Inbox: Inbox,
        Completed: Completed,
        Trash: Trash,
        Element: Element,
        Element2: Element2
    };
    render() {
       const TagName = this.components[this.props.tag || 'Completed'];
       return <TagName className="icon" />
    }
}
export default Icon;