import React from 'react'


// Header component for list pages.
function InboxHeader(props) {
    return (
        <div className="ProjectHeader">
        <h1> {props.title} </h1>
    </div>
    )
}

export default InboxHeader
