import React from 'react'
import NoteDesc from './NoteDesc'
import PageControl from './PageControl'
import PageHeader from './PageHeader'

function ProjectPage() {
    return (
        <div className="ProjectPage">
            <PageHeader />
            <NoteDesc />
            <PageControl />
        </div>
    )
}

export default ProjectPage
