import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import NoteDesc from './NoteDesc'
import PageControl from './PageControl'
import PageHeader from './PageHeader'

function ProjectPage() {

    const [mode,setMode] = useState('standart');

    const changeMode = () => {
        if(mode ==='edit') {
            setMode('standart')
        }
        else{
            setMode('edit')
        }
    }

    const actual = useSelector(state => state.Actual)
    return (
        <div className="ProjectPage">
            <PageHeader actual={actual} />
            <NoteDesc mode={mode} actual={actual} />
            <PageControl changeMode={changeMode} mode={mode} actual={actual} />
        </div>
    )
}

export default ProjectPage
