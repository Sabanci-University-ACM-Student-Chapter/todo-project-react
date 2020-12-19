import React from 'react'
import {useSelector} from 'react-redux'
import NoteDesc from './NoteDesc'
import PageControl from './PageControl'
import PageHeader from './PageHeader'

function ProjectPage() {

    const actual = useSelector(state => state.Actual)
    return (
        <div className="ProjectPage">
            <PageHeader actual={actual} />
            <NoteDesc actual={actual} />
            <PageControl actual={actual} />
        </div>
    )
}

export default ProjectPage
