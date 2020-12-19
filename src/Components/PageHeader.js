import React from 'react'
import {useSelector} from 'react-redux'


function PageHeader(props) {
    const Project = useSelector(state => state.Projects[props.actual.project_id || 0])


    return (
        <div className="PageHeader">
            <h4> {Project.title} </h4>
            <h1> {props.actual.description} </h1>
            <div className="minInfo">
                <p> {props.actual.category} </p>
                <p> {props.actual.date} </p>
            </div>
        </div>
    )
}

export default PageHeader
